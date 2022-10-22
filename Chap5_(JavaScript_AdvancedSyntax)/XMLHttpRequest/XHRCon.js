const xhr = new XMLHttpRequest();
xhr.open('GET','/posts');
//HTTP Method, URL 정의, 비동기 여부(기본 값 true)
xhr.setRequestHeader("content-type","application/json");
