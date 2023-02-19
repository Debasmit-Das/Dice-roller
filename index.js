console.log("the .js file was imported succesfully");
let rand1 = Math.ceil((Math.random()*6));
let rand2 = Math.ceil((Math.random()*6));

//console.log(srcattribute1,srcattribute2);
document.querySelector(".img1").setAttribute ("src","images/dice"+rand1+".png") ;
document.querySelector(".img2").setAttribute ("src","images/dice"+rand2+".png") ;

if(rand1 >rand2)
{
    document.querySelector(".dice1").innerHTML = "🚩Player 1 won";
    document.querySelector(".dice2").innerHTML = "Player 2 lost";

}
else if(rand2>rand1)
{
    document.querySelector(".dice1").innerHTML = "player 1 lost";
    document.querySelector(".dice2").innerHTML = "🚩Player 2 won";
}
else
{
    document.querySelector(".dice1").innerHTML = "Tie";
    document.querySelector(".dice2").innerHTML = "Tie";
}

