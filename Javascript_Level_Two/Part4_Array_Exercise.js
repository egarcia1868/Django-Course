// PART 4 ARRAY EXERCISE
// This is  a .js file with commented hints, its optional to use this.

// Create Empty Student Roster Array
// This has been done for you!
var roster = []

// Create the functions for the tasks

// ADD A NEW STUDENT

// Create a function called addNew that takes in a name
// and uses .push to add a new student to the array
const addNew = function (name) {roster.push(name)};

// REMOVE STUDENT

// Create a function called remove that takes in a name
// Finds its index location, then removes that name from the roster
const remove = function (name) {roster.splice(roster.indexOf(name), 1)}

// HINT: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
//

// DISPLAY ROSTER

// Create a function called display that prints out the orster to the console.
const display = function () {
  console.log(roster);
}

// Start by asking if they want to use the web app
const endScript = "Thanks for using the Web App! Please refresh the page to start over.";

const appTime = function () {
  let answer = prompt("Please select an action: add, remove, display, or quit");
  while (answer !== "quit") {
    if (answer === "add") {
      let who = prompt("Name?");
      addNew(who);
      appTime();
    } else if (answer === "remove") {
      let who = prompt("Name?");
      remove(who);
      appTime();
    } else if (answer === "display") {
      display();
      appTime();
    } else {
      appTime();
    }
  }
  alert(endScript);
}

let firstQ = prompt("Would you like to start the roster web app? y/n");
if(firstQ === "n"){
  alert(endScript);
} else {
  appTime();
};


// Now create a while loop that keeps asking for an action (add,remove, display or quit)

// Use if and else if statements to execute the correct function for each command.
