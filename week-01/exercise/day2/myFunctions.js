

// /* Display all numbers from num to 0 on the screen */
// function countDown(num){
//     /* Base Case */
//     if(num < 0 ){
//         return;
//     } else {

//         /* Action Steps */
//         console.log(num);
//         num = num - 1;

//         /* Recursive Steps */
//         countDown(num);  

//         console.log(num);
//         num = num + 1;   
//     }
// }

// countDown(10);
// => 10 9 8 7 6 5 4 3 2 1 0


function helloEveryone() {
    console.log('hello, Everyone');
}

helloEveryone();

/*
Temperature Calculator - F & C
*/

var arguments = process.argv.slice(2);

console.log(arguments);

if (arguments > 60 && arguments < 80) {
    console.log('Enjoy the day! Lets have a picnic');
} else if (arguments > 80) {
    console.log("Too darn hot! I'm shvitzing over here.");
} else {
    console.log("Brrrr.....It's too darn cold");
}


