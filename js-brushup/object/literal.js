//These are object literal notations

let obj={
    cnt: 45,
    rect: true,
    fn: ()=> console.log(`fn`),
    inobj: {
        col:'red'
    }
}

obj.fn()
obj.inobj.col='blue'

function calc(){

    return{
        age:23
    }
}

calc().age=44

