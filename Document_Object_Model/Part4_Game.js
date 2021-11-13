// restart game button
let restart = document.querySelector("#b");

let squares = document.querySelectorAll("td");
// clears all the squares
restart.addEventListener("click", function() {
  for (i = 0; i < squares.length; i++) {
    squares[i].textContent = ""
  }
});

function checker() {
  if (this.textContent === "") {
    this.textContent = "X"
  } else if (this.textContent === "X") {
    this.textContent = "O"
  } else if (this.textContent === "O") {
    this.textContent = ""
  }
}

for(i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", checker)
}