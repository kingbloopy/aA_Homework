

// function titleize(names, cb){
//   let newNames = names.map((name) => `Mx. ${name} Jingleheimer Schmidt`); 
//   cb(newNames)
// }

// titleize(['Mary', 'Brain', 'Leo'], function(names) { 
//   names.forEach(function(name) {
//     console.log(name)
//   });
// });


const Elephant = function(name, height, tricks){ // string, inches, array
  this.name = name;
  this.height = height;
  this.tricks = tricks;
}

Elephant.prototype.trumphet = function(){
  console.log(`${this.name}, the elephant, goes 'phrRRRRRRRRR!!!'`);
}

Elephant.prototype.grow = function(){
  this.height += 12;
  return this.height;
}

Elephant.prototype.addTrick = function(trick){
  this.tricks.push(trick);
  return this.tricks;
}

Elephant.prototype.play = function(){
  let trick = this.tricks[Math.floor(Math.random()* this.tricks.length)];
  console.log(trick);
}

// ele1 = new Elephant('Wiggles', 5000, ['backflip', 'twirl', 'juggle']);
// console.log(ele1.trumphet());
// console.log(ele1.grow());
// console.log(ele1.addTrick('summersault'));
// console.log(ele1.play());


let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];

// function paradeHelper(elephant){
//   console.log(`${elephant.name} is trotting by!`);
// }

// herd.forEach((elephant) => paradeHelper(elephant));

function dinerBreakfast(){
  let order = "Scrambled eggs and bacon";
  console.log(order);

  return function (foods) {
    foods.forEach(function(food) {
      console.log(`${order} and ${food} please`);
    });
  }
}

const foods = ['orange juice', 'toast', 'muffins']
console.log(dinerBreakfast()(foods))
// console.log(dinerBreakfast()('toast'))
