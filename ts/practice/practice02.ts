// 실습문제 1) favorite1 , favorite2, favorite3에 대입된 3가지 문자열값만 관리하는 타입별칭을 1개 만드시오

type Favorite= '치킨' | '햄버거' | '피자'

const favorite1:Favorite = '치킨';
const favorite2:Favorite = '햄버거';
const favorite3:Favorite = '피자';


// 실습문제 2) 실습문제1에서 구한 타입별칭을 활용하여 아래 함수 타입을 만드시오.

function print(name:string , favorite:Favorite) : void {
    console.log(`안녕하세요 . 제 이름은 ${name}입니다. 제 최애 음식은 ${favorite}입니다,
    하나만 사주세요`);
}

type Print = (name: string, favorite: Favorite) => void;


// 실습문제 3) 다음 조건을 만족하는 Type별칭 만들기

type Academy = {
    name: 'kh',
    class: string[],
    location?: string,
    manager?: {
        name: string,
        position: string
    } // location과 manager는 들어갈 수 도 있는 속성 

}
const academy: Academy = {
    name: 'kh',
    class: ['a', 'b', 'c', 'd', 'e'],
    location: '강남',
    manager: {
        name: 'mkm',
        position:'ceo'
    }
}; 


// 실습문제 4) 다음 Object 값을 관리하는 Type별칭 만들기
// type1과 type2를 동시에 관리하는 타입별칭 1개

type Type1 = {
    mbti: string,
    feature: string[],
    vocation?: string
}

const type1:Type1 = {mbti : 'ISTP', feature : ['망상가', '공감능력 부족'], vocation : '데이터분석가'};
const type2:Type1 = {mbti : 'INTJ', feature : ['완벽주의자', '무신경']};


// type3과 type4를 동시에 관리하는 타입별칭 1개
type Type2 = {
    mbti: string, 
    bestGunghab: string[],
    worstGunghab?: string
}

const type3:Type2 = {mbti : 'ISTP' , bestGunghab : ['ESFJ', 'ESTJ'] };
const type4:Type2 = { mbti: 'ESFJ', bestGunghab: ['ISFP', 'ISTP'], worstGunghab: 'ENFJ' };


// 위에서 구한 타입별칭을 활용하여 type5를 관리할 수 있는 타입별칭 만들기
type Type3 = Type1 & Type2; // 타입간의 확장은 & 연산자로 한다. 
const type5:Type3 = {mbti : 'ISTP' , bestGunghab : ['ESFJ', 'ESTJ'], feature : ['망상가', '공감능력 부족'] }; 



//실습문제 5) 다음 조건을 만족하는 인터페이스들을 만드시오.

interface Person {
    name: string,
    married?: boolean, 
}

interface Teacher extends Person{
    major: string, 
    classRoom: string, 
    carrer: number
}

interface Singer extends Person { 
    songs: string[],
    group: string
}

// 다음 object를 보고 구현해야할 적절한 interface를 정의하시오
const mkm:Teacher = {name : 'mkm', married : false, major: 'it', classRoom : 'C' , carrer:10 };
const karina:Singer = {name : '카리나', married : false, songs: ['슈퍼노바','블랙맘바'] , group : '에스파'  };
const winter:Singer = { name: '윈터', songs: ['슈퍼노바', '블랙맘바'], group: '에스파' }


// 실습문제 6) 다음 같은 결과 값이 나오는 함수를 만든 후 함수타입도 함께 정의하시오.

type personType = {
    name: string,
    age: number,
    location:string
}
type functionType = (person: personType) => void


const fn2:functionType = ({name,age,location}) => {
    console.log(`${location}에 사는 ${name}은 ${age}살입니다.`)
}


const person:personType = {
    name : 'mkm',
    age : 35,
    location : '강남'
}

fn2(person); // 강남에 사는 mkm은 35살입니다.

// 실습문제 7) 다음 조건을 만족하는 Object 타입을 정의하시오

type CallBack = (str: string) => void; 

type objectType = {
    name: 'mkm',
    printName: (callback:CallBack) => void,
    call: () => void
}


const obj:objectType = {
    name : 'mkm', 
    printName: function(callback) {        
        callback(this.name);
    },
    call : function() {
        this.printName((something)=> {
            console.log(something);
        })
    } 
};
obj.call(); // mkm

// 실습문제 8) 다음 같은 결과 값이 나오는 함수를 만든 후 함수타입도 함께 정의하시오.

const fn = ([first, ...rest] : [number, ...number[]]) => {
    for (let i = 0; i < rest.length; i++){
        rest[i] += first;
    }
    return rest;
}

// fn([]) // error
// fn([1]); // []
// fn([1,2]); // [3]
// fn([1,2,3]); // [3,4]
// fn([1,2,3,4]); // [3,4,5]



export default Print;