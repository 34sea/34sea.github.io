let categoria = window.document.querySelector(".categoria")
let xs = window.document.querySelector(".xs")
let normal = false
let permanece = window.document.querySelector(".permanece")
categoria.addEventListener("click", ()=>{
    if(!normal){
        permanece.classList.add("levaMenuCat")
        permanece.classList.remove("cat")
        normal = true
    }else{
        permanece.classList.remove("levaMenuCat")
        permanece.classList.add("cat")
        normal = false
    }
})

xs.addEventListener("click", ()=>{
    if(!normal){
        permanece.classList.add("levaMenuCat")
        permanece.classList.remove("cat")
        normal = true
    }else{
        permanece.classList.remove("levaMenuCat")
        permanece.classList.add("cat")
        normal = false
    }
})