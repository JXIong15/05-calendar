$(document).ready(function () {
    $('#currentDay').text(moment().format('dddd, MMMM Do, YYYY'));
    
    var inputEl = $("#task");
    // when save button is clicked, the text is saved to local storage
    $("#saveBtn").on("click", function() {
        console.log(inputEl.val());
        let myInput = inputEl.val();
        

        let eventEl = localStorage.getItem("event") || "";
        localStorage.setItem("event", myInput);
        inputEl.text(myInput);

    })

    function createTimeBlocks() {
        let timeBlock = $("#time-block");
        // array of business hours
        let hours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
        // create time blocks
        hours.forEach(function(i){ 
            let timeEl = $("<label>").addClass("textarea").val(i).text(i).attr("type", "label");
            let input = $("<input>").attr("type", "text");
            var button = $("<button>").text("💾").attr("type", "button");
            timeBlock.append(timeEl).append(input).append(button).append("<br>");
        }) 
        
        // if block is in the past, code block is gray 
        // if code block is in the present, block is red 
        // if block is in the future, block is green 
    }
    

    createTimeBlocks();
})