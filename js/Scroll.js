/*Efeito Scroll*/
let nav = window.document.querySelector(".nav")
let parte2 = window.document.querySelector(".parte2")
let loginFlu = window.document.querySelector(".loginFlu")
let c=true
window.addEventListener("scroll", ()=>{
	if(window.pageYOffset>900){
		nav.style.position="fixed"
        nav.style.width="100%"
        nav.style.top="0px"
        parte2.style.marginRight="120px"
        if(c){
            loginFlu.style.display="flex"
        }
		console.log(`window.pageYOffset`)
	}else if(window.pageYOffset==0){
		nav.style.position="static"
        nav.style.width="auto"
        parte2.style.marginRight="0px"
	}
})

let tiraLogin = window.document.querySelector(".tiraLogin")
tiraLogin.addEventListener("click", ()=>{
    loginFlu.style.display="none"
    c=false
})