//DEPENDENCIES--------------------------------------------------------------------------------------
const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT;



//MIDDLEWARE--------------------------------------------------------------------------------------
app.use(express.static(path.join(__dirname, 'public')));




//ROUTES--------------------------------------------------------------------------------------
app.get('/', (req, res) => {
    res.send('Testing');
})


//homepage
app.get('/daily-grind', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
});

//contact page
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'))
});



//PORT--------------------------------------------------------------------------------------
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})