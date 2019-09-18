function fnrtn(){

    console.log(`fnrtn called`)
    function infun(){
console.log(`Inner fun`)

    }
    return infun
}
let infun=fnrtn() //1)fun can be assigned to variable
console.log(infun)
infun()
fnrtn()()

function fnrtnlambda(){
    console.log(`fnrtnlambda`)//function can return another funcrion
    return()=> console.log(`lambda returned`)
}

let=()=>()=> console.log(`lambda return`)   //lamda returning another lambda