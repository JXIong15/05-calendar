$(document).ready(function () {
    $('#currentDay').text(moment().format('dddd, MMMM Do, YYYY'));
    var timeBlock = $("#time-block");
    // array of business hours
    var hours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

    function createTimeBlocks() {
        // create time blocks
        hours.forEach(function (i) {
            var rowEl = $("<div>").addClass("row");
            let timeEl = $("<label>").addClass("hour").val(i).text(i).attr("type", "label");
            let input = $("<input id='task'>").attr("type", "text");
            let button = $("<button>").addClass("saveBtn").text("💾").attr("type", "button");

            var inputEl = $("#task"); // Problem: 8 textboxes called "task", so there will be a saving error
            // when save button is clicked, the text is saved to local storage
            button.click(function() {
                console.log("Hello");
                console.log(inputEl.val());
                let myInput = inputEl.val();

                let eventEl = localStorage.getItem("event") || "";
                localStorage.setItem("event", myInput);
                inputEl.text(myInput);
            })

            rowEl.append(timeEl).append(input).append(button);
            timeBlock.append(rowEl);
            // timeBlockColor(timeEl, rowEl);
        })
    }

    // function timeBlockColor(timeEl, rowEl) {
    //     if (timeEl > currentTime) {
    //         rowEl.addClass("past");
    //     }
    //     else if (timeEl < currentTime) {
    //         rowEl.addClass("present");
    //     }
    //     else {
    //         rowEl.addClass("future");
    //     }
    // }

    
    createTimeBlocks();
})
