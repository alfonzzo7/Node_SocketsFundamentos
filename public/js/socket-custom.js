var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Conexión con el servidor perdida');
});

function enviarMensaje(usuario, mensaje) {
    if (usuario.length <= 0) {
        usuario = 'Usuario Anónimo';
    }
    if (mensaje.length <= 0) {
        mensaje = 'Mensaje Vacio';
    }
    socket.emit('enviarMensaje', {
        usuario: usuario,
        mensaje: mensaje
    }, function(resp) {
        console.log('Servidor', resp);
    });
}

socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor', mensaje);
});