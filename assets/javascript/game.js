var computerNumber = 0;
var scoreTotal = 0;
var winTotal = 0;
var lossTotal = 0;
var storeNumber1 = Math.floor(Math.random() * 12) + 1;
var storeNumber2 = Math.floor(Math.random() * 12) + 1;
var storeNumber3 = Math.floor(Math.random() * 12) + 1;
var storeNumber4 = Math.floor(Math.random() * 12) + 1;


$("#redButton").click(function() {
  scoreTotal=scoreTotal+storeNumber1; 		
  $("#scoreTal").html(scoreTotal);
  inspectScore();
});


$("#blueButton").click(function() {
  scoreTotal=scoreTotal+storeNumber2;		
  $("#scoreTal").html(scoreTotal);
  inspectScore();
});


$("#yellowButton").click(function() {
	scoreTotal=scoreTotal+storeNumber3;		
  $("#scoreTal").html(scoreTotal);
  inspectScore();
});


$("#greenButton").click(function() {
	scoreTotal=scoreTotal+storeNumber4;
  $("#scoreTal").html(scoreTotal);
  inspectScore();
});

newGame();

function newGame() {
scoreTotal = 0;	
computerNumber =  Math.floor(Math.random() * (102) + 19);
storeNumber1 = Math.floor(Math.random() * 12) + 1;
storeNumber2 = Math.floor(Math.random() * 12) + 1;
storeNumber3 = Math.floor(Math.random() * 12) + 1;
storeNumber4 = Math.floor(Math.random() * 12) + 1;
$("#compTal").html(computerNumber);
$("#scoreTal").html(scoreTotal);
};


function inspectScore() {
	if (scoreTotal==computerNumber){
		winTotal++;
		$("#winTotal").html(winTotal);
		$("#message").html("You won!");
		newGame();
	}else if(scoreTotal>computerNumber){
		lossTotal++;
		$("#lossTotal").html(lossTotal);
		$("#message").html("You lost");
		newGame();
	}
}; 


