class Person {
        constructor(name, age){
            this.name = name;
            this.age = age;
        }

        greeting(){
            console.log(`Name is : ${this.name} and and age is ${this.age}`);
        }
}

module.exports = Person;