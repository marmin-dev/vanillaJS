let points = [40,100,1,5,25,10];
let sum = points.reduce(function(total,currentValue){
    return total + currentValue;
});
console.log(sum);
//181