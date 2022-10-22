let arr1 = [4,5,6];
let arr2 = [1,2,3];
let arr3 = [...arr2, ...arr1];
//배열의 데이터 요소 하나하나 분해해서 새로운 배열에 요소로 전달
console.log(arr3);//1,2,3,4,5,6
let cd = "cd";
let ab = ['a','b',...cd];
console.log(ab);