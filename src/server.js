import http from "http";
import WebSocket from "ws";
import express from "express";
const cors = require('cors');
const app = express();
app.use(cors());
app.options('*', cors());


app.set('view engine', "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("/"));


const handleListen = () => console.log('Listening on http://localhost:3000');
// const handleListen = () => console.log('Listening on ws://localhost:3000');
// app.listen(3000, handleListen);


// http 서버 위에 webSocket서버를 만들 수 있게 만드는 코드
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });// not neccessary
// 이렇게하면 http, websocket server 둘다 돌릴 수 있다
// 함께 http, ws 를 만들지 않아도 된다.

// wss.on("connection", handlerConnection);
// 별도로 있던 함수를 제거하고 allow function으로 대체
wss.on("connection", (socket) => {
    console.log("Conected to Browser(Client) 💛");
    socket.on("close", () => console.log("Disconnedted from the Browser"));
    socket.on("message", (message) => {
        console.log(message);
    });
    socket.send("hi!!");
});

server.listen(3000, handleListen);
// 서버는 http, ws 두가지 프로토콜을 이해할 수 있게 되었다.


