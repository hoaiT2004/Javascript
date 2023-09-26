console.log("Hello!")

let sum = (a,b,callback) => {
    let tong = a+b;
    let i = 0;
    let timer = setInterval(() => {
        callback(tong)
        i++;
        if(i === 5) clearInterval(timer)
    }, 1000); //cứ 3s in ra 1 lần
    // setTimeout(() => {
    //     callback(tong)
    // }, 5000); //Đơn vị : ms(sau 5s mới hiện)
    // callback(tong);
    console.log("Đã xong") //Chạy trước sau mới đến clearInterval
}
let print = (mess) =>{
    console.log(mess);
}
sum(3,4,print)