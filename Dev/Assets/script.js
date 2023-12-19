
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

  //function to change all 'past' hour blocks to have the past class
  var hour = dayjs().hour() - 9;
  i = 0;
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

