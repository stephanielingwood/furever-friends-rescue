// Three parts of every function!

// Inputs (aka "parameters")
// work
// output (aka "return value")

// What do I want this function to do?
// Inputs: name, flightNumber, seatNumber
// Work: based on that, make a "confirmation statement" with their name, flight number, seat, and that 6 digit code
// Output: the "confirmation statement"

// Assumption: code external to the function will prompt the user for their name, flightNumber, and seatNumber.

// Build an example
// Inputs: name - Corey  flightNumber - 555  seatNumber - 27B
// Work:
// Randomly generate a string containing numbers and letters - STRETCH GOAL; for now just always use the same code for everyone
// Take the inputs and remember them
// Glue together the sentence with the name, flightNumber and seatNumber we're given

// Outputs: "Corey, you have booked flight 555, seat 27B.".

// When we run it: assign Corey to name, assign 555 to flightNumber, and assign 27B to seatNumber

//                                       parameters!
//                              Corey     555           27B
function makeFlightConfirmation(name, flightNumber, seatNumber) {
  var ticket = name + ", you have booked flight " + flightNumber + ", seat " + seatNumber + "."
  return ticket;
}

var coreysConfirmation = makeFlightConfirmation("Corey", "555", "27B");

// var passengerName = "Ewa";
// var passengerFlight = "662";
// var passengerSeat = "28A";

var passengerName = prompt("What is your name?");
var passengerFlight = prompt("What is your flight number?");
var passengerSeat = prompt("What seat do you want?");

var usersConfirmation = makeFlightConfirmation(passengerName, passengerFlight, passengerSeat);

console.log(usersConfirmation);
document.write('<p>here is your ticket:</p>');
document.write('<p>' + usersConfirmation + '</p>');
alert(usersConfirmation);
