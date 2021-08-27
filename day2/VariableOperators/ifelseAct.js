
// Activity1
// let age = 20
// let country ="India"
// if (age<=17){
//     console.log("you aren't old enough")

// }
// else if ( age > 17 && country == "UK" ){
//     console.log("I can serve you ")

// }
// else {
//     console.log("I cant sevre you!!")
// }

// Activity 2
// const pizzaTopping = 'corn';
// switch (pizzaTopping) {
//   case 'onions', 'tomatoes' , 'pepperoni':
//     console.log("These are important toppings for my pizza.");
//     console.log(`I don't mind having ${pizzaTopping} on my pizza`);
//     break;
//   case 'pineapple', 'corn':
//     console.log("i Dont want this on my pizza ");
//     console.log(` ${pizzaTopping} should not be on my pizza`);
//     break;
//   default:
//     console.log("we dont have this topping ");

// }

// Activity 3
// Create a variable called password. 
// JS
// Check how many letters are in the password, if there are 
// less than 8, log to the console that the password is too 
// short. Otherwise log the password to the console.

// let password='abs'
// if (password.length >= 8){
//     console.log("password accepted ")
//     console.log(`your password is ${password}`)
// }
// else{
//     let diff=8-password.length
//     console.log("password too short ")
//     console.log(`your password need ${diff} more characters`)
// }

// stretch
// let num= 21
// if (num% 3 ==0 && num% 5 == 0){
//     console.log(`number ${num} is divisible by 5 & 3`)

// }
// else if (num %3 == 0 && num % 5 != 0){
//     console.log(`number ${num} is divisible only by 3`)
// }
// else if (num %5 == 0 && num %3 !=0){
//     console.log(`number ${num} is divisible only by 5`)
// }
// else{
//     console.log(`number ${num} is not divisible by 5 or 3`)
// }



// Activity 4
// let num= 15
// if (num% 3 ==0 && num% 5 == 0){
//     console.log("Fizz Buzz")

// }
// else if (num %3 == 0 && num % 5 != 0){
//     console.log("Fizz")
// }
// else if (num %5 == 0 && num %3 !=0){
//     console.log("Buzz")
// }
// else{
//     console.log("No Fizz No Buzz")
// }

// Acticity 5
// let number = 5463
// let num = number.toString()
// let revNum= (num.split("").reverse().join(""))
// if (num == revNum){
//     console.log(`${num} is a palindrome`)
// }
// else{
//     console.log(`${num} is not a palindrome`)
// }

// Activity 6

// let placeOfWork= "Code Nation"
// let time = 17
// let townOfHome = "Chester"
// // let now = new Date()
// // time =(now.getHours())

// if (time >9 && time <17){
//     console.log (`I am at ${placeOfWork}`)
// }
// else if (time>17 || time<9){
//     console.log (`I am at ${townOfHome}`)
// }
// else{
//     console.log ("I am Commuting")
// }



//Activity 6
// Take the string 
// “jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh 
// gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi”. Find the 
// index of a last vowel in the string

let str ="ajrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshaddsgs";
let spltstr=str.split("")
console.log(spltstr)
let vowel= ['a', 'e','i','o','u']
let index=[]

for (i= 0 ; i<= spltstr.length; i++) {
    if (vowel.includes(spltstr[i])){
        index.push(i)
    }
    

}
// console.log(index)
let lastIndex=(index[index.length-1])
let lastVowel =str[lastIndex]
console.log(`Last index of array is ${lastIndex} and the vowel is ${lastVowel}`) 


// Activity 8
// Create a variable called word that takes a string. Create 
// aif statement that checks if the last letter is the same as 
// the first. If it is return true, otherwise return falsen .

// one way of doing it 
// let str ="Barbh"
// let lastLet=str[str.length-1] 
// let firstLet = str[0]
// console.log(lastLet.toLowerCase())
// console.log(firstLet)
// if (firstLet.toLowerCase() == lastLet.toLowerCase()){
//     console.log ("true")
// }
// else {
//     console.log ("false")
// }

// // another way of doing it 
// if (str.charAt(0).toLowerCase() == str.charAt(str.length - 1).toLowerCase()){


// Activity 9
// Create two variables called num1 and num2.
// Create an if statement that checks if the result of the 
// sum is even. If it is return the number, otherwise return 
// the numbers multiplied together

// let num1= 10;
// let num2= 5;
// let mult=num1 * num2
// if ((num1+num2)%2==0){
//     console.log(`The numbers are ${num1} and ${num2}`)
// }
// else{
//     console.log(`the product of numbers is ${mult}`)
// }

