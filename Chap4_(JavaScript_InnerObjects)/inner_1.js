let person = new Object();
// Object 객체

person.firstName = "John";
person.lastName = "Doe";

console.log(person.firstName);
console.log(person.lastName);

// String 객체
let txt = "ABCDEFGHIJKLM";
let sln = txt.length;
console.log(sln);

let str = "Do not come come";
let pos = str.indexOf("come");
let last_pos = str.lastIndexOf("come");
console.log(pos);
console.log(last_pos);

let str2 = "Apple, Banana, Kiwi";
let res = str2.slice(7, 13);
console.log(res);
let res2 = str.slice(7);
console.log(res2);
let res3 = str2.slice(-12);
console.log(res3);
