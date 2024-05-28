// Import required modules
import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';

// Create an express app
const app = express();

// Configure cors middleware to allow requests from specific origin
const corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

// Define a route to serve the data
app.get('/data', (req, res) => {
  console.log("GET /data route is being accessed"); // Add this line
  // Read data from data.json file
  // eslint-disable-next-line no-undef
  fs.readFile(path.join(process.cwd(), 'src', 'data.json'), 'utf8', (err, data) => {
      if (err) {
          res.status(500).send('Error reading data');
      } else {
          res.send(JSON.parse(data));
      }
  });
});

// Start the server
// eslint-disable-next-line no-undef
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server is running on port ${port}`));