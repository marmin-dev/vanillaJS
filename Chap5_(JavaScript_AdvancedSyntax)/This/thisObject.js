let person ={
    firstName: "Marmin",
    lastName: "Park",
    fullName: function(){
        return this.firstName+" "+this.lastName;
    }
};
console.log(person.fullName());//Marmin Park