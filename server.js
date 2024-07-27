const express = require('express');
const path = require('path');
const api = require('./routes/index.js');
const api = require('./routes/index.js');

const PORT = process.env.PORT || 3001;

//middleware for parsing JSON and url-encoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use('/api', api)

app.use(express.static('public'));

// GET route to return the notes.html file
app.get('*', (req, res) => 
    res.sendFIle(path.join(__dirname, '/public/index.html'))
);

//GET route to return the index.html file
app.get('/notes', (req, res) => 
    res.sendFIle(path.join(__dirname, '/public/notes.html'))
);

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
);


