function testScope() {
  var foo = 1; // poo, bar가 선언되어 있다.
  if (foo == 1) {
    var poo = 2;
  }

  for (var bar = 3; true; ) {
    break;
  }
  console.log(foo); // 1
  console.log(poo); // 2
  console.log(bar); // 3

  // 함수레벨스코프 : 함수 안에서 선언했던 var 변수는 그것이 if, for 블럭에서 선언되어도 밖에서 접근이 가능하다.
}

// testScope();

function testScope2() {
  const foo = 1;
  if (foo == 1) {
    let poo = 2;
  }
  for (let bar = 3; false; ) {}
  console.log(foo);
  console.log(poo);
  console.log(bar);
}

// testScope2();

const a = 1;
// a = 2;

let b = 2;
b = 4;

var fn1 = function () {
  console.log("fn1");
};

var fn1 = function () {
  console.log("new fn1");
};

fn1();

const fn2 = function () {
  console.log("new const fn1");
};

fn2();
