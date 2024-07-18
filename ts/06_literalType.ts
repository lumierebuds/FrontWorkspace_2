const PI = 3.14; 
// PI = 3.1456;

let x: 'kh 수달' |'kh 호랑이' = 'kh 수달';
x = 'kh 호랑이';
// x = 'kh 앵무새'; // 컴파일 에러 발생


function pay(name: string, price: number, method: 'card' | 'bank'): 1 | 0{

    console.log(`${name}님이 선택하신 결제방법은 ${method}이고, 가격은 ${price}입니다.`);
    return 1; // 리턴값이 0 또는 1이여야 된다. (0: 비정상 종료, 1: 정상 종료)
}

// let any2: any  = '1234';
pay('kh 웜뱃', 1000, 'card');
pay('kh 수달', 10000, 'bank');
// pay('kh 호랑이', 10000, 'point' /* any*/);

let payInfo: {
    name: string,
    price: number,
    method: 'card'|'bank'
} = {
    name: 'kh 웜뱃', 
    price: 10000,
    method: 'card' // 실제 값이 card라고 해도 타입은 'string'으로 인식되기 때문에 컴파일 에러 발생  - 타입을 지정하면 오류 사라짐
    
}


pay(payInfo.name, payInfo["price"], payInfo.method); 

let payInfo2 = {
    name: 'kh 웜뱃', 
    price: 10000,
    method: 'card' as 'card' // 축약구문 as로 'card'로 타입을 지정해줬다. 
}

pay(payInfo.name, payInfo["price"], payInfo2.method); 

let payInfo3 = {
    name: 'kh 웜뱃', 
    price: 10000,
    method: 'card' as 'card' 
} as const // readonly 로 '리터럴' 타입으로 지정된다. 


pay(payInfo.name, payInfo["price"], payInfo3.method); 
