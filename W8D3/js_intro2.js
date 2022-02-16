

function titleize(names, cb){
  let newNames = names.map((name) => `Mx. ${name} Jingleheimer Schmidt`);
  return cb(newNames)
}

function printSent(names){
  names.forEach((name)) {
    console.log(names)
  });
}

console.log(titleize(['Mary', 'Brain', 'Leo']), printSent())