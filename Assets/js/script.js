let currentDate = setInterval(showDate, 1000),
    currentTime = setInterval(showTime, 1000);
    // currentHour = setInterval(updateHour, 1000);

var currentHour = dayjs().$d.getHours(),
    blocks = [
      $("<div>").attr({"id": "9am", "class": "row time-block", "hour": 9}),
      $("<div>").attr({"id": "10am", "class": "row time-block", "hour": 10}),
      $("<div>").attr({"id": "11am", "class": "row time-block", "hour": 11}),
      $("<div>").attr({"id": "12pm", "class": "row time-block", "hour": 12}),
      $("<div>").attr({"id": "1pm", "class": "row time-block", "hour": 13}),
      $("<div>").attr({"id": "2pm", "class": "row time-block", "hour": 14}),
      $("<div>").attr({"id": "3pm", "class": "row time-block", "hour": 15}),
      $("<div>").attr({"id": "4pm", "class": "row time-block", "hour": 16}),
      $("<div>").attr({"id": "5pm", "class": "row time-block", "hour": 17})
    ],
    timestamps = [
      $("<div>").addClass("col-2 col-md-1 hour text-center py-3").text("9AM"),
      $("<div>").addClass("col-2 col-md-1 hour text-center py-3").text("10AM"),
      $("<div>").addClass("col-2 col-md-1 hour text-center py-3").text("11AM"),
      $("<div>").addClass("col-2 col-md-1 hour text-center py-3").text("12PM"),
      $("<div>").addClass("col-2 col-md-1 hour text-center py-3").text("1PM"),
      $("<div>").addClass("col-2 col-md-1 hour text-center py-3").text("2PM"),
      $("<div>").addClass("col-2 col-md-1 hour text-center py-3").text("3PM"),
      $("<div>").addClass("col-2 col-md-1 hour text-center py-3").text("4PM"),
      $("<div>").addClass("col-2 col-md-1 hour text-center py-3").text("5PM")
    ],
    textboxes = [
      $("<textarea>").attr({"class": "col-8 col-md-10 description", "rows": "3"}),
      $("<textarea>").attr({"class": "col-8 col-md-10 description", "rows": "3"}),
      $("<textarea>").attr({"class": "col-8 col-md-10 description", "rows": "3"}),
      $("<textarea>").attr({"class": "col-8 col-md-10 description", "rows": "3"}),
      $("<textarea>").attr({"class": "col-8 col-md-10 description", "rows": "3"}),
      $("<textarea>").attr({"class": "col-8 col-md-10 description", "rows": "3"}),
      $("<textarea>").attr({"class": "col-8 col-md-10 description", "rows": "3"}),
      $("<textarea>").attr({"class": "col-8 col-md-10 description", "rows": "3"}),
      $("<textarea>").attr({"class": "col-8 col-md-10 description", "rows": "3"})
    ],
    savebuttons = [
      $("<button>").attr({"id": "save", "class": "btn saveBtn col-2 col-md-1", "aria-label": "save"}).append($("<i>").attr({"class": "fas fa-save", "aria-hidden": "true"})),
      $("<button>").attr({"id": "save", "class": "btn saveBtn col-2 col-md-1", "aria-label": "save"}).append($("<i>").attr({"class": "fas fa-save", "aria-hidden": "true"})),
      $("<button>").attr({"id": "save", "class": "btn saveBtn col-2 col-md-1", "aria-label": "save"}).append($("<i>").attr({"class": "fas fa-save", "aria-hidden": "true"})),
      $("<button>").attr({"id": "save", "class": "btn saveBtn col-2 col-md-1", "aria-label": "save"}).append($("<i>").attr({"class": "fas fa-save", "aria-hidden": "true"})),
      $("<button>").attr({"id": "save", "class": "btn saveBtn col-2 col-md-1", "aria-label": "save"}).append($("<i>").attr({"class": "fas fa-save", "aria-hidden": "true"})),
      $("<button>").attr({"id": "save", "class": "btn saveBtn col-2 col-md-1", "aria-label": "save"}).append($("<i>").attr({"class": "fas fa-save", "aria-hidden": "true"})),
      $("<button>").attr({"id": "save", "class": "btn saveBtn col-2 col-md-1", "aria-label": "save"}).append($("<i>").attr({"class": "fas fa-save", "aria-hidden": "true"})),
      $("<button>").attr({"id": "save", "class": "btn saveBtn col-2 col-md-1", "aria-label": "save"}).append($("<i>").attr({"class": "fas fa-save", "aria-hidden": "true"})),
      $("<button>").attr({"id": "save", "class": "btn saveBtn col-2 col-md-1", "aria-label": "save"}).append($("<i>").attr({"class": "fas fa-save", "aria-hidden": "true"}))
    ];

    // date = dayjs().format('dddd, MMMM D, YYYY'),
    // time = dayjs().format('h:mm:ss'),
    // now = dayjs();
    
function showDate() {
  let date = dayjs().format('dddd, MMMM D, YYYY');
  $("#headerDate").text(date);
}
        
function showTime() {
  let time = dayjs().format("h:mm A");
  $("#headerTime").text(time);
}

// function updateHour() {
//   let hour = dayjs().$d.getHours();
//   return hour;
// }

function addBlocks() {
  blocks.forEach((block) => {
    $("#container").append(block);
    colorBlocks(block);
  });
}

function fillBlocks() {
  for (let x = 0; x < blocks.length; x++) {
    let block = blocks[x];
    let timestamp = timestamps[x];
    let textbox = textboxes[x]
    let save = savebuttons[x]
    $(block).append(timestamp, textbox, save)
  };
}

function colorBlocks(block) {
  let blockHour = Number($(block).attr("hour"));
  
  if (blockHour < currentHour) {
    $(block).addClass("past");
  } else if (blockHour === currentHour) {
    $(block).addClass("present");
  } else {
    $(block).addClass("future");
  }
}

function clickSave() {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
}

function displaySaved() {
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

}

addBlocks();
fillBlocks();
$("#save").on("click", clickSave());
displaySaved();

console.log(currentHour);