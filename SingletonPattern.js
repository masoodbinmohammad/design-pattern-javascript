//Implementation

let instance = null

class SingletonClass {
    constructor() {
     this.value = Math.random(100)
    }
    printValue() {
     console.log(this.value)
    }
    static getInstance() {
     if(!instance) {
         instance = new SingletonClass()
     }
     return instance
    }
}
module.exports = SingletonClass


//Usage

const obj = SingletonClass.getInstance()
const obj2 = SingletonClass.getInstance()
const obj3 = SingletonClass.getInstance()
const obj4 = SingletonClass.getInstance()

obj.printValue()
obj2.printValue()
obj3.printValue()
obj4.printValue()
console.log("Equals:: ", obj === obj2)


