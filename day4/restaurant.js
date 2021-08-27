let time = 600
let offer = "null"


const bill = (a,b) => {
    if (cafe.brekOffer){
        bills=(a + b - cafe.biscuit.croissant)
        console.log(`your bill is ${bills}`)
        
    }
    else if (cafe.pmOffer){
        bills= b
        console.log(`your bill is ${bills}`)
        

    }
    else{ bills=a + b 
        console.log(`your bill is ${bills}`)
        

    }


}


const cafe = {
        name : "whitesheep",
        seatingCapasity:[100,50,30],
        hasSpecialOffer:true,
        brekOffer:false,
        pmOffer:false,
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
            if(time<=1600){
                console.log("Looking for special offer..")
                if (time<=1100){
                        console.log(this.breakfastOffer )
                        this.callmenu()
                        this.brekOffer = true
                        bill(cafe.drinks.cappuchino, cafe.sandwich.ham)
                         

                    
                    }else if (time>1100 && time<=1400 ) {
                       
                        console.log(this.lunchOffer)
                        this.callmenu()
                        this.pmOffer = true
                        bill(cafe.drinks.cappuchino, cafe.sandwich.ham)
                    
                    }else{
                        console.log("no special offer")
                        
                        bill(cafe.drinks.cappuchino, cafe.sandwich.ham)

                    }
                }
            else{
                        console.log( " cafe closed")
                     }
            
        },
        
    
    
    }



   


cafe.openCafe()
