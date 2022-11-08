const socket = io();

socket.on("NewClient", (mssg) => {
  console.log(mssg);
});

socket.on("message", (message) => {
  console.log(message);
});
document.querySelector("#message-form").addEventListener("submit", (e) => {
  e.preventDefault();
  //   console.log("clicked ");
  //   const message = document.querySelector("input").value;
  const message = e.target.elements.message.value;
  socket.emit("sendMessage", message);
});
