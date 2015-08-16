
console.log("Sanity Check: JS is working!");

	var car1 = 'http://www.weprintfridgemagnets.co.uk/wp-content/uploads/2014/01/police-car.png';
	var car2 = 'http://www.ban-boredom.com/mini-car.gif';
	var nextCell = $(this).closest('td').next();
	var currentClickCar1 = 0;
	var currentClickCar2 = 0;
	var car1Score = 0;
	var car2Score = 0;
	var clicksToWin = 10;
	var playTo = 3;

$(document).ready(function() {

	function gameReset () {
		$('td.newTD').remove();
		$('tr.1').append("<td class='newTD'><img id='car1' src=" + car1 + "></td>");
		$('tr.2').append("<td class='newTD'><img id='car2' src=" + car2 + "></td>");
		currentClickCar1 = 0;
		currentClickCar2 = 0;
	}

	function winner() {
		if (currentClickCar1 >= clicksToWin) {
	   		car1Score ++;
	    	$('td#car1Score').text(car1Score);
	    	// function for showing winner
	    	gameReset();

		} else if (currentClickCar2 >= clicksToWin) {
	  		car2Score ++;
			$('td#car2Score').text(car2Score);
			
			// function for showing winner
			gameReset();
		}
	}

		$(document).keydown(function(e) {
		    if(e.keyCode == 65){
		        console.log('A was pressed') ;
				$('#car1').remove() ;
				currentClickCar1++;
				$('tr.1').append("<td class='newTD'><img id='car1' src=" + car1 + "></td>");       // this works.......
				winner();

		    } else if (e.keyCode == 76) {
		        console.log('L was pressed');
		        $('#car2').remove() ;
		        currentClickCar2++;
		        $('tr.2').append("<td class='newTD'><img id='car2' src=" + car2 + "></td>");       // this works.......  
			   	winner();
		    }
		});
});








// 	$(document).on("keypress", function(e) {
//   		if(e.keyCode == 65){
// 	        console.log('A was pressed');
// 	        $('img#car1.car').empty() ;
// 			// $('#car1').append(nextCell);
// 			$(nextCell).attr("<img class='car' id='car1' src=" + 'http://www.weprintfridgemagnets.co.uk/wp-content/uploads/2014/01/police-car.png' + ">");
//  	};
// });


// 	$(document).keydown(function(e) {
// 	    if(e.keyCode == 65){
// 	        console.log('A was pressed');
// 	        $('img#car1.car').empty() ;
// 			// $('#car1').append(nextCell);
// 			$(nextCell).attr("<img class='car' id='car1' src=" + 'http://www.weprintfridgemagnets.co.uk/wp-content/uploads/2014/01/police-car.png' + ">");
// 	    }
// 	});
// });





// $('img#car1.car').keypress(function(e) {
// 		console.log("tested OK step1");
// 		if(e.which === 65) {
// 			console.log('tested OK step2');
// 			$('#car1').empty() ;
// 			$('#car1').append(nextCell);
// 			//$(nextCell).attr("<img class='car' id='car1' src=" + 'http://www.weprintfridgemagnets.co.uk/wp-content/uploads/2014/01/police-car.png' + ">");
// 		}
// 	});


	
// WORKING CODE - acknowledges key pressed

// 	$(document).keydown(function(e) {
// 	    if(e.keyCode == 65){
// 	        console.log('A was pressed');
// 	        // $('img#car1.car').empty() ;
// 			// $('#car1').append(nextCell);
// 			$(nextCell).attr("<img class='car' id='car1' src=" + 'http://www.weprintfridgemagnets.co.uk/wp-content/uploads/2014/01/police-car.png' + ">");
// 	    }
// 	});
// });





	

//		$('') // need to add a loop perhaps? to cycle through the TD's????. Then not sure whether need to use .HTML() or .ATTR()


//	$







