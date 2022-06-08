var rowTime = [
    {1: document.getElementById("row1").innerHTML},
    {2: document.getElementById("row2").innerHTML},
    {3: document.getElementById("row3").innerHTML},
    {4: document.getElementById("row4").innerHTML},
    {5: document.getElementById("row5").innerHTML},
    {6: document.getElementById("row6").innerHTML},
    {7: document.getElementById("row7").innerHTML},
    {8: document.getElementById("row8").innerHTML},
    {9: document.getElementById("row9").innerHTML}
];

var row1Val = document.getElementById("row1Holder").value;
var row2Val = document.getElementById("row2Holder").value;
var row3Val = document.getElementById("row3Holder").value;
var row4Val = document.getElementById("row4Holder").value;
var row5Val = document.getElementById("row5Holder").value;
var row6Val = document.getElementById("row6Holder").value;
var row7Val = document.getElementById("row7Holder").value;
var row8Val = document.getElementById("row8Holder").value;
var row9Val = document.getElementById("row9Holder").value;

var rightNow = moment().format("hh:mm");
console.log(rightNow);

// connect to current date with moment.js and have it reload the current date every hour
function getDate(){
  const currentDate = moment().format('MM/DD/YYYY');
  document.getElementById("currentDay").textContent = "Today is " + currentDate;
  setInterval(getDate, (60 * 1000) * 60);
}

// save the tasks to localStorage
// function saveTasks(){
//     localStorage.setItem()
// }



// get the date as soon as the page loads
getDate();

