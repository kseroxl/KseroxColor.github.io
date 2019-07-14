var txt = document.getElementById("RGB");
var first = document.getElementsByClassName("square")[0];
var squares = document.getElementsByClassName("square");
var playground = document.getElementById("playground");
var l = document.getElementById("lose");
var w = document.getElementById("win");w.style.display == "none";
var newGame = document.getElementById("new");
var c = document.getElementById("chances");
var easy = document.getElementById("easy");
var NewHard = document.querySelector("#new", "#hard");
var PlayTo = 3;
var startNum = 6;
var color;
var icon = document.getElementsByClassName("icon")[0];
var icon2 = document.getElementsByClassName("icon")[1];
var Friend = document.getElementById("addFriend");
var subm = document.getElementById("ok");
var PlayFriend = false;
var OneActive = false;
var won = false;
var MaxScore = document.getElementById("number").value; 


var PlayerOne = document.getElementsByClassName("pl")[0];
var PlayerTwo = document.getElementsByClassName("pl")[1];

var name1 = document.getElementsByClassName("players")[0];
var name2 = document.getElementsByClassName("players")[1];


var PlayerOneScore = 0;
var PlayerTwoScore = 0;

PlayerOne.addEventListener("change", function() { 
    document.getElementById("name1").textContent = this.value;
})

PlayerTwo.addEventListener("change", function() { 
    document.getElementById("name2").textContent = this.value;
})

document.getElementById("number").addEventListener("change", function(){
    MaxScore = this.value;
})

function rand(num) {
    return Math.floor(Math.random() * num);
}


function rgb () {
    return 'rgb(' + Math.floor(Math.random() * 256) + ', ' +  Math.floor(Math.random() * 256) + ', ' +  Math.floor(Math.random() * 256)+ ')'; 
}

function generate(num) {
    color = rgb();
    var r = rand(num);
    for (var i = 0; i < num; i++) {
        if(i == r) {        
            txt.textContent = "RGB " + color.slice(3);
            squares[i].style.backgroundColor = color;
        }
        else squares[i].style.backgroundColor = rgb();
    }
}

function easyHard (num) {
    if (num == squares.length)  PlayTo = num/2;
    else  PlayTo = (squares.length/2) - 1;
    generate(num);
    c.textContent = PlayTo;
    for (var i = 0; i < num; i++) {
        squares[i].style.display = "block";
        squares[i].style.visibility = "visible";
        w.style.display = "none";
        l.style.display = "none";
    }
}

hard.classList.add("active");
generate(startNum);


newGame.addEventListener("click", function() {
    w.textContent = "You win!";
    if (PlayFriend == true) {
        if (won == true) {
            PlayerOneScore = 0;
            PlayerTwoScore = 0;
            document.getElementsByClassName("score")[0].textContent =  PlayerOneScore;
            document.getElementsByClassName("score")[1].textContent =  PlayerTwoScore;
            w.textContent = "You win!";
            document.getElementById("player1").classList.add("activePlayer");  
            document.getElementById("player2").classList.remove("activePlayer");
            OneActive = true;
        }
        else {
            if (OneActive == false) {
                OneActive = true;
            }
            else {
                OneActive = false;
            } 
            name1.classList.toggle("activePlayer");
            name2.classList.toggle("activePlayer");
        }
        if (won == true) won = false;
    }
    if (PlayTo == (squares.length/2)-1) easyHard(squares.length/2);
    else easyHard(squares.length);   
}
)

hard.addEventListener ("click", function () {    
    easy.classList.remove("active");
    hard.classList.add("active");
    if (PlayFriend == true) {
        PlayerOneScore = 0;
        PlayerTwoScore = 0;
        document.getElementsByClassName("score")[0].textContent =  PlayerOneScore;
        document.getElementsByClassName("score")[1].textContent =  PlayerTwoScore;
        w.textContent = "You win!";
        document.getElementById("player1").classList.add("activePlayer");  
        document.getElementById("player2").classList.remove("activePlayer");
        OneActive = true;
    }
    easyHard(squares.length);
})

easy.addEventListener("click", function() {    
    easy.classList.add("active");
    hard.classList.remove("active");
    for (var i = squares.length/2; i < squares.length; i++) {
        squares[i].style.display = "none";
    }
    if (PlayFriend == true) {
        PlayerOneScore = 0;
        PlayerTwoScore = 0;
        document.getElementsByClassName("score")[0].textContent =  PlayerOneScore;
        document.getElementsByClassName("score")[1].textContent =  PlayerTwoScore;
        w.textContent = "You win!";
        document.getElementById("player1").classList.add("activePlayer");  
        document.getElementById("player2").classList.remove("activePlayer");
        OneActive = true;
    }
    easyHard(squares.length/2);
})

icon.addEventListener ("click", function() {
    Friend.style.display = "block";
    document.getElementById("main").style.opacity = "0.4";
    PlayerOneScore = 0;
    PlayerTwoScore = 0;
})

icon2.addEventListener ("click", function() {
    w.textContent = "You win!";
    PlayFriend = false;
    MaxScore = 3;
    name1.classList.remove("display");
    name2.classList.remove("display");
    PlayerOneScore = 0;
    PlayerTwoScore = 0;
    if (PlayTo == (squares.length/2)-1) easyHard(squares.length/2);
    else easyHard(squares.length);  
})

subm.addEventListener ("click", function() {
        Friend.style.display = "none";
        document.getElementById("main").style.opacity = "1";
        document.getElementById("player1").classList.add("display");
        document.getElementById("player1").classList.add("activePlayer");  
        document.getElementById("player2").classList.add("display");
        document.getElementById("player2").classList.remove("activePlayer");
        PlayFriend = true;
        OneActive = true;        
        document.getElementsByClassName("score")[0].textContent =  PlayerOneScore;
        document.getElementsByClassName("score")[1].textContent =  PlayerTwoScore;
        if (PlayTo == (squares.length/2)-1) easyHard(squares.length/2);
        else easyHard(squares.length);
})  

for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function() {
        if (c.textContent - 1 == "0" && this.style.backgroundColor !== color) { 
            c.textContent = Number(c.textContent) - 1;  
            for (var i = 0; i < squares.length; i++) {
                if (squares[i].style.backgroundColor != color) squares[i].style.display = "none";
            }           
            l.style.display = "block";
        }
        else if (this.style.backgroundColor == color && Number(c.textContent)  > 0 && w.style.display != "block") { 
            for (var i = 0; i < squares.length; i++) {
                if (squares[i].style.backgroundColor != color) squares[i].style.display = "none";
            }             
            if (PlayFriend === true) {
                if (OneActive == true){
                    PlayerOneScore++;
                    if (PlayerOneScore == MaxScore) {
                        w.textContent = document.getElementById("name1").textContent + " wins the Game!";
                        won = true;
                    }
                    document.getElementsByClassName("score")[0].textContent =  PlayerOneScore;
                }
                else if (OneActive == false){
                    PlayerTwoScore++;
                    if (PlayerTwoScore == MaxScore) {
                        w.textContent = document.getElementById("name2").textContent + " wins the Game!";
                        won = true;
                    }
                    document.getElementsByClassName("score")[1].textContent =  PlayerTwoScore;
                }
            }
            w.style.display = "block";
        }
        else if (this.style.backgroundColor !== color && Number(c.textContent)  > 0) {            
            c.textContent = Number(c.textContent) - 1;
            this.style.visibility = "hidden";
        }      
    })
}