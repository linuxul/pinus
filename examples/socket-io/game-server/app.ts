import { Server } from "socket.io";

const io = new Server(3002);

io.on("connection", (socket) => {
    socket.emit("hello", "world");

    socket.on("howdy", (arg) => {
        console.log(arg);
    });
})


