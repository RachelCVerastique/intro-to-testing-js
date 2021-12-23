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

//console.log(isFive(456));



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
//console.log(isEven(Infinity));


function isVowel(vowel) {
    if (vowel === 'a') {
        return true;
    } else if (vowel === 'A') {
        return true;
    } else {
        return false;
    }
}

//console.log(isVowel());

 var x = "banana";
var y = "split";
function add(num, num2) {
    return parseInt(num) + parseInt(num2);
}

console.log(add(2,"apples"));












    //old code
//   if (name === "Alex") {
//       return "Hello, " + name + "!";
//   } else if (name === "Pat") {
//       return "Hello, " + name + "!";
//   }
//   else {
//       return "Hello, Jane!";
//   }