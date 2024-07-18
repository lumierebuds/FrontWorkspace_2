class Animal {

    public age:number; 
    public name:string; 

    // public, private, protected 
    constructor(age:number, name:string) {
        this.age = age;
        this.name = name;
    }

    bark() {
        console.log("어흥");
    }
}

const khTiger = new Animal(35, 'kh 호랑이');
khTiger.bark();

class ParameterProperties { 
    constructor(public a:string, protected b:string, private c:string, readonly d:string) {
        // 생성자에 매개변수로 접근제한자를 붙인다면
        // 자동으로 필드변수로 담을 수 있게된다. 
    }

    printProperties() {
        console.log(this.a);
        console.log(this.b);
        console.log(this.c);
        console.log(this.d);
    }
}

let pp = new ParameterProperties('1', '2', '3', '4');
pp.printProperties(); 

console.log(pp["c"]); // 설계의 유연함때문에 브라켓 접근을 막지 않았다(private 접근제한자로 정의된 변수)
