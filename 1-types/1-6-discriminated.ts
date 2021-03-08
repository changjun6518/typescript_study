{
   
    // function login
    type SuccessState = {
        result: 'success',
        response: {
            body: string;
        };
    };
    type FailState = {
        result: 'fail',
        reason: string;
    };

    type LoginState = SuccessState | FailState;

    function Login_check(): LoginState{
        return {
            result: 'success',
            response: {
                body: 'logged in!',
            },
        };
    };


    function printLoginState(state: LoginState){
        if(state.result === 'success'){
            console.log(`${state.response.body}`); // con
        }
        else{

        }
    }

}