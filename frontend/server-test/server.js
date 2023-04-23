// Import the express module
const express = require('express');

// Create an express app
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

app.get('/', (req, res)=>{
	console.log('hello world')
});

// POST request handler
app.post('/', (req, res) => {
  console.log('POST request received');
  console.log('Request body:', req.body);

  // Send a JSON response
  res.json({ message: 'POST request handled successfully' });
});

// Start the server, listening on port 6000
app.listen(8000, () => {
  console.log('Server is running on port 8000');
});

