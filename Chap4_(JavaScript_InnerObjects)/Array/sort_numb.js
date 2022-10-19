let points = [40, 80, 1, 5, 25, 10];
points.sort(function(a,b){return a - b});
console.log(points.toString());
points.sort(function(a,b){return b-a});
console.log(points.toString());
//1,5,10,25,40,80
//80,40,25,10,5,1
