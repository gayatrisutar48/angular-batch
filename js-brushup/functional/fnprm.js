function fnprm(fn){
fn()
}

function prm(){

    console.log(`this fn coming as parameter`)
    
}
fnprm(prm)   // fun can be returned as parameter

fnprm(function (){
    console.log(`anonymous function`)

})
fnprm(()=>console.log(`lambda prm`))