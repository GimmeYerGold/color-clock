var timetext = document.querySelector("h1")


document.querySelector("#time").addEventListener('mouseover',function(){

	timetext.innerHTML = "FFFFFF"

})

document.querySelector("#time").addEventListener('mouseout',function(){

	timetext.innerHTML = "16:59:59"

})