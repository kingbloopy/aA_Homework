

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

ele1 = new Elephant('Wiggles', 5000, ['backflip', 'twirl', 'juggle']);
// console.log(ele1.trumphet());
// console.log(ele1.grow());
// console.log(ele1.addTrick('summersault'));
// console.log(ele1.play());
