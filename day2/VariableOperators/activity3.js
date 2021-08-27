// let todaysDate = new Date();
// console.log(todaysDate);
// console.log(new Date().toString());
// console.log(Date())
// console.log(todaysDate.getDate());
// console.log(todaysDate.getMonth());
// let myBday = new Date(todaysDate.getFullYear(),9,28);
// console.log(myBday.toString());
// if ((todaysDate.getMonth())<(myBday.getMonth()) {

// }
today=new Date();
let bDay=new Date(today.getFullYear(),8, 28);
let Birthday=(bDay.toDateString())
console.log(`My Bday is on : ${Birthday}`);
// console.log(today.getTime())
// console.log(bDay.getTime())
if (today.getMonth()==9 && today.getDate()>28) 
{
bDay.setFullYear(bday.getFullYear()+1); 
}  
let one_day=1000*60*60*24;
let daysLeft=(Math.ceil((bDay.getTime()-today.getTime())/(one_day)))
console.log(`Days left until my Bday: ${daysLeft}`);

