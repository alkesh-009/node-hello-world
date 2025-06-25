const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1 style="color: blue;">Hello from Node.js deployed via CI/CD</h1>');
});

app.listen(PORT, () => console.log(`App running on ${PORT}`));

