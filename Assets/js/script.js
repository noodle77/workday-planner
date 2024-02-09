let currentDate = setInterval(showDate, 1000),
    currentTime = setInterval(showTime, 1000);

var currentHour = dayjs().$d.getHours(),
    blocks = [
      $("<div>").attr({"class": "row time-block", "hour": 9}),
      $("<div>").attr({"class": "row time-block", "hour": 10}),
      $("<div>").attr({"class": "row time-block", "hour": 11}),
      $("<div>").attr({"class": "row time-block", "hour": 12}),
      $("<div>").attr({"class": "row time-block", "hour": 13}),
      $("<div>").attr({"class": "row time-block", "hour": 14}),
      $("<div>").attr({"class": "row time-block", "hour": 15}),
      $("<div>").attr({"class": "row time-block", "hour": 16}),
      $("<div>").attr({"class": "row time-block", "hour": 17})
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
      $("<textarea>").attr({"id": "9am", "class": "col-8 col-md-10 description", "rows": "3"}),
      $("<textarea>").attr({"id": "10am", "class": "col-8 col-md-10 description", "rows": "3"}),
      $("<textarea>").attr({"id": "11am", "class": "col-8 col-md-10 description", "rows": "3"}),
      $("<textarea>").attr({"id": "12pm", "class": "col-8 col-md-10 description", "rows": "3"}),
      $("<textarea>").attr({"id": "1pm", "class": "col-8 col-md-10 description", "rows": "3"}),
      $("<textarea>").attr({"id": "2pm", "class": "col-8 col-md-10 description", "rows": "3"}),
      $("<textarea>").attr({"id": "3pm", "class": "col-8 col-md-10 description", "rows": "3"}),
      $("<textarea>").attr({"id": "4pm", "class": "col-8 col-md-10 description", "rows": "3"}),
      $("<textarea>").attr({"id": "5pm", "class": "col-8 col-md-10 description", "rows": "3"})
    ],
    savebuttons = [
      $("<button>").attr({"id": "9am", "class": "btn saveBtn col-2 col-md-1", "aria-label": "save"}).append($("<i>").attr({"class": "fas fa-save", "aria-hidden": "true"})),
      $("<button>").attr({"id": "10am", "class": "btn saveBtn col-2 col-md-1", "aria-label": "save"}).append($("<i>").attr({"class": "fas fa-save", "aria-hidden": "true"})),
      $("<button>").attr({"id": "11am", "class": "btn saveBtn col-2 col-md-1", "aria-label": "save"}).append($("<i>").attr({"class": "fas fa-save", "aria-hidden": "true"})),
      $("<button>").attr({"id": "12pm", "class": "btn saveBtn col-2 col-md-1", "aria-label": "save"}).append($("<i>").attr({"class": "fas fa-save", "aria-hidden": "true"})),
      $("<button>").attr({"id": "1pm", "class": "btn saveBtn col-2 col-md-1", "aria-label": "save"}).append($("<i>").attr({"class": "fas fa-save", "aria-hidden": "true"})),
      $("<button>").attr({"id": "2pm", "class": "btn saveBtn col-2 col-md-1", "aria-label": "save"}).append($("<i>").attr({"class": "fas fa-save", "aria-hidden": "true"})),
      $("<button>").attr({"id": "3pm", "class": "btn saveBtn col-2 col-md-1", "aria-label": "save"}).append($("<i>").attr({"class": "fas fa-save", "aria-hidden": "true"})),
      $("<button>").attr({"id": "4pm", "class": "btn saveBtn col-2 col-md-1", "aria-label": "save"}).append($("<i>").attr({"class": "fas fa-save", "aria-hidden": "true"})),
      $("<button>").attr({"id": "5pm", "class": "btn saveBtn col-2 col-md-1", "aria-label": "save"}).append($("<i>").attr({"class": "fas fa-save", "aria-hidden": "true"}))
    ];
    
function showDate() {
  let date = dayjs().format('dddd, MMMM D, YYYY');
  $("#headerDate").text(date);
}
        
function showTime() {
  let time = dayjs().format("h:mm A");
  $("#headerTime").text(time);
}

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

addBlocks();
fillBlocks();

function clickSave() {
  let hour = $(this).parent().attr("hour");
  let text = $(this).siblings("textarea").val();
  localStorage.setItem(hour, text);
  window.alert("saved to localStorage");
}

$(".btn").on("click", clickSave);

function displaySaved() {
  let hour = $(this).attr("hour");
  let text = localStorage.getItem(hour);
  if (text) {
    $(this).children("textarea").val(text);
  };
}

$(".time-block").each(displaySaved);