let array = [['', 'Mai', 'Juin', 'Juillet'], ['Abricot', 5.80, 3.37, 3.72], ['Fraise', 10.57, 11.11, 12.84], ['Poireau', 1.66, 2.34, 1.98], ['Tomate', 4.34, 3.13, 2.77]];
let tds = document.getElementsByTagName('td');
// function affichage() {
//     let reponse = array[1][0] + " coutait " + array[1][1] + "€ le kilo en " + array[0][1];
//     console.log(reponse);
// }
// affichage();

function tableCreate() {
    let body = document.querySelector('body');
    let tbl = document.createElement('table');
    let k = 0;
    for (let i = 0; i < array.length; i++) {
        let tr = tbl.insertRow();
        for (let j = 0; j < array[i].length; j++) {
            let td = tr.insertCell();
            td.appendChild(document.createTextNode('cell'));
        }
    }
    body.appendChild(tbl);
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            tds[k].innerText = array[i][j];
            k++;
        }
    }
}
tableCreate();