function Validator(options){

    let selectorRules = {}

    function validate(inputElement,rule){
        const errorElement= inputElement.closest(options.formGroupSelect).querySelector(options.errorSelector)
        let errorMessage

        let rules = selectorRules[rule.selector]

        for(let i=0;i < rules.length ; i++){
            switch(inputElement.type){
                case 'radio':
                    errorMessage = rules[i](formElement.querySelector(rule.selector + ':checked'))
                    break;
                default:
                    errorMessage = rules[i](inputElement.value)

            }
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
                const enableInputs = document.querySelectorAll(options.input)
                let data={}
                if(typeof options.onSubmit === 'function'){
                    Array.from(enableInputs).map(element=>{
                        switch(element.type){
                            case 'radio':
                                if(element.checked){
                                    data[element.name] = element.value
                                }
                                break;
                            default:
                                data[element.id] = element.value
                        }
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
                    const errorElement=  inputElement.closest(options.formGroupSelect).querySelector(options.errorSelector)
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
