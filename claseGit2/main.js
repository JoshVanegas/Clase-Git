document.body.addEventListener("keydown", (event) => {
    
    let con = 1

    if(event.key != "Enter" && con == 1){

        intervalo = setInterval(() => {

            let r = Math.round(Math.random()* 256)
            let g = Math.round(Math.random()* 256)
            let b = Math.round(Math.random()* 256)
            document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`

            let hr = Math.round(Math.random()* 256)
            let hg = Math.round(Math.random()* 256)
            let hb = Math.round(Math.random()* 256)
            document.getElementById("h1").style.color= `rgb(${hr}, ${hg}, ${hb})`
        }, 1000)   
        con++
    }

    if(event.key == "Enter" && con > 1){
        clearInterval(intervalo)
        document.body.style.backgroundColor = "rgb(255, 255, 0)"
        document.getElementById("h1").style.color = "red"
        con--
    }
})
