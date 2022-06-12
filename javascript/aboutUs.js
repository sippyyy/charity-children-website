const volunteerBlocks = document.querySelectorAll('.section-4__block-cover')

const titleVolunteer = document.querySelector('.section__title-volunteer')
const commentSection = document.querySelector('.section__comment')
const raiseBlock =document.querySelector('.section-3__cover')

window.addEventListener("scroll",function(){
    if(this.window.scrollY >= 800 && volunteerBlocks){
        volunteerBlocks.forEach(element=>{
            element.classList.add('active')
        })
        {titleVolunteer && titleVolunteer.classList.add('active')}
    } if(this.window.scrollY >= 1235 && commentSection){
        commentSection.classList.add('active')
    }

    if(this.window,scrollY> 300){
        raiseBlock.classList.add('active')
    }
})