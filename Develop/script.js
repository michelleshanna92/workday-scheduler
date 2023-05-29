// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var currentDayEl = $('#currentDay');


function currentDay () {
  var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss');
  currentDayEl.text(rightNow);
};



function saveTextareaContent() {
  var textareaElement = document.getElementsByClassName('description')[0];

  var textareaContent = textareaElement.value;

  if (textareaContent !== '') {
    localStorage.setItem('textareaContent', textareaContent);
    alert('Textarea content saved!');
  } else {
    alert('Please enter some content!');
  }
}

document.addEventListener('DOMContentLoaded', function() {
  var saveButtonEl = document.getElementsByClassName("btn");
  for (var i = 0; i < saveButtonEl.length; i++) {
    saveButtonEl[i].addEventListener('click', saveContent);
  }
  var saveContent = function(event){
    var textElement = event.target.textContent
    console.log(textElement)
}
  var textareaElement = document.getElementsByClassName('description');
  
  var savedTextareaContent = localStorage.getItem('textareaContent');

  if (savedTextareaContent) {
    textareaElement.value = savedTextareaContent;
}

});





//$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
// saveButtonEl.forEach(function(button) {
//   button.addEventlistener('click', function () {
//     var timeBlock = button.closest('.time-block');
// });
// });

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.





currentDay ();
setInterval(currentDay, 1000);