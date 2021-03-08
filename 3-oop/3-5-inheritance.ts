{
    // inheritance
    type CoffeeCup = {
        shots:number;
        hasMilk: boolean;
    };

    interface CoffeeMaker{
        makeCoffee(shots: number): CoffeeCup;
    }


    class CoffeeMachine implements CoffeeMaker{
        private static BEAN_GRAMM_PER_SHOT = 7; 
        private coffeeBeans: number = 0; 

        public constructor(coffeeBeans: number) {
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
    }


    const machine = new CoffeeMachine(23);
    const latteMachine = new CaffeLatteMachine(23, "라떼는말야");

    const coffee = latteMachine.makeCoffee(1);
    console.log(coffee);
    console.log(latteMachine.serialNumber);

}
