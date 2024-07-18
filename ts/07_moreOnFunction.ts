function print(str: string): void{
    console.log(str);
}

type Print = (s: string) => void; // 타입별칭을 사용해 매개변수, 반환형의 타입 지정가능 
const print2 : Print =  (str: string) => {
    console.log(str);
}

function hello(callback:(s: string) => void): void{
    callback("hello ts");    
}

const hello2 = (callback: (s: string) => void) : void => {
    callback("hello ts");
}

const hello3: (callback: (s: string) => void) => void
    =(callback: (s: string) => void): void => {
    callback("hello ts");
} // 엄청 복잡하게 만들 수 있다. 

hello(print2);

type PrintFunction = (s: string) => void; 
type HelloFunction = (callback: PrintFunction) => void; 

const hello4: HelloFunction = (callback) => {
    callback("hello ts"); 
} // 복잡한 구문을 간단하게 만들었다.

hello4(print2);

// restParameter
function restParameter(...m:number[]) { // number값이 아닌 다른 타입의 값들이 들어가면 안된다. 
    console.log(m);
}

restParameter();
restParameter(1);
restParameter(1, 2);
// restParameter(1, 2, "하이"); - 에러 발생

const spreadArr = [1, 2, 3, 4, 5]; // 1,2,3,4,5
restParameter(...spreadArr); 


function normalFn(a: number, b: number) {
    console.log(a, b);
}

const spreadArr2 =  [11, 22] as const;  
normalFn(13, 14);
normalFn(...spreadArr2); // 배열은 가변 데이터이기 때문에 오류가 발생한다. 따라서 타입이 튜플이여야한다.

// 
function objectDestructuringFn({ a, b, c }: {a:number, b:string, c:boolean}){
    console.log(a, b, c); 
}

function arrayDestructuringFn([a,b,c] : [number, string, boolean]) {
    console.log(a, b, c);
}

function arrayDestructuringFn2([a, ...rest]: [a: number, ...rest: number[]]) {
    console.log(a, rest); 
}

arrayDestructuringFn2([1, 2, 3, 4]);


const obj = {
    a: 1,
    b: '2',
    c: true
};

objectDestructuringFn(obj);

function objectDFn2({ a, ...rest }: {
    a: number,
    [x:string] : number | boolean | string // 객체의 추가 문법에서 더 자세히 배우게 될것이다. 
    
}) {
    console.log(a, rest);
}

objectDFn2(obj);