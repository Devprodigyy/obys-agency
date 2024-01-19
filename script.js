gsap.from(".load h1",{
    y:130,
    duration:0.7,
    delay:0.2,
    stagger:0.2
})

var timer = document.querySelector("#timer h4")
var grow = 0
var int = setInterval(function(){
    if(grow<100){
        grow++
        timer.innerHTML = grow
    }
},40)

setTimeout(function(){
    clearInterval(int)
},4000)