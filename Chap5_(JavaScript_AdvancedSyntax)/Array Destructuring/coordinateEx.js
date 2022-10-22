let coordinate = GetCoordinate()//위치기져오는 함수라 가정
console.log(coordinate[0]);
console.log(coordinate[1]);
//이런식으로 첨자로 가져오면 혼란이 오기 쉽기때문에 
let[longitude,latitude] = GetCoordinate();
console.log(longitude);
console.log(latitude);
//이런식으로 헷갈리지 않게 가져오도록하자