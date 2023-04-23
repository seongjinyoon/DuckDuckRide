// Import the express module
const express = require('express');

// Create an express app
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

app.get('/api/ride', (req, res)=>{
	console.log('hello world')
});

app.get('/api/ride', (req, res) => {
  console.log('Get request received');
  console.log('Request body:', req.body);

  // Send a JSON response
  res.json({ message: 'Get request handled successfully' });
});

// POST request handler
app.post('/api/ride', (req, res) => {
  console.log('POST request received');
  console.log('Request body:', req.body);

  // Send a JSON response
  res.json({ ok:1});
});

app.put('/api/ride', (req, res) => {
  console.log('PUT request received');
  console.log('Request body:', req.body);

  // Send a JSON response
  
  res.json({ ok:1});
});

app.post('/api/user', (req,res)=>{
  console.log('POST request received');
  console.log('Request body:', req.body);

  // Send a JSON response
  res.json({ ok:1,id:'123abc'});
});


// Start the server, listening on port 6000
app.listen(8000, () => {
  console.log('Server is running on port 8000');
});

