const express = require('express');
let cors = require('cors');
require('dotenv').config();

require('./config/db')

const apiRoutes = require('./routes/api.routes');
const app = express();
app.use(express.json());
app.use(cors());
app.use('/api', apiRoutes);
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running at localhost:${port}`);
})