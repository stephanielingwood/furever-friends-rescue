var cat1 = {
  name: 'Amelia',
  age: 1,
  hobbies: ['chasing her brother', 'dig at our duvet cover', 'nap'],
  speak: function () {
    console.log('meeeeoooooowwwwwww');
    console.log(this.name);
  }
};

console.log(cat1);
console.log(cat1.name);
cat1.speak();
