

class ClientModel {
    constructor() { }
    host = 'http://127.0.0.1';
    port = '3000';

    async getList() {
        let promise = await fetch(`${this.host}:${this.port}/list`)
        return promise;
    }

    async getMath(data) {
        console.log(`in getMath data: ${data}`);
        let promise = await fetch(`${this.host}:${this.port}/add`, {
            method: "POST",
            headers: {
                'Accept': "application/json",
                'Content-Type': "application/json"
            },
            body: JSON.stringify(data)
        })
        return promise;
    }
}