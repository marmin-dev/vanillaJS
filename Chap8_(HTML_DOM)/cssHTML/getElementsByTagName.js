let elements = document.getElementsByName("chk_interest");
let checked_items =[];
for(let i = 0;i<elements.length;i++){
    if(elements[i].checked){
    checked_items.push(elements[i]);
    }
}