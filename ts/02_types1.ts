// 1. any type
let any: any = undefined;
any = 1;
any = "mkm";

let str: string;
let num: number;
let undef: undefined;

str = any;
num = any;
undef = any;

// 2. unknown Type
let unknown: unknown;
unknown = 1;
unknown = "mkm";

// str = unknown; // unknown 형식의 값은 타입이 정해진 변수에 대입할 수 없다.
// num = unknown;


// 3. union type
let stringOrNumber: string | number;
stringOrNumber = "Union Type";
stringOrNumber = 12345;
// stringOrNumber = true;

let unionArr: (string | number | boolean)[];
unionArr = [1, 2, 3, 4, 5, "7", "8", "9", "10", true, false];;


export { str };
