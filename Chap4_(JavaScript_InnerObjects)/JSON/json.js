let data = {
    "employees":[
        {"firstName":"John", "lastName":"Doe"},
        {"firstName":"Anna", "lastName":"Smith"},
        {"firstName":"Peter", "lastName":"Jones"}
    ]
};

let stringValue = JSON.stringify(data); //객체를 문자열로 변환

let text = '{"employees":['+
'{"firstName":"Jhon","lastName":"Doe"},'+
'{"firstName":"Anna","lastName":"Smith"},'+
'{"firstName":"Peter","lastName":"Jones"} ]}';

let obj = JSON.parse(text);//문자열 형태의 JSON을 Obj로 전환

