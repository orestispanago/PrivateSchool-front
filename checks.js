function onlyLetters(str) {
    var event = window.event || callmymethod.caller.arguments[0];
    var letters = /^[A-Za-z]+$/;
    element = document.getElementById(str)
    if (element.value.match(letters)) {
        return true;
    }
    else {
        alert(element.placeholder + " must contain only letters.");
        event.preventDefault ? event.preventDefault() : (event.returnValue = false);
        return false;
    }


}

function deltaDate(input, days, months, years) {
    var date = new Date(input);
    date.setDate(date.getDate() - days);
    date.setMonth(date.getMonth() - months);
    date.setFullYear(date.getFullYear() - years);
    return date;
}

function prettyDate(date) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    let month = monthNames[date.getMonth()];
    let day = String(date.getDate()).padStart(2, '0');
    let year = date.getFullYear();
    let output = day + " " + month + " " + year;
    return output;
}
function validBirth(date) {
    var event = window.event || callmymethod.caller.arguments[0];
    let inputdate = document.getElementById(date).value;
    let dateEntered = new Date(inputdate);
    let now = Date(Date.now());
    let legitBirthDate = deltaDate(now, 0, 0, 18);
    let minDate = document.getElementById(date).min;
    if (inputdate > minDate) {
        if (dateEntered < legitBirthDate) {
            return true;
        }
        else {
            alert("You have to be born before " + prettyDate(legitBirthDate) + " to register")
            event.preventDefault ? event.preventDefault() : (event.returnValue = false);
            return false;
        }
    }
    else {
        alert("You are too old for a course!")
        event.preventDefault ? event.preventDefault() : (event.returnValue = false);
        return false;
    }
}
function futureDate(date) {
    var event = window.event || callmymethod.caller.arguments[0];
    let now = Date(Date.now());
    let inputdate = document.getElementById(date).value;
    let dateEntered = new Date(inputdate);
    if (dateEntered > now) {
        return true;
    }
    else {
        alert("Please enter a future date")
        event.preventDefault ? event.preventDefault() : (event.returnValue = false);
        return false;
    }
}


function validTuitionFees() {
    var event = window.event || callmymethod.caller.arguments[0];
    let input = document.getElementById("inputfees");
    let feeStr = input.value;
    let regex = /^[0-9]+$/;
    if (feeStr.match(regex)) {
        let fees = parseInt(feeStr)
        let minFee = parseInt(input.min);
        let maxFee = parseInt(input.max);
        console.log(minFee)
        console.log(maxFee)
        console.log(fees)
        if (fees > minFee && fees < maxFee) {
            return true;
        }
        else {
            alert("Enter a number between " + input.min + " and " + input.max);
            event.preventDefault ? event.preventDefault() : (event.returnValue = false);
            return false;
        }
    }
    else {
        alert("Enter a number between " + input.min + " and " + input.max);
        event.preventDefault ? event.preventDefault() : (event.returnValue = false);
        return false;
    }
}
