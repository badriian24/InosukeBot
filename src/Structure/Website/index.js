const express = require('express');
const client = require("../../index.js");
const app = express();

app.get('/', (req, res) => {
  res.send('<p style="font-family: Helvetica;">Inosuke Bot</p>')
});


app.listen(3030, () => {
  console.log('[INFO] Website Online');
});