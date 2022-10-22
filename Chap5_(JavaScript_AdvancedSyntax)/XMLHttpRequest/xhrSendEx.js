const xhr = new XMLHttpRequest();
xhr.open('POST','/posts');
//HTTP Method, URL 정의, 비동기 여부(기본 값 true)
xhr.setRequestHeader("content-type","application/json");

const data = {
    id:2,
    title: "XHLHttpRequest",
    author:"Marmin",
};

xhr.send(JSON.stringify(data));
//JSON.stringify를 통해 오브젝트 데이터를 문자열 형태로 변경해서 전송