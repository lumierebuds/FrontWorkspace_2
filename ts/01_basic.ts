// 타입주석
// let 변수명 : 타입

let num: number; // int num;
num = 12345;
// num = "12345";
num = num * 1; // 산술연산에는 number 자료형의 값만 넣어야한다.

// 배열 타입 주석
// typeof [] ==> object
let animals: string[]; // 문자열 배열 타입
animals = ["hamster", "cat"];

// 객체 타입 주석
let animal: { name: string };
animal = { name: "햄스터" };

// 타입추론 - 대입되는 값을 기준으로 타입이 추론된다.
let animal2 = { name: "cat" };
// animal2 = {name: 'dd', age:1234} -- 오류 발생

// 튜플?
// 값 여러개를 한꺼번에 묶어준다

let numArr: number[];
numArr = [1, 2, 3];
console.log(numArr[0]);
console.log(numArr[1]);
console.log(numArr[2]);
console.log(numArr[3]); // undefined

numArr = [1, 2, 3, 4];

let numTuple: [number, number, number]; // 값의 개수를 정해준 후 받을 수 있다.
numTuple = [1, 2, 3];
console.log(numTuple[2]);
// console.log(numTuple[3]);

let tuple: [number, string, boolean];
tuple = [1, "kh", true];

tuple.push(4);
tuple.splice(0, 1); // 정적인 타입검사만 하기때문에 추가되는것은 검사하지 않는다.
console.log(tuple);

let readonlyTuple: readonly [number, string, boolean];
readonlyTuple = [1, "kh", true];

// readonlyTuple.push(4); // 메서드가 사라짐. 원본값을 변형시키는 메서드가 없음
console.log(readonlyTuple);

let readonlyObject: { readonly name: string; age: number };
readonlyObject = { name: "kh", age: 11 };
// readonlyObject.name = 'mkm'; // readonly로 정의한 값은 바꿀 수 없게 만들었다. 
readonlyObject.age = 15;