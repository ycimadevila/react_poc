// server.js
const express = require('express');
const cors = require = require('cors'); // Import CORS
const app = express();
const port = 3001; // The backend will run on this port

// Middleware
app.use(cors()); // Use CORS middleware
app.use(express.json()); // To parse JSON bodies

// Define a simple API endpoint
app.get('/api/message', (req, res) => {
  res.json({ message: "Hello from the Express server!" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});