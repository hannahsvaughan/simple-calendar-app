// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// function for updating the time on the webpage
// function updateDate () {
//   let today = moment();

//   $("#currentDay").text(today.format("MMMM Do YYYY, h:mm:ss a"));

//   // colors the past, present, and future time blocks
//   let now = moment().format("kk");
//   for (let i=0; i < scheduleArray.length; i++) {
//     scheduleArray[i].removeClass("future past present");

//     if (now > scheduleArray[i].data("hour")) {
//       scheduleArray[i].addClass("past");

//     } else if (now === scheduleArray[i].attr("data-hour")) {
//       scheduleArray[i].addClass("present");
//     } else {
//       scheduleArray[i].addClass("future");
//     }
//   }
// }

// defined alements & array
let saveBttn = $(".saveBtn");
let containerEl = $(".container-lg");
let schedule9am = $("#9AM");
let schedule10am = $("#10AM");
let schedule11am = $("#11AM");
let schedule12pm = $("#12PM");
let schedule1pm = $("#1PM");
let schedule2pm = $("#2PM");
let schedule3pm = $("#3PM");
let schedule4pm = $("#4PM");
let schedule5pm = $("#5PM");

let scheduleArray = [
  schedule9am,
  schedule10am,
  schedule11am,
  schedule12pm,
  schedule1pm,
  schedule2pm,
  schedule3pm,
  schedule4pm,
  schedule5pm,
];

updateDate();
setInterval(updateDate, 1000);
// render schedule saved in local storage



// function for clicks 


$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?


  //
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


});





// for(let i=9; i<18; i++){
//   document.getElementsByTagName("main")[0].innerHTML+= 
//   ` <div id="hour-${i}" class="row time-block present">
//   <div class="col-2 col-md-1 hour text-center py-3">${i}:00</div>
//   <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
//   <button class="btn saveBtn col-2 col-md-1" aria-label="save">
//   <i class="fas fa-save" aria-hidden="true"></i>
//   </button>
//   </div>`
  
// }
// var buttonsArr = document.getElementsByTagName("button")
// console.log(buttonsArr)
// var textAreas = document.getElementsByTagName("textarea")
// for(let i=0; i<buttonsArr.length; i++){
//   buttonsArr[i].addEventListener("click", save)
//   buttonsArr[i].setAttribute("data-hour", i+9)
//   buttonsArr[i].innerHTML += "Hello"

// }
// function loadStorage(){
//   var storage = JSON.parse(localStorage.getItem("tasks")) 
//   if(storage === null){
//       storage = [null,null,null,null,null,null,null,null,null]
//       localStorage.setItem("tasks", JSON.stringify(storage))
//       return
//   }
//   //actually load
// }

// function save(event){
//   event.preventDefault()
//   console.log(this)
//   console.log(event.target.getAttribute("data-hour"))
//   console.log(event.target.previousElementSibling.value)
  
// }