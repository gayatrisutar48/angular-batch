export class Car{
   // public speed: number
   //public col: string

    //constructor(spd:number,col:string){
        //this.speed=spd
        //this.col=col
    //}
    
    constructor(
        private speed:number,
        private col:string 
    ){

    }
    speedup(){
console.log(this)
    }
}
let car=new Car(59, 'blue')
//car.col='red'
//car.speed=10

car.speedup()
