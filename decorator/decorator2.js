class ClientComponent{

    constructor(url){
        this.url = url
    }

    async getData(){
        const res = await fetch(this.url)
        const data = await res.json()
        return data
    }

}

//Decorador

class ClientDecorator{
    constructor(clientComponent){
        this.clientComponent = clientComponent
    }

    async getData(){
        return await this.clientComponent.getData()
    }
}

//Decorator 1

class UpperCaseCLientDecorator extends ClientDecorator{

    async getData(){
        const data = await super.getData()

        const newData = data.map(e=>{
            e.comment = e.comment.toUpperCase()

            return e
        })

        return newData
    }

}

class HtmlClientDecorator extends ClientDecorator{

    async getData(){
        const data = await super.getData()
        const newData = data.map(e=>{
            e.comment = `<h1>${e.comment}</h1>`
            e.userId = `<h2>${e.userId}</h2>`
            return e
        })

        return newData
    }

}

(async ()=>{
    const url = "https://jsonplaceholder.org/comments"
    const client = new ClientComponent(url)
    const data = await client.getData()
    //console.log(data)

    const upperClient = new UpperCaseCLientDecorator(client)

    const data2 = await upperClient.getData()

    console.log(data2)

    const htmlClient = new HtmlClientDecorator(upperClient)
    const client3 = await htmlClient.getData()
    divContent1.innerHTML = client3.reduce((ac,e)=>{
        return ac + e.comment + e.userId
    },"")

    const htmlClient2 = new HtmlClientDecorator(client)
    const client4 = await htmlClient2.getData()
    divContent2.innerHTML = client4.reduce((ac,e)=>{
        return ac + e.comment + e.userId
    },"")

    
})()

