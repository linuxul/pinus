import { io } from "socket.io-client"

const socket = io("http://localhost:3002")

socket.on("hello", (arg) => {
    console.log(arg);
});

socket.emit("howdy", "stranger");

socket.on('connect', function() {
    console.log('[pomeloclient.init] websocket connected!');
});