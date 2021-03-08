/**
 * Let's make a game 🕹
 */

 

let position ={
    x:0,
    y:0
}

console.log(position); // { x: 0, y: 0}
move('up');
console.log(position); // { x: 0, y: 1}
move('down');
console.log(position); // { x: 0, y: 0}
move('left');
console.log(position); // { x: -1, y: 0}
move('right');
console.log(position); // { x: 0, y: 0}
move("asd");

type direction = "up"|"down"|"left"|"right";

function move(dir:direction){
    switch (dir){
        case "up":
            return position.y++;
        case "down":
            return position.y--;
        case "left":
            return position.x--;
        case "right":
            return position.x++;
        default:
            throw new Error("unknown error");
    }
};