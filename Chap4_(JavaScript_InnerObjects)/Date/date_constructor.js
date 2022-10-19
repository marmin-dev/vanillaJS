//new Date()
let now = new Date();
console.log(now);

//new Date(year, month, day, hours, minutes, seconds,
//milliseconds)
let d = new Date(2022, 9 ,19, 9, 49, 30, 0);
console.log(d);//특정 날짜 시간을 지정하여 새로운 날짜 생성

//new Date(milliseconds)
let d2 = new Date(0);
let d3 = new Date(1000000000);
console.log(d2);
console.log(d3);

//new Date(date String)
let d4 = new Date("Octover 19,2022 21:53:00");
console.log(d4);