 {
     // JavaScript
     // let
     // const
    //  let name = "hello";
    //  name = "hi";

    //  const age = 10;
    //  age = 8;

     /*
        JavaScript
        Primitive : number, string, boolean, bigint, symbol, null, undefined
        Object: function, array ....
     */

    // number
    const num:number = 1;
    
    const str: string = 'hello';

    const boal: boolean = true;

    let age: number | undefined;

    age = 1;
    age = undefined;
    let name: string | null;

    // unknown
    let notSure: unknown = 0;
    notSure = 'he';
    notSure = true;

    //any
    let anything: any=0;
    anything = 'hello';

    // void
    function print(): void{
        console.log('hello');
        return
    }
    
    // never
    function throwError(message: string): never{
        // message =>server (log)
        throw new Error(message);
        while(true){}
    }

    //object
    let obj:object;
    function acceptSomeObject(obj: object){}
    acceptSomeObject({name:'chang'});
    acceptSomeObject({animal: 'dog'});
 }