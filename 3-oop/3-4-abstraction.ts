{
    // abstraction
    // private으로 정보은닉을 통해 심플하게 만들면서 사용자가 이용하기 편하게 만듬

    type CoffeeCup = {
        shots:number;
        hasMilk: boolean;
    };

    // 계약서 같은
    interface CoffeeMaker{
        makeCoffee(shots: number): CoffeeCup;
    }

    interface CommercialCoffeeMaker{
        makeCoffee(shots:number): CoffeeCup;
        fillCoffeeBeans(beans: number):void;
        clean(): void;
    }

    // 이 클래스는 위 인터페이스를 구현하는 (인터페이스의 함수를 모두 구현해야함)
    class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker{
        private static BEAN_GRAMM_PER_SHOT = 7; 
        private coffeeBeans: number = 0; 

        private constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMachine{
            return new CoffeeMachine(coffeeBeans);
        }

        fillCoffeeBeans(beans: number){
            if(beans < 0){
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
        }

        clean(){
            console.log("cleaning!!!");
        }

        private grindBeans(shots: number){
            console.log(`grinding beans for ${shots}`);
            if(this.coffeeBeans < shots*CoffeeMachine.BEAN_GRAMM_PER_SHOT){
                    throw new Error('Not enough coffee beans!');
                }
            this.coffeeBeans -= shots * CoffeeMachine.BEAN_GRAMM_PER_SHOT;
        }

        private preheat():void{
            console.log('heating up ...!');
        }

        private extract(shots: number): CoffeeCup{
            console.log(`Pulling ${shots} shots...`);
            return {
                shots,
                hasMilk: false,
            };
        }

        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }
    };


    const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);

    maker.fillCoffeeBeans(32);
    // const maker2: CoffeeMaker = CoffeeMachine.makeMachine(32);
    // maker2.makeCoffee(2);


    // maker.makeCoffee(2);
    // maker.fillCoffeeBeans(23);
    



    // 사용자는 복잡한 클래스 기능 알 필요없이 interface만 어떻게 사용하면 되는지
    class AmateurUser{
        constructor(private machine: CoffeeMaker){}
        makeCoffee(){
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee);
            this.machine.makeCoffee
        }
    }

    class ProBarista{
        constructor(private machine: CommercialCoffeeMaker){}
        makeCoffee(){
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee);
            this.machine.fillCoffeeBeans(45);
            this.machine.clean();
            
        }
    }

    const maker3: CoffeeMachine = CoffeeMachine.makeMachine(32);
    const ama = new AmateurUser(maker3);
    const pro = new ProBarista(maker3);

    ama.makeCoffee();
    pro.makeCoffee();
}
