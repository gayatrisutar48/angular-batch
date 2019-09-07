// fun can be assigned to variable 
// fun can be passed as parameter
// fun can be returned



function fn(){
console.log(`fn called`)
console.log(this) //global 
}

let fnvar=fn

console.log(fnvar)
fn()
fnvar()

let fnvar1=function(){
console.log(`fnvar1 called`)    
}

console.log(fnvar1)
fnvar1()

let fnlambda=()=>{
    console.log(`Lambda called`)//fat arrows 11 12 13 line is equal to 18 line
console.log(this)
}
fnlambda()

