

function rollDieOne(){
	
	var results = getRndInteger(1,6);
		document.getElementById("demo1").innerHTML = results;
		
	
}
	
function rollDieTwo(){
	
	var results = getRndInteger(1,6);
		document.getElementById("demo2").innerHTML = results;	

}

	/* function to get the random number */
function getRndInteger(min, max) {
			var randomNumber =  Math.floor(Math.random() * (max - min + 1)) + min;
			console.log(randomNumber); /*prints result to console to test if working*/
			
	/* switch statement that uses the random number generated above to determine which image to display */
			var x;	
			switch (randomNumber){

						case 1:
						x = "<img src = './assets/d6_1.jpg' />";
						break;

						case 2:
						x = "<img src = './assets/d6_2.jpg' />";
						break;

						case 3:
						x = "<img src = './assets/d6_3.jpg'>";
						break;

						case 4:
						x = "<img src = './assets/d6_4.jpg'>";
						break;

						case 5:
						x = "<img src = './assets/d6_5.jpg'>";
						break;

						case 6:
						x = "<img src = './assets/d6_6.jpg'>";
						break;
					}
				return x;
			}
	
	

		
	

	
