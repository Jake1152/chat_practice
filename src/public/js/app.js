// function fd(event) {

// }

// "submit", fn
// cancelIdleCallback, submit, Wi-Fi

// btn.addEventListner("click", fn);
// form.addEventListner("submit", fn);
// btn.addEventListner("sadfsdfsdfsadf", fn); 

// # 3 http protocol
// const socket = new WebSocket(`http://localhost:3000`);
// protocol이 ws이거나 wss라고 해야한다.
// domain을 다르게하고 싶다고한다.


// # 4 ws protocol with DOM
const socket = new WebSocket(`ws://${window.location.host}`);
// backend와 메시지를 송수신할 수 있게 된다

socket.addEventListener("open", () => {
    console.log("Coonected from Server 💚");
});



socket.addEventListener("message", (message) => {
    console.log("New message", message.data);
});

socket.addEventListener("close", () =>{
    console.log("Disconnected from Server 🧡"); 
});

setTimeout(() => {
    socket.send("hello from the browser");
}, 1000);