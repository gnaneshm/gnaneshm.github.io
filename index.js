// Checking Winner condition
function checkWinner() {
    // getting value of all the boxes
    var r1c1, r1c2, r1c3, r2c1, r2c2, r2c3, r3c1, r3c2, r3c3;
    r1c1 = document.getElementById("r1c1").value;
    r1c2 = document.getElementById("r1c2").value;
    r1c3 = document.getElementById("r1c3").value;
    r2c1 = document.getElementById("r2c1").value;
    r2c2 = document.getElementById("r2c2").value;
    r2c3 = document.getElementById("r2c3").value;
    r3c1 = document.getElementById("r3c1").value;
    r3c2 = document.getElementById("r3c2").value;
    r3c3 = document.getElementById("r3c3").value;

    // Checking winning condition for player X
    if (r1c1 == 'X' && r1c2 == 'X' && r1c3 == 'X') {
        document.getElementById('print').innerHTML = "Player X won";
        document.getElementById("r2c1").disabled = true;
        document.getElementById("r2c2").disabled = true;
        document.getElementById("r2c3").disabled = true;
        document.getElementById("r3c1").disabled = true;
        document.getElementById("r3c2").disabled = true;
        document.getElementById("r3c3").disabled = true;
        window.alert('Player X won');
    }
    else if (r1c1 == 'X' && r2c1 == 'X' && r3c1 == 'X') {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("r1c2").disabled = true;
        document.getElementById("r1c3").disabled = true;
        document.getElementById("r2c2").disabled = true;
        document.getElementById("r2c3").disabled = true;
        document.getElementById("r3c2").disabled = true;
        document.getElementById("r3c3").disabled = true;
  
        window.alert('Player X won');
    }
    else if (r3c1 == 'X' && r3c2 == 'X' && r3c3 == 'X') {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("r1c1").disabled = true;
        document.getElementById("r1c2").disabled = true;
        document.getElementById("r1c3").disabled = true;
        document.getElementById("r2c1").disabled = true;
        document.getElementById("r2c2").disabled = true;
        document.getElementById("r2c3").disabled = true;
        window.alert('Player X won');
    }
    else if (r1c3 == 'X' && r2c3 == 'X' && r3c3 == 'X') {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("r1c1").disabled = true;
        document.getElementById("r1c2").disabled = true;
        document.getElementById("r2c1").disabled = true;
        document.getElementById("r2c2").disabled = true;
        document.getElementById("r3c1").disabled = true;
        document.getElementById("r3c2").disabled = true;
        window.alert('Player X won');
    }
    else if (r1c1 == 'X' && r2c2 == 'X' && r3c3 == 'X') {
    document.getElementById('print')
        .innerHTML = "Player X won";
    document.getElementById("r1c2").disabled = true;
    document.getElementById("r1c3").disabled = true;
    document.getElementById("r2c1").disabled = true;
    document.getElementById("r2c3").disabled = true;
    document.getElementById("r3c1").disabled = true;
    document.getElementById("r3c2").disabled = true;
    window.alert('Player X won');
    }
    else if (r1c3 == 'X' && r2c2 == 'X' && r3c1 == 'X') {
    document.getElementById('print')
        .innerHTML = "Player X won";
    document.getElementById("r1c1").disabled = true;
    document.getElementById("r1c2").disabled = true;
    document.getElementById("r2c1").disabled = true;
    document.getElementById("r2c3").disabled = true;
    document.getElementById("r3c2").disabled = true;
    document.getElementById("r3c3").disabled = true;
    window.alert('Player X won');
    }
    else if (r1c2 == 'X' && r2c2 == 'X' && r3c2 == 'X') {
    document.getElementById('print')
        .innerHTML = "Player X won";
    document.getElementById("r1c1").disabled = true;
    document.getElementById("r1c3").disabled = true;
    document.getElementById("r2c1").disabled = true;
    document.getElementById("r2c3").disabled = true;
    document.getElementById("r3c1").disabled = true;
    document.getElementById("r3c3").disabled = true;
    window.alert('Player X won');
    }
    else if (r2c1 == 'X' && r2c2 == 'X' && r2c3 == 'X') {
    document.getElementById('print')
        .innerHTML = "Player X won";
    document.getElementById("r1c1").disabled = true;
    document.getElementById("r1c2").disabled = true;
    document.getElementById("r1c3").disabled = true;
    document.getElementById("r3c1").disabled = true;
    document.getElementById("r3c2").disabled = true;
    document.getElementById("r3c3").disabled = true;
    window.alert('Player X won');
    }

    // Checking Winning Condition for Player 0
    else if (r1c1 == '0' && r1c2 == '0' && r1c3 == '0') {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("r2c1").disabled = true;
        document.getElementById("r2c2").disabled = true;
        document.getElementById("r2c3").disabled = true;
        document.getElementById("r3c1").disabled = true;
        document.getElementById("r3c2").disabled = true;
        document.getElementById("r3c3").disabled = true;
        window.alert('Player 0 won');
    }
    else if (r1c1 == '0' && r2c1 == '0' && r3c1 == '0') {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("r1c2").disabled = true;
        document.getElementById("r1c3").disabled = true;
        document.getElementById("r2c2").disabled = true;
        document.getElementById("r2c3").disabled = true;
        document.getElementById("r3c2").disabled = true;
        document.getElementById("r3c3").disabled = true;
        window.alert('Player 0 won');
    }
    else if (r3c1 == '0' && r3c2 == '0' && r3c3 == '0') {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("r1c1").disabled = true;
        document.getElementById("r1c2").disabled = true;
        document.getElementById("r1c3").disabled = true;
        document.getElementById("r2c1").disabled = true;
        document.getElementById("r2c2").disabled = true;
        document.getElementById("r2c3").disabled = true;
        window.alert('Player 0 won');
    }
    else if (r1c3 == '0' && r2c3 == '0' && r3c3 == '0') {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("r1c1").disabled = true;
        document.getElementById("r1c2").disabled = true;
        document.getElementById("r2c1").disabled = true;
        document.getElementById("r2c2").disabled = true;
        document.getElementById("r3c1").disabled = true;
        document.getElementById("r3c2").disabled = true;
        window.alert('Player 0 won');
    }
    else if (r1c1 == '0' && r2c2 == '0' && r3c3 == '0') {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("r1c2").disabled = true;
        document.getElementById("r1c3").disabled = true;
        document.getElementById("r2c1").disabled = true;
        document.getElementById("r2c3").disabled = true;
        document.getElementById("r3c1").disabled = true;
        document.getElementById("r3c2").disabled = true;
        window.alert('Player 0 won');
    }
    else if (r1c3 == '0' && r2c2 == '0' && r3c1 == '0') {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("r1c1").disabled = true;
        document.getElementById("r1c2").disabled = true;
        document.getElementById("r2c1").disabled = true;
        document.getElementById("r2c3").disabled = true;
        document.getElementById("r3c2").disabled = true;
        document.getElementById("r3c3").disabled = true;
        window.alert('Player 0 won');
    }
    else if (r1c2 == '0' && r2c2 == '0' && r3c2 == '0') {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("r1c1").disabled = true;
        document.getElementById("r1c3").disabled = true;
        document.getElementById("r2c1").disabled = true;
        document.getElementById("r2c3").disabled = true;
        document.getElementById("r3c1").disabled = true;
        document.getElementById("r3c3").disabled = true;
        window.alert('Player 0 won');
    }
    else if (r2c1 == '0' && r2c2 == '0' && r2c3 == '0') {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("r1c1").disabled = true;
        document.getElementById("r1c2").disabled = true;
        document.getElementById("r1c3").disabled = true;
        document.getElementById("r3c1").disabled = true;
        document.getElementById("r3c2").disabled = true;
        document.getElementById("r3c3").disabled = true;
        window.alert('Player 0 won');
    }
  
    // Tie Condition
    else if ((r1c1 == 'X' || r1c1 == '0') && (r1c2 == 'X' 
        || r1c2 == '0') && (r1c3 == 'X' || r1c3 == '0') && 
        (r2c1 == 'X' || r2c1 == '0') && (r2c2 == 'X' || 
        r2c2 == '0') && (r2c3 == 'X' || r2c3 == '0') && 
        (r3c1 == 'X' || r3c1 == '0') && (r3c2 == 'X' || 
        r3c2 == '0') && (r3c3 == 'X' || r3c3 == '0')) {
            document.getElementById('print').innerHTML = "Match Tie";
            window.alert('Match Tie');
    }
    else {
        // Current Players Turn
        if (flag == 1) {
            document.getElementById('print').innerHTML = "Player X Turn";
        }
        else {
            document.getElementById('print').innerHTML = "Player 0 Turn";
        }
    }
}

// resetting the game
function resetBox() {
    location.reload();
}

// Checking turn of the players, flag=1, indicates player 'X' turns, and '0' indicates player '0' turns
flag = 1;
function box1() {
    if (flag == 1) {
        document.getElementById("r1c1").value = "X";
        document.getElementById("r1c1").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("r1c1").value = "0";
        document.getElementById("r1c1").disabled = true;
        flag = 1;
    }
}
  
function box2() {
    if (flag == 1) {
        document.getElementById("r1c2").value = "X";
        document.getElementById("r1c2").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("r1c2").value = "0";
        document.getElementById("r1c2").disabled = true;
        flag = 1;
    }
}
  
function box3() {
    if (flag == 1) {
        document.getElementById("r1c3").value = "X";
        document.getElementById("r1c3").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("r1c3").value = "0";
        document.getElementById("r1c3").disabled = true;
        flag = 1;
    }
}
  
function box4() {
    if (flag == 1) {
        document.getElementById("r2c1").value = "X";
        document.getElementById("r2c1").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("r2c1").value = "0";
        document.getElementById("r2c1").disabled = true;
        flag = 1;
    }
}
  
function box5() {
    if (flag == 1) {
        document.getElementById("r2c2").value = "X";
        document.getElementById("r2c2").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("r2c2").value = "0";
        document.getElementById("r2c2").disabled = true;
        flag = 1;
    }
}
  
function box6() {
    if (flag == 1) {
        document.getElementById("r2c3").value = "X";
        document.getElementById("r2c3").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("r2c3").value = "0";
        document.getElementById("r2c3").disabled = true;
        flag = 1;
    }
}
  
function box7() {
    if (flag == 1) {
        document.getElementById("r3c1").value = "X";
        document.getElementById("r3c1").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("r3c1").value = "0";
        document.getElementById("r3c1").disabled = true;
        flag = 1;
    }
}
  
function box8() {
    if (flag == 1) {
        document.getElementById("r3c2").value = "X";
        document.getElementById("r3c2").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("r3c2").value = "0";
        document.getElementById("r3c2").disabled = true;
        flag = 1;
    }
}
  
function box9() {
    if (flag == 1) {
        document.getElementById("r3c3").value = "X";
        document.getElementById("r3c3").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("r3c3").value = "0";
        document.getElementById("r3c3").disabled = true;
        flag = 1;
    }
}

  
  



