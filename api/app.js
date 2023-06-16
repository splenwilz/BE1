// const express = require('express');
// let cors = require('cors');
// require('dotenv').config();

// require('./config/db')

// const apiRoutes = require('./routes/api.routes');
// const app = express();
// app.use(express.json());
// app.use(cors());
// app.use('/api', apiRoutes);

// const port = process.env.PORT || 3000;

// app.use(express.static(path.join(__dirname, 'build')));

// -app.get('/', function (req, res) {
// +app.get('/*', function (req, res) {
//    res.sendFile(path.join(__dirname, 'build', 'index.html'));
//  });



// app.listen(port, () => {
//     console.log(`Server is running at localhost:${port}`);
// })


const express = require('express');
const cors = require('cors');
require('dotenv').config();
const path = require('path');

require('./config/db');

const apiRoutes = require('./routes/api.routes');
const app = express();
app.use(express.json());
app.use(cors());
app.use('/api', apiRoutes);

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running at localhost:${port}`);
});
