export interface Student{
    name:string
    gender:string
    contact:{ phone:string, email:string }
    course:string
    interests:{[name: string]:boolean}
    newStudent: boolean
}

const STORAGE = "com.jdc.angular.form.students"

export class StudentModel {
    private innerList:Student[] = []


    add(student:Student){
        const length = this.innerList.filter(a => a == student).length
        if(length == 0){
            this.innerList.push(student)
        }
       
        this.saveAll()
    }

    get list():Student[]{
        return this.innerList.slice()
    }

    newStudent():Student{
        const student:Student = {
            name:"",
            gender:"Male",
            contact:{phone:"", email:""},
            course:"",
            interests:{},
            newStudent: true
        }
        INTERESTS.forEach(value => student.interests[value] = false)

        return student
    }

    private saveAll(){
        const data = JSON.stringify(this.innerList)

        //save to local Storage
        if(data){
            localStorage.setItem(STORAGE, data)
        }
    }

    reload(){
        //load data to localStorage

        const data = localStorage.getItem(STORAGE)
        //convert to Json Object and assign to inner list
        if(data){
            this.innerList = JSON.parse(data)
        }
    }
}

const INTERESTS = ["Web", "Desktop", "Cloud", "Security"]

