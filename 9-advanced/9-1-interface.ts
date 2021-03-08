type PositionType = {
    x:number;
    y:number;
}

interface PositionInterface{
    x:number;
    y:number;
}

// 둘다 

//object
const obj1: PositionType = {
    x : 1,
    y : 2,
}

const obj2: PositionInterface = {
    x : 1,
    y : 2,
}

// class

class pos1 implements PositionType{
    x: number;
    y: number;
}
class pos2 implements PositionInterface{
    x: number;
    y: number;
}


// extends
interface Zpositioninterface extends PositionInterface{
    z: number;
}

type zpositiontype = PositionType & {z:number};


// interface만 됨

interface Zpositioninterface {
    asd: number;
}

// type zpositiontype = {

// }


// type만 됨
type Person ={
    name: string;
}

type Name = Person['name'];