function sum(...args){
    let total = 0;
    for(x of args){
        total += x;
    }
    return total;
}
console.log(sum(1,2,3,4,5));//15