const xhr = new XMLHttpRequest();
xhr.open('POST','/posts');
//HTTP Method, URL 정의, 비동기 여부(기본 값 true)
xhr.setRequestHeader("content-type","application/json");

const data = {
    id:2,
    title: "XHLHttpRequest",
    author:"Marmin",
};

xhr.send();

xhr.onload = () =>{
    if(xhr.status === 200){//정상적으로 응답되면 status가 200
        const res = JSON.parse(xhr.response);//응답 데이터를 JSON.parse 함수로
        //JSON객체로 변경
        console.log(res);
    }else{//에러발생
        console.error(xhr.status, xhr.statusText);
    }
}