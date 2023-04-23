// Import the express module
const express = require('express');

// Create an express app
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());



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

app.get('/api/ride', (req,res)=>{
  console.log('GET riderlist request received');
  console.log('Request query:', req.query);

  // Send a JSON response
  res.json([{"_id":"644445bfc2bd500d389e0689","driverId":"6444457501d847fe971cec00","passengersId":[],"stLat":["10"],"stLon":["10"],"enLat":["11"],"date":"2023-04-22T20:38:23.538Z","__v":0,"enLon":["11"]},{"_id":"644473b6e88b422267469842","driverId":"644448a9642870351afba0ad","passengersId":[],"stLat":["10.1"],"stLon":["10.1"],"enLat":["11.1"],"date":"2023-04-22T20:38:23.538Z","__v":0,"enLon":["11.1"]}]);
});

// Start the server, listening on port 6000
app.listen(8000, () => {
  console.log('Server is running on port 8000');
});

