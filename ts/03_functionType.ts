function greet(name: string): void {
  console.log("안녕 " + name);
  // return undefined; -- 묵시적으로 존재하는 코드
}

greet("엄마");
// greet(1234);

let b =  function (): number {
  return 1;
};

function fnOptional(a: number, b?: number): number {
    
    //if (b != undefined)
    //    return a * b; // 'b 값이 undefined 값일 수 있다." -- 없을수도 있기때문에 컴파일에러
    // a 자리는 필수 속성이다.
    // b 자리는 넣어도 그만 안넣어도 그만(선택속성으로 작성한 매개변수)

    return b != undefined ? a * b : 0;
    // -> 디펜시브 프로그래밍 
}

fnOptional(1);
fnOptional(1, 2);
// fnOptional(1, 2, 3);