let pin = 1234
let balance =[500]

const withdrawal = (amount) => {
    if (amount > balance) {
        console.log("sorry you dont have sufficient funds")

    }
    else{
        newBalance= balance[balance.length-1] - amount
        balance.push(newBalance)
        // console.log(balance)

        console.log(`withdrawal of ${amount} accepted and ypu current bal is ${balance[balance.length-1]}`)
    }
}

const checkPin=(pin,amount) => {
    if (pin === 1234){
        console.log("pin accepted")
        withdrawal(amount)

    }
    else{
        console.log("Invalid pin ")
    }


}



    checkPin(1234,40)
    checkPin(1234,60)
    checkPin(1234,60)