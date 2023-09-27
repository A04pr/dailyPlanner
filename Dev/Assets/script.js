
$(function () {
  


  
  var hours = [
    { time: "9 AM", 
    fullDay: "9",
    reminder: "" },
    { time: "10 AM", 
    fullDay: "10",
    reminder: "" },
    { time: "11 AM", 
    fullDay: "11",
    reminder: "" },
    { time: "12 PM", 
    fullDay: "12",
    reminder: "" },
    { time: "1 PM", 
    fullDay: "13",
    reminder: "" },
    { time: "2 PM", 
    fullDay: "14",
    reminder: "" },
    { time: "3 PM", 
    fullDay: "15",
    reminder: "" },
    { time: "4 PM", 
    fullDay: "16",
    reminder: "" },
    { time: "5 PM", 
    fullDay: "17",
    reminder: "" },
  ]

  hours.forEach(function(timeBlock, index) {
    var timeLabel = timeBlock.time;
    var blockColor = color(timeBlock);
    var reminderText = timeBlock.reminder;
    var parse = JSON.parse(localStorage.getItem('reminder'));
    if (parse[index].reminder !== ""){
      reminderText = parse[index].reminder;
    }
    var row =
      '<div class="row time-block" id="' +
      index +
      '"><div class="no-gutters input-group"><div class="col-2 col-md-1 hour text-center py-3">' +
      timeLabel +
      '</div><textarea class="col-8 col-md-10 description ' +
      blockColor +
      '" rows="3">' +
      reminderText +
      '</textarea><button class="btn saveBtn col-2 col-md-1" type="submit"><i class="fas fa-save" aria-hidden="true"></i></button></div></div>';
      $(".blocks").append(row);
  
  });
  

  function color(timeBlock) {
    var currentHour = Number(dayjs().format('H'));
    var blockHour = timeBlock.fullDay;
    if (currentHour < blockHour) {
      return "future";
    } else if (currentHour > blockHour === true) {
      return "past";
    } else {
      return "present";
    }
  }
  
  $(".saveBtn").on("click", function() {
    var blockID = parseInt($(this).closest(".time-block").attr("id")
    );
    var input = $.trim($(this).parent().children("textarea").val()
    );
    hours[blockID].reminder = input;
  
    localStorage.setItem("reminder", JSON.stringify(hours));
  });
  
  
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
