const inputBuscar = document.getElementById('buscar');
const celdas = document.getElementsByTagName('td');

// Traemos los datos de la API
let uri = 'https://jsonplaceholder.typicode.com/users';

fetch(uri)
    .then(response => response.json())
    .then(json => mostrarDatos(json))
    .catch(error => console.log(error));

const mostrarDatos = (data) => {
    let body = '';
    data.forEach(data => {
        body += `<tr><td>${data.name}</td></tr>`;
    });
    document.querySelector('.datos').innerHTML = body;
};

inputBuscar.addEventListener('keyup', (event) => {
    let texto = event.target.value;
    console.log(texto);
    let er = new RegExp(texto, 'i');
    for (let index = 0; index < celdas.length; index++) {
        let valor = celdas[index];
        if(er.test(valor.innerText)) {
            valor.classList.remove('ocultar');
        } else {
            valor.classList.add('ocultar');
        }
        
    }
})