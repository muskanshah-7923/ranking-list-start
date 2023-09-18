// RANKING LIST

// HTML Variables
let outputEl = document.getElementById("output");

// Global Variables
let rankList = [];

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
  }

  printList();
}

function addItem() {
  let item = prompt("Enter item: ");
  rankList.push(item);
}

function removeLast() {
  rankList.pop();
}

function insert() {
  let pos = +prompt("Insert Position: ");
  let item = prompt("Item to Insert: ");
  rankList.splice(pos - 1, 0, item);
}

function removePos() {
  let pos = +prompt("Position to remove: ");
  rankList.splice(pos - 1, 1);
}

function move() {
  let posFrom = +prompt("Move item from: ");
  let posTo = +prompt("Move item to: ");
  let item = rankList.splice(posFrom - 1, 1);
  rankList.splice(posTo - 1, 0, item);
}

function edit() {
  let pos = +prompt("Enter position: ");
  let newValue = prompt("Replace with: ");
  rankList[pos - 1] = newValue;
}

function printList() {
  outputEl.innerHTML = "";
  for (let i = 0; i < rankList.length; i++) {
    outputEl.appendChild(newItem(i, rankList[i]));
  }
}

function newItem(index, item) {
  let itemEl = document.createElement("div");
  itemEl.textContent = `${index + 1}: ${item}`;
  itemEl.dataset.index = index;
  return itemEl;
}
