//1 create an array of strings (has to be of at least length 10)
let pets = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
//2 print out the second element in the array
console.log(pets[2]);
//3 print out the length of the array
console.log(pets.length);
//4 iterate over the array and print out each element
for(let i = 0; i<pets.length; i++){
console.log(pets[i]);
}
//5 create a function that takes in a string and in the function iterate over each element in the array and for each element check if its equal to the parameter
  // if it is then return that string
  //else continue
 function takeInString(str){
   for(let i = 0; i<pets.length; i++){
   if(str === pets[i]){
   return pets[i];
      }
   }
 }
console.log(takeInString("five"));
 //6 remove the last element from the array and then console.log the array
 pets.pop();
 console.log(pets);
 //7 remove the first element from the array and then console.log the array
pets.shift();
console.log(pets);
 //8 add a string to the end of the array and then console.log the array
 pets.push("cheese");
 console.log(pets);
 // add a string to the beginning of the array and then console.log the array
 pets.unshift("pineapple");
 console.log(pets);
 //8 create another array of 6 veggies 
  var veggies = ["one", "two", "three", "four", "five", "six"]; 
    //create a variable called twoVeggies and set it equal to slicing the veggies array and getting the middle two elements
    //ex [1, 3, 4, 5, 7, 8] and getting the two middle elements would be [4, 5]
var twoVeggies = veggies.slice(2, 4);
console.log (twoVeggies);
 //9 create another array of 4 fruits
 var fruits = ["one", "two", "three", "four"];
    //create a fruits and veggies array and assign it to concatinating the veggies array above and the fruits array
var fruitsAndveggies = veggies.concat(fruits);
console.log(fruitsAndveggies);
 //10 get the index of one the fruits or veggies in your fruitsAndveggies array
console.log(fruitsAndveggies[9]);