console.log("hello"); 

function displayTodaysDate() {
    //display date on top of the page in a chosen specific format / use of moment.js  
    currentDate.text(moment().format('MMMM Do YYYY, h:mm:ss a'));
}

// hours stored into array 
const timeArray = []; 
// loop through hours and push
for (let i=9; i < 18; i++) 
{
    timeArray.push (
        moment()
            .hour(i)
                .format('h, a')
    );
}
console.log(timeArray);