const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello Balaram');
});

//Dynamic Routing
app.get('/profile/:username', (req, res) => { //Need to mention ":" after "/" and need to mention a variable(e.g., username)
    res.send(`Hello from ${req.params.username}`); //for accessing variable values from different route need to use "req.params"
});

const port = 4000;

app.listen(port, () => {
    console.log(`server started at: ${port}`);
});