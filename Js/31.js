// APIS

const boton = document.querySelector('#boton')   //Document es para seleccionar algo del html

boton.addEventListener('click', function() {
    Notification.requestPermission()
        .then(resultado => console.log(`El resultado es ${resultado}`))    
});

if(Notification.permission =='granted') {
    new Notification('Esta es una notificacion', {
        icon: 'img/ccj.png',
        body: 'Codigo con juan, los mejores tutoriales'
    })
}