{


    interface stack {
        readonly size : number;
        push(value: string):void;
        pop():string;
    }


    type StackNode = {
        readonly value: string;
        readonly next: StackNode;
    }



    class StackIp implements stack{
        private _size:number = 0;
        private head: StackNode;
        get size(){
            return this._size;
        }

        push(value: string):void{
            const node: StackNode = {value, next:this.head};
            this.head = node;
            this._size++;
        }
        pop():string{
            if(this.head == null){
                throw new Error("스택에 아무것도 없습니다!");
            }
            const node: StackNode = this.head;
            this.head = node.next;
            this._size--;
            return node.value;
        }
    }




    const temp = new StackIp();
    
    temp.push("chang");
    temp.push("jun");
    temp.push('CHOI');
    console.log("=====================");
    console.log(temp.pop());
    console.log("=====================");

    console.log(temp.pop());
    console.log(temp.pop());
    console.log("=====================");
    console.log(temp.pop());

}