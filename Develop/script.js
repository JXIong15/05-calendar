$(document).ready(function () {
    $('#currentDay').text(moment().format('dddd, MMMM Do, YYYY'));
    var timeBlock = $("#time-block");
    // array of business hours
    var hours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
    var inputEl = $("#task");

    // when save button is clicked, the text is saved to local storage
    $("#saveBtn").click(function () {
        console.log(inputEl.val());
        let myInput = inputEl.val();

        let eventEl = localStorage.getItem("event") || "";
        localStorage.setItem("event", myInput);
        inputEl.text(myInput);
    })

    function createTimeBlocks() {
        // create time blocks
        hours.forEach(function (i) {
            var rowEl = $("<div id='row'>");
            let timeEl = $("<label>").addClass("textarea").val(i).text(i).attr("type", "label");
            let input = $("<input id='task'>").attr("type", "text");
            var button = $("<button id='saveBtn'>").text("💾").attr("type", "button");
            rowEl.append(timeEl).append(input).append(button);
            timeBlock.append(rowEl);
            // timeBlockColor(timeEl, rowEl);
        })

    }

    // function timeBlockColor(timeEl, rowEl) {
    //     if (timeEl > currentTime) {
    //         rowEl.attr("background-color", "grey");
    //     }
    //     else if (timeEl < currentTime) {
    //         rowEl.attr("backgrounf-color", "green");
    //     }
    //     else {
    //         rowEl.attr("backgrounf-color", "red");
    //     }
    // }
    // if block is in the past, code block is gray 
    // if code block is in the present, block is red 
    // if block is in the future, block is green 

    createTimeBlocks();
})
