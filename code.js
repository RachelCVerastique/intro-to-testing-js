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




    //old code
//   if (name === "Alex") {
//       return "Hello, " + name + "!";
//   } else if (name === "Pat") {
//       return "Hello, " + name + "!";
//   }
//   else {
//       return "Hello, Jane!";
//   }