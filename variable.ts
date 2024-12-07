// khai báo phạm vi biến => var, const, let

// tên biến productType 

// kiểu dữ liệu của biến number, string, boolean ...

// giá trị của biến


const productType: string = "hello";

// var có thể update và có thể khai báo lại ==> js nó cơ chế bất đồng bộ khai báo var lấy cuối cùng nên k bít mấy thằng trên
var test = 123;
var test = 456;
console.log(test); //==> 456

// let có thể update nhưng không thể khai báo lại ==> khai báo ở trên ko đc bít
let test1 = 123;
let test1 = 456;
console.log(test1); // ==> 123 

// const không thể update và không thể khai báo lại

const test2 = 123;
const test2 = 456;
console.log(test2); // ==> k thể



