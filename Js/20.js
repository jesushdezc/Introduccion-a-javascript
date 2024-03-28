
// Metodos de propiedad
const reproductor = {
    reproducir : function(id) {
        console.log(`Reproduciendo Cancion con el ID: ${id}`)
    },
    pausar: function() {
        console.log('Pausando...')
    },
    crearPlaylist: function(nombre) {
        console.log(`Creando la playlist: ${nombre}`)
    },
    reproducirPlaylist: function(nombre) {
        console.log(`Reproduciendo la playlist: ${nombre}`)
    },
}

reproductor.borarrCancion = function(id) {
    console.log(`Eliminando Cancion: ${id}`)
}


reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borarrCancion(20);
reproductor.crearPlaylist('Heavy Metal')
reproductor.reproducirPlaylist('Heavy Metal')