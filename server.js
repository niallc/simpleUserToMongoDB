const http = require('http');
const url = require('url');
const cors = require('cors');
const express = require('express');
const serveStatic = require('serve-static');
require('dotenv').config();
const connectDB = require('./db'); // Import connectDB from db.js

const app = express();
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON request bodies
app.use(serveStatic(__dirname)); // Serve static files from the current directory

app.post('/api/data', async (req, res) => {
  try {
    console.log('Received request body:', req.body); // Debugging output
    const collection = await connectDB();
    const data = req.body;
    const result = await collection.insertOne(data);
    console.log('Insert result:', result); // Debugging output
    res.status(201).json({ message: 'Data stored', data });
  } catch (error) {
    console.error('Error storing data:', error); // Debugging output
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const server = http.createServer(app);

server.listen(3000, () => {
  console.log('Server running on port 3000');
});