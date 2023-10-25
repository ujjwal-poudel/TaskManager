const express = require('express');
const config = require('./config/config');

// Creating an express app
const app = express();

// Using static files from public directory
app.use(express.static('public'));

// Setting up the default page for the app
app.get('/', (req, res) => {
    res.render('public/pages/index');
  });

// Server Starts Here
const port = config.serverPort || 3000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
    console.log(`http://localhost:${port}`);
});
