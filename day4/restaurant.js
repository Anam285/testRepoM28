let time = 600
let offer = "null"
let bills = "null"
let drinks = "null"


const cafe = {
        name : "whitesheep",
        seatingCapasity:[100,50,30],
        hasSpecialOffer:true,
        brekOffer:false,
        lunchOffer:false,
        drinks:{cappuchino:2.30,
                latte: 2.45,
                filtercoffee: 3.0,
                tea:1.80,
            },
        sandwich:{
            ham:5.40,
            cheese:4.46,
            chicken:3.99,
            veg:4.99,
        },
        biscuit:{
            cookies : 2.33,
            croissant:1.99
        
        },
        callmenu(){
            console.log(this.drinks)
            console.log(this.sandwich)
            console.log(this.biscuit)
        },

    
        breakfastOffer:"Free croissant with coffee",
        lunchOffer:"free drink with sandwich",
        noOffer:"sorry no offer ",
    
        openCafe(){
            if (this.hasSpecialOffer){
                console.log("time for special offer")
                if (time<1100){
                        console.log(this.breakfastOffer )
                        this.callmenu()
                        this.brekOffer = true
                        

                    
                    }else if (time<1500) {
                       
                        console.log(this.lunchOffer)
                        this.callmenu()
                        this.lunchOffer = true
                    
                    }}
            else{
                        console.log( " cafe closed")
                     }
            
        },
        // bill(a,b){
        //     if (this.brekOffer){
        //         bills=(this.drinks.a + this.sandwich.b - this.biscuit.croissant)
        //         console.log(`your bill is ${bills}`)
        //     }
        //     else if (this.lunchOffer){
        //         bills= this.sandwich.b
        //         console.log(`your bill is ${bills}`)

        //     }
        //     else{ bills=this.drinks.a + this.sandwich.b 
        //         console.log(`your bill is ${bills}`)

        //     }


        // }
    
    
    
    }

const bill = (a,b) => {
    if (cafe.brekOffer){
        bills=(cafe.drinks.a + cafe.sandwich.b - cafe.biscuit.croissant)
        console.log(`your bill is ${bills}`)
        console.log(cafe.drinks.a)
    }
    else if (cafe.lunchOffer){
        bills= cafe.sandwich.b
        console.log(`your bill is ${bills}`)
        console.log(cafe.drinks.a)

    }
    else{ bills=cafe.drinks.a + cafe.sandwich.b 
        console.log(`your bill is ${bills}`)
        // console.log(cafe.drinks.a)

    }


}

const calls =(a)=>{
    console.log(cafe.seatingCapasity[a])
    // console.log(cafe.drinks.cappuchino)
}
   


// cafe.openCafe()
// console.log(cafe.drinks.cappuchino )
// console.log(cafe.drinks.cappuchino + cafe.sandwich.ham - cafe.biscuit.croissant)
// bill('cappuchino','ham')
calls(1)
// console.log(cafe.drinks.)