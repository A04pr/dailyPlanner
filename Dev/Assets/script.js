// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  var hour = dayjs().hour() - 9;

  i = 0;

  //function to change all 'past' hour blocks to have the past class
  for (; i < hour; i++){
    $('#hours').children().eq(i).removeClass('future')
    $('#hours').children().eq(i).removeClass('present')
    $('#hours').children().eq(i).removeClass('past')
    $('#hours').children().eq(i).addClass('past')
  }

  //function to change all 'future' hour blocks to have the future class
  for (i = hour+1; i < 24; i++){
    $('#hours').children().eq(i).removeClass('future')
    $('#hours').children().eq(i).removeClass('present')
    $('#hours').children().eq(i).removeClass('past')
    $('#hours').children().eq(i).addClass('future')
  }

  //function to indicate the present hour block
  if (hour == 0) {
    $('#hours').children().eq(hour).removeClass('future')
    $('#hours').children().eq(hour).removeClass('present')
    $('#hours').children().eq(hour).removeClass('past')
    $('#hours').children().eq(hour).addClass('present')
  } else if (hour == 1) {
    $('#hours').children().eq(hour).removeClass('future')
    $('#hours').children().eq(hour).removeClass('present')
    $('#hours').children().eq(hour).removeClass('past')
    $('#hours').children().eq(hour).addClass('present')
  } else if (hour == 2) {
    $('#hours').children().eq(hour).removeClass('future')
    $('#hours').children().eq(hour).removeClass('present')
    $('#hours').children().eq(hour).removeClass('past')
    $('#hours').children().eq(hour).addClass('present')
  } else if (hour == 3) {
    $('#hours').children().eq(hour).removeClass('future')
    $('#hours').children().eq(hour).removeClass('present')
    $('#hours').children().eq(hour).removeClass('past')
    $('#hours').children().eq(hour).addClass('present')
  } else if (hour == 4) {
    $('#hours').children().eq(hour).removeClass('future')
    $('#hours').children().eq(hour).removeClass('present')
    $('#hours').children().eq(hour).removeClass('past')
    $('#hours').children().eq(hour).addClass('present')
  } else if (hour == 5) {
    $('#hours').children().eq(hour).removeClass('future')
    $('#hours').children().eq(hour).removeClass('present')
    $('#hours').children().eq(hour).removeClass('past')
    $('#hours').children().eq(hour).addClass('present')
  } else if (hour == 6) {
    $('#hours').children().eq(hour).removeClass('future')
    $('#hours').children().eq(hour).removeClass('present')
    $('#hours').children().eq(hour).removeClass('past')
    $('#hours').children().eq(hour).addClass('present')
  } else if (hour == 7) {
    $('#hours').children().eq(hour).removeClass('future')
    $('#hours').children().eq(hour).removeClass('present')
    $('#hours').children().eq(hour).removeClass('past')
    $('#hours').children().eq(hour).addClass('present')
  }

  //adds current date to top of calander
  if (dayjs().date() === 1) {
    $('#currentDay').text(dayjs().format('dddd, MMMM DD[st]'));
  } else if (dayjs().date() === 2) {
    $('#currentDay').text(dayjs().format('dddd, MMMM DD[nd]'));
  } else if (dayjs().date() === 3) {
    $('#currentDay').text(dayjs().format('dddd, MMMM DD[rd]'));
  } else {
    $('#currentDay').text(dayjs().format('dddd, MMMM DD[th]'));
  }
});

var hours = [
  { time: "9 AM", 
  fullDay: "9",
  text: "" },
  { time: "10 AM", 
  fullDay: "10",
  text: "" },
  { time: "11 AM", 
  fullDay: "11",
  text: "" },
  { time: "12 PM", 
  fullDay: "12",
  text: "" },
  { time: "1 PM", 
  fullDay: "13",
  text: "" },
  { time: "2 PM", 
  fullDay: "14",
  text: "" },
  { time: "3 PM", 
  fullDay: "15",
  text: "" },
  { time: "4 PM", 
  fullDay: "16",
  text: "" },
  { time: "5 PM", 
  fullDay: "17",
  text: "" },
]


hours.forEach(function(timeBlock, index) {
	var timeLabel = timeBlock.time;
	var blockColor = color(timeBlock);
	var row =
		'<div class="row time-block" id="' +
		index +
		'"><div class="no-gutters input-group"><div class="col-2 col-md-1 hour text-center py-3">' +
		timeLabel +
		'</div><textarea class="col-8 col-md-10 description ' +
		blockColor +
		'" rows="3">' +
		timeBlock.text +
		'</textarea><button class="btn saveBtn col-2 col-md-1" type="submit"><i class="fas fa-save" aria-hidden="true"></i></button></div></div>';

	/* Adding rows to container div */
	$(".blocks").append(row);

});

function color(timeBlock) {
	var currentHour = Number(dayjs().format('H'));
	var blockHour = timeBlock.fullDay;
  console.log(currentHour);
  console.log(blockHour);
	if (currentHour < blockHour) {
		return "future";
	} else if (currentHour > blockHour === true) {
		return "past";
	} else {
		return "present";
	}
}
