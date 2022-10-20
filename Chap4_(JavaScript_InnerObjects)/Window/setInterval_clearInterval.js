let i = 0;
let fnc = setInterval(function(){
    console.log("3초마다 프로그램 실행 - " + i);
    if(i==3){
        clearInterval(fnc);
    }
    i++;
},3000);