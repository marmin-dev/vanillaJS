let person ={
    firstName: "Jeremy",
    lastName: "Go",
};
let getFullName = Symbol("getFullName");//유일한 key생성
person[getFullName] = function(){
    return this.firstName+" "+this.lastName;
};
for(const key in person){
    console.log(key);
}

console.log(person[getFullName]());