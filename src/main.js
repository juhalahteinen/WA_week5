// JL Nov 2020
// Web applications assignment 5

// declaring variables for the game
var count = 0;
var board = document.getElementById("board");
var table = document.createElement("table");

// functions for the game are defined below

// creating a 5 x 5 table
function createTable(table) {
  // creating rows
  for (var r = 0; r < 5; r++) {
    var t_row = table.insertRow();

    //creating cells
    for (var c = 0; c < 5; c++) {
      var t_cell = t_row.insertCell();
      var cellText = document.createTextNode("");
      t_cell.appendChild(cellText);
    }
  }
  board.appendChild(table);
}

// creating the table interactive
function onClick(table) {
  for (var i = 0; i < table.rows.length; i++) {
    for (var j = 0; j < table.rows[i].cells.length; j++) {
      table.rows[i].cells[j].onclick = function () {
        fillCell(this);
      };
    }
  }
}

// checks if cell is already filled - if not then places X or O
function fillCell(t_cell) {
  if (count % 2 === 0) {
    if (t_cell.innerHTML === "") {
      t_cell.innerHTML = "X";
      checkWin(table);
      checkDraw(table);
      count++;
      document.getElementById("info").innerHTML = "Player 2 your turn";
    } else {
      alert("Cell is already chosen");
    }
  } else {
    if (t_cell.innerHTML === "") {
      t_cell.innerHTML = "O";
      checkWin(table);
      checkDraw(table);
      count--;
      document.getElementById("info").innerHTML = "Player 1 your turn";
    } else {
      alert("Cell is already chosen");
    }
  }
}

// player can win game by having 5 tags vertically, horizontally or diagonally
function checkWin(table) {
  var XO = ["X", "O"];

  for (var i = 0; i < 2; i++) {
    var ver1 = 0;
    var ver2 = 0;
    var ver3 = 0;
    var ver4 = 0;
    var ver5 = 0;

    var hor1 = 0;
    var hor2 = 0;
    var hor3 = 0;
    var hor4 = 0;
    var hor5 = 0;

    var dia1 = 0;
    var dia2 = 0;

    for (var t = 0; t < 5; t++) {
      if (table.rows[0].cells[t].innerHTML === XO[i]) {
        hor1++;
      }
      if (table.rows[1].cells[t].innerHTML === XO[i]) {
        hor2++;
      }
      if (table.rows[2].cells[t].innerHTML === XO[i]) {
        hor3++;
      }
      if (table.rows[3].cells[t].innerHTML === XO[i]) {
        hor4++;
      }
      if (table.rows[4].cells[t].innerHTML === XO[i]) {
        hor5++;
      }
      if (table.rows[t].cells[0].innerHTML === XO[i]) {
        ver1++;
      }
      if (table.rows[t].cells[1].innerHTML === XO[i]) {
        ver2++;
      }
      if (table.rows[t].cells[2].innerHTML === XO[i]) {
        ver3++;
      }
      if (table.rows[t].cells[3].innerHTML === XO[i]) {
        ver4++;
      }
      if (table.rows[t].cells[4].innerHTML === XO[i]) {
        ver5++;
      }
      if (table.rows[t].cells[t].innerHTML === XO[i]) {
        dia1++;
      }
      var reverse = 4 - t;
      if (table.rows[t].cells[reverse].innerHTML === XO[i]) {
        dia2++;
      }
      if (
        ver1 === 5 ||
        ver2 === 5 ||
        ver3 === 5 ||
        ver4 === 5 ||
        ver5 === 5 ||
        hor1 === 5 ||
        hor2 === 5 ||
        hor3 === 5 ||
        hor4 === 5 ||
        hor5 === 5 ||
        dia1 === 5 ||
        dia2 === 5
      ) {
        if (XO[i] === "X") {
          alert("Player 1 won!");
          clearTable(table);
        }
        if (XO[i] === "O") {
          alert("Player 2 won!");
          clearTable(table);
        }
      }
    }
  }
}

function checkDraw(table) {
  var countDraw = 0;

  for (var t = 0; t < table.rows.length; t++) {
    for (var i = 0; i < table.rows[t].cells.length; i++) {
      if (
        table.rows[t].cells[i].innerHTML === "X" ||
        table.rows[t].cells[i].innerHTML === "O"
      ) {
        countDraw++;
      }
    }
  }
  if (countDraw === 25) {
    alert("It's a draw!");
    clearTable(table);
  }
}

function clearTable(table) {
  for (var t = 0; t < table.rows.length; t++) {
    for (var i = 0; i < table.rows[t].cells.length; i++) {
      table.rows[t].cells[i].innerHTML = "";
    }
  }
}

createTable(table);
onClick(table);
