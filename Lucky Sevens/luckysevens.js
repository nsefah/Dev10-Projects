
function rollDice(){
//rolls 2 dice, adds result
    a = Math.floor(Math.random() * 6) + 1;
    b = Math.floor(Math.random() * 6) + 1;
    dicetotal = a+b;
    return dicetotal
}

function luckysevens(){

var startBet = document.getElementById("startBet").value;

if(startBet==0){
    alert("Error! Bet cannot be zero!");
}
//fields 
var money = 0;
var dice = 0;
var rollsTotal = 0;
var failedRolls = 0; 
    
//set money vars to starting bet 
var money = startBet;
var moneyPot = [startBet];

//Game macros
var win = 4;
var loss = 1;

//max money held at once 
var maxHeld = 0;

do{
		// rollDice call
		rollsTotal++;
		dice = rollDice();

			//win case
			if (dice == 7){ //if dice equals seven
			money = money+win; //add 4 to pot
			var last_element = moneyPot[moneyPot.length -1]; //get value of final element of the moneyPot array, use to show the current money held by player
			var newCount = last_element + win; //adds $4 to roll wins
			moneyPot.push(newCount);

			//lose case 
			}else {
			money--;
			failedRolls++;
			var last_element = moneyPot[moneyPot.length -1];
			var newCount = last_element - loss;
			moneyPot.push(newCount);
			rollsTotal = rollsTotal++;
			}

}while(money>0); //while valid
	var maxPot = 0;

	maxPot = Math.max.apply(Math, moneyPot); //gets max value of pot array 
	numRolls = moneyPot.indexOf(maxPot); //number of rolls is equal to the idx of maximum value in the pot array 
    
	if(numRolls<1){
		numRolls = 0;
}
    
    //change button
    document.getElementById("pbutton").innerHTML="Play Again";
    
    //table generation
	document.getElementById("endTable").innerHTML=(
        "<br><br><table style=\"width: 100% height: 100%;\"><th colspan=\"2\"; class=\"th1\">Results</th><tr><th class=\"th2\">Starting Bet:</th><th class=\"th2\">$" + startBet + ".00</th></tr><tr><td>Total Rolls Before Going Broke:</td><td>"+ rollsTotal +"</td></tr><tr><td>Highest Amount Won:</td><td>"+maxPot+"</td></tr><tr><td>Roll Count at Highest Amount Won:</td><td>"+ numRolls + "</td></tr></table>"
    );
	
}