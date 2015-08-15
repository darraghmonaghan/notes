console.log("Sanity Check: JS is working!");

	var car1 = 'http://www.weprintfridgemagnets.co.uk/wp-content/uploads/2014/01/police-car.png';
	var car2 = 'http://www.ban-boredom.com/mini-car.gif';
	var nextCell = $(this).closest('td').next();
//	var Tds = document.getElementById("tdCount");
//	var	raceDuration = Tds.length;
	var currentClickCar1 = 0;
	var currentClickCar2 = 0;




$(document).ready(function() {

	$(document).keydown(function(e) {
	    if(e.keyCode == 65){
	        console.log('A was pressed') ;
			$('#car1').remove() ;
			currentClickCar1++;
			        // $(this).parent().next().html('<p>hello</p>') ;
			       	// $(this).next().html('<p>hello</p>') ;
			        // $(nextCell).html('<p>hello</p>');
			        // $('td').html('<p>hello</p>');
					//$('#test').html("<img id='car1' src=" + "'http://www.weprintfridgemagnets.co.uk/wp-content/uploads/2014/01/police-car.png'" + ">");
					// $('#test').prepend('<img id="car1" src="http://www.weprintfridgemagnets.co.uk/wp-content/uploads/2014/01/police-car.png">');
			$('tr.class1').append("<td class='tdCount'><img id='car1' src=" + car1 + "></td>"); 

	    } else if (e.keyCode == 76) {
	        console.log('L was pressed');
	        $('#car2').remove() ;
	        currentClickCar2++;   
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







