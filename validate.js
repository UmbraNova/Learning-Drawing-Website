function validateForm() {

    var nameFirst = document.getElementById("nameFirst");
    var theValue = nameFirst.value

    if(theValue != "Google") {
        alert("Try again!")

        var messageHolder = document.getElementById("target");
        messageHolder.style.color = "red";
        messageHolder.innerHTML = "<h2>Write the word Google!</h2>"
        nameFirst.select();
        // nameFirst.focus();

        return false;
    }
}

document.getElementById("submit").onclick=function() {
    return validateForm();
}

document.getElementById("button1").onclick=function() {
    alert("check button 1")
}

