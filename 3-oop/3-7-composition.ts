{
    // Composition
    // 필요한 것을 기능별로 클래스로 만들어 가져가 씀
    type CoffeeCup = {
        shots:number;
        hasMilk: boolean;
        hasSugar?: boolean;
    };

    interface CoffeeMaker{
        makeCoffee(shots: number): CoffeeCup;
    }


    class CoffeeMachine implements CoffeeMaker{
        private static BEAN_GRAMM_PER_SHOT = 7; 
        private coffeeBeans: number = 0; 

        public constructor(coffeeBeans: number, private milk:MilkFrother, private sugar:SugarProvider) {
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
            const coffee = this.extract(shots);
            const SugarAdded = this.sugar.addSugar(coffee);
            return this.milk.makeMilk(SugarAdded);
        }
    };

    interface MilkFrother{
        makeMilk(cup:CoffeeCup): CoffeeCup;
    }

    interface SugarProvider{
        addSugar(cup:CoffeeCup):CoffeeCup;
    }

    // 싸구려 우유 거품기
    class CheapMilkSteamer implements MilkFrother{
        private steamMilk(): void{
            console.log("steam some milk...");
        }
        makeMilk(cup:CoffeeCup): CoffeeCup{
            this.steamMilk();
            return{
                ...cup,
                hasMilk: true,
            };
        }
    }
    
    // fancy milk
    class FancyMilkSteamer implements MilkFrother{
        private steamMilk(): void{
            console.log("Fancy steam some milk...");
        }
        makeMilk(cup:CoffeeCup): CoffeeCup{
            this.steamMilk();
            return{
                ...cup,
                hasMilk: true,
            };
        }
    }
    // cold milk
    class ColdMilkSteamer implements MilkFrother{
    private steamMilk(): void{
        console.log("Cold steam some milk...");
    }
    makeMilk(cup:CoffeeCup): CoffeeCup{
        this.steamMilk();
        return{
            ...cup,
            hasMilk: true,
        };
    }
    }

    class NoMilk implements MilkFrother{
        makeMilk(cup:CoffeeCup):CoffeeCup{
            return cup;
        }
    }

    // 설탕 제조기
    class CandySugarMixer implements SugarProvider{
        private getSugar(){
            console.log('Getting some sugar from candy');
            return true;
        }
        addSugar(cup:CoffeeCup):CoffeeCup{
            const sugar = this.getSugar();
            return{
                ...cup,
                hasSugar: sugar,
            };
        }
    }

    // 설탕 제조기
    class SugarMixer implements SugarProvider{
        private getSugar(){
            console.log('Getting some sugar from jar!!!');
            return true;
        }
        addSugar(cup:CoffeeCup):CoffeeCup{
            const sugar = this.getSugar();
            return{
                ...cup,
                hasSugar: sugar,
            };
        }
    }

    class NoSugar implements SugarProvider{
        addSugar(cup: CoffeeCup): CoffeeCup{
            return cup;
        }
    }




// Milk
    const cheapMilkMaker = new CheapMilkSteamer();
    const fancyMilkMaker = new FancyMilkSteamer();
    const ColdMilkMaker = new ColdMilkSteamer();
    const noMilk = new NoMilk();
    // Sugar
    const candySugar = new CandySugarMixer();
    const sugar = new SugarMixer();
    const noSugar = new NoSugar();

    const latteMachine = new CoffeeMachine(12, fancyMilkMaker, noSugar);

    const temp = latteMachine.makeCoffee(1);
    console.log(temp);


}
