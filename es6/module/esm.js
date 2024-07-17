function sayHi() {
  console.log("hello module");
}

// export { sayHi };

const abc = "abcde";
export { sayHi, abc };

export const fn1 = (a) => {
    console.log(a);
} 

export function fn2(b) {
    console.log(b);
}

export default abc;  // 기본 디폴트 내보내는 값 : 한개만 작성할 수 있다. 