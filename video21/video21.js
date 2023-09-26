console.log("Hello world!")

function sum(a,b){
    return a+b;
}

let res = (a,b) => {
    return a-b;
}
console.log(res(3,4));

    document.getElementById("demo").innerHTML = res(3,2)