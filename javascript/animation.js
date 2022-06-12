
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

