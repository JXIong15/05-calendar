$(document).ready(function () {
    $('#currentDay').text(moment().format('dddd, MMMM Do, YYYY'));
    var timeBlock = $("#time-block");
    // array of business hours
    var hoursArr = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"];

    function createTimeBlocks() {
        // create time blocks
        hoursArr.forEach(function (i) {
            var task = localStorage.getItem(i);
            var rowEl = $("<div>").addClass("row");

            // creates each element in the row
            let timeEl = $("<label>").addClass("hour col-12 col-lg-1").val(i).text(i).attr("type", "label");
            let input = $("<input>").addClass("col-12 col-lg-10").attr("type", "text").val(task);
            let button = $("<button>").addClass("saveBtn col-12 col-lg-1").text("💾").attr("type", "button");

            // when the button is clicked, then the input text is saved to the local storage
            button.click(function (i) {
                let myInput = input.val();
                let hour = timeEl.val();
                localStorage.setItem(hour, myInput);
                input.text(myInput);
            })

            rowEl.append(timeEl).append(input).append(button);
            timeBlock.append(rowEl);
            timeBlockColor(timeEl, input);
        })
    }

    // color codes the timeblocks. A time in the past is grey, the present is red, and the future is green.
    function timeBlockColor(timeEl, input) {
        let currentTime = moment().hours();
        let ourTime = parseInt(timeEl.val().split(" ")[0]);
        
        // currentTime is in military time. To make ourTime in military time, add 12 to the values of ourTime less than 6.
        if (ourTime < 6) {
            ourTime = ourTime + 12;
        }
        
        if (ourTime < currentTime) {
            input.addClass("past");
        }
        else if (ourTime === currentTime) {
            input.addClass("present");
        }
        else {
            input.addClass("future");
        }
    }

    createTimeBlocks();
})
