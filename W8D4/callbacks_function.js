
// window.setTimeout(function() {
//   alert('HAMMERTIME');
// }, 5000)

// function hammerTime(time){
//   window.setTimeout(function(){
//     alert(`${time} is HAMMER TIME!`)
//   });
// }

// const readline = require('readline');

// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// reader.question("Would you like some tea?"), function(answer){
//   console.log(`You replied ${answer}`);
// }

function Cat() {
  this.name = 'Markov';
  this.age = 3;
}

function Dog() {
  this.name = 'Noodles';
  this.age = 4;
}

Dog.prototype.chase = function (cat) {
  console.log(`My name is ${this.name} and I'm chasing ${cat.name}! Woof!`)
};

const Markov = new Cat();
const Noodles = new Dog();

console.log(Noodles.chase(Markov));
console.log(Noodles.chase.call(Markov, Noodles));
console.log(Noodles.chase.apply(Markov, [Noodles, Markov]));