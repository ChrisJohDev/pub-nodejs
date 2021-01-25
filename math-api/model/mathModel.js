// Math api server Model

const calculate = async (method, data) => {
    //console.log(`model / calculate: method: ${method}, data: ${data}`);
    data = data.replace(/\"/g, '');
    let items = data.split(',');
    let reply;
    switch (method) {
        case 'add': reply = _add(items);
            break;

        case 'subtract': reply = _subtract(items);
            break;

        case 'multiply': reply = _multiply(items);
            break;
        case 'divide': reply = _divide(items);
            break;
        default: null; // Possible error code or handling.
            break;
    }
    return reply;
}

function _add(items) {
    let reply = 0;
    //console.log(`model / _add imtes.length: ${items.length}`)
    for (let i = 0; i < items.length; i++) {
        //console.log(`${i}: ${items[i]}`);
        if (items[i] != 'undefined') {
            reply += Number(items[i]);
        }
    };
    //console.log(`model / _add reply: ${reply}`)
    return reply;
}

function _subtract(items) {
    let reply;
    for (let i = 0; i < items.length; i++) {
        if (i == 0) {
            reply = items[i];
        } else {
            reply -= Number(items[i]);
        }
    }
    return reply;
}

function _multiply(items) {
    let reply = 1;
    for (let i = 0; i < items.length; i++) {
        reply.value *= Number(items[i]);
    };
    return reply;
}

function _divide(items) {
    let reply = 1;
    for (let i = 0; i < items.length; i++) {
        if (i == 0) {
            reply.value = Number(items[i]);
        } else {
            if (items[i] != 0) {
                reply.value /= Number(items[i]);
            }
            else {
                reply.value = null;
                reply.error = 'Division by 0 (zero)';
                break;
            }

        }
    };
    return reply;
}

module.exports = {
    calculate
}