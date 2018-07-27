const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');



const port = 8000;
const server = express();
server.use(express.json());



server.use(helmet());
server.use(morgan('dev'));
server.use(cors());
server.use(express.json());

// configures our server to execute a function for every GET request to "/"
// the second argument passed to the .get() method is the "Route Handler Function"
// the route handler function will run on every GET request to "/"
server.get('/', (req, res) => {
  // express will pass the request and response objects to this function
  // the .send() on the response object can be used to send a response to the client
  res.send('Hello World <br><h1>Express and Node.js Sprint Challenge</h1>');
});




//server.listen(8000, () => console.log('API running on port 8000'));
server.listen(port, () => console.log(`Server is running on port ${port}`));
