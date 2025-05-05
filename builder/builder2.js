class Form{
    constructor(controls, action){
        this.controls = controls
        this.action = action
    }

    getContent(){
        return `<form method="post" action="${this.action}">
            ${this.controls.reduce((ac, c)=>{
                return ac + `<div>
                    ${this.getLabel(c)}
                    ${this.getInput(c)}
                </div>`
            }, "")}
            <button stype="submit">Enviar</button>
        </form>`
    }

    getLabel(control){
        return`<label>${control.text}</label>`
    }

    getInput(control){
        return `<input type="${control.type}"
        id="${control.name}"
        name="${control.name}"

        />`
    }
}

class FormBuilder{
    constructor(){
        this.reset()
    }

    reset(){
        this.action ='',
        this.controls=[]
    }

    setAction(action){
        this.action = action
        return this
    }

    setText(name, text){
        this.controls.push({
            name: name,
            text: text,
            type: "Text"
        })
        return this
    }

    setTextBox(name, text){
        this.controls.push({
            name: name,
            text: text,
            type: "checkBox"
        })
        return this
    }

    setcolor(name, text){
        this.controls.push({
            name: name,
            text: text,
            type: "color"
        })
        return this
    }
    setEmail(name, text){
        this.controls.push({
            name: name,
            text: text,
            type: "Email"
        })
        return this
    }

    build(){
        const frm = new Form(this.controls, this.action)
        this.reset()
        return frm
    }
}


class FormDirector{
    constructor(formBuilder){
        this.setBuilder(formBuilder)
    }
    setBuilder(formBuilder){
        this.formBuilder = formBuilder
    }

    createPeopleForm(){
        this.formBuilder.reset()
        this.formBuilder.setText("First Name", "Nombre").setText("Last Name", "Apellidos")

    }

    createContactForm(){
        this.formBuilder.reset()
        this.formBuilder.setAction("send.php").setText("First Name", "Nombre"). setEmail("email", "Correo electrónico").setText("text", "mensaje")
    }
}

const frmBuilder = new FormBuilder()

const formPeople = frmBuilder.setAction("add.php").setText("First Name", "Nombre"). setText("El name", "Apellidos").setText("text", "Mensaje").setcolor("favorite color", "Color favorito?").build()

console.log(formPeople)

form1.innerHTML = formPeople.getContent()


const formEmail = frmBuilder.setAction("send.php").setText("name", "Nombre").setEmail("email", "Correo Electrónico").build()

form2.innerHTML = formEmail.getContent()

const director = new FormDirector(frmBuilder)
director.createPeopleForm()

form3.innerHTML = frmBuilder.build().getContent()

director.createPeopleForm()

form4.innerHTML = frmBuilder.build().getContent()

director.createContactForm()
form5.innerHTML = frmBuilder.build().getContent()