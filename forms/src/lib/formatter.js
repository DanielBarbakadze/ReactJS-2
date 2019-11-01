function onlyNumber(value) {
    if(value && isNaN(value[value.length-1])){
        return true;
    }

    return false;
}


export {
    onlyNumber
}