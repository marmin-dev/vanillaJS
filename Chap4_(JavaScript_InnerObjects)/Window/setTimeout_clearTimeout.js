let myExec;

function myFunction(){
    myExec = setTimeout(function(){console.log("5초 후 프로그램 실행");},
    5000);
}

function myStopFunction(){
    clearTimeout(myExec);
}