let mbcnt=10
console.log(document.getElementById('dvMbs'))
let dvMbs=document.getElementById('dvMbs')

for ( let i=0;i<mbcnt;i++){
let ipMb=document.createElement('input')
ipMb.type='number'
ipMb.onmouseenter=function(){
    console.log(`Entered`)
    ipMb.style.background=magicColor()
}
dvMbs.appendChild(ipMb)
}

function magicColor(){

    let r=Math.random()*255
    let g=Math.random()*255
    let b=Math.random()*255

    return `rgb(${r}, ${g}, ${b})`

}