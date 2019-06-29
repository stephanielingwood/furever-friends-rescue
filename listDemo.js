{/* <ul>
  <li>bacon</li>
  <li>avocado</li>
  <li>eggs</li>
  <li>bread</li>
  <li>champagne</li>
  <li>strawberries</li>
</ul> */}

var brunchShoppingList = ['bacon', 'avocado', 'eggs', 'bread', 'champagne', 'strawberries', 'oranges', 'grapefruit', 'salsa'];
console.log(brunchShoppingList);

// push and pop are called "array methods"
brunchShoppingList.push('chocolate');
brunchShoppingList.push('soda');
brunchShoppingList.push('ice cream');
brunchShoppingList.push('cherries');

console.log(brunchShoppingList);

var lastItem = brunchShoppingList.pop();
console.log(lastItem);

console.log(brunchShoppingList);

// console.log('test:');
// console.log(brunchShoppingList[0]);
// console.log(brunchShoppingList[1]);
// console.log(brunchShoppingList[2]);
// console.log(brunchShoppingList[3]);
// console.log(brunchShoppingList[4]);
// console.log(brunchShoppingList[5]);

// console.log('loop:');
for (var index = 0; index < brunchShoppingList.length; index++) {
  console.log(brunchShoppingList[index]);
}
