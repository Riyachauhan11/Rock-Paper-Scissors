

var enemyMove;

var allMoves= document.querySelectorAll("img");

for (var i=0; i<=2;i++){
    allMoves[i].addEventListener("click",handleClick);
    allMoves[i].addEventListener("mouseover",hover);
    allMoves[i].addEventListener("mouseout",unhover);
}

function handleClick(){
    var yourMove = this.classList.remove("pressed");
    yourMove = this.className;
    animation(yourMove);
}

function hover(){
    var hoveredImg = this.className;
    shadedImg = document.querySelector("."+hoveredImg)
    shadedImg.classList.add("pressed");
}

function unhover(){
    shadedImg.classList.remove("pressed");
}

function animation(yourMove){
    var activeImg = document.querySelector("."+yourMove)
    activeImg.classList.add("pressed");

    setTimeout(function(){
        activeImg.classList.remove("pressed");
    }, 100);

    for (move of allMoves){
        if (!(move.classList.contains(yourMove))){
            move.remove();
        }
    }
    
    for (var i=0; i<=2; i++){
        document.querySelectorAll(".move")[i].style.marginRight = "0%";
    }

    for (var i=0; i<=2;i++){
        allMoves[i].removeEventListener("click",handleClick);
        allMoves[i].removeEventListener("mouseover",hover);
        allMoves[i].removeEventListener("mouseout",unhover);
    }
    enemyMove(yourMove);
    
}

function enemyMove(PlayerMove){

    enemyMove = Math.random();
    enemyMove = Math.floor(enemyMove*3) + 1;
    var image_source1="./images/move" + enemyMove + ".png";


    document.querySelector("." + PlayerMove).setAttribute("src", image_source1);
    document.querySelector("h2").innerHTML = "Enemy Move"

    if (enemyMove == 1){
        decidingWinner(PlayerMove,"paper");
    }
    else if (enemyMove == 2){
        decidingWinner(PlayerMove,"rock");
    }
    else{
        decidingWinner(PlayerMove,"scissor");
    }

}

function decidingWinner(PM,EM){
    if (EM=="paper" && PM=="rock"){
        document.querySelector("h1").innerHTML = "🚩Enemy wins!";
    }
    else if (EM=="paper" && PM=="scissor"){
        document.querySelector("h1").innerHTML = "🚩You win!";
    }
    else if (EM=="rock" && PM=="paper"){
        document.querySelector("h1").innerHTML = "🚩You win!";
    }
    else if (EM=="rock" && PM=="scissor"){
        document.querySelector("h1").innerHTML = "🚩Enemy wins!";
    }
    else if (EM=="scissor" && PM=="rock"){
        document.querySelector("h1").innerHTML = "🚩You win!";
    }
    else if (EM=="scissor" && PM=="paper"){
        document.querySelector("h1").innerHTML = "🚩Enemy wins!";
    }
    else{
        document.querySelector("h1").innerHTML = "Draw!";
    }

    if (document.querySelector("h1").innerHTML == "🚩Enemy wins!"){
        var lose = new Audio("./sounds/lose.mp3");
        lose.play();
    }
    else if (document.querySelector("h1").innerHTML == "🚩You win!"){
        var win = new Audio("./sounds/win.mp3");
        win.play();
    }
}



