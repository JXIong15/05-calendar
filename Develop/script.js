$(document).ready(function () {
    $('#currentDay').text(moment().format('dddd, MMMM Do, YYYY'));
    var timeBlock = $("#time-block");
    // array of business hours
    var hours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

    function createTimeBlocks() {
        // create time blocks
        hours.forEach(function (i) {
            var rowEl = $("<div>").addClass("row");
            let timeEl = $("<label>").addClass("hour col-12 col-lg-1").val(i).text(i).attr("type", "label");
            let input = $("<input id='task'>").addClass("col-12 col-lg-10").attr("type", "text");
            let button = $("<button>").addClass("saveBtn col-12 col-lg-1").text("💾").attr("type", "button");

            var inputEl = $("#task"); // Problem: 8 textboxes called "task", so there will be a saving error
            // when save button is clicked, the text is saved to local storage
            button.click(function(i) {
                console.log("Hello");
                console.log(inputEl.val());
                let myInput = inputEl.val();

                let eventEl = localStorage.getItem("event") || "";
                localStorage.setItem("event", myInput);
                inputEl.text(myInput);
            })

            rowEl.append(timeEl).append(input).append(button);
            timeBlock.append(rowEl);
            timeBlockColor(timeEl, input);
        })
    }

    function timeBlockColor(timeEl, input) {
        let currentTime = moment().format('LT');
        if (timeEl > currentTime) {
            input.addClass("past");
        }
        else if (timeEl < currentTime) {
            input.addClass("present");
        }
        else {
            input.addClass("future");
        }
    }

    
    createTimeBlocks();
})
