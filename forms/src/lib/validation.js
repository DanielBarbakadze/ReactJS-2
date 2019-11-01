function minLengthError (value, params) {
    const {
        minLength = 0, 
        message = 'Error in length validation'
    } = params;
    if(value && value.length < minLength){
        return message
    }
    
}

export {
    minLengthError
}