// Math api-server

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mathRoutes = require('./router/mathRoutes.js');
const app = express();

const host = '127.0.0.1';
const port = 3003;

app.use(bodyParser.json());
app.use(cors());

// Routes selection
app.use('/add', mathRoutes.router);

app.get('/*', (req, res) => {
    res.status(404);
    res.send('NOT ALLOWED (GET) - math');
});

app.post('/*', (req, res) => {
    res.status(404);
    res.send('NOT ALLOWED (POST) - math');
});

app.listen(port, host, () => {
    console.log(`Local math server running at: ${host}:${port}`);
});