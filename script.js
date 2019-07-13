var txt = document.getElementById("RGB");
var first = document.getElementsByClassName("square")[0];
var squares = document.getElementsByClassName("square");
var playground = document.getElementById("playground");
var l = document.getElementById("lose");
var w = document.getElementById("win");
var newGame = document.getElementById("new");
var c = document.getElementById("chances");
var easy = document.getElementById("easy");
var NewHard = document.querySelector("#new", "#hard");
var PlayTo = 3;
var startNum = 6;
var color;
var icon = document.getElementsByClassName("icon")[0];
var Friend = document.getElementById("addFriend");
var subm = document.getElementById("ok");


var PlayerOne = document.getElementsByClassName("pl")[0];
var PlayerTwo = document.getElementsByClassName("pl")[1];

PlayerOne.addEventListener("input", function() { 
    document.getElementById("name1").textContent = this.value;
})

PlayerTwo.addEventListener("input", function() {
    document.getElementById("name2").textContent = this.value;
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
    if (PlayTo == (squares.length/2)-1) easyHard(squares.length/2);
    else easyHard(squares.length);
}
)

hard.addEventListener ("click", function () {    
    easy.classList.toggle("active");
    hard.classList.toggle("active");
    easyHard(squares.length);
})

easy.addEventListener("click", function() {    
    easy.classList.toggle("active");
    hard.classList.toggle("active");
    for (var i = squares.length/2; i < squares.length; i++) {
        squares[i].style.display = "none";
    }
    easyHard(squares.length/2);
})

icon.addEventListener ("click", function() {
    Friend.style.display = "block";
    document.getElementById("main").style.opacity = "0.4";
})

subm.addEventListener ("click", function() {
        Friend.style.display = "none";
        document.getElementById("main").style.opacity = "1";
        document.getElementById("player1").classList.add("display");
        document.getElementById("player2").classList.add("display");
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
        else if (this.style.backgroundColor == color && Number(c.textContent)  > 0) { 
            for (var i = 0; i < squares.length; i++) {
                if (squares[i].style.backgroundColor != color) squares[i].style.display = "none";
            }             
            w.style.display = "block";
        }
        else if (this.style.backgroundColor !== color && Number(c.textContent)  > 0) {            
            c.textContent = Number(c.textContent) - 1;
            this.style.visibility = "hidden";
        }
    })
}





