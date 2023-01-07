// Add code to display the current date in the header of the page.
  let updateTime = function (){
  document.getElementById("currentDay").innerHTML = moment().format("MMMM Do YYYY, h:mm:ss a");
};
setInterval(updateTime, 1000);

 // save button 
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