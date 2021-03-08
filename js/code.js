const firstName = document.getElementById("input-firstname");
const lastName = document.getElementById("input-lastname");
const email = document.getElementById("input-email");
const password = document.getElementById("input-password");

/*console.log(firstName.value+"hola")
*/
const regexName = /^[a-zA-ZÀ-ÿ\s]{1,40}$/
const regexSpace =/^[\s]/
const regexEmail =/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+\.[a-zA-Z]/
const regexPassword = /^.{7,26}$/

firstName.onblur = function(){
    validate(regexName,firstName);
}
lastName.onblur = function(){
    validate(regexName,lastName);
}

email.onblur = function(){
    validate(regexEmail,email);
}

password.onblur = function(){
    validate(regexPassword,password);
}

function validate(regex,input){
    if(!regexSpace.test(input.value)){
        if(regex.test(input.value)){
            input.classList.remove('invalid')
            input.classList.add('valid')       
            return;
            
        }
    }
        input.classList.remove('valid')
        input.classList.add('invalid')

}

