
let str ="Hello World!"

console.log(str.charAt(6));
console.log(str.charCodeAt(0));
console.log(str.codePointAt(0));

let firstname = "Vaishnavi ";
let lastname = "Bhor";
let fullname = firstname + lastname;
console.log(fullname);

let str1 = "122457080";
let length = str1.length; 
console.log(length);

str2="kfiFGsk";
let upperCaseStr = str2.toUpperCase();
console.log(upperCaseStr);

str3="GGHaa";
let lowerCaseStr = str3.toLowerCase();
console.log(lowerCaseStr);

let charAtIndex = str2.charAt(4);
console.log(charAtIndex);


str4="dfnjhsjhf";
let indexOf = str4.indexOf("njjh");
console.log(indexOf);


let result5=5-3+"8";
console.log(result5);



let slicedStr = str.slice(0,5);
console.log(slicedStr);


let slicedStrToEnd = str.slice(6);
console.log(slicedStrToEnd);

let subStr = str.substring(0,5);
console.log(subStr);

let splitStr = str.split(",");
console.log(splitStr);

let replacedStr = str.replace("World", "Everyone");
console.log(replacedStr);

let strWithSpaces = "  Hello, World  ";
let trimmedStr = strWithSpaces.trim();
console.log(strWithSpaces);

let containsHello = str.includes("Hello");
console.log(containsHello);


let repeatedStr = str.repeat(5);
console.log(repeatedStr);