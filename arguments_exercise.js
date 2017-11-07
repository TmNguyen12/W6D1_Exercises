function sum () {
  let arr = Array.from(arguments);
  let total = 0;
  for (let i = 0; i < arr.length; i ++ ) {
    total += arr[i];
  }
  return total;
}

function sum(...numbers){
  let total = 0;
  for (let i = 0; i < numbers.length; i ++ ) {
    total += numbers[i];
  }
  return total;
}

// console.log(sum(1, 2, 3, 4));
// console.log(sum(1, 2, 3, 4, 5));

// function myBind(context) {
//   let arr = Array.from(arguments);
//   return (function(arr) {
//     return this.apply(context, arr);
//   }
// };

// Function.prototype.myBind = function myBind(context, ...bindArgs)  {
//   return (...callArgs) => {
//     return this.apply(context, bindArgs.concat(callArgs));
//   };
// };

// Function.prototype.myBind = function myBind(context) {
//   let arr = Array.from(arguments);
//   return () => {
//     // let arr2 = Array.from(arguments);
//     console.log(arr);
//     return this.apply(context, arr.slice(1));
//   };
// };

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

const markov = new Cat("Markov");
const breakfast = new Cat("Breakfast");

// markov.says.myBind(breakfast, "meow", "Kush")();
// function myBind() = function(context, ...args) {
//   return (function(...args) {
//     return this.apply(context, args);
//   })
// }
//
// //
// function add(a,b) {
//   return a + b;
// }
// curriedSum
const curriedSum = function curriedSum(numArgs) {
  let numbers = [];
  // let numArr = Array.from(arguments);

  return function _curriedSum(num){
    numbers.push(num);

  if (numbers.length === numArgs){
    let sum = 0;
    numbers.forEach(el => {
      sum = sum + el;
    });
    return sum;
    // return numbers.reduce(add,0);
  } else {
    return _curriedSum;
  }
};
  // // }

};
// console.log(curriedSum(4)(1)(2)(3)(4));

Function.prototype.curry = function(numArgs){
  const args = [];
  let ogFunction = this;

  return function _innerCurry(num) {
    args.push(num);
    if (args.length === numArgs) {
      return ogFunction(...args);       
    } else {
      return _innerCurry;
    }
  };
};

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
f1 = f1(4); // [Function]
f1 = f1(20); // [Function]
f1 = f1(6); // = 30
console.log(f1);
