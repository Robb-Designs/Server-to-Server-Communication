//DEPENDENCIES--------------------------------------------------------------------------------------
// Load Express so we can create the server.
const express = require('express');
// Create the Express app.
const app = express();
// Axios lets this server request data from another server.
const axios = require('axios');
// Path helps build safe file paths.
const path = require('path');

// Load values from the .env file.
require('dotenv').config();
// Use the env port, or 2000 if no port is set.
const PORT = process.env.PORT || 2000;



//MIDDLEWARE--------------------------------------------------------------------------------------
// Serve files like CSS from the public folder.
app.use(express.static(path.join(__dirname, 'public')));




//ROUTES--------------------------------------------------------------------------------------
// Simple test route for the home page.
app.get('/test', (req, res) => {
    res.send('Testing');
})


//homepage
// Send the main HTML page.
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
});

//contact page
// Send the contact page.
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'))
});

//api fun facts route
// Get one random fact from another API and send it back as JSON.
app.get('/api/fun-fact', async (req, res) => {
    try {
        const factsResponse = await axios.get('https://uselessfacts.jsph.pl/api/v2/facts/random');

        res.json({
            fact: factsResponse.data.text
        });
    } catch (error) {
        if (error.factsResponse) {
            // The request was made and the server responded with a status code
            console.error('API Error:', error.factsResponse.status, error.factsResponse.data);
            res.status(error.factsResponse.status).json({ message: 'Error fetching data from external API.' });
        } else {
            // Something happened in setting up the request that triggered an Error
            console.error('Network Error:', error.message);
            res.status(500).json({ message: 'A network error occurred.' });
        }
    }
})



//PORT--------------------------------------------------------------------------------------
// Start the server and show the URL in the terminal.
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
});