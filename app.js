function onSignup() {
    // get input values
    var firstname = document.getElementById("firstname");
    var lastname = document.getElementById("lastname");
    var email = document.getElementById("email");
    var Address = document.getElementById("Address");
    var number = document.getElementById("number");
    var password = document.getElementById("password");
    var message = document.getElementById("message");

    var user = {
        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value,
        Address: Address.value,
        number: number.value,
        password: password.value,
    }


    var users = JSON.parse(localStorage.getItem("users")) || [];
    // get indx
    var userIdx = users.findIndex(function (val) {
        return val.email.toLowerCase() === user.email.toLowerCase() && val.password === user.password && val.number === user.number;
    });

    if (userIdx === -1) {
        // this user is not exist
        users.push(user);
        // store in storage
        localStorage.setItem("users", JSON.stringify(users));
        // redirect to login page
        location.href = "login.html";
    } else {
        var warning = document.createElement('div')
        var warnText = document.createTextNode("Already used in another account!")
        warning.appendChild(warnText)
        warning.setAttribute("class", "alert alert-danger d-flex align-items-center")

        message.appendChild(warning)

    }
    // clear state
    setTimeout(() => {
        message.innerHTML = "";
    }, 2000);


    // console.log(user);


}

function onLogin() {
    // get input values
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var message = document.getElementById("message");

    var user = {
        email: email.value,
        password: password.value,
    }

    var users = JSON.parse(localStorage.getItem("users")) || [];
    // get indx
    var currentUser = users.find(function (val) {
        return val.email.toLowerCase() === user.email.toLowerCase() && val.password === user.password;
    });

    if (currentUser) {
        localStorage.setItem("user", JSON.stringify(currentUser));
        // user login
        location.href = "index.html";
    } else {
        var warning = document.createElement('div')
        var warnText = document.createTextNode("Invalid credentials!")
        warning.appendChild(warnText)
        warning.setAttribute("class", "alert alert-danger d-flex align-items-center")

        message.appendChild(warning)

    }
    // clear state
    setTimeout(() => {
        message.innerHTML = "";
    }, 2000);
}

function onLogout() {
    var message = document.getElementById("message");
    localStorage.removeItem("user");
    var warning = document.createElement('div')
    var warnText = document.createTextNode("Logging Out!")
    warning.appendChild(warnText)
    warning.setAttribute("class", "alert alert-danger d-flex align-items-center")

    message.appendChild(warning)
    // clear state
    setTimeout(() => {
        location.href = "login.html";
    }, 2000);
}

function getCurrentUser() {
    var detial = document.getElementById("detial");
    var navName = document.getElementById("navName");
    var navPhone = document.getElementById("navPhone");
    var navName = document.getElementById("navName");
    var navAddress = document.getElementById("navAddress");
    var user = JSON.parse(localStorage.getItem("user"));
    detial.innerHTML = "Loggedin as " + user.email.split("@")[0];
    navName.innerHTML = "Name: " + user.firstname +user.lastname;
    navPhone.innerHTML = "Phone: " + user.number;
    navAddress.innerHTML = "Address: " + user.Address;
}

function insertButton() {
    var title = document.getElementById("title");
    var description = document.getElementById("description");
    var cardTitle = document.getElementById("cardTitle")
    var cardText = document.getElementById("cardText")

    var user = {
        title: title.value,
        description: description.value,
    }
    
    cardTitle.innerHTML = user.title;
    cardText.innerHTML = user.description;
}