{
    // function checkNotNull(arg: number|null):number{
    //     if(arg == null){
    //         throw new Error('not valid number');
    //     }
    //     return arg;
    // }

// generic
// 타입을 자유롭게 받아와 결정

    function checkNotNull<T>(arg:T|null):T{
        if(arg == null){
            throw new Error('not valid number');
        }
        return arg;
    }


    const result = checkNotNull(123);
    console.log(result);
    const result2 = checkNotNull("chang");
    console.log(result2);
}