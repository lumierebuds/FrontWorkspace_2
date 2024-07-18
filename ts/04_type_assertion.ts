// type assertion
function typeAssertion(strOrNumber: string | number): number{
    return strOrNumber as number;
    // return <number>strOrNumber;
}

// console.log(typeof typeAssertion('1234'));

function typeAssertion2(number?: number): number{
    return number!; // not null or assertion 
}

// console.log(typeAssertion2());

// narrowing
function typeNarrowing(strOrNumber: string | number): void{
    if (typeof strOrNumber == 'string') {
        // string 타입으로 확정 
        console.log(strOrNumber);
    }
    else if (typeof strOrNumber == 'number') {
        // number 타입으로 확정 
        console.log(strOrNumber);
    }
    else {
        // never 타입 : 절대 도달할 수 없는 값
        console.log(strOrNumber);
        let value: never;
        value = strOrNumber;
        throw new Error('Unexpected Value : ' + value);
    }
}

let any: any = true;
typeNarrowing(any);


// 예외처리 함수 
function UnexpectedValueException(value: never) : never  {
    throw new Error(`Unexpected Value : ${value}`);
    // return undefined;
}


function fnNever(){
    while (true) {
        
    }

    return undefined; 
}