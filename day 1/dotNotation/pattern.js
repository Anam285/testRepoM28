// let i = 0;
// do {
//   i += 1;
//   console.log("   |   |   ");
//   if( i == 3){
//       console.log("-----------")
//   }
//   else if (i== 6){
//     console.log("-----------")
//   }

// } while (i < 9);


// let a= ["   |   |   ","   |   |   ","-----------","   |   |   ","   |   |   ","-----------","   |   |   ","   |   |   "]
// for (let i = 0;i<a.length;i++) {
//     console.log(a[i]);
// } 

let a= ["   |   |   ","-----------"]
let b = [3,6]
for (let i = 1;i<9;i++) {
    if (b.includes(i)){
        console.log(a[1]);
     }
    else{
        console.log(a[0]);
    }
} 
 