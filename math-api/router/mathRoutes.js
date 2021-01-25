// Math api server Routes

const express = require('express');
const controller = require('../controller/mathController.js');
const bodyParser = require('body-parser');
const router = express.Router();

router.post('/*', controller.calculate);

module.exports = {
    router
};