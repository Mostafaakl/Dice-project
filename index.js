var randomNumber1 = (Math.floor(Math.random() * 6)+1);
var randomDiceimage1 = "images/dice" + randomNumber1 + ".png";
var image1 = document.querySelectorAll("img")[0]
image1.setAttribute("src",randomDiceimage1);


var randomNumber2 = (Math.floor(Math.random() * 6)+1);
var randomDiceimage2 = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1]
image2.setAttribute("src" , randomDiceimage2)

    if (randomNumber1> randomNumber2){
        document.querySelector("h1").innerHTML= "Player 1 Won";
    }
    else if (randomNumber1< randomNumber2) {
        document.querySelector("h1").innerHTML= "Player 2 Won";

    }
    else{
        document.querySelector("h1").innerHTML= "Draw";

    }

