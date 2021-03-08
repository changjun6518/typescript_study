{
    // class 만들기
    // 클래스 안에서는 맴버변수 선언할 때 const, let, function 사용 X
    // 멤버변수 접근할때 this 사용

    // static -> class 자체에 있는 변수 // 객체마다 안생김
    
    
    type CoffeeCup = {
        shots:number;
        hasMilk: boolean;
    };


    class CoffeeMaker {
        static BEAN_GRAMM_PER_SHOT = 7; // class level
        coffeeBeans: number = 0; // instance (object) level

        constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMaker{
            return new CoffeeMaker(coffeeBeans);
        }
        // static 없으면 객체내부에서 사용

        makeCoffee(shots: number): CoffeeCup {
            if(this.coffeeBeans < shots*CoffeeMaker.BEAN_GRAMM_PER_SHOT){
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEAN_GRAMM_PER_SHOT;
            return {
                shots: shots,
                hasMilk: false,
            };
        }
    };

    CoffeeMaker.BEAN_GRAMM_PER_SHOT = 
    const maker = new CoffeeMaker(32);
    console.log(maker);

    const maker2 = CoffeeMaker.makeMachine(24);
    console.log(maker2);
    maker.coffeeBeans = -123;
}