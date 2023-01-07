// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

  // TODO: Add code to display the current date in the header of the page.
  let updateTime = function (){
  document.getElementById("currentDay").innerHTML = moment().format("MMMM Do YYYY, h:mm:ss a");
};
setInterval(updateTime, 1000);

 // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. 
  $(document).ready(function () {
    let timeSlots = [9, 10, 11, 12, 13, 14, 15, 16];
    function renderTasks() {
      for (let i = 0; i<= timeSlots.length; i++) {
          $("#" + timeSlots[i]).val(localStorage.getItem(timeSlots[i]));
      }
    }
  renderTasks();

  $(".saveBtn").click(function () {
    let dataHour = $(this).attr("data-hour");
    let inputField = $("#" + dataHour).val();

    localStorage.setItem(dataHour, inputField);
    console.log(inputField);
  });
});

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  // Change color based on time 
  const rows = $(".row");
  let currentHour = parseInt(moment().hours());

  Array.from(rows).forEach((row) => {
    let rowIDString = row.id,
    rowHour;

    if (rowIDString) {
      rowHour = parseInt(rowIDString);
    }

    if (rowHour < 8) {
      rowHour += 12;
    }

    // Compares row id to current hour
    if (rowHour) {
            if (currentHour === rowHour) {
              setColor(row, "lightgreen");
            } else if (currentHour < rowHour) {
              setColor(row, "lightgrey");
            } else if (currentHour > rowHour) {
              setColor(row, "lightpink");
          }
        }
  });

  function setColor(element, color) {
    element.style.backgroundColor = color;
  }