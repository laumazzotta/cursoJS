
// // FUNCIONES

// function sumar () {
//     var n1 = parseInt(prompt("Ingresa un nro: "))
//     var n2 = parseInt(prompt("Ingresa otro nro: "))

//     console.log('Resultado: ' + (n1 + n2))
// }

// // ARRAY

// var dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']

// var s = "Dias de la semana"

// CICLO FOR

var dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']

function diasdesemana() {
    for(var i = 0; i < dias.length; i++) {
        // if (i == 7) {
        //     break;
        // }
        // alert("Este día no existe!")

        if (i % 2 == 0) {
            console.log(dias[i]); 
        }
    }
}

diasdesemana()

// CICLO WHILE

// function diasdesemana() {
//     i = 0;
//     while(i < dias.length) {
//         console.log(dias[i])
//         i++
//     }
// }

// SWITCH

// function eligeNro(){
//     var n = parseInt(prompt("elige un nro del 0 al 9"))
//     switch(n) {
//         case 0:
//             console.log('eligio el nro ' + n)
//             break;
//         case 1:
//             console.log('eligio el nro ' + n)
//             break;
//         case 2:
//             console.log('eligio el nro ' + n)
//             break;
//         case 3:
//             console.log('eligio el nro ' + n)
//             break;
//         default:
//             console.warn('debe elegir un nro entre los especificados')
//     }

//     var n = prompt("Ingrese un numero")
//     console.log(dias[n])
// }