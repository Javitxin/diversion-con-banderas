/*  https://restcountries.com/v3/all
     La información se ordena alfabéticamente.
     Al clickar en cada una de las banderas tendrá que mostrar la información 
     detallada en una ventana flotante del país seleccionado. 
     La Muestra información detallada sobre el país seleccionado, 
     incluyendo la bandera, la capital, la población, el lado de la carretera por el que se circula.
- Tendrá un botón cerrar para hacer desaparecer esa información.

Datos del array API:
un array [0 .. 99] [100 ... 199] [200 ... 249], el "id" de cada bandera es el indice del arrray que 
su total es 250 .lenght = 250

img = flags[0]:
name.comon: nombre del pais dentro de la img
en la ventana de información sale:
Bandera, a la izq nomnbre del país
        capital: capital[0]:
        población: population:
        lado por el que conducen: car.side:

*/
const modal = document.getElementById('modal');
let nuevoArraObj = [{}];
let prue;
let contId = 0;
const getBanderas = async() => {
    try {
        const response = await fetch('https://restcountries.com/v3/all');
        if (!response.ok) {
            throw new Error('Ha surgduido un error', response.status);
        }
        const data = await response.json();


        ordenarPaises(data);


    } catch (error) {
        console.log('Error al obtener los datos', error);
    }
};
// Tengo que Crear la funcion que me abra la ventana y muestre la información




// Funcion Ordenar Paises Alfabeticamente
const ordenarPaises = (pais) => {
    const paisesOrdenados = pais.sort((a, b) => a.name.common.localeCompare(b.name.common))
    container = document.getElementById('countries-list');
    pais.forEach((data) => {
        //console.log(data.index())
        prue = data.name.common;
        let template = `<div class="contenedor-Banderas">
                            <div class="banderas" onclick="ventanModal(this)">
                                <img src="${data.flags[0]}">
                                <p>${data.name.common}</p>
                            </div>
                            <div class="info-banderas">
                                <img src=${data.flags[0]}>
                                <p>${data.name.common}</p>
                                <p>Capital: ${data.capital}</p>
                                <p>Población: ${data.population}</p>
                                <p>Lado por dnde conducen: ${data.car.side}</p>
                                <input type="button" value="Cerrar" onclick="ocultarDatos(this)">
                            </div>
                        </div>`;
        container.innerHTML += template;
    });

    console.log(paisesOrdenados);
}
const ventanModal = (obj) => {
    const datos = obj.closest('.contenedor-Banderas').querySelector('.info-banderas');
    datos.style.display = 'block';
    datos.style.visibility = 'visible';
}
const ocultarDatos = (obj) => {
    const datos = obj.closest('.info-banderas')
    datos.removeAttribute('style');
    datos.display = 'none';
    datos.style.visibility = 'hidden';
}




getBanderas();
/*
const paddockType = [
    { id: 1, name: 'PALTOS' },
    { id: 2, name: 'AVELLANOS' },
    { id: 3, name: 'CEREZAS' },
    { id: 4, name: 'NOGALES' },
    { id: 5, name: 'AZUCAR' },
    { id: 6, name: 'ARANDANOS' },
]

const rta = paddockType.sort(function(a, b){
    if(a.name.toLowerCase() < b.name.toLowerCase()) { return -1; }
    if(a.name.toLowerCase() > b.name.toLowerCase()) { return 1; }
    return 0;
})


console.log(rta);
*/