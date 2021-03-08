{
    // type-assertion

    function jsStrFunc(){
        return "asd";
    }

    const result = jsStrFunc();
    console.log((result as string).length);
    console.log((<string>result).length);


}