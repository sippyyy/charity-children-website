document.querySelector('.home-section').style.height = window.innerHeight + 'px'

homeFormSection = document.querySelector('.home-form')

if(window.innerWidth >= 740 && window.innerWidth <= 1000 ){
    homeFormSection.classList.add('row-reverse')
    homeFormSection.classList.remove('column-reverse')
}if( window.innerWidth > 1000){
    homeFormSection.classList.remove('row-reverse')
    homeFormSection.classList.remove('column-reverse')
}if(window.innerWidth >= 740 && window.innerWidth <= 1000 ){
    homeFormSection.classList.add('row-reverse')
}if(window.innerWidth < 740){
    homeFormSection.classList.add('column-reverse')
}

window.addEventListener('resize',function(){
    document.querySelector('.home-section').style.height = window.innerHeight + 'px'

    if(window.innerWidth >= 740 && window.innerWidth <= 1000 ){
        homeFormSection.classList.add('row-reverse')
        homeFormSection.classList.remove('column-reverse')
    }if( window.innerWidth > 1000){
        homeFormSection.classList.remove('row-reverse')
        homeFormSection.classList.remove('column-reverse')
    }if(window.innerWidth >= 740 && window.innerWidth <= 1000 ){
        homeFormSection.classList.add('row-reverse')
    }if(window.innerWidth < 740){
        homeFormSection.classList.add('column-reverse')
    }

})

// ANIMATION 

const homeSectionContent = document.querySelector('.home-section-2__left')
const volunteerBlocks = document.querySelectorAll('.section-4__block-cover')
const titleVolunteer = document.querySelector('.section__title-volunteer')
const raiseBlock =document.querySelector('.section-3__cover')
const homeSection5 = document.querySelector('.home-section-5__container')
const homeCausesSection = document.querySelector('.section__causes-container')
const homeBabySection = document.querySelector('.section-2__container')
const commentSectionHome = document.querySelector('.section__comment')
const sectionBlogsHome = document.querySelectorAll('.blog__home-container')

window.addEventListener("scroll",function(){
    if(this.window.scrollY >= 150 && homeSectionContent){
        homeSectionContent.classList.add('active')
    }
    if(this.window.scrollY > 2300){
        volunteerBlocks.forEach(element=>{
            element.classList.add('active')
        })
        titleVolunteer.classList.add('active')
    }
    if(this.window.scrollY > 800 && raiseBlock){
        raiseBlock.classList.add('active')
    }
    if(this.window.scrollY > 1200 && homeCausesSection){
        homeCausesSection.classList.add('active')
    }
    if(this.window.scrollY > 1900 && homeSection5){
        homeSection5.classList.add('active')
    }
    if(this.window.scrollY > 3300 && homeBabySection){
        homeBabySection.classList.add('active')
    }
    if(this.window.scrollY > 2800 && commentSectionHome ){
        commentSectionHome.classList.add('active')
    }
    if(this.window.scrollY > 3800 && sectionBlogsHome ){
        sectionBlogsHome.forEach(element=>{
            element.classList.add('active')
        })
    }
})

// FORM

const selectResult= document.querySelector('.selection__result')
const selections = document.querySelector('.form__selections')
const selectOptions = document.querySelectorAll('.form__selection')

selectResult.onclick=function(){
   if(selections.classList.contains('active')){
        selections.classList.remove('active')
   }else{
        selections.classList.add('active')
   }
}

selectOptions.forEach(element=>{
    element.onclick=function(){
        selectResult.value= element.textContent
        selections.classList.remove('active')
    }
})




