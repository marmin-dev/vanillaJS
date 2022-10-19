let userList = [{
    firstName: "Martin",
    lastName: "Park",
    age: "23"
},
{
    firstName: "Marc",
    lastName: "Lee",
    age: "24"
},
{
    firstName: "Jachul",
    lastName: "Koo",
    age: "46"
},
{
    firstName: "Kay",
    lastName: "Oh",
    age: "95"
}];
let userList2 = userList.map(function(user){
    return{
        fullName: user.firstName + user.lastName,
        age: user.age
    }
});
