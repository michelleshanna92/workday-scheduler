// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var currentDayEl = $('#currentDay');


function currentDay () {
  var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss');
  currentDayEl.text(rightNow);
};


$(document).ready(function() {
  $(".saveBtn").on("click", function() {
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // Save the data to local storage
    localStorage.setItem(time, value);

    console.log(value);
    console.log(`value is ${value} time is: ${time}`);
  });

  // Retrieve and populate saved data from local storage
  $(".time-block").each(function() {
    var time = $(this).attr("id");
    var savedValue = localStorage.getItem(time);

    if (savedValue) {
      $(this).find(".description").val(savedValue);
    }
  });
});


// Get current hour
var currentHour = new Date().getHours();

// Loop through each time block
for (var i = 9; i <= 20; i++) {
  var timeBlock = document.getElementById("hour-" + i);

  // Compare current hour with the time block hour
  if (i < currentHour) {
    timeBlock.classList.remove("present", "future");
    timeBlock.classList.add("past");
  } else if (i === currentHour) {
    timeBlock.classList.remove("past", "future");
    timeBlock.classList.add("present");
  } else {
    timeBlock.classList.remove("past", "present");
    timeBlock.classList.add("future");
  }
}



currentDay ();
setInterval(currentDay, 1000);