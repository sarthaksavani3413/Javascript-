let users = JSON.parse(localStorage.getItem('users')) || [];

const addUser = () => {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (users.some(user => user.email == email)) {
        alert("Email already exists! Use another one.");
        return;
    }

    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert("Registration Successful!");
    window.location.href = "./login.html";
};

const loginUser = () => {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];
    let user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert("Login Successful!");
        localStorage.setItem("currentuser", JSON.stringify(user));
        window.location.href = "./index.html";
    } else {
        alert("Invalid email or password");
    }
}


const logoutUser = () => {
    localStorage.removeItem('currentUser');
    window.location.href = "./login.html";
};
