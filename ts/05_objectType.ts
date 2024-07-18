type Person = {
    name: string,
    age: number,
}; 
type ID = string | number; 
type strOrNumberArr = (string | number)[];


let person: Person; 
person = { name: 'mkm', age: 15 };


// interface
interface Animal{
    name: string,
    kind: string,
    birth?:Date
}

type AnimalAliases = {
    name: string,
    kind: string,
    birth?:Date
}


// extends

interface Cat extends Animal{
    // name: string,
    // kind: string,
    // birth?:Date,
    food: string

}

const cat: Cat = {
    name: '나비',
    kind: 'cat',
    // birth는 추가해도되고 안해도 됨
    food: '츄르'
};

interface Bird{
    name: string;
}

interface Bird{
    wings: number;
}

let bird: Bird = { name: "새대갈", wings: 2 };

// object intersection / union 
type strOrNum = string | number;
// type strAndNum = string & number;

type Dog = AnimalAliases & { food: string };  // AnimalAliases 객체 타입의 속성을 확장할때 "&" 연산자를 쓸 수 있다.


//  HTTP 응답코드별 타입(200, 404, 500)
type SuccessResponse = {
    
    status: boolean, 
    data: any
    
}

type FailResponse = {
    
    status: boolean, 
    errorMessage: string
    
}

type Response = SuccessResponse | FailResponse; // or 연산자로 묶어줘서 둘중 하나의 타입을 가질 수 있는 "타입"을 생성했다.

type bool = boolean; 
type Num = number; // 기본자료형의 이름을 축약해서 사용 


export default Response; 