let strl = " my name is anam ";
console.log(strl)
console.log(strl.length)
strl = strl.split(" ")
console.log(strl)
console.log(strl.length)
let newstr=[];
for (i =0 ; i<strl.length ; i++){
    // console.log(strl[i].charAt(0).toUpperCase() + strl[i].slice(1))
    newstr[i]= (strl[i].charAt(0).toUpperCase() + strl[i].slice(1))
       
};

console.log(newstr.join(" "));

