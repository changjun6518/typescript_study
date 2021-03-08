{
    class TimeOutError extends Error{}
    class offLineError extends Error{}


    // error 로 구체적인 에러 표시를 하고 싶지만 try catch로 반환되는 error는 any타입
    type NetworkErrorState = {
        result: 'fail';
        reason: 'offline' | 'down' | 'timeout';
    }

    type SuccessState = {
        result: 'sucess';
    }

    type ResultState = SuccessState | NetworkErrorState;
    

    class NetworkClient{
        tryConnect(State:ResultState): ResultState{
            const result: ResultState = State;
            return result;
            // 임의로 만들어봄
        }
    }
    
    class UserService{
        constructor(private client: NetworkClient){}
    
        login(){
            this.client.tryConnect();
        }
    }
    
    
    class APP{
        constructor(private userService:UserService){}
        run(){
            try{
                this.userService.login();
            }catch(e){
                console.log('err');
            }
        }
    }
    
    const client = new NetworkClient();
    const service = new UserService(client);
    const app = new APP(service);
    
    app.run();
}