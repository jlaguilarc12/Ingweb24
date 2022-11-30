const materias = [
    {
        nombre: 'Dispositivos móviles',
        creditos: 3,
        semestre: 5,
        path: "./Images/pic1.jpg"
    },
    {
        nombre: 'Ingeniería Web 1',
        creditos: 3,
        semestre: 6,
        path: "./Images/pic2.jpg"
    },
    {
        nombre: 'Estructura de Datos',
        creditos: 2,
        semestre: 3,
        path: "./Images/pic3.jpg"
    },
    {
        nombre: 'Pensamiento Algoritmico',
        creditos: 2,
        semestre: 2,
        path: "./Images/pic4.jpg"
    },
    {
        nombre: 'POO',
        creditos: 3,
        semestre: 3,
        path: "./Images/pic1.jpg"
    }
];

let data = materias.map(function(mat){
    //return '<li>'+mat.nombre+' '+mat.creditos+'</li>'
    let img = document.createElement('img');
    img.setAttribute("src", mat.path);

    document.getElementById("container").appendChild(img);
});

const p = document.querySelectorAll(".parrafo")

p.forEach((pe) => {
    pe.innerHTML = "Hola mundo!!!";;
  });


//document.getElementById("container").innerHTML = data;

//let imagen = document.getElementById("imagen");
//imagen.setAttribute("src", "./Images/pic1.jpg")