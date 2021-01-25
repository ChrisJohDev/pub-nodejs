// Main api - model
const fetch = require('node-fetch');

const getMath = async (url, xBody) => {
    const promise = await fetch(url, {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: xBody
    });
    return promise;
};

module.exports = {
    getMath
}