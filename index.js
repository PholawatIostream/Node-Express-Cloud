require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || process.env.PORT;

app.get('/',(req,res)=>{
    res.send('Hello World thailand propaganda!!');
});

app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`);
});