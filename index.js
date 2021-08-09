// function to initalize players
function Player (icon) {
    this.icon = icon;
 }
//  function to initialize tiles
 function Tile (isTaken, text) {
   this.isTaken = isTaken || false;
   this.text = text || '';
 }
 
//  creating game object
 var game = {
   gameInProgress: false,
   playerOdd: null,
   playerEven: null,
   currentPlayer: null,
   winner: false,
   tiles: [{
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
     icon = this.currentPlayer.icon;
     if (
       // horizontal tiles
       this.checkTiles(0, 1, 2, icon) ||
       this.checkTiles(3, 4, 5, icon) ||
       this.checkTiles(6, 7, 8, icon) ||
       // vertical tiles
       this.checkTiles(0, 3, 6, icon) ||
       this.checkTiles(1, 4, 7, icon) ||
       this.checkTiles(2, 5, 8, icon) ||
       // diagonal tiles
       this.checkTiles(0, 4, 8, icon) ||
       this.checkTiles(2, 4, 6, icon)) {
       result = false;
       this.winner = true;
       view.showWinner(icon);
     } else if (game.tiles.every(tile => tile.isTaken === true) && this.winner === true) {
       view.showWinner(icon);
     } else  if (game.tiles.every(tile => tile.isTaken === true)) {
       view.showWinner("Nobody ");
     } 
     this.gameInProgress = result;
     return result;
   },
 
   checkTiles: function(a, b, c, move) {
     let result = false;
     if (this.getTile(a) == move &&
         this.getTile(b) == move &&
         this.getTile(c) == move) {
       result = true;
     }
     return result;
   },
 
   getTile: function(number) {
     return this.tiles[number].text;
   },

   switchTurn: function() {
     this.shouldGameContinue();
     
     if (this.currentPlayer === this.playerOdd) {
       this.currentPlayer = this.playerEven;
     } else {
       this.currentPlayer = this.playerOdd;
     }
     
     if (this.currentPlayer) {
       view.setMessage("It's player " + game.currentPlayer.icon + "'s turn.");
     }
   },
 };
 
// Event Handlers set Players, Opponents
 var handlers = {
   setStartingPlayer: function(event) {
     game.playerOdd = new Player(event.target.value);
     game.currentPlayer = game.playerOdd;
     game.gameInProgress  = true;
     if (game.playerOdd.icon === 'X') {
       game.playerEven = new Player('O');
     } else {
       game.playerEven = new Player('X');
     }
   },
 
   setOpponent: function(event) {
     game.playerEven = new Player(game.playerEven.icon); if ( game.playerOdd.icon === "X") {
       game.playerEven.icon = "O";
     } 
     game.gameInProgress  = true;
    //  view.renderConfig(3);
   },
 
   tileClick: function(event) {
     if (!game.gameInProgress) return;
     
     let clickedTileIndex = event.target.id,
              clickedTile = game.tiles[clickedTileIndex];
     
     if (!clickedTile.isTaken) {
       clickedTile.isTaken = true;
       clickedTile.text    = game.currentPlayer.icon;
       view.XorYinTile(game.currentPlayer.icon, clickedTileIndex);
       game.switchTurn();
       game.shouldGameContinue();
     }
   },
 };
 
// Dynamically creating Table, message box and select Players buttons
 var templates = {
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
           <td class="tile" onclick="handlers.tileClick(event)" id="0"></td>
           <td class="tile" onclick="handlers.tileClick(event)" id="1"></td>
           <td class="tile" onclick="handlers.tileClick(event)" id="2"></td>
         </tr>
         <tr>
           <td class="tile" onclick="handlers.tileClick(event)" id="3"></td>
           <td class="tile" onclick="handlers.tileClick(event)" id="4"></td>
           <td class="tile" onclick="handlers.tileClick(event)" id="5"></td>
         </tr>
         <tr>
           <td class="tile" onclick="handlers.tileClick(event)" id="6"></td>
           <td class="tile" onclick="handlers.tileClick(event)" id="7"></td>
           <td class="tile" onclick="handlers.tileClick(event)" id="8"></td>
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
     this.gameBoard.innerHTML = templates.renderTable();
     
     tictactoe.appendChild(this.messageBox);
     tictactoe.appendChild(this.playerButtons);
     tictactoe.appendChild(this.gameBoard);
     tictactoe.appendChild(templates.restartButtonTemplate());
   },
   
   renderConfig: function (step) {
     
     this.configStep = step;
     switch(view.configStep) {
       case 1:
         this.setMessage("Welcome, to begin please pick a player");
         this.playerButtons.innerHTML = templates.playerButtonTemplate();
         break;
       default:
         // no opponent
     }
   },
   
   showWinner: function (icon) {
     window.alert(icon + " wins!");
     this.restartGame();
   },
 
   XorYinTile: function(mark, index) {
     document.getElementById(index).innerText = mark;
     document.getElementById(index).classList.add("inactive");
   },
 
   setMessage: function(msg) {
     this.messageBox.innerHTML = msg;
   },
   
   restartGame: function() {
     let tiles = game.tiles;
     game.gameInProgress = false;
     game.playerOdd = null;
     game.playerEven = null;
     view.setMessage("Please select a player to start the game.");
     game.winner = false;
     
     // Gameboard tiles
     for (var i = 0; i < tiles.length; i++) {
       tiles[i].isTaken = false;
       tiles[i].text = '';
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