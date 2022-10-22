function getPerson() {
return{
    firstName:"Marmin",
    lastName:"Park",
    age:37,
    email:"lal@gmail.com",
    city:"Seoul"
};
}
let{firstName,lastName} = getPerson();
console.log(firstName);
console.log(lastName);
function displayFullName({firstName, lastName}){
    console.log(`${firstName}${lastName}`);
}
displayFullName(getPerson());