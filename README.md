# simpleUserToMongoDB
Simple setup to record user input and store it in a Mongo Database

The code doesn't in any way help you install, configure, or start the Mongo Database. 
It assumes that that's already running and that you can figure out how to get the connection string.

As per db.js, it writes to a database called testUserInputsDB and the collection inputs.

This uses express and runs as a Node server and to use this you'll have to install express, node and probably some other stuff with npm.
You can then get it started with npm start.
