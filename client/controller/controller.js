

class ClientController {
    constructor() { }

    init() {
        Helper.onClassChange('radio_select', Controller.pageChange);
        Controller.pageChange('list');
        Current.math = { "tal": "10,343,2334,345,22,2233,233" };
    }

    pageChange(data) {
        let tmp = 'list';
        try {
            tmp = data.target.value;
        }
        catch (err) {
        }

        if (tmp == 'list') {
            Model.getList()
                .then(response => response.json())
                .then((data) => {
                    View.renderList(data);
                })
        } else if (tmp == 'math') {
            Model.getMath(Current.math)
                .then(response => response.json())
                .then((data) => {
                    View.renderMath(data);
                })
        }
        else {
            alert('Error in script pageChange');
        }
    }
}