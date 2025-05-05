//Component
class ProductComponent{
    constructor(name){
        this.name=name
    }

    getDetail(){
        return `${this.name}`
    }
}

//Decorator

class ProductDecorator{
    constructor(productComponent){
        this.productComponent = productComponent
    }

    getDetail(){
        return this.productComponent.getDetail()
    }
}

class CommercialInfoProductDecorator extends ProductDecorator{

    constructor(productComponent, tradename, brand){
        super(productComponent)
        this.tradename = tradename
        this.brand = brand
    }

    getDetail(){
        return `${this.tradename} ${this.brand} `+ super.getDetail()
    }
}
//Ejecución
// component
const productComponent = new ProductComponent('Cerveza')

console.log(productComponent.getDetail())

const commercialInfoProduct = new CommercialInfoProductDecorator(productComponent, "London Porter", "Fuller's")

console.log(commercialInfoProduct.getDetail())

//  decorator 2

class StoreProductDecorator extends ProductDecorator{
    constructor(productComponent, price){
        super(productComponent)
        this.price = price

    }
    getDetail(){
        return super.getDetail() +` ${this.price}`
    }
}

const storeProduct = new StoreProductDecorator(productComponent, 15.5)

console.log(storeProduct.getDetail())

class HTMLProductDecorator extends ProductDecorator{
    getDetail(){
        return `<h2>Información del producto</h2>
        <p>
            ${super.getDetail()}
        </p>
        `
    }
}

// decorador 2 con decorador 1

const product = new StoreProductDecorator(commercialInfoProduct, 15.5)

console.log(product.getDetail())

// decorador 3 con decorador 2 con decorador 1

const htmlProductDecorator  = new HTMLProductDecorator(product)

myDiv.innerHTML = htmlProductDecorator.getDetail()