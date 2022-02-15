

// function madLib(verb, adj, noun) {
//   // console.log('We shall ' + verb + ' the ' + adj + ' ' + noun)
//   console.log(`We shall ${verb} the ${adj} ${noun}`)
// }

// madLib('make', 'best', 'guac');
// "We shall MAKE the BEST GUAC."


// function isSubstring(string, sub) {
//   return string.includes(sub)
// }

// console.log(isSubstring("time to program", "time"))
// // true
// console.log(isSubstring("Jump for joy", "joys"))
// // false


// function fizzBuzz(array) {
//   let arr = [];

//   for(let i = 0; i < array.length; i++) {
//     if ((array[i] % 3 !== 0 && array[i] % 5 === 0) || (array[i] % 3 === 0 && array[i] % 5 !== 0)) {
//       arr.push(array[i]);
//     }
//   }
//   return arr;
// }

// console.log(fizzBuzz([5,8,7,12,6,9,8]))
// console.log(fizzBuzz([18,56,98,1,5,57]))

function isPrime(num) {
  if (num < 2){
    return false
  }
  for(let i = 2; i < num; i++){
    if (num % i === 0){
      return false
    }
  }
  return true
}

// console.log(isPrime(5))
// console.log(isPrime(2))
// console.log(isPrime(7))
// console.log(isPrime(10))

function sumOfNPrimes(n){
  let sum = 0;
  let count = 0;
  let i = 2;

    while(count < n){
      if (isPrime(i)){
        sum += i;
        count++;
      }
      i++;
    }

  return sum;
}

console.log(sumOfNPrimes(0))
console.log(sumOfNPrimes(1))
console.log(sumOfNPrimes(4))