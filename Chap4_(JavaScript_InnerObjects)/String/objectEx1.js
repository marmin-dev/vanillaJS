let person = new Object();//빈 객체 생성

person.firstName = "Jhon";
person.lastName = "Doe"; // 멤버 설정

person.age = 1200;
person.getFullName = function(){
    return this.firstName + " " + this.lastName;
};
console.log(person.getFullName());