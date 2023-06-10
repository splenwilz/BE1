const express = require('express');
const app = express();

let cors = require('cors');
const apiRoutes = require('./routes/api.routes');
require('dotenv').config();
require('./config/db');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

// Enable CORS preflight
app.options('*', cors());

app.use(cors({
    credentials: true, // Allow CORS credentials
    origin: 'https://be1game.onrender.com' // Set the allowed origin(s) for CORS
}));

app.use(express.json());
app.use(bodyParser.json());


app.use(cookieParser());


app.use('/api', apiRoutes);



const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running at localhost:${port}`);
})