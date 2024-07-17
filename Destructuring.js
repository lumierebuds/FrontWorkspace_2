let arr = [1, 2, 3];
let a = arr[0];
let b = arr[1];
let c = arr[2];
// 이전에는 배열 인덱스별로 하나하나 넣었다.

let [d, e, f, g] = arr;
// console.log(d, e, f, g);

// 이후에는 배열에서 순서대로 값을 꺼내서 넣어주도록 한다.
// 순서에 해당되지 않는 값이 있다면 오류가 발생하지 않고 'undefined'로 처리된다.

const obj = {
  foo: 1,
  bao: 2,
};

// const foo = obj.foo;
// const bao = obj["bao"];
// 기존의 객체의 값을 담아주는 방법

const { foo, bao } = obj;
// const {foo, bao} = {foo : 1, bao : 2}
console.log(foo, bao);

console.log("===============================");
const sample_arr = [1, 2, 3, 4];
const sample_obj = {
  name: "jihun",
  job: "developer",
};

function test(a, ...rest) {
  // 나머지 파라미터

  console.log(rest);
}

test();
test(1);
test(1, 2, 3);
test(...sample_arr); // 전개 연산자

const copy_arr = sample_arr; // 얕은 복사
const copy_arr2 = [...sample_arr]; // 깊은 복사 -> [1,2,3,4]

const human = sample_obj; // name: 'jihun', job : 'developer'
const human2 = { ...sample_obj }; // 깊은 복사

// ------------------------------------------
// 구조분해할당과 REST 문법의 조합
const array = [1, 2, 3, 4];
const [first, ...rest] = array;
// first = 1, rest = [2, 3, 4]

const person = {name: "jihun", job: "developer", firstName: "kim" };
const { firstName, ...rest2 } = person;
console.log(firstName, rest2);
// rest2 = {name='jihun', job : 'developer'}

function printPerson({ one, two, ...rest }) {
  console.log(one); // undefined (값이 없어서 undefined)
  console.log(two); // undefined
  console.log(rest); // person 객체가 나옴.
}

printPerson(person);
// const {one, two, ...rest3} = person;
