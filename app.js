const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World! This is my Node.js app running in a Docker container via a CI/CD pipeline.');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});