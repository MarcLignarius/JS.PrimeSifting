$(function() {
  $("#userInput").submit(function(event) {
    event.preventDefault();
    let userInput = $("input#userInput").val();
    console.log("userInput", userInput);
    // Check for empty field
    if (userInput === "") {
      $("#output").text("This field is required.");
      return false;
      // Check for non-numerical entries
    } else if (isNaN(userInput)) {
      $("#output").text("Please enter a number.");
    } else {
      //If non-empty and numerical, parse userInput
      let number = parseFloat(userInput);
      console.log("number", number);
      let numArray = createNumArray(number);
      console.log("numArray", numArray);
      let primeNumbers = removeNonPrimes(numArray);
      console.log("primeNumbers", primeNumbers);
    }
  });

  function createNumArray(number) {
    let numArray = [];
    for (i = 2; i <= number; i++) {
      numArray.push(i);
    }
    return numArray;
  }

  function removeNonPrimes(numArray) {
    let primeNumbers = [];
    for (i = 2; i <= numArray.length+1; i++) {
      primeNumbers.push(i);
    }
    return primeNumbers;
  }
});
