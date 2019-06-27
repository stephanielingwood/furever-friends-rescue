// Functions have three parts:
// inputs (aka "parameters") - turkey, pepperjack, wheat
// work - making a sandwich
// output - sandwich

// and then: we need to be able to run them, give them their inputs, and receive their outputs.

// Functions give us "abstraction" - the ability to get stuff done without worrying about how it's happening "under the hood".
// We can write our logic once, and then use it over and over and over again with different inputs to get customized results.


// give it a name, so we can reference it later
// give it a place to hold inputs
function makeSandwich(meat, cheese, bread) {
  // a place to define the work
  var sandwich = 'Here is a ' + meat + ' and ' + cheese + ' sandwich on ' + bread + ' bread. It is delicious! Enjoy!';

  // a place to say what the output should be
  return sandwich;
}

// and then: we need to be able to run them, give them their inputs, and receive their outputs.
var stephaniesSandwich = makeSandwich('turkey', 'pepperjack', 'wheat');

console.log(stephaniesSandwich);
