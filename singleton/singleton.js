

class WeekDays{

    daysEs =["Lunes", "martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]
    daysEn = ["Monday", "Tuesday", "Wednesday","Thrusday", "Friday", "Saturday", "Sunday"]
    
    constructor(lang){
        this.lang = lang
        
        if(WeekDays.instance){
            return WeekDays.instance
        }

        WeekDays.instance = this
    }

    gatDays(){
        return this.lang=== "es"?
        this.daysEs:
        this.daysEn
    }

}

const weekDays = new WeekDays("es")
const weekDays2 = new WeekDays("en")

console.log(weekDays.gatDays())
console.log(weekDays2.gatDays())