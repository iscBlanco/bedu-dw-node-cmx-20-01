const express = require('express');
const app = express(); // Creating an Express application

// A port where our application will be mounted
const APP_PORT = 3001;

// Dummy Data
const notes = [
  {
    id: 1,
    title: 'Dummy Note',
    content: 'This is a dummy note',
  },
  {
    id: 2,
    title: 'Dummy Note 2',
    content: 'This is a dummy note',
  },
];

// Creating a first route
app.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('<h1>Welcome to Express</h1>');
});

// Create a second route
// app.get('/api/notes', (req, res) => {
//   res.json(notes);
// });
app.use('/api', require('./handlers'));

// Mounting express application on specific port
app.listen(APP_PORT, () => {
  console.log(`Express on port ${APP_PORT}`);
});