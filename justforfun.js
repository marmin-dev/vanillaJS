const size = 10000;
let findE = 0;
let count =0;
for(let i=1;i<=size;i++){
    findE = i;
    let findEi = String(findE);
    let num = Array.from(findEi);
    console.log(num);
    for(let j=0; j< num.length;j++){
        console.log(num[j]);
        if(num[j]==8){
            count ++;
        }
    }
}
console.log(count);