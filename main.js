// RANKING LIST START CODE

// HTML Variables
let outputEl = document.getElementById("output");

// Ranking List Array
let rankList = ["Pizza", "Pasta", "Salad", "Soup"];
drawRankList();

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu").value;

  // Implement Menu Selection
  if (selection === "add") {
    addItem();
  } else if (selection === "remove-last") {
    removeLast();
  } else if (selection === "insert") {
    insert();
  } else if (selection === "remove-pos") {
    removePos();
  } else if (selection === "move") {
    move();
  } else if (selection === "edit") {
    edit();
  } else if (selection == "empty") {
    empty();
  }

  // Redraw rankList after changes have been made
  drawRankList();
}

// FUNCTIONS TO DEFINE

function drawRankList() {
  let num = 1;

  for (let i = 0; i < rankList.length; i++) {
    outputEl.innerHTML += "<p>" + num++ + ":" + rankList[i] + "</p>" ;
  }
  console.log("Draw rankList");
}

function addItem() {
  let newItem = prompt("Enter Item:");
  outputEl.innerHTML += rankList.push(newItem);
  console.log("Add Item");
}

function removeLast() {
  let remove = document.getElementById("output");
  outputEl.innerHTML = remove;
  rankList.pop();
  console.log("Remove Last");
}

function insert() {
    let position = +prompt("Enter Position to Insert:");
    let newItem = prompt("Enter Item to Insert:");

 document.getElementById("output").innerHTML = rankList.splice(position, 0, newItem);
  rankList.splice(position);
  
  console.log("Insert");
}

function removePos() {
  let removePos = +prompt("Enter Position to Remove:");
    document.getElementById("output").innerHTML = rankList.splice(removePos, 1);
  
  console.log("Remove at Position");
}
function move() {
  let positionFrom = +prompt("Enter Position to Move from:");
  let positionTo = +prompt("Enter Position to Move to:");

  if (positionFrom >= 0 ) {
      let itemToMove = rankList[positionFrom];
      rankList.splice(positionFrom, 1);

      document.getElementById("output").innerHTML = rankList.splice(positionTo, 0, itemToMove);

  }
  console.log("Move")
}

function edit() {
let position = +prompt("Enter the position to replace");
let newItem = prompt("Enter the new item:");

if (position >= 0 ) {
outputEl.innerHTML = rankList[position] = newItem;
}
  console.log("Edit");
}

function empty() {
  rankList = 0;
  document.getElementById("output").innerHTML= "List emptied.";
  console.log("Empty");
}