// Desafio clase 6

var productos = ['teclado', 'mouse', 'parlantes', 'microfono', 'camara'];
var servicios = ['reparacion', 'service', 'mantenimiento', 'soporte', 'capacitacion'];

function productosyservicios (p, s) {
    unirArrays = p.concat(s);
    console.log (unirArrays);
}

productosyservicios (productos, servicios);