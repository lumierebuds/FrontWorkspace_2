// 이전 함수 선언 방식
function declareFn(a, b) {
  return a * b;
}

// 함수 표현식 - 값으로 처리
const declareFn2 = function (a, b) {
  return a * b;
};

// 화살표 함수(기본형태)
const declareFn3 = (a, b) => {
  return a * b;
};

const declareFn4 = (a, b) => a * b;

const declareFn5 = (a) => a;

// -- this

function callableFn() {
  console.log(this.name);
}
// callableFn(); // global

const obj1 = {
  name: "객체1",
  call: callableFn,
};

const obj2 = {
  name: "객체2",
  call: callableFn,
};

// obj1.call();
// obj2.call();

const arrowFn = () => {
  console.log(this);
};

// arrowFn();

const obj3 = {
  name: "객체3",
  call: arrowFn,
};

// obj3.call();

// 화살표 함수 this 바인딩
const obj4 = {
  name: "객체4",
  arrowFn: function () {
    // console.log(this.name);
    const getName = () => {
      return this.name; // obj4
    };

    // 상위요소의 속성을 사용할때 클로저처럼 사용할 때
    const getName2 = function () {
      return this; // global
    };

    console.log(getName());
    console.log(getName2());
  },
};

// obj4.arrowFn();

// 콜백 함수

const obj5 = {
  name: "객체5",
  fn: function (callback) {
    callback();
  },
  call: function () {
    this.fn(function () {
      // 익명함수는 this값이 동적으로 결정된다.
      // 따라서, 함수를 호출하는 객체가 없어 최상위 객체인 global이 바인딩된다.
      console.log(this.name);
      console.log(this);
    });
  },
};

// obj5.call();

const obj6 = {
  name: "객체6",
  call: function () {
    // this -> obj6
    // setTimeout(() => {
    //   console.log(this.name); // 객체6
    // }, 1000);
    const callback = function () {
      console.log(this.name); // undefined
      };
      
    setTimeout(callback.bind(this), 1000);
  },
};

obj6.call();

// 일반함수 this 강제 바인딩
const obj7 = {
  name: "객체7",
  callableFn: function () {
    console.log(this.name);
    console.log(arguments); // 매개인자 : callableFn 함수를 호출할때 들어간 값들을 출력
  },
};

obj7.callableFn();
obj7.callableFn.call(obj1, 1, 2, 3, 4);
// call : this를 정적으로 바인딩 시켜주면서 해당함수를 호출한다.
// 2번째 매개변수부턴 나머지 연산자로 인자를 받아준다.

obj7.callableFn.apply(obj2, [1, 2, 3, 4]);
// apply : this를 정적으로 바인딩 시켜주면서 해당함수를 호출한다.
// 2번째 매개변수 부터는 배열형태로 인자를 받아준다.

obj7.callableFn.bind(obj3)();
// bind : this값만 바인딩 해주고, 함수를 호출하지는 않아준다.
// () 를 붙여주면 함수를 호출한다.
