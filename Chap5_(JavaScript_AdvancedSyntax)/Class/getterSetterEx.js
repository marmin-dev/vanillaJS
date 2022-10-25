class Car{
    constructor(modelName, modelYear, type, price){
        this.modelName = modelName;
        this.modelYear = modelYear;
        this.type = type;
        this.price = price;
    }
    getModelName(){
        return this.modelName;
    }
    getModelYear(){
        return this.modelYear;
    }
    getType(){
        return this.type;
    }
    getPrice(){
        return this.price;
    }
    setModelName(){
        return this.modelName;
    }
    setModelYear(){
        return this.modelYear;
    }
    setType(){
        return this.type;
    }
    setPrice(){
        return this.price;
    }
}
let huracan = new Car("Huracan","2022","A","40000");
console.log(huracan.getModelYear());

class EVCars extends Car {
    constructor(modelName,modelYear,type,price,chargeTime){
        super(modelName,modelYear,price,chargeTime);
        this.chargeTime = chargeTime;
    }

setChargeTime(time){
    this.chargeTime = time;
    }
getChargeTime(){
    return this.chargeTime;
    }
}