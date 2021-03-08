
// try catch finally
// try 한번 실행해보고
// catch 에러있으면 실행하는 구간
// finally 에러있든 없든 무조건 실행

function readFile(fileName: string): string{
    if(fileName == "not file"){
        throw new Error(`not file ${fileName}`);
    }
    return 'file contents';
}

function closeFile(fileName: string){
    //
}

function run(){
    
    const file = 'not file';
        try{
            console.log(readFile(file));
        }catch(e){
            console.log('catched');
            return;
        }finally{
            closeFile(file);
            console.log("finally");
        }
        // closeFile(file);
        // console.log("finally");

}

run();