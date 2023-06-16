// Primer Desafio //
// Algoritmo Utilizando un ciclo //
// 5 Cosas las cuales cumplir para el desafio//

let nombreUsuario = prompt('ingrese su nombre: ')
do {
    if (nombreUsuario !== '' ){
        alert('Bienvenido' + ' ' + nombreUsuario)
    }else {
        alert('Debe ingresar un nombre')
        nombreUsuario = prompt('Ingrese nombre: ')
    }
}
while (nombreUsuario === '')

// 1) se le suma otro número en cada repeticion en la consola//
let numeroPrompt = Number(prompt('Ingrese un numero: '))
// 2) usamos for para repetir un numero fijo de veces.//
for (let index = 0; index < 20; index++) {
numeroPrompt = numeroPrompt + index
console.log(numeroPrompt)
}
// 3) mientras que usamos while cuando queremos repetir algo hasta que se deje de cumplir una condicion. //
// 4) solo se puede saltar escribiendo la palabra (ESC)//
let texto = prompt('Ingrese la palabra clave:ESC ')
while (texto !== 'ESC') {
    console.log('Hola' + texto)
    texto = prompt('Ingrese un texto: ')
}
// 5) Te pide el numero que quieres repetir un Hola en la consola//
let repetir = parseInt(prompt('Coloca un numero de veces que quieras repetir el Hola'))
for (let index = 0; index < repetir; index++) {
    console.log('Hola')
}

//simulador interactivo//
while (true) {
    let valor = parseFloat(prompt('Zapatos de $15.000 Cuantos quiere comprar?'));
    const precio = 15.000;
    const valorDelIva = 0.19;
    const valorConIva = precio * valorDelIva;
    const resultado = valor * precio + valorConIva;
    alert('costo total: ' + resultado)
    console.log('Costo total: ' + resultado);
    break;
}

//desafio= algoritmo con un condicional utilizando un ciclo en una simulacion interactiva//
let desafio = true;
while (desafio) {
    let respuesta = prompt('¿Desea hacer la compra? escriba (si/no)');
    if (respuesta.toLowerCase()==='si') {
        alert('Compra Realizada')
        console.log('Compra Realizada')
    }else {
        alert('Compra Fallida')
        console.log('Compra Fallida')
    }
break;
}