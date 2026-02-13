const express = require('express');

const app = express();
const PORT = 3000;

// Custom middleware function that adds req.user property
const addUserMiddleware = (req, res, next) => {
  req.user = "Guest";
  next();
};

// Route with middleware applied
app.get('/welcome', addUserMiddleware, (req, res) => {
  res.send(`<h1>Welcome, ${req.user}!</h1>`);
});

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}! Ready to handle requests.`);
});
