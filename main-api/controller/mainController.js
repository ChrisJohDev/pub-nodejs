// Main api - mainController

const model = require('../model/mainModel');
const baseUrl = 'http://127.0.0.1:3003';
const xFile = require('../json/prov-nodejs.json');

const getList = (req, res) => {
    let reply = [];
    let tmp = {};
    try {
        for (let i = 0; i < xFile.length; i++) {
            tmp = {};
            for (let key in xFile[i]) {
                switch (key) {
                    case ('name'): tmp['namn'] = xFile[i][key];
                        break;
                    case ('address'): tmp['adress'] = xFile[i][key];
                        break;
                    case ('postcode'): tmp['postnr'] = xFile[i][key];
                        break;
                    case ('city'): tmp['ort'] = xFile[i][key];
                        break;
                    case ('mobile'): tmp['mobil'] = xFile[i][key];
                        break;
                    case ('email'): tmp['epost'] = xFile[i][key];
                        break;
                }

            }
            reply.push(tmp);
        }
        res.send(JSON.stringify(reply));
    }
    catch (err) { }
};

const getMath = (req, res) => {

    switch (req.originalUrl) {
        case '/add': _add(req, res);
            break;
        /* case '/subtract': _subtract(req, res);
             break;
         case '/multiply': _multiply(req, res);
             break;
         case '/divide': _divide(req, res);
             break;*/
        default: res.send('no match'); // could write to log or throw exception or return error report.
            break;
    }


};

// Private functions
function _add(req, res) {
    //console.log('add' + JSON.stringify(req.body));
    if (req.body.hasOwnProperty('tal')) {
        try {
            model.getMath(baseUrl + '/add', `${JSON.stringify(req.body)}`)
                .then(response => response.json())
                .then((data) => {
                    //console.log(`mainController / _add data: ${data}`);
                    res.send(JSON.stringify(data));
                })
                .catch(err => { console.log(err); });
        }
        catch (err) {
            console.log(err);
        }
    } else {
        let reply = {};
        reply.code = 0;
        reply.message = 'Body missing property "tal".';
        reply.module = 'main-api / mainController';
        reply.function = 'getMath (_add)';
        res.send(reply);
    }
}

module.exports = {
    getList,
    getMath
}