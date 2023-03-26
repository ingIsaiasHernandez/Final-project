// Import required packages and modules
const express = require('express');
const morgan = require('morgan')
const cors = require('cors');
const db = require('./utils/database');

// Create Express application
const app = express();

// Import routes


// Set up database models

// Set up middleware
app.use(cors()); // Enable CORS for all routes
app.use(morgan('dev')); // Log HTTP requests in development mode
app.use(express.json()); // Parse JSON-encoded request bodies

// Set up routes 


// Authenticate and synchronize database
db.authenticate()
    .then(() => console.log("Database authenticate")) // Log successful authentication
    .catch((error) => console.log(error)) // Log error if authentication fails

db.sync({alter: true})
    .then(() => console.log("Database async")) // Log successful synchronization
    .catch((error) => console.log(error)) // Log error if synchronization fails


// endpoint to check the server path
app.get("/", (req, res) => {
    res.send("welcome to my ecommerce API");
});


// Set up error handling middleware


// Start server and listen on specified port
const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server listening at port: ${PORT}`); // Log server start message
})