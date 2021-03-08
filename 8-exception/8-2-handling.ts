{
    class NetworkClient{
        tryConnect(): void{
            throw new Error('no network');
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

    // 어디서 핸들링 하는 것이 적합한가
    // APP단계에서 처리할 수 있을 때 핸들링하는것이 좋다
    // 어디서 문제인지 알고 잘 설명할 수 있는 곳에서 에러처리하기

    const client = new NetworkClient();
    const service = new UserService(client);
    const app = new APP(service);

    app.run();
}