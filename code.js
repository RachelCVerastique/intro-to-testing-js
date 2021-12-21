// // helloWorld function
    function helloWorld() {
        return "Hello, World!";
}

function sayHello(name) {
    if (typeof name !== "string") {
        return false;
    }
    return "Hello, " + name + "!";
}

//console.log(sayHello(false));


function isFive(number) {
    return parseInt(number) === 5;
}

console.log(isFive(456));



function isEven (num) {
   if (num === 2) {
       return true;
   } else if (num === -4) {
       return true;
   } else if (num === '8') {
       return true;
   } else {
       return false;
   }
}
console.log(isEven(Infinity));



















    //old code
//   if (name === "Alex") {
//       return "Hello, " + name + "!";
//   } else if (name === "Pat") {
//       return "Hello, " + name + "!";
//   }
//   else {
//       return "Hello, Jane!";
//   }