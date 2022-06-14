
// CAUSES PAGE

const causesRow2 = document.querySelector('.causes__group-2')
const causesRow1 = document.querySelector('.causes__group-1')



window.addEventListener("scroll",function(){

    // CAUSES PAGE ANIMATION

    if(this.window.scrollY > 300 && causesRow2){
        causesRow2.classList.add('active')
    }
    if(this.window.scrollY >= 0 && causesRow1){
        causesRow1.classList.add('active')
    }
})

const navBtn  = document.querySelector('.nav__button')
const navBtnActive = document.querySelector('.nav__button.active')
const navList = document.querySelector('.nav__list')

navBtn.onclick=function(){
    if( navBtn.classList.contains('active')){
        navList.classList.remove('active')
        navBtn.classList.remove('active')
        navBtn.style.right = '0px'
    }else{
        navList.classList.add('active')
        navBtn.classList.add('active')
        navBtn.style.right = `${navList.offsetWidth}px`
    }
}



