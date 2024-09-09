const io = require("socket.io-client");

const socket = io("http://localhost:3010");

socket.on("hello", function(arg) {
    console.log(arg);
});

socket.emit("howdy", "stranger");

socket.on('connect', function() {
    console.log('[pomeloclient.init] websocket connected!');
});