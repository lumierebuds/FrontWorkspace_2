// 실습문제 1) 타입 주석 작성해보기1

let animal: string[];
animal = ["panda", "cat", "wombat", "frog", "hamster"];

let human: { name: string; age: number; height: number; married: boolean };
human = { name: "mkm", age: 25, height: 180.5, married: false };

// 실습문제 2) 타입주석 작성해보기2

let zoo: {
  animals: string[],
  total: number,
  isClosed: boolean,
  location: string,
  masterInfo: {
      name: string,
      age: number,
      height : number
  }
};

zoo = {
  animals: ["panda", "cat", "wombat", "frog", "hamster"],
  total: 120,
  isClosed: false,
  location: "용인",
  masterInfo: {
    name: "mkm",
    age: 25,
    height: 180.5,
  }
};

// 실습문제 3) 조건에 만족하는 타입 만들기 
const response: readonly [number, string] = [200, "response success"];

// [200 , "response success"]
// [404, "Page not found"]
// [500, "server error"]

// 실습문제 4) 다음 조건에 맞는 타입 지정하기
// array 변수는 튜플이 아닙니다.

let array: (number | string | boolean | undefined | object)[];
array = ['mkm', 12345, true];
array.push({ name: 'mkm' });

// 실습문제 5) 자료형 맞추기

//Q1. test1이라는 변수에는 undefined를 넣을 수 있습니다.
//    '1234'라는 값도 넣을수 있죠.
//    1234를 넣으면 컴파일 에러가 발생하네요.
//    true값을 넣어도 컴파일 에러가 발생하네요.
//    test1의 타입은 무엇일까요?
//    => (undefined | string) 인 Union Type 
let test1: (undefined| string)  = undefined; // ok
test1 = '1234'; // ok
test1 = 1234; // compile error
test1 = true; //compile error

//Q2. test2에는 true값을 넣을수 있습니다.
//    test1에 test2변수를 넣을수도 있죠.
//    test2는 UnionType은 아니고 , boolean타입 또한 아닙니다.
//    test2는 무슨 타입일까요?
//    => 'any 타입' 

let test2 : any = true; // boolean(x) , UnionType(x)
test1 = test2; // ok

//Q3. test3에는 undefined값을 넣을수 있습니다.
//    test1에 test3을 넣으면 에러가 발생하네요
//    test3은 undefined타입이나 Union Type은 아닙니다.
//    test3의 타입은 무었일까요?
//    => 'unknown 타입' 

let test3 : unknown = undefined; // undefined (x) , UnionType(x)
test1 = test3; // compile error


// 실습문제 6) 다음 함수의 타입을 정의하시오
// a,b는 숫자값만 들어온다. 

const apply = (a:number,b:number) : number => a+b;

// 실습문제 7) racoonInfo함수 생성하기
// 파라미터와 반환형 설정도 직접작성 추가하기

let data: string;

const racoonInfo = (name:string, weight:number, sex:string, neutering?:boolean): string => {
    
    let result: string; 
    result = neutering != undefined ? `이름 : ${name} , 무게 : ${weight}, 성별 : ${sex}, 중성화 : ${neutering}` :
                                      `이름 : ${name} , 무게 : ${weight}, 성별 : ${sex}`;
    return result;
}
 
data = racoonInfo('podong' , 10, 'male', true );
console.log(data);//이름 : podong , 무게 : 10 , 성별 : male, 중성화 : true
data = racoonInfo('coco',4, 'female' );
console.log(data);//이름 : coco , 무게 : 4 , 성별 : female


// 실습문제 8) sum함수의 몸통부분을 완성하시오
// arrray -> array1으로 변경 
const array1:(string|number)[] = ['1',2,3,4,'5'];
function sum(array: (string|number)[]) : number {
    let sum: number = 0; 

    array.forEach(element => {
        if (typeof element === 'string') {
            sum += parseInt(element);
        }
        else {
            sum += element;
        }
    });

    return sum;
}
const total = sum(array1);
console.log(total); // 15

// 실습문제 9) 다음 조건을 만족하는 함수를 완성하시오

// 매개변수로는 다음 데이터유형들이  전달됩니다.
// abc('11'), abc('12') , abc(['11','12','13','14'])
// 매개변수로 들어온 데이터가 string이라면 number자료형값을,  string[]이라면 number[]값을 반환합니다.
// 반한시킬 데이터는 전달받은 값이 '11'이라면 11, '12'라면 12, ['11','12','13','14'] 라면 [11,12,13,14]


function abc(x:(string|string[])) : (number|number[]){

    if (typeof x == 'string') {
        return parseInt(x);
    }
    else {
        let arr = x.map(Number);
        return arr;
    }
}
console.log(abc('11'));
console.log(abc(['11', '12', '13']));


export { animal };
