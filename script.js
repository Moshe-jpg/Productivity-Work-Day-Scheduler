var rightNow = moment().format("hh:mm");

// update the time block colours based on the time

function updateHour(){
    var currentHour = moment().hours();
    $(".time-block").each(function (){
        var blockHour = parseInt($(this).attr("id"));
        if (blockHour < currentHour){
            $(this).parent().addClass("bg-danger");
        }

            else if (blockHour === currentHour){
                $(this).parent().addClass("bg-warning");
            }
                else {
                    $(this).parent().addClass("bg-success");
                }
    })
}


// connect to current date with moment.js and have it reload the current date every hour
function getDate(){
  const currentDate = moment().format('MM/DD/YYYY');
  document.getElementById("currentDay").textContent = "Today is " + currentDate;
  setInterval(getDate, (60 * 1000) * 60);
}

// save the tasks to localStorage
$(".submit-btn").on("click", function (){
    var time = $(this).parent().prev().prev().attr("id");
    var value = $(this).parent().prev(".task").val();
    localStorage.setItem(time, value);
})

// get the values of all the items from localStorage
$("#9").next().val(localStorage.getItem("9"));
$("#10").next().val(localStorage.getItem("10"));
$("#11").next().val(localStorage.getItem("11"));
$("#12").next().val(localStorage.getItem("12"));
$("#13").next().val(localStorage.getItem("13"));
$("#14").next().val(localStorage.getItem("14"));
$("#15").next().val(localStorage.getItem("15"));
$("#16").next().val(localStorage.getItem("16"));
$("#17").next().val(localStorage.getItem("17"));


// remove the h1 and paragraph after 3.5 seconds in order to take advantage of screen space
$( document ).ready(function() {
    setTimeout(function(){
        $(".header-h1").remove();
        $(".header-p").remove();
    }, 3500)
});

// get the date as soon as the page loads
getDate();

// update the colored blocks every 30 seconds
setInterval(updateHour, 30000);

// run the time block colour function
updateHour();
