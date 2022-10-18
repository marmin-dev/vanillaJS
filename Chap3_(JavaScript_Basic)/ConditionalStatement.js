let age = 15;
let busFare = null;
if(age<7){
    busFare = 0;
}
else if(8<= age && age <=13){
    busFare = 450;
}
else if(14 <= age && age <= 19){
    busFare = 720;
}
else if(20<=age && age <= 70){
    busFare = 1200;
}
else{
    busFare = 0;
}
console.log(busFare);