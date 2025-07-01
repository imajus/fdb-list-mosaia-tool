const dotenv = require('dotenv');
const express = require('express');
const { handler } = require('../dist/index');

dotenv.config();

const app = express();

const { PORT } = process.env;

app.get('/', async (req, res) => {
  const result = await handler();
  res.status(result.statusCode).send(result.body);
});

const port = PORT || 3000;
app.listen(port, () => {
  console.log(`Local development server running on port ${port}`);
});
