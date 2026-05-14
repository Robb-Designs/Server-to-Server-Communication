//DEPENDENCIES--------------------------------------------------------------------------------------
const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT;



//MIDDLEWARE--------------------------------------------------------------------------------------




//ROUTES--------------------------------------------------------------------------------------
app.get('/', (req, res) => {
    res.send('Testing');
})



//PORT--------------------------------------------------------------------------------------
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})