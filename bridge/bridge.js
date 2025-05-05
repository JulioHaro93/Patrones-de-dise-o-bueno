import escape from "querystring"

class EncoderTextAbstraction{
    constructor(encoder){
        this.encoder = encoder

    }

    encode(str){
        return this.encoder.encode(str)
    }

    decode(str){
        return this.encoder.decode(str)
    }
}

class Base64EncoderImplementor{

    encode(str){
        return window.btoa(unescape(encodeURIComponent(str)))
    }

    decode(str){
        return decodeURIComponent(escape(window.atob(str)))

    }
}

const encoder1 = new EncoderTextAbstraction(new Base64EncoderImplementor())

console.log(encoder1.encode("pato"))

class HTMLEncoderImplementor{
    encode(str){
        return str.split(".").reduce((ac,c)=>{
            return ac + `<p>${c.trim()}</p>`
        })
    }

    encode(str){
        return str.split("</P>").reduce((ac,c)=>{
            return ac + c.replace('<P>',"")+". "
        })
    }
}

const encoder2 = new EncoderTextAbstraction(new HTMLEncoderImplementor())

console.log(encoder2.encode("Este es un test de como convertir"))
console.log(encoder2.encode("<p>Este es un test</p> <p>de como convertir</p>"))