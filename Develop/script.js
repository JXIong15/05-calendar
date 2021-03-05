$(document).ready(function () {
    $('#currentDay').text(moment().format('dddd, MMMM Do, YYYY'));
    var timeBlock = $("#time-block");
    var inputEl = $("#task");
    var currentTime = moment().format('LT');

    // array of business hours
    var hours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
      
    // when save button is clicked, the text is saved to local storage
    $("#saveBtn").on("click", function() {
        console.log(inputEl.val());
        let myInput = inputEl.val();
        

        let eventEl = localStorage.getItem("event") || "";
        localStorage.setItem("event", myInput);
        inputEl.text(myInput);

    })

    function createTimeBlocks() {
    // create time blocks
        hours.forEach(function(i){ 
            let rowEl = $("#row");
            let timeEl = $("<label>").val(i).text(i);
            let input = $("<input>").attr("type", "text").attr("size", "100%");
            var button = $("<button>").text("💾").attr("type", "button");
            rowEl.append(timeEl).append(input).append(button).append("<br>");
            timeBlockColor(timeEl, rowEl);
            console.log(rowEl[0]);
        }) 
    }
    
    function timeBlockColor(timeEl, rowEl) {
        if (timeEl > currentTime) {
            rowEl.attr("background-color", "grey");
        }
        else if (timeEl < currentTime) {
            rowEl.attr("backgrounf-color", "green");
        }
        else {
            rowEl.attr("backgrounf-color", "red");
        }
    }
        // if block is in the past, code block is gray 
        // if code block is in the present, block is red 
        // if block is in the future, block is green 

    createTimeBlocks();
})