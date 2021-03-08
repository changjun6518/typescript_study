{
    // class에서 generic 적용

    // either => a or b

    interface either<L, R>{
        left:()=> L;
        right:()=> R;
    }

    class SimpleEither<L, R> implements either<L, R>{
        constructor(private leftV:L, private rightV:R){}
        left():L{
            return this.leftV;
        }

        right():R{
            return this.rightV;
        }
    }

    const result = new SimpleEither(123,"chang");
    console.log(result.left());
    console.log(result.right());
}