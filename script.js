const countElement = document.getElementById("count");
let count = 0;

setInterval(() => {
  count++;
  countElement.innerText = count;
}, 1000);
