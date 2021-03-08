{
    // union type : OR

    type Direction = 'left' | 'right' | 'up' | 'down';
    function move(direction: Direction){
        console.log(direction);
    }
    move('up');


    // function login
    type SuccessState = {
        response: {
            body: string;
        };
    };
    type FailState = {
        reason: string;
    };
    type LoginState = SuccessState | FailState;
    function Login_check(): LoginState{
        return {
            response: {
                body: 'logged in!',
            },
        };
    }


    function printLoginState(state: LoginState){
        if('response' in state){
            state.response.body; // con
        }
        else{

        }
    }

}