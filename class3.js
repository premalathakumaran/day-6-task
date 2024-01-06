//3.Write a “person” class to hold all the details.
class person{
    constructor(firstName,lastName,age,gender){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    }
}
var person1 = new person("prema","latha",21,"female")
var person2 = new person("jaya","priya",20,"female") 
console.log(person1.firstName)
console.log(person2.age)