/**
 * Let's make a calculator 🧮
 */
type cal = "add" | "substract" | "multiply" | "divide" | "remainder";

function calculate(tool:cal, a:number, b:number){
    if(tool==="add"){
        return a+b;
    }
    else if(tool==="substract"){
        return a-b;
    }
    else if(tool==="multiply"){
        return a*b;
    }
    else if(tool==="divide"){
        return a/b;
    }
    else if(tool ==="remainder"){
        return a%b;
    }


    // switch로 해보자
};


console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1
