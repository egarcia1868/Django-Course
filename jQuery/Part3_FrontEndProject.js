//alert for player 1
const player1 = prompt("Blue Player: Enter your name");

//alert for player 2
const player2 = prompt("Red Player: Enter your name");

//alternate between blue and red
let currentPlayer = player1;

//function that drops chip
let currentColumn = "";
$("td").click(function(){
  console.log(this)
})

//place correct chip on top of column until full
function changeColumn(){
  
}

//"name":  it is your turn.  Choose a column.
$("h3").text(`${currentPlayer}:  It is your turn.  Choose a column.`)


//check for winner


//Alert who won and to refresh to start over