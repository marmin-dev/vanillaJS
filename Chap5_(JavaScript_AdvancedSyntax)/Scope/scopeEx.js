function myFunction(){
    let carName = "Volvo";
    console.log(carName);//Volvo
}

myFunction();

//console.log(carName); 에러발생 함수밖에서 선언된 carName
//은 함수밖에서 접근이 불가능하다

let carName2 = "Mazda";

function myFunction2(){
    console.log(carName2);
}

myFunction2();//Mazda