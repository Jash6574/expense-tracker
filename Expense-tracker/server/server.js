const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;


//middle ware
app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running on: ${port}`);
}) 