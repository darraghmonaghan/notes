
console.log("Sanity Check: JS is working!");

	var car1 = 'http://freepngimages.com/wp-content/uploads/2014/10/police-car1.png';
	var car2 = 'http://www.mini.co.id/mini2010_qa/_common/_shared_files/teaser_pool/new_main_stage/cooper_s.png';
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

	function calculateWinner() {
		if (currentClickCar1 >= clicksToWin) {
	   		car1Score ++;
	    	$('td#car1Score').text(car1Score);
	    	copsWin();
	    	gameReset();
		} else if (currentClickCar2 >= clicksToWin) {
	  		car2Score ++;
			$('td#car2Score').text(car2Score);
			robbersWin();
			gameReset();
		}
	}

	function copsWin() {
		$('#copsWin').toggle(1000);
		$('#copsWin').toggle(1000);

	}

	function robbersWin() {
		$('#robbersWin').toggle(1000);
		$('#robbersWin').toggle(1000);
	}


		$(document).keydown(function(e) {

		    if(e.keyCode == 65){
		        console.log('A was pressed') ;
				$('#car1').remove() ;
				currentClickCar1++;
				$('tr.1').append("<td class='newTD'><img id='car1' src=" + car1 + "></td>");       // this works.......
				calculateWinner();
				// showWinner();

		    } else if (e.keyCode == 76) {
		        console.log('L was pressed');
		        $('#car2').remove() ;
		        currentClickCar2++;
		        $('tr.2').append("<td class='newTD'><img id='car2' src=" + car2 + "></td>");       // this works.......  
			   	calculateWinner();
			   	// showWinner();
		    }
		});
});










