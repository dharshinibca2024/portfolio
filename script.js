function openForm() {
    document.getElementById("popup").style.display = "flex";
}

function closeForm() {
    document.getElementById("popup").style.display = "none";
}

function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();
    let error = document.getElementById("error");

    error.innerHTML = "";  

    if (name === "") {
        error.innerHTML = "Please enter your name";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        error.innerHTML = "Please enter a valid email";
        return;
    }

    if (phone.length !== 10 || isNaN(phone)) {
        error.innerHTML = "Phone number must contain 10 digits";
        return;
    }

    if (message === "") {
        error.innerHTML = "Please enter your message";
        return;
    }

    alert("Details submitted successfully!");
    closeForm();
}