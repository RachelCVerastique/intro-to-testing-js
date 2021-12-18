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




















    //old code
//   if (name === "Alex") {
//       return "Hello, " + name + "!";
//   } else if (name === "Pat") {
//       return "Hello, " + name + "!";
//   }
//   else {
//       return "Hello, Jane!";
//   }