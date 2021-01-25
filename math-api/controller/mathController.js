// Math api server Controller

const model = require('../model/mathModel');

const calculate = (req, res) => {
    //console.log(`calculate path: ${req.originalUrl}`);
    // Recieves data in a POST request.
    switch (req.originalUrl) {
        case '/add': _add(req, res);
            break;
        case '/subtract': this._subtract(req.res);
            break;
        case '/multiply': this._multiply(req, res);
            break;
        case '/divide': this._divide(req.res);
            break;
        default: res.send('no match'); // could write to log or throw exception or return error report.
            break;
    }


};

// Private functions
function _add(req, res) {
    //console.log('mathAPI add body: ' + req.body.tal);
    if (req.body.hasOwnProperty('tal')) {
        try {
            model.calculate('add', JSON.stringify(req.body.tal))
                .then((data) => {
                    //console.log(`controller / _add data: ${data}`);
                    res.send(`{"sum": "${Number(data)}"}`);
                })
        }
        catch (err) {
            console.log(err);
        }
    } else {
        let reply = {};
        reply.code = 0;
        reply.message = 'Body missing property "tal".';
        reply.module = 'math-api / mathController';
        reply.function = 'calculate';
        res.send(reply);
    }
}

function _subtract(req, res) {
    if (req.body.hasOwnProperty('tal')) {
        try {
            model.calculate('subtract', req.body.tal)
                .then((data) => {
                    res.send(data);
                })
        }
        catch (err) {
        }
    } else {
        let reply = {};
        reply.code = 0;
        reply.message = 'Body missing property "tal".';
        reply.module = 'math-api / mathController';
        reply.function = 'calculate';
        res.send(reply);
    }
}

function _multiply(req, res) {
    if (req.body.hasOwnProperty('tal')) {
        try {
            model.calculate('multiply', req.body.tal)
                .then((data) => {
                    res.send(data);
                })
        }
        catch (err) {
            console.log(err);
        }
    } else {
        let reply = {};
        reply.code = 0;
        reply.message = 'Body missing property "tal".';
        reply.module = 'math-api / mathController';
        reply.function = 'calculate';
        res.send(reply);
    }
}

function _divide(req, res) {
    if (req.body.hasOwnProperty('tal')) {
        try {
            model.calculate('divide', req.body.tal)
                .then((data) => {
                    res.send(data);
                })
        }
        catch (err) {
            console.log(err);
        }
    } else {
        let reply = {};
        reply.code = 0;
        reply.message = 'Body missing property "tal".';
        reply.module = 'math-api / mathController';
        reply.function = 'calculate';
        res.send(reply);
    }
}

module.exports = {
    calculate
};