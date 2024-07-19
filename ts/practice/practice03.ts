// 실습문제 1) 다음 조건을 만족하는 class를 정의하시오

class Person {
    constructor(public name: string, public age: number, public address: string) {
        
    }

    introduction = () => {
        console.log(`안녕 난 ${this.name}이라고해 ${this.address}에 살고 나이는 ${this.age}야`)
    }
}


const kjh: Person = new Person("지훈", 26, "용인");
kjh.introduction();

// 실습문제 2) 다음 조건을 만족하는 class들을 정의하시오

class Pet{
    constructor(public kind: string, public name: string) {
        
    }
}

class Hamster extends Pet{
    constructor(public kind: string, public name: string, public food?: string) {
        super(kind, name);
    }

    info = () => {
        console.log(`이 햄스터는 ${this.kind}종이며, 이름은 ${this.name}입니다.`);
        if (this.food != undefined) {
            console.log(`주식은 ${this.food}를 먹습니다.`);
        }
    }
    
}

const hamzzi:Hamster = new Hamster('페디그리 햄스터', '햄찌', '해바라기씨');
hamzzi.info();
//이 햄스터는 페디그리 햄스터종이며, 이름은 햄찌입니다.
//주식은 해바라기씨를 먹습니다.

const podong:Hamster = new Hamster('골든 햄스터', '포동');
podong.info();
//이 햄스터는 골든 햄스터종이며, 이름은 포동입니다.


// 실습문제 3)  다음 Object 자료의 Type별칭을 정의하시오
// "인덱스 시그니쳐를 사용한 문법"
const coin: {
    [x:string] : string|number
} = {
    ticker : 'BTC',
    market : 'KRW',
    description : '최초의 암호화폐'
}

//1) price속성 추가
coin.price = 10000000; //ok
//2) rank속성 추가
coin.rank = 1; // ok
//3) trade속성추가
// coin.trade = true; // error
// coin.trade = undefined; // error
// coin.trade = null// error


