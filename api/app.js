const express = require('express');
const app = express();

let cors = require('cors');
const apiRoutes = require('./routes/api.routes');
require('dotenv').config();
require('./config/db');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

app.use(express.json());
app.use(bodyParser.json());


app.use(cookieParser());

app.use(cors({
    credentials: true, // Allow CORS credentials
    origin: 'http://localhost:3000' // Set the allowed origin(s) for CORS
}));

app.use('/api', apiRoutes);


// Enable CORS preflight
app.options('*', cors());

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running at localhost:${port}`);
})