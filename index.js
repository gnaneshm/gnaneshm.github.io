// Function called whenever user tab on any box
function checkWinner() {
  
    // Setting DOM to all boxes or input field
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

    // Checking if Player X won or not and after 
    // that disabled all the other fields
    if (r1c1 == 'X' && r1c2 == 'X' && r1c3 == 'X') {
        document.getElementById('print')
            .innerHTML = "Player X won";
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

    // Checking of Player X finsh
    // Checking for Player 0 starts, Is player 0 won or
    // not and after that disabled all the other fields
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
  
    // Checking of Player 0 finsh
    // Here, Checking about Tie
    else if ((r1c1 == 'X' || r1c1 == '0') && (r1c2 == 'X' 
        || r1c2 == '0') && (r1c3 == 'X' || r1c3 == '0') && 
        (r2c1 == 'X' || r2c1 == '0') && (r2c2 == 'X' || 
        r2c2 == '0') && (r2c3 == 'X' || r2c3 == '0') && 
        (r3c1 == 'X' || r3c1 == '0') && (r3c2 == 'X' || 
        r3c2 == '0') && (r3c3 == 'X' || r3c3 == '0')) {
            document.getElementById('print')
                .innerHTML = "Match Tie";
            window.alert('Match Tie');
    }
    else {
  
        // Here, Printing Result
        if (flag == 1) {
            document.getElementById('print')
                .innerHTML = "Player X Turn";
        }
        else {
            document.getElementById('print')
                .innerHTML = "Player 0 Turn";
        }
    }
}
  
// Function to reset game
function resetBox() {
    location.reload();
    // document.getElementById('r1c1').value = '';
    // document.getElementById("r1c2").value = '';
    // document.getElementById("r1c3").value = '';
    // document.getElementById("r2c1").value = '';
    // document.getElementById("r2c2").value = '';
    // document.getElementById("r2c3").value = '';
    // document.getElementById("r3c1").value = '';
    // document.getElementById("r3c2").value = '';
    // document.getElementById("r3c3").value = '';
  
}

// Here onwards, functions check turn of the player 
// and put accordingly value X or 0
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

  



