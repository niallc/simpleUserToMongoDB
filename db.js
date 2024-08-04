const { MongoClient } = require('mongodb');
require('dotenv').config();

async function connectDB() {
  const client = new MongoClient(process.env.MONGO_URI, { });
  await client.connect();
  const db = client.db('testUserInputsDB');
  return db.collection('inputs');
}

module.exports = connectDB;
