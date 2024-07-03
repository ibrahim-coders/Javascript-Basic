// for loop
for (let i = 0; i < 10; i++)
  console.log(i);

//even number
for (let i = 20; i <= 40; i++){
  if (i % 2 ===0) {
    console.log("even number", i);
  } else {
    console.log("odd number", i);
  }
   
}

//odd number

for (let i = 20; i <= 40; i++){
  if (i % 2 !==0) {
    console.log("odd number", i);
  }
   
}

function showListOfNumbers(start, end) {
  for (let i = start; i <= end; i++){
    if (i % 2 !== 0) {
      console.log("even number", i);
  } else {
    console.log("odd number", i);
  }
    }
  }
showListOfNumbers(100, 1000);

let animals = ["cat", "bird", "dog", "alipent", "fox", "manki", "cow"];
for (let animal = 0; animal < animals.length; animal++){
  console.log(animals[animal]);
}

//while loop

 let num = 10;
 while (num < 20) {
  console.log(num);
num++;
 }

