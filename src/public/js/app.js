const socket = io();
const welcome = document.getElementById("welcome");
const form = welcome.querySelector("form");
const room = document.getElementById("room");

room.hidden = true;

function showRoom() {
    welcome.hidden = true;
    room.hidden = false;
}

function handleRoomSubmit(event) {
    event.preventDefault();
    const input = form.querySelector("Input");
    // socket.emit("enter_room", input.value, showRoom);
    socket.emit("enter_room", 5,  "hi", 42, true, false);
    input.value =""
}

form.addEventListener("submit", handleRoomSubmit);