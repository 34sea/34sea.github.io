let banner = window.document.querySelector(".banner")
let esq = window.document.querySelector(".esq")
let rightc = window.document.querySelector(".rightc")
let playSlide = window.document.querySelector(".playSlide")
let tituloBanner = window.document.querySelector(".tituloBanner")
let publiP = window.document.querySelector(".publiP")
let btnShop = window.document.querySelector(".btnShop")
let mudaImge = false

let conteudo = {
    "primeiro": {
        "titulo": "Eletrônicos Incríveis",
        "corpo": "Ofertas imperdíveis em smartphones, laptops, gadgets e muito mais. Compre agora e eleve sua tecnologia ao próximo nível!",
        "link": "#",
        "imagem":"../img/headerBanner/eletronica/eletronicav2.png"
        
    },
    "segundo": {
        "titulo": "Tênis esportivo",
        "corpo": "Leve sua performance esportiva a um novo patamar com os nossos tênis esportivos de alta qualidade.",
        "link": "#",
        "imagem":"../img/headerBanner/Esporte/tenisv4.png"
    }
}

esq.addEventListener("click", ()=>{
    if(!mudaImge){
        banner.style.backgroundImage = `url(${conteudo.segundo.imagem})`
        tituloBanner.innerText = `${conteudo.segundo.titulo}`
        publiP.innerText = `${conteudo.segundo.corpo}`
        btnShop.href = `${conteudo.segundo.btnShop}`
        mudaImge = true
    }else{
        banner.style.backgroundImage = `url(${conteudo.primeiro.imagem})`
        tituloBanner.innerText = `${conteudo.primeiro.titulo}`
        publiP.innerText = `${conteudo.primeiro.corpo}`
        btnShop.href = `${conteudo.primeiro.btnShop}`
        mudaImge = false
    }
   
})

rightc.addEventListener("click", ()=>{
    if(mudaImge){
        banner.style.backgroundImage = `url(${conteudo.primeiro.imagem})`
        tituloBanner.innerText = `${conteudo.primeiro.titulo}`
        publiP.innerText = `${conteudo.primeiro.corpo}`
        btnShop.href = `${conteudo.primeiro.btnShop}`
        mudaImge = false
    }else{
        banner.style.backgroundImage = `url(${conteudo.segundo.imagem})`
        tituloBanner.innerText = `${conteudo.segundo.titulo}`
        publiP.innerText = `${conteudo.segundo.corpo}`
        btnShop.href = `${conteudo.segundo.btnShop}`
        mudaImge = true
    }
    
})

let tmp = setInterval(mudaimagem, 15000)
let click = false
let mmnm = false

playSlide.addEventListener("click", ()=>{
    alert(click)
    if(click==true){
        tmp = setInterval(mudaimagem, 15000)
        click=false
    }else{
        clearInterval(tmp)
        click=true
    }
})

function mudaimagem(){
    if(mudaImge){
        banner.style.backgroundImage = `url(${conteudo.primeiro.imagem})`
        tituloBanner.innerText = `${conteudo.primeiro.titulo}`
        publiP.innerText = `${conteudo.primeiro.corpo}`
        btnShop.href = `${conteudo.primeiro.btnShop}`
        mudaImge = false
    }else{
        banner.style.backgroundImage = `url(${conteudo.segundo.imagem})`
        tituloBanner.innerText = `${conteudo.segundo.titulo}`
        publiP.innerText = `${conteudo.segundo.corpo}`
        btnShop.href = `${conteudo.segundo.btnShop}`
        mudaImge = true
    }
}


