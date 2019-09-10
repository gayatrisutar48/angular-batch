import {Animal} from './animal';
import { GpsListener } from './gps-listener';
export class Lion extends Animal implements GpsListener{ //Is is "is a relationship"
size:number
weight:number

run(){
    super.run()
    console.log(`Tiger is running`)
}
locate(lat:number,lng:number){

}

}

let lion=new Lion()
lion.run()

lion.locate(56,89)

lion.cont='India'
lion.food='carn'
lion.isRpt=false
lion.size=80
lion.weight=100