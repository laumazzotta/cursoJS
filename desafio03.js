var dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo', 'Osvaldo']

function diasdesemana() {
    for(var i = 0; i < dias.length; i++) {
        if (i == 7) {
            alert("Este dia no existe!")
        }
        
        if (i % 2 == 0) {
            console.log(dias[i]); 
        }
    }
}

diasdesemana()