// Main api - mainRouter

const express = require('express');
const controller = require('../controller/mainController');
const bodyParser = require('body-parser');
const router = express.Router();

//router.get('/2', controller.getList2);
router.get('/*', controller.getList);
router.post('/*', controller.getMath);

module.exports = {
    router
};