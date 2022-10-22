//함수 선언식
function hello(nameIn){
    return "Hello" + nameIn;
}
//함수 표현식
const hello1 = function(nameIn){
    return "Hello" + nameIn;
};
//위의 일반적인 함수 표현은 아래 화살표 함수로 쓸수 있다
const hello2 = (nameIn) => {return "Hello" + nameIn};

//파라미터가 하나만 있을 때는 주변 괄호를 생략할 수 있다
const hello3 = nameIn => {return "Hello" + nameIn};

//화살표 함수의 유일한 문장이 "return"일 때 'return'과
//중괄호({})를 생략이 가능하다
const hello4 = nameIn => "Hello" + nameIn;