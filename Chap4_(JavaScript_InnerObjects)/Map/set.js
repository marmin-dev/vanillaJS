let userMap = new Map();
userMap.set("name","Marmin");
userMap.set("email","avc@naver.com");
userMap.set("phone","010-1010-1010");
console.log(userMap.size);
console.log(userMap.get("email"));
console.log(userMap.has("name"));
userMap.delete("phone");
console.log(userMap.has("phone"));
// userMap.clear();
// console.log(userMap.size);
userMap.forEach(function(key){
    console.log(key);
});
