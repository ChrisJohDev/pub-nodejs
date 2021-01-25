

class ClientView {
    constructor() { }

    renderList(data) {
        let htmlHead = '<table class="customer_table"><thead><tr>'
        let html = '<tbody>';
        //console.log(JSON.stringify(data));
        //data = JSON.parse(data);
        for (let i = 0; i < data.length; i++) {
            html += '<tr>';
            for (let key in data[i]) {
                if (i == 0) {
                    htmlHead += `<th>${key}</th>`;
                }
                html += `<td>${data[i][key]}</td>`;
            }
            html += '</tr>';
        }
        html += '</tbody></table>';
        htmlHead += '</thead>'

        Helper.setHtml('customer_page', htmlHead + html);
        Helper.switchPanel('page', 'customer_page');
    }

    renderMath(data) {
        let html = '';
        let items = [];
        if (data.hasOwnProperty('sum')) {
            html += `<div><p style="font-size: 2.5em;">Summan av `;
            items = Current.math.tal.split(',');
            for (let i = 0; i < items.length; i++) {
                html += `${items[i]} + `;
                console.log(`i: ${i}, items[i]: ${items[i]}`);
            }
            html = html.slice(0, -2);
            html += `är <strong>${data.sum}</strong>.`
        }
        Helper.setHtml('math_page', html);
        Helper.switchPanel('page', 'math_page');
    }
}