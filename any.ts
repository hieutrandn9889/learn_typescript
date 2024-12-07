

/**
   * dùng any để sử dụng title
   * 
*/


interface HieuTran{
    title: string,
    old: number
}
// tạo object name với any
let name: any = {
    title:'Hello',
    old: 25
}
let title: object = name

console.log(title);

export{};