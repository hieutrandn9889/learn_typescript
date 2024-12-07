// Xác định thuộc tính, kiểu dữ liệu, phương thức
// Có thể merge nhiều thuộc tính, kiểu dữ liệu, phương thức
// Là thực thể có những phương thức và hành vi nhưng không có định nghĩa

//  getName: () => string ==> phương thức
interface IProduct{
    name: string;
    price: string;
    getName: () => string;
}

interface IProduct{
    name: string;
    price: string;
    getName: () => string;
}

interface IProduct{
    count: string;
}

// kiểu dữ liệu IProduct ==> xác định
// name: "test", ==> thuộc tính, kiểu dữ liệu string
// count:"test Count", ==> merge dữ liệu
const product: IProduct = {
    name: "test",
    price: "2020",
    getName() {
        return this.name + "Xin chào" // những phương thức và hành vi nhưng không có định nghĩa
    },
    count:"test Count",
}

console.log(product.getName());
console.log(product.name);
console.log(product.count);