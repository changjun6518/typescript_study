{


    interface stack <T>{
        readonly size : number;
        push(value: T):void;
        pop():T;
    }


    type StackNode <T>= {
        readonly value: T;
        readonly next: StackNode<T>;
    }



    class StackIp <T>implements stack<T>{
        private _size:number = 0;
        private head: StackNode<T>;
        get size(){
            return this._size;
        }

        push(value: T):void{
            const node: StackNode<T> = {value, next:this.head};
            this.head = node;
            this._size++;
        }
        pop():T{
            if(this.head == null){
                throw new Error("스택에 아무것도 없습니다!");
            }
            const node: StackNode<T> = this.head;
            this.head = node.next;
            this._size--;
            return node.value;
        }
    }




    const temp = new StackIp<string>();
    const stack2 = new StackIp<number>();
    stack2.push(123);
    console.log(stack2.pop());
    temp.push("chang");
    temp.push("jun");
    temp.push('CHOI');
    // temp.push(123);
    // temp.push(true);
    console.log("=====================");
    console.log(temp.pop());
    console.log("=====================");

    console.log(temp.pop());
    console.log(temp.pop());
    console.log("=====================");
    console.log(temp.pop());
    console.log(temp.pop());

}