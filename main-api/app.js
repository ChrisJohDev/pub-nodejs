// Main api - app

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const mainRouter = require('./router/mainRouter');

const app = express();
const host = "127.0.0.1";
port = 3000;

app.use(cors());
app.use(bodyParser.json());


// Routes selection
app.use('/add', mainRouter.router);
app.use('/list', mainRouter.router);

app.get('/*', (req, res) => {
    res.status(404);
    res.send('NOT ALLOWED (GET) - math');
});

app.listen(port, host, () => {
    console.log(`Main server running on ${host}:${port}`);
});