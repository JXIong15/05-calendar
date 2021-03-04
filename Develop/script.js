$(document).ready(function () {
    $('#currentDay').text(moment().format('dddd, MMMM Do, YYYY'));
    
    var timeBlock = $("#time-block");

    var hours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
    // create time blocks
    for (var i = 0; i < hours; i++) {
        $("#time").text(hours[i]);
    }

    // if block is in the past, code block is gray 
    // if code block is in the present, block is red 
    // if block is in the future, block is green 

})