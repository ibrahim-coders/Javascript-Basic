let saying = 'time is a very impotant.';

let newSaying = saying.slice(0, 4);
//charAt(index)
console.log(newSaying.charAt(3));
console.log(saying.length);
//indexof
console.log(newSaying.indexOf("Time"));

//lastindexof

console.log(saying.lastIndexOf("t."));

let search = saying.includes("time");
console.log(search);

// big capital letter
let upcase = saying.toUpperCase();
console.log(upcase);

//smail capital letter

let smailUpcase = saying.toLowerCase();
console.log(smailUpcase);
//space removes
let whiteSpace ="money is   very impotant many is   happnices"
let trim =(whiteSpace.trim());
console.log(trim);

// find if the word "Enjoy" presnt in the new given sentence
let words  = "Hello, i always to enjoy the beauty of nature";
let word = "enjoy";

let wordss = (word.toUpperCase());

if (words.includes(word.toUpperCase())) {
  console.log(`yes, ${word} is prestnt in the sentence`);
} else{
  console.log("404 not found");
};
// let words = "Hello, I always enjoy the beauty of nature";
// let word = "enjoy";
// if (words.includes(word)) {
//   console.log(`Yes, ${word} is present in the sentence`);
// } else {
//   console.log("404 not found");
// }

let email = "mdibrahimhowlader754@gmail.com";
let checkFor = "gmail.com";
if (email.includes(checkFor.toLowerCase())) {
  console.log("Correct emaill Fromate");
} else {
  console.log("incorrect format use", checkFor);
 }