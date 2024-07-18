
type UserList = {
    [x :string] : { // 인덱스 시그니쳐 구문  : 모든 속성에 일괄적으로 적용한다. 
        name: string,
        age: number,
        interest: string[]
    }
}

const responseData:UserList = {
    "user01": {
        name: "kh 호랑이",
        age: 50,
        interest : ['낮잠']
    }, 
    "user02": {
        name: "kh 수달",
        age: 5,
        interest : ['수영']
    }
}

type Class = {
    [x: string]: string | number ,
    studentCount: number
}   

const responseData2: Class = {
    name: 'kh academy',
    classRoom: 'C CLASS', 
    teacher: 'mkm',
    student: '...',
    // ....
    studentCount : 30
}

// ReturnType : ts Utility Type. - 리액트에서 사용한다.


function foo(): {a:number, b:number} {
    return {a:1, b:2}
}

type FooReturnType = ReturnType<typeof foo> // foo함수의 반환형 타입을 가져온다.



type A = {
    a: string
}

type B = {
    b: number
}

function checkIn(obj: A | B) {
    // obj.a, obj.b 
    if ("a" in obj) {
        return obj.a;
    }
    else if("b" in obj){
        return obj.b;
    }
    return 1;
}

const date = new Date(); 
console.log(date instanceof Date);