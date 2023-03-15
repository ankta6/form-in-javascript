function  showMessage(input,type,message){
    const msg = input.parentNode.querySelector("small")
    msg.innerTest = message;
    input.className = type ? "success" : "error"
    return type;

}

function showError(input, massage){
    return showMessage(input,massage,false)

}



function showSuccess(input){
    return showMessage(input, "",true)
}

function hasvalue(input,massage){
    if(input.value.trim() ===""){
        return showError(input,massage)
    }
    return showSuccess(input);
}

function emailValid (){
    
}