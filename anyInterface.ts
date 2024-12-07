// Không dùng any
// let name: string = 'hello';


/**
   * dùng any
   * 
   * let name: any = 'hello';
   * 
   * name = 30
   * 
   * console.log(name);
*/

interface HieuTran{
    title: string,
    old: number
}
// tạo object name
let name: HieuTran = {
    title:'Hello',
    old: 25
}
console.log(name.old);
console.log(name.title);

export{};