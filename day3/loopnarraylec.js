let favSinger = ['Nusrat Fateh Ali Khan ', 'ARRehman ', 'Arijit Singh']
console.log(favSinger)
let newList=favSinger.push('Kishore Kumar','Lata Mangheskar')
console.log(favSinger)
newList= favSinger.pop()
console.log(favSinger)
newList= favSinger.unshift('Mohammed Rafi')
console.log(favSinger)
newList= favSinger.shift()
console.log(favSinger)
console.log(newList)
for (i=0; i<(favSinger.length); i++){
    console.log(favSinger[i])
}

// let card = ['diamond','spade','heart','club'];
// let currentCard='club';
// while (currentCard != 'spade'){

//     console.log(currentCard);
//     currentCard = card[Math.floor(Math.random()*4)]

// }
// console.log(currentCard);