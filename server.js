const express = require('express');

const app = express();
const PORT = 4000;

// Middleware to parse JSON
app.use(express.json());

// Logging middleware - logs HTTP method and endpoint accessed
app.use((req, res, next) => {
  console.log(`${req.method} request made to ${req.path}`);
  next();
});

// Products endpoints
app.get('/products', (req, res) => {
  res.send('Here is the list of all products.');
});

app.post('/products', (req, res) => {
  res.send('A new product has been added.');
});

// Categories endpoints
app.get('/categories', (req, res) => {
  res.send('Here is the list of all categories.');
});

app.post('/categories', (req, res) => {
  res.send('A new category has been created.');
});

// Wildcard route to handle all undefined routes
app.use('*', (req, res) => {
  res.status(404).send('<h1>404 - Page Not Found</h1>');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
