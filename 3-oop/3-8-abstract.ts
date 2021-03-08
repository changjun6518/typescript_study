{
    // abstract
    // 부모 클래스에서 abstract 지정하고 자식에서는 그 함수를 꼭 만들어줘야함
    type CoffeeCup = {
        shots:number;
        hasMilk?: boolean;
        hasSugar?: boolean;
    };

    interface CoffeeMaker{
        makeCoffee(shots: number): CoffeeCup;
    }


    abstract class CoffeeMachine implements CoffeeMaker{
        private static BEAN_GRAMM_PER_SHOT = 7; 
        private coffeeBeans: number = 0; 

        constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
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

        protected abstract extract(shots: number): CoffeeCup;

        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }
    };


    class CaffeLatteMachine extends CoffeeMachine{
        //자식 클래스에서 생성자 만들때 super꼭 불러와야하고 인자도 전달
        constructor(beans: number, public readonly serialNumber: string){
            super(beans);
        }

        private steamMilk():void{
            console.log('Steaming some milk...');
        }
        makeCoffee(shots:number): CoffeeCup{
            const coffee = super.makeCoffee(shots);
            this.steamMilk();
            return{
                ...coffee, // ??
                hasMilk:true,
            };
        };
        protected extract(shots: number): CoffeeCup{
            this.steamMilk();
            return {
                shots,
                hasMilk: true,
            };
        }
    }

    class SweetCoffeMaker extends CoffeeMachine{
        protected extract(shots: number): CoffeeCup{
            return {
                shots,
                hasSugar: true,
            };
        }
    }

    // 다형성
    // 한가지 interface 구현하거나
    // 동일한 부모 클래스 상속했을때
    // 여러 클래스들이 공통된 api사용가능
    const machines : CoffeeMaker[]= [
        new CaffeLatteMachine(16, "1"),
        new SweetCoffeMaker(16),
        new CaffeLatteMachine(16, "1"),
        new SweetCoffeMaker(16),
        new CaffeLatteMachine(16, "1"),
        new SweetCoffeMaker(16),
    ]
    // coffeeMaker안터페이스의 배열로 만들기 가능

    machines.forEach(machine => {
        console.log('=================');
        machine.makeCoffee(1);
    })
}
