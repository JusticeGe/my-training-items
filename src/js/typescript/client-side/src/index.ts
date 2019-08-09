let a: number = 123;

const h1 = document.createElement("h1");
h1.innerHTML = "Hello, I am Lison";
document.body.appendChild(h1);

let c: number = 1;

let b = 123;

let d: boolean = false;

let list1: number[] = [1, 2, 3];

let list2: Array<number> = [1, 2, 3];

// ?元组
let arr: [string, number, boolean, Array<number>];
arr = ['bv', 2, true, [2, 3]];
interface Tuple extends Array<number|string>{
    0: string;
    1: number;
    length: 2;
};
// ?枚举
enum Roles {
    SUPER_ADMIN = 0,
    ADMIN = 1,
    USER = 2
};

let superAdmin = Roles.SUPER_ADMIN;
console.log(superAdmin);
superAdmin = 2;
console.log( Roles,superAdmin);

enum Roles1 {
    SUPER_ADMIN = 2,
    ADMIN,
    USER
};

console.log(Roles1);
// ?any
let val:any;
val = 123;
val = 'a';
val = false;

// ?void
const consoleText=(text:string):void => {
    console.log(text)
};

// ?never
const errorFunc = (message:string):never => {
    // while(true){}
   throw new Error(message)
};

const infiniteFunc = () :never => {
    while (true){}
};

// let neverVariable = (() => {while(true){}})()

// console.log(neverVariable)

// ?unknown

let value : any;
// console.log(value.name)
// console.log(value.toFixed())
// console.log(value.length)
// // let val1 : unknown
// console.log(val1.length) object is of type 'unknown'

// ?交叉类型
const merge = <T, U>(arg1: T, arg2: U):T & U => {
    let res = <T&U>{}
    res = Object.assign({},arg1, arg2)
    return res
};
const info1 = {
    name: 'lison'
};

const info2 = {
    age: 17
};

const  lisonInfo = merge(info1,info2);

// console.log(lisonInfo.address)//   TS2339: Property 'address' does not exist on type '{ name: string; } & { age: number; }'.

const  getLength = (content: string|number) : number => {
    if(typeof content === 'string') return content.length
    else return content.toString().length
};

console.log(getLength('abv'));
console.log(getLength(123));

const s = Symbol();
console.log(typeof  s);

const s1 = Symbol('abc');
const s2 = Symbol('abc');
// console.log(s1 === s2)

enum Status{
    Uploading,
    Success,
    Failed
}
console.log(Status.Uploading);
console.log(Status.Success);
console.log(Status.Failed);

enum Color{
    Red = 2,
    Blue,
    Yellow
}

console.log(Color.Red, Color.Blue, Color.Yellow);

enum Status1{
    Success = 200,
    NotFound = 404,
    Error = 500
}

enum Status2 {
    Ok = 200,
    Created,
    Accepted,
    BadRequest = 400,
    Unauthorized
}
console.log(Status2);

const getValue = () => {
    return 0
};

enum ErrorIndex {
    a = getValue(),
    b = 1,
    c
}

const start = 1 ;

enum ErrorIndex1 {
    a = start,
    b = 1,
    c ,
}

console.log(ErrorIndex1)

