let persons =[{
    name: "Marmin",
    point: "80"
},
{
    name: "Ian",
    point: "74"
},
{
    name: "Chris",
    point: "43"
},
{
    name: "Marc",
    point: "95"
}
];
persons.sort(function(a,b){
    return a.point - b.point;
});
let personPoint =[];
for(i=0 ; i<4 ; i++){
    personPoint[i] = persons[i].point;
}
console.log(personPoint.toString());
//43,74,80,95