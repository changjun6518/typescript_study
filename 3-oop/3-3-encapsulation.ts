{
    // encapsulation 
    // 내용일부 은닉
    
    type CoffeeCup = {
        shots:number;
        hasMilk: boolean;
    };


    //public
    //private
    //protected -> 클래스를 상속한 자식 클래스만 사용가능

    class CoffeeMaker {
        private static BEAN_GRAMM_PER_SHOT = 7; // private 외부에서 수정 불가
        private coffeeBeans: number = 0; 

        private constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMaker{
            return new CoffeeMaker(coffeeBeans);
        }

        fillCoffeeBeans(beans: number){
            if(beans < 0){
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
        }

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

    // const maker = new CoffeeMaker(32);
    const maker = CoffeeMaker.makeMachine(32);
    maker.fillCoffeeBeans(32);
    maker

    // set 변수값을 할당하는 목적의 함수이기 때문에 인자 받음
    // get 변수값을 반환하는 목적의 함수이기 때문에 return 필요

    class User{
        // private firstName: string;
        // private lastName: string;
        // fullName: string;
        get fullName(): string{
            return `${this.firstName} ${this.lastName}`;
        }
        private internalAge = 4;
        get age():number{
            return this.internalAge;
        }
        set age(num: number){
            if(num<0){
                //유효성검사
            }
            this.internalAge = num;
        }

        constructor(private firstName: string, private lastName: string){
            this.firstName = firstName;
            this.lastName = lastName;
            // this.fullName = `${firstName} ${lastName}`;
        }
    }


    const user = new User('chang', 'jun');
    console.log(user.fullName);
    // user.firstName = 'CCC';
    // console.log(user.fullName);

    user.age = 16;
    console.log(user.age);
}