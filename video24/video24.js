console.log("Hello")
let a = [1,2,3,4,5]
let dem = 0;
while(dem !== a.length-1){
let b = a.find(item => item >= 1)
dem++;
console.log(b)
}


let arr = [
    {name : "Hòa",age:18},
    {name : "Hòang",age:58},
    {name : "An",age:28},
    {name : "My",age:17},
    {name : "Nam",age:19}
]
let sum = arr.filter(item => item.age >= 18)
console.log(sum)

let sum2 = arr.filter((item,index) => {
    return item && item.age ===18 
});
console.log(sum2)

