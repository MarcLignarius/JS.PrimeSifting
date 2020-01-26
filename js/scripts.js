$(function() {
  $("#userInput").submit(function(event) {
    event.preventDefault();
    let userInput = $("input#userInput").val();
    console.log("userInput", userInput);
    // Check for empty field
    if (userInput === "") {
        $("#output").text("This field is required.");
        return false;
    } else if (isNaN(userInput)) {
        $("#output").text("Please enter a number.");
    };
  });
});
