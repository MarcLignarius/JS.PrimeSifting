$(function() {
  $("#userInput").submit(function(event) {
    event.preventDefault();
    let userInput = $("input#userInput").val();
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
      let primes = sieve(number);
      let result = displayResults(primes);
      $("#output").text(result);
    }
  });

  function sieve(number) {
    let bools = [];
    let primes = [];

  // generate a list of booleans all set to true initially
  // the array is indexed from 2 to limit representing all numbers
  // e.g. [true, true, true, true] = [2, 3, 4, 5]
    for (let i = 2; i < number; i++) { 
      bools.push(true);
    } 
  
    // loop from 2 to limit setting the composite numbers to false
    // we start from 2 because we know 1 is not a prime number
    for (let i = 2; i < number; i++) {
      if (bools[i-2]) {
        for (let j = i*2; j <= number; j += i) {
          bools[j-2] = false;    
        }
      }
    }
    
    // now generate the list of primes only where
    // there is a true value in the bools array
    for (let p = 0; p < bools.length; p++) {
      if (bools[p]) { 
        primes.push(p+2); 
      }
    }
    return primes;
  } 

  function displayResults(primes) {
    let result = primes.join(', ');
    return result;
  }
});