let shareButtonOne = document.querySelector(".share");
let shareButtonTwo = document.querySelector(".shareb");

let shareMenu = document.querySelector(".sharemenu");



shareButtonOne.onclick = function (e){
    shareMenu.classList.toggle("open")
    e.stopPropagation()
}

shareButtonTwo.onclick = function (e){
    shareMenu.classList.toggle("open")
    e.stopPropagation()
}

shareMenu.onclick = function(e){
    e.stopPropagation()
}

document.addEventListener("click",(e)=>{
    if(e.target !==shareButtonOne && e.target!== shareButtonTwo && e.target !== shareMenu){
        if(shareMenu.classList.contains("open")){
            shareMenu.classList.remove("open")
        }
    }
})