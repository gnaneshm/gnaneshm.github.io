// function to initalize players
function Player (symbol) {
    this.symbol = symbol;
 }
//  function to initialize boxes
 function Box (isTaken, text) {
   this.isTaken = isTaken || false;
   this.text = text || '';
 }
 
//  Using Object Oriented design paradigm to create Tic Tac Toe Game class
 var TicTacToeGame = {
   gameInProgress: false,
   firstPlayer: null,
   secondPlayer: null,
   currentPlayer: null,
   winner: false,
   boxes: [{
     isTaken: false,
     text: '' // 'x' or 'o'
   }, {
     isTaken: false,
     text: '' // 'x' or 'o'
   }, {
     isTaken: false,
     text: '' // 'x' or 'o'
   }, {
     isTaken: false,
     text: '' // 'x' or 'o'
   }, {
     isTaken: false,
     text: '' // 'x' or 'o'
   }, {
     isTaken: false,
     text: '' // 'x' or 'o'
   }, {
     isTaken: false,
     text: '' // 'x' or 'o'
   }, {
     isTaken: false,
     text: '' // 'x' or 'o'
   }, {
     isTaken: false,
     text: '' // 'x' or 'o'
   }],
   
   shouldGameContinue: function() {
     let result = true;
     symbol = this.currentPlayer.symbol;
     if (
       // horizontal boxes
       this.checkBox(0, 1, 2, symbol) ||
       this.checkBox(3, 4, 5, symbol) ||
       this.checkBox(6, 7, 8, symbol) ||
       // vertical boxes
       this.checkBox(0, 3, 6, symbol) ||
       this.checkBox(1, 4, 7, symbol) ||
       this.checkBox(2, 5, 8, symbol) ||
       // diagonal boxes
       this.checkBox(0, 4, 8, symbol) ||
       this.checkBox(2, 4, 6, symbol)) {
       result = false;
       this.winner = true;
       view.showWinner(symbol);
     } else if (TicTacToeGame.boxes.every(tile => tile.isTaken === true) && this.winner === true) {
       view.showWinner(symbol);
     } else  if (TicTacToeGame.boxes.every(tile => tile.isTaken === true)) {
       view.showWinner("Nobody ");
     } 
     this.gameInProgress = result;
     return result;
   },
 
   checkBox: function(a, b, c, symbol) {
     let result = false;
     if (this.getBox(a) == symbol &&
         this.getBox(b) == symbol &&
         this.getBox(c) == symbol) {
       result = true;
     }
     return result;
   },
 
   getBox: function(number) {
     return this.boxes[number].text;
   },

   switchTurn: function() {
     this.shouldGameContinue();
     
     if (this.currentPlayer === this.firstPlayer) {
       this.currentPlayer = this.secondPlayer;
     } else {
       this.currentPlayer = this.firstPlayer;
     }
     
     if (this.currentPlayer) {
       view.setMessage("It's player " + TicTacToeGame.currentPlayer.symbol + "'s turn.");
     }
   },
 };
 
// Event Handlers set Players, Opponents
 var handlers = {
   setStartingPlayer: function(event) {
    TicTacToeGame.firstPlayer = new Player(event.target.value);
    TicTacToeGame.currentPlayer = TicTacToeGame.firstPlayer;
    TicTacToeGame.gameInProgress  = true;
     if (TicTacToeGame.firstPlayer.symbol === 'X') {
      TicTacToeGame.secondPlayer = new Player('O');
     } else {
      TicTacToeGame.secondPlayer = new Player('X');
     }
   },
 
   setOpponent: function(event) {
    TicTacToeGame.secondPlayer = new Player(TicTacToeGame.secondPlayer.symbol); if ( TicTacToeGame.firstPlayer.symbol === "X") {
      TicTacToeGame.secondPlayer.symbol = "O";
     } 
     TicTacToeGame.gameInProgress  = true;
    //  view.renderConfig(3);
   },
 
   boxClick: function(event) {
     if (!TicTacToeGame.gameInProgress) return;
     
     let clickedTileIndex = event.target.id,
      clickedTile = TicTacToeGame.boxes[clickedTileIndex];
     
     if (!clickedTile.isTaken) {
       clickedTile.isTaken = true;
       clickedTile.text = TicTacToeGame.currentPlayer.symbol;
       view.markTheBox(TicTacToeGame.currentPlayer.symbol, clickedTileIndex);
       TicTacToeGame.switchTurn();
       TicTacToeGame.shouldGameContinue();
     }
   },
 };
 
// Dynamically creating Table, message box and select Players buttons
 var dynamicHtmlContents = {
   playerButtonTemplate: function () {
     return (
       `<div id="pick-player">
         <button onclick="handlers.setStartingPlayer(event)" class="player-select" value="X">X</button>
         <button onclick="handlers.setStartingPlayer(event)" class="player-select" value="O">O</button>
       </div>`
     );
   },
   
   restartButtonTemplate: function() {
     let restartButton = document.createElement("button");
     restartButton.setAttribute("id","restartButton");
     restartButton.setAttribute("onclick", "view.restartGame()");
     restartButton.innerText = "Restart";
     return restartButton;
   },
   
   renderTable() {
     return (
         `<tr>
           <td class="tile" onclick="handlers.boxClick(event)" id="0"></td>
           <td class="tile" onclick="handlers.boxClick(event)" id="1"></td>
           <td class="tile" onclick="handlers.boxClick(event)" id="2"></td>
         </tr>
         <tr>
           <td class="tile" onclick="handlers.boxClick(event)" id="3"></td>
           <td class="tile" onclick="handlers.boxClick(event)" id="4"></td>
           <td class="tile" onclick="handlers.boxClick(event)" id="5"></td>
         </tr>
         <tr>
           <td class="tile" onclick="handlers.boxClick(event)" id="6"></td>
           <td class="tile" onclick="handlers.boxClick(event)" id="7"></td>
           <td class="tile" onclick="handlers.boxClick(event)" id="8"></td>
         </tr>
        `
     )
   }
 };
 
// Setting up the board and render Configuraration
 var view = {
   tictactoe:     document.getElementById('tictactoe'),
   playerButtons: document.createElement('div'),
   messageBox:    document.createElement('div'),
   gameBoard:     document.createElement('table'),
   configStep: 1,
   
   setupBoard: function() {
     this.renderConfig(1);
     this.gameBoard.innerHTML = dynamicHtmlContents.renderTable();
     tictactoe.appendChild(this.messageBox);
     tictactoe.appendChild(this.playerButtons);
     tictactoe.appendChild(this.gameBoard);
     tictactoe.appendChild(dynamicHtmlContents.restartButtonTemplate());
   },
   
   renderConfig: function (step) {
     this.configStep = step;
     switch(view.configStep) {
       case 1:
         this.setMessage("Please select a player X or O");
         this.playerButtons.innerHTML = dynamicHtmlContents.playerButtonTemplate();
         break;
       default:
         // no opponent
     }
   },
   
   showWinner: function (symbol) {
     window.alert(symbol + " wins!");
     this.restartGame();
   },
 
   markTheBox: function(mark, index) {
     document.getElementById(index).innerText = mark;
     document.getElementById(index).classList.add("inactive");
   },
 
   setMessage: function(msg) {
     this.messageBox.innerHTML = msg;
   },
   
   restartGame: function() {
     let boxes = TicTacToeGame.boxes;
     TicTacToeGame.gameInProgress = false;
     TicTacToeGame.firstPlayer = null;
     TicTacToeGame.secondPlayer = null;
    //  view.setMessage("Please select a player to start the game.");
     TicTacToeGame.winner = false;
     
     // Gameboard boxes
     for (var i = 0; i < boxes.length; i++) {
       boxes[i].isTaken = false;
       boxes[i].text = '';
       document.getElementById(i).innerText = '';
       document.getElementById(i).classList.remove('inactive');
     }
     view.renderConfig(1);
   }
   
 }; 
 
 // Start game here, "DOMContentLoaded" loads for the first time even before css loads
 document.addEventListener("DOMContentLoaded", function() {
   view.setupBoard();
   console.log("game started");
 });