// Generate 6 random numbers between 1-50
//  activity2
// for (i=0; i<6; i++) {
//     console.log(Math.floor(Math.random()*50))
// }

// Activity3
// If we can create a loop to put 0-9 on the screen, 
// how can we count from 9-0

// for(i=9 ; i>=0 ; i--){
//     console.log(i)
// }


// Activity4
// Displays 4 films stored in an array. JS
// Use a for loop to show each film in the array.
// Use an if statement to check if the 3rd film in the array is 
// Ghostbusters. 
// If it is, return “Yay it’s Ghostbusters”. If it isn’t return “Boo! 
// we want Ghostbusters
// let film = ['Mulan', 'the witches','rapunzel','Home alone']
// console.log(film[2])
// for (let i = 0; i < film.length; i++) {
//     console.log(film[i])
    
// }
// if (film[2].toLowerCase() == 'ghostbuster'){
//     console.log("Yay its Ghostbuster! at psition 3")
// }
// else{
//     console.log("boo! no ghosbuster ")
// }


// Activity5
// Create a variable, generate a Jrandom number between 1 and 30 six times, each random 
// number generated, check if this number of divisible by 7 or not
// for (let i = 0; i <6;) {
//     let ranNum=(Math.floor(Math.random()*30))
//     if (ranNum % 7 == 0){
//         console.log(ranNum)
//         i++
//     }
// }


// Activity6
// > Create 2 arrays of followers e.g. bobsFollowers & hannahsFollowers. 
// In these arrays place 4 names as strings. Make sure there are 2 names 
// that are in BOTH arrays.
// > Using a nested loop iterate over both arrays and console.log out the 
// matching follower

let bobsFollowers =['Kath','Jack', 'Andrew', 'Tom','Phill','macy']
let hannahsFollowers =['John','Jack','Chris','Paul', 'Andrew','Carl','macy']
let commName=[]
for (let i=0; i<bobsFollowers.length; i++) {
    if (hannahsFollowers.includes(bobsFollowers[i])){
        commName.push(bobsFollowers[i])
    }
}
console.log(commName)

// Activity7

