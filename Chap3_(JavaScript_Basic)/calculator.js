function add(n1, n2){
    return n1 + n2;
}
function subtract(n1,n2){
    return n1 - n2 ;
}
function multiple(n1,n2){
    return n1 * n2;
}
function divide(n1,n2){
    return n1/n2;
}
function calculator(n1, n2, operator){
    if(operator == "+"){
        return add(n1,n2);
    }
    else if(operator == "-"){
        return subtract(n1,n2);
    }
    else if(operator == "*"){
        return multiple(n1,n2);
    }
    else if(operator == "/"){
        return divide(n1,n2);
    }
}