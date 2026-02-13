const express = require('express');

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Orders endpoints
app.get('/orders', (req, res) => {
  res.send('Here is the list of all orders.');
});

app.post('/orders', (req, res) => {
  res.send('A new order has been created.');
});

// Users endpoints
app.get('/users', (req, res) => {
  res.send('Here is the list of all users.');
});

app.post('/users', (req, res) => {
  res.send('A new user has been added.');
});

// Wildcard route to handle all undefined routes
app.use('*', (req, res) => {
  res.status(404).send('<h1>404 - Page Not Found</h1>');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
