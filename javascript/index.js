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


function Validator(options){

    let selectorRules = {}

    function validate(inputElement,rule){
        const errorElement= inputElement.parentElement.querySelector(options.errorSelector)
        let errorMessage

        let rules = selectorRules[rule.selector]

        for(let i=0;i < rules.length ; i++){
        errorMessage = rules[i](inputElement.value)
        if(errorMessage) break

        }
        if(errorMessage){
            errorElement.innerText= errorMessage
            inputElement.classList.add('invalid')
        }else{
            errorElement.innerText= ''
            inputElement.classList.remove('invalid')
        }
        return !errorMessage
    }

    const formElement= document.querySelector(options.form)
    if(formElement){
        formElement.onsubmit=function(e){
            e.preventDefault()
            
            let formIsValid = true 

            options.rules.forEach(rule=>{
                const inputElement= formElement.querySelector(rule.selector)
                let isValid = validate(inputElement,rule)
                if(!isValid){
                    formIsValid=false
                }
                
            })
            if(formIsValid){
                const enableInputs = document.querySelectorAll('.form__input')
                let data={}
                if(typeof options.onSubmit === 'function'){
                    Array.from(enableInputs).map(element=>{
                        return data[element.id] = element.value
                    })
                }
                options.onSubmit(data)
                alert(`Dear Mr/Mrs ${data.fullname} 
                We received your kind heart and all poverty children around the world would be thankful for your love
                Thank you for your support !! <3
                `)
            }else{
                console.log(false)
            }
            
        }




        options.rules.forEach(rule=>{
            const inputElement= formElement.querySelector(rule.selector)
            if(Array.isArray(selectorRules[rule.selector])){
                selectorRules[rule.selector].push(rule.test)
            }else{
                selectorRules[rule.selector] = [rule.test]
            }
            
            if(inputElement){
                inputElement.onblur=function(){
                    validate(inputElement,rule)
                }
                inputElement.oninput=function(){
                    const errorElement= inputElement.parentElement.querySelector(options.errorSelector)
                    errorElement.innerText= ''
                    inputElement.classList.remove('invalid')
                }
            }
        })
    }
}

Validator.isRequired = (selector)=>{
    return {
        selector,
        test: (value)=>{
            return value ? undefined : 'Please fill this form'
        }
    }
}
Validator.isEmail = (selector)=>{
    return{
        selector,
        test: (value)=>{
            const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return regex.test(value) ? undefined : 'Please fill a valid email'
        }
    }
}
Validator.isNumber = (selector) => {
    return{
        selector,
        test:(value)=>{
            const regex= /^[0-9]*$/
            return regex.test(value) ?  undefined : 'This field must be NUMBER value'
        }
    }
}


