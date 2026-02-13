const express = require('express');

const app = express();
const PORT = 4000;
const productsRouter = require('./routes/products');
const categoriesRouter = require('./routes/categories');
const ordersRouter = require('./routes/orders');
const userRouter = require('./routes/user');

// Middleware to parse JSON
app.use(express.json());

// Logging middleware - logs HTTP method and endpoint accessed
app.use((req, res, next) => {
  console.log(`${req.method} request made to ${req.path}`);
  next();
});

// Products endpoints
app.use('/products', productsRouter);

// Categories endpoints
app.use('/categories', categoriesRouter);

// Orders endpoints
app.use('/orders', ordersRouter);

// User endpoints
app.use('/users', userRouter);

// Wildcard route to handle all undefined routes
app.use('*', (req, res) => {
  res.status(404).send('<h1>404 - Page Not Found</h1>');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
