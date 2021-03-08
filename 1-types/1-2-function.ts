{
    // //JavaScript
    // function jsAdd(num1,num2){
    //     return num1 + num2;
    // }

    // // TypeScript
    // function add(num1:number, num2:number):number{
    //     return num1+num2;
    // }

    // //JavaScript
    // function jsFetch(id){
    //     // code..
    //     return new Promise((resolve, reject)=>{
    //         resolve(100);
    //     });
    // }

    // // TypeScripe
    // function fetch(id:string):Promise<number>{
    //     return new Promise((resolve, reject)=>{
    //         resolve(100);
    //     });
    // }


    // Optional parameter
    function printName(firstName: string, lastName?: string){
        console.log(firstName);
        console.log(lastName);
    }
    printName('asd', 'jjj');
    printName('Elee');


    // Default parameter
    function printMessage(message: string = 'Default message'){
        console.log(message);
    }

    printMessage();

    // Rest parameter
    function addNumber(...numbers:number[]):number{
        return numbers.reduce((a,b)=>a+b);
    }

    console.log(addNumber(1,2,3,4,5,6,));

}