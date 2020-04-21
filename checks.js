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


function validBirth(date) {
    var eighteenYearsAgo = moment().subtract(18, "years");
    var birthday = moment(date);

    if (!birthday.isValid()) {
        alert("Invalid Date of Birth");
    }
    else if (eighteenYearsAgo.isAfter(birthday)) {
        return true;
    }
    else {
        alert("Invalid Date of Birth");
    }
}

function tuitionFeesRange() {
    var fees = document.getElementById("inputfees");
    if (fees.validity.rangeUnderflow) {
        alert("Enter a positive number!");
    }
    else if (fees.validity.rangeOverflow) {
        alert("Enter a number below 9999");
    }
}

function tuitionFeeMin() {
    if (document.getElementById("inputfees").validity.rangeUnderflow) {
        alert("Please enter a positive number!")
    }
}
