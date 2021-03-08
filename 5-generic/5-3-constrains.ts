interface Employee{
    pay(): void;
}

class FulltimeEmployee implements Employee{
    pay(){
        console.log('full time!');
    }
    workFullTime(){

    }
}

class PartTimeEmployee implements Employee{
    pay(){
        console.log('part time!');
    }
    workPartTime(){

    }
}

// function pay(employee: Employee): Employee{
//     employee.pay();
//     return employee;
// }

// -> generic에 제한을 건다  // extends Employee를 확장한 것만 가능하도록
function pay<P extends Employee>(employee: P):P{
    employee.pay();
    return employee;
}

const ellie = new FulltimeEmployee();
const bob = new PartTimeEmployee();

const ellieAfterPay = pay(ellie);
const bobAfterPay = pay(bob);





// const object = {
//     name: 'ellie',
//     age: 20,
// };

// const object2 = {
//     animal:'cow',
// };

// console.log(getValue(object,'name'));
// console.log(getValue(object2,'animal'));

// // keyof 오브젝트에 있는 Key중 하나로 제한

// function getValue<T, K extends keyof T>(object:T, key:K): T[K]{
//     return object[key];
// }

