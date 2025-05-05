

function sum(a,b){
    return a+b
}

let res = sum(1,2)

console.log(res)

const fsum = sum

res = fsum(5,6)

console.log(res)

function operation(fn,a,b){
    console.log("se hace algo")
    console.log(fn(a,b))

}

operation(sum,10,20)

//arrow functions

let fA = () => console.log('algo')

fA()

operation((a,b)=>a*b,5,5)

const names = ["Hector", "Juan", "Pablo"]

names.forEach((name)=>console.log(name))

names.forEach((name)=>console.log(name.toUpperCase()))

const namesUpper = names.map((name)=>name.toUpperCase())

console.log(namesUpper)
console.log(names)

const numbers = [5,4,7,1,10]
const total = numbers.reduce((ac,number)=> ac+number,0)

console.log(total)

// clases
class Drink{
    constructor(name){
        this.name = name
    }

    info(){
        return 'la bebida es ' + this.name
    }
}

const drink = new Drink('Agua')

function Drink2(name){
    this.name = name
    this.info = function(){
        str = 'la bebida es ' + this.name
        return str
    }
}

console.log(drink.info())

const drink2 = new Drink2('agua')
console.log(drink2.info())

// herencia
class Beer extends Drink{
    constructor(name, alcohol){
        super(name)
        this.alcohol = alcohol
    }
    info(){
        return super.info() + " "+this.alcohol
    }
}

const beer = new Beer('Chupas',12.4)

console.log(beer.info())