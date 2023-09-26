let obj = {
    name : "Hòa",
    getName : function() {
        return this.name;
    }
}
sum = (a,b)=>{
    a = 3;
    b = 5;
    return a+b
}
console.log(obj.getName())
console.log(sum(3,4))