function onlyLetters(str) {
    var letters = /^[A-Za-z]+$/;
    element = document.getElementById(str)
    if (element.value.match(letters)) {
        return true;
    }
    else {
        alert(element.placeholder + " must contain only letters.");
    }
}