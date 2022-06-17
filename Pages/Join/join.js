let params = new URL(document.location).searchParams;
let myName = params.get("name");
let email = params.get("email");
let password = params.get("password");
console.log(myName);
console.log(email);
console.log(password);

let myButton = document.getElementById("button");
