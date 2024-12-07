

/**
   * dùng unknow k sử dụng title
   * 
*/

interface HieuTran{
    title: string,
    old: number
}
// tạo object name với any
let name: unknown = {
    title:'Hello',
    old: 25
}
let title: object = name

console.log(title);

export{};