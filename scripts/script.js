// const nombre = document.getElementById('name').value;
// const ciudad = document.getElementById('city').value;
// const mensaje = `¡Bienvenido, ${nombre}! Nos alegra que estes
//                 visitando nuestra hermosa ciudad de ${ciudad}.`;

// console.log(mensaje)
// let message = document.getElementById('message');
// let generar = document.getElementById('generar');
// generar.addEventListener("click", function (even) {
//     even.preventDefault();
//     message.textContent = mensaje;
//     console.log(mensaje)
// })

const message = document.getElementById('message');

let generar = document.getElementById('generar');
generar.addEventListener("click", function (even) {
    even.preventDefault();

    const nombre = document.getElementById('name').value;
    const ciudad = document.getElementById('city').value;
    const mensaje = `¡Bienvenido, ${nombre}! Nos alegra que estes visitando nuestra hermosa ciudad de ${ciudad}.`;

    message.textContent = mensaje;
})