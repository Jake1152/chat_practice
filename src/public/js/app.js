const socket = io();
const welcome = document.getElementById("welcome")
const form = welcome.querySelector("form");

function handleRoomSubmit(event) {
    event.preventDefault();
    const input = form.querySelector("Input");
    // socket.io로 만든 것으로 원하는 이벤트를 만들 수 있다.
    // 또한 함수도 넘겨줄수 있다.
    socket.emit("enter_room", { payload: input.value}, () => {
        console.log("server is done!");
    });
    input.value =""
}

form.addEventListener("submit", handleRoomSubmit);