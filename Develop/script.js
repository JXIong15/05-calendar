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
        let timeBlock = $("#row");
        // array of business hours
        let hours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
        // create time blocks
        hours.forEach(function(i){ 
            let timeEl = $("<p>").val(i).text(i).attr("type", "p").attr("border", "solid");
            let input = $("<input>").attr("type", "text").attr("size", "100%");
            var button = $("<button>").text("💾").attr("type", "button");
            timeBlock.append(timeEl).append(input).append(button);
        }) 
        
        // if block is in the past, code block is gray 
        // if code block is in the present, block is red 
        // if block is in the future, block is green 
    }
    

    createTimeBlocks();
})