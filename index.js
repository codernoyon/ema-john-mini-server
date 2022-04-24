const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;
require("dotenv").config();
const app = express();


// middle ware
app.use(cors());
app.use(express.json());


// testing server api
app.get('/', (req, res) => {
    res.send("John is runnig and waiting for Ema!!");
});

// listeninig port
app.listen(port, () => {
    console.log("John is runnig on port", port);
});