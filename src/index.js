/**
 * 
 * @type {string}
 */
const studentName = 'John Doe'



/**
 * Array of grades
 * @type {Array<number>}
 */
const grades = [12, 34, 45, 43.3]



/**
 * Todo object
 * @type {{id: number|string, text: string}}
 */
const todo = {
    id: 1,
    text: 'hello'
}


/**
 * Calculate tax
 * @param {number} amount - Total amount
 * @param {number} tax - Tax percentage
 * @returns {string} - Total with a dollar sign
 */
const calculateTax =  (amount, tax)  =>{
    return `$${amount+tax+amount}`
}


/**
 * A student
 * @typedef {Object} Student
 * @property {number} id - Student ID
 * @property {string} name - Student name
 * @property {string|number} [age] - Student age
 * @property {boolean} isActive - Student whether active
 */

 /**
  * @type {Student}
  */
const student = {
    id: 1,
    name: 'Johm Doe',
    age: 20,
    isActive: true
}




/**
 * Class to create a person object
 */
class Person{
    /**
     * @param {Object} personInfo Information about the person
     */
    constructor(personInfo) {
        /**
         * @property {string} name Persons name
         */
        this.name = personInfo.name
        /**
         * @property {string} age Person's age 
         */
        this.age = personInfo.age
    }

    /**
     * @property {Function} greet A greeting
     * @returns void
     */
    greet() {
        console.log(`Hello my name is ${this.name}`);
        
    }
}

/**
 * Person one
 * See {@link Person}
 */
const person1 = new Person({
    name: 'John Doe',
    age: 30
})

