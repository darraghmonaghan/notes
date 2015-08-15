console.log("Sanity Check: JS is working!");

	var car1 = 'http://www.weprintfridgemagnets.co.uk/wp-content/uploads/2014/01/police-car.png';
	var car2 = 'http://www.ban-boredom.com/mini-car.gif';
	var nextCell = $(this).closest('td').next();

$(document).ready(function() {

// var a = jQuery.Event("keypress");

// var e.which = 65;
// var e.which = 65;


	$(document).keydown(function(e) {
	    if(e.keyCode == 65){
	        console.log('A was pressed');
	        $('#car1').remove() ;
			// $('#car1').append(nextCell);
			$(nextCell).attr("<img class='car' id='car1' src=" + 'http://www.weprintfridgemagnets.co.uk/wp-content/uploads/2014/01/police-car.png' + ">");
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







