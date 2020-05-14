const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

const options = { 
    exposedHeaders: 'X-Total-Count'
}

app.use(cors(options));
app.use(express.json());
app.use(routes);

app.listen(3333);