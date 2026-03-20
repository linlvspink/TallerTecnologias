
// ARRAY DE PRODUCTOS

const productos = [
    {nombre: "Camiseta", precio: 20000, disponible: true},
    {nombre: "Pantalón", precio: 35000, disponible: true},
    {nombre: "Gorra", precio: 15000, disponible: false}
];


// FUNCIÓN PRINCIPAL (SWITCH)

function cargarSeccion(seccion){

    const contenedor = document.getElementById("contenido");

    switch(seccion){

        case "inicio":
            contenedor.innerHTML = `
            <table width="80%">
                <tr>
                    <td align="center">
                        <h1>¡Bienvenido!</h1>
                        <p>Chill Guy Store </p>
                        <img src="https://i.pinimg.com/736x/07/d0/2f/07d02fdcacdfcdf7fb4d99cfe9c036f5.jpg" width="400">
                    </td>
                </tr>
            </table>
            `;
            break;

        case "productos":
            mostrarProductos();
            break;

        case "ubicacion":
            contenedor.innerHTML = `
                <h2>Nuestra ubicación</h2>
                <iframe width="500" height="300"
                src="https://www.google.com/maps?q=Barranquilla&output=embed">
                </iframe>
            `;
            break;

        case "contacto":
            mostrarFormulario();
            break;

        default:
            contenedor.innerHTML = "<p>Error</p>";
    }
}


// PRODUCTOS (FOR + IF)

function mostrarProductos(){

    let html = `
    <h2>Productos</h2>
    <table border="1">
    <tr>
        <th>Producto</th>
        <th>Precio</th>
        <th>Estado</th>
    </tr>
    `;

    for(let i=0; i<productos.length; i++){

        let estado = "";

        // IF
        if(productos[i].disponible){
            estado = "Disponible";
        } else {
            estado = "Agotado";
        }

        html += `
        <tr>
            <td>${productos[i].nombre}</td>
            <td>$${productos[i].precio}</td>
            <td>${estado}</td>
        </tr>
        `;
    }

    html += "</table>";

    document.getElementById("contenido").innerHTML = html;
}


// FORMULARIO (WHILE)

function mostrarFormulario(){

    let html = `
        <h2>Formulario de contacto</h2>
        <form onsubmit="enviarFormulario(event)">
            <input type="text" placeholder="Nombre" required><br><br>
            <input type="email" placeholder="Email" required><br><br>
            <textarea placeholder="Mensaje"></textarea><br><br>
            <button type="submit">Enviar</button>
        </form>
    `;

    // WHILE
    let i = 0;
    while(i < 1){
        console.log("Formulario cargado");
        i++;
    }

    document.getElementById("contenido").innerHTML = html;
}


// EVENTO

function enviarFormulario(e){
    e.preventDefault();
    alert("Mensaje enviado correctamente");
}


// INICIO

cargarSeccion("inicio");