let mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(1);
mySet.add(4);
console.log(mySet.size);
console.log(mySet.has(1));
mySet.delete(1);
console.log(mySet.size);
mySet.forEach(function (item){
     console.log(item);
});
//4 true 3 2,3,4