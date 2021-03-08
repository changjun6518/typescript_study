{
    type CoffeeCup = {
        shots:number;
        hasMilk: boolean;
    };

    const BEAN_GRAMM_PER_SHOT = 7;

    let coffeeBeans: number = 0;
    function makeCoffee(shots: number): CoffeeCup {
        if(coffeeBeans < shots*BEAN_GRAMM_PER_SHOT){
            throw new Error('Not enough coffee beans!');
        }
        coffeeBeans -= shots * BEAN_GRAMM_PER_SHOT;
        return {
            shots: shots,
            hasMilk: false,
        };
    }

    coffeeBeans += 3*BEAN_GRAMM_PER_SHOT;
    const coffee = makeCoffee(2);
    console.log(coffee);
    console.log(coffeeBeans);
}