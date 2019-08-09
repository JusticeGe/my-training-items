let tuple: [string, number, boolean];
tuple = ['a', 2, false];
// tuple = ['a',2];
interface Tuple extends Array<number|string>{
    0: string;
    1: number;
    length: 2
}

enum Roles {
    SA = 0,
    A = 1,
    U = 2
}