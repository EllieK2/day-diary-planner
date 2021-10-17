 
const time = $(this).attr('data-time'); 
const hour = moment().hour();


// set up date and time 
$('#currentDay').text(moment());

//update seconds
setInterval(displayTodaysDate, 1000);

// update date on page every second 
currentDate = $('#currentDay');
displayTodaysDate();

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


//copied from the google to add some background colours  

setInterval(
    function () {
      var randomColor = Math.floor(Math.random()*16777215).toString(16);
      document.body.style.backgroundColor = "#"+randomColor;
    },1000);


