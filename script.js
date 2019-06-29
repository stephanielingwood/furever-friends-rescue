// var username = "Corey";
// console.log(username);

// username = "Stephanie";
// console.log(username);

// username = "Ewa";
// console.log(username);

var username = prompt('What is your name?');


// concatenate a string (aka adding blobs of text together)
document.write('<p> Hi, ' + username + '. Welcome to our cat rescue.</p>');

// var wantsToAdopt = prompt('Do you want to meet your best friend today?');

// if (wantsToAdopt === 'yes' || wantsToAdopt === 'okay') {
//   document.write('<p>Hooray! Pick one (or more).</p>');
// } else {
//   document.write('<p>Please spread the word about Furever Friends.</p>');
// }


// pseudocode
// inputs: name, age, gender
// work: create the html for the cat's entry on the site
// output: the html

function createCatEntry(name, age, gender) {
  var newHtml = '<article>' +
    '<h2>' + name + ', ' + age + ' months, ' + gender + '</h2>' +
    '<img src="http://placekitten.com/300/300">' +
    '<p>' +
    'Shy on the outside, instigator on the inside.' +
    '</p>' +
    '</article>';
  return newHtml;
}


var wantsToAdd = prompt('Do you want to add a cat today? Type yes or no');

// is wantsToAdd not equal to yes, and is it not equal to no
while (wantsToAdd !== 'yes' && wantsToAdd !== 'no') {
  wantsToAdd = prompt('Do you want to add a cat today? Type yes or no');
}


if (wantsToAdd === 'yes') {
  var numberOfCats = prompt('How many cats do you want to add?');
  var catList = [];

  for (numberOfCats; numberOfCats > 0; numberOfCats--) {
    // prompt the user for the name, age and gender
    var newCat = {};
    newCat.name = prompt('what is the name of the cat?');
    newCat.age = prompt('how old is the cat?');
    newCat.gender = prompt('what gender is the cat?');

    // hand that info to the function that builds the html and run the function
    newCat.html = createCatEntry(newCat.name, newCat.age, newCat.gender);

    catList.push(newCat);
    document.write(newCat.html);
  }

  // stretch goal - do the document.write from the loop
  // for (var index = 0; index < catList.length; index++) {
  //   // take the html and give it to document.write
  //   document.write(catList[index].html);
  // }

} else {
  document.write('Thanks for volunteering!');
}
