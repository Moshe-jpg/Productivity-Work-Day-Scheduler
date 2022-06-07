// connect to current date with moment.js and have it reload the current date every hour


function getDate(){
  const currentDate = moment().format('MM/DD/YYYY');
  document.getElementById("currentDay").textContent = "Today is " + currentDate;
}

setInterval(getDate, (60 * 1000) * 60);




// get the date as soon as the page loads
getDate();
