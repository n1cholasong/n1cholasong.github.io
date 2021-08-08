// Loads the state of login to be reflected on each site
loaded();

// ========== Login-SignUp & Profile Window ==========
function openLogin() {
  document.querySelector(".login-popup").style.display = "flex";
};

function closeLogin() {
  document.querySelector(".login-popup").style.display = "none";
};

function openSignUp() {
  document.querySelector(".signup-popup").style.display = "flex";
};

function closeSignUp() {
  document.querySelector(".signup-popup").style.display = "none";
};

function openProfile() {
  document.querySelector(".profile-popup").style.display = "flex";
};

function closeProfile() {
  document.querySelector(".profile-popup").style.display = "none";
};

// ========== Profile Page ==========
function updateDisplay(username) {
   document.getElementById('displayHead').innerHTML = username;
   document.getElementById('displayProfile').innerHTML = `Hi, ${username}!`
};

function showProfile() {
  document.querySelector(".account-buttons").style.display = "none";
  document.querySelector(".account-menu").style.display = "flex";
};

// ========== Login Status ==========
function createSession(username) {
  var state = {username: username, loggedIn: true};
  sessionStorage.setItem(username, true);
};

// Ends session when logged out
function logout() {
  document.querySelector(".account-buttons").style.display = "flex";
  document.querySelector(".account-menu").style.display = "none";
  closeProfile()
  alert("You have logged out of Chess Planet. See you next time!")
  sessionStorage.clear();
};

// Logged In Status
function loaded() {
  for (var i in sessionStorage) {
    var key = sessionStorage.key(i);
    var value = sessionStorage.getItem(key);
    console.log(key, value); // for debuging
    if (value === "true") {
      updateDisplay(key);
      showProfile();
    }
  }
};

// Account my version
var data = localStorage.getItem("users");

if (!data) {
  data = [];
} else {
  data = JSON.parse(data);
}

var accountExists = (accounts, username, password) => {
  for (var i in accounts) {
    if (accounts[i]["username"] == username && accounts[i]["password"] == password) {
      return true;
    }
  }
  return false; // Return false once it loop throughs everything.
};

var usernameExists = (accounts, username) => {
  for (var i in accounts) {
    if (accounts[i]["username"] == username) {
      return true;
    }
  }
  return false;
};

// ========== Login Menu ==========
var loginForm = document.getElementById('login');

loginForm.addEventListener('submit', function(e) {
  e.preventDefault(); // prevent auto submission of the form

  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  if (!username == "" && !password == "") {
    if (accountExists(data, username, password)) {
      alert(`Welcome to Chess Planet, ${username}!`);
      createSession(username);
      updateDisplay(username);
      showProfile();
      closeLogin();

    } else {
      alert("Incorrect username or password.");
    }
  } else {
    alert("Please enter your username and password.")
  }
});

// ========== SignUp Menu ==========
var signUpForm = document.getElementById('signup')

signUpForm.addEventListener('submit', function(e) {
  e.preventDefault();

  var username = document.getElementById('new-username').value;
  var password = document.getElementById('new-password').value;
  var password2 = document.getElementById('new-password2').value;

  console.log(username, password); // for debugging

  if (username != "" && password != "") {
    if (usernameExists(data, username)) {
      alert("Username has been taken.");

    } else if (password !== password2) {
        alert("Password do not match!");

    } else {
      data.push({"username": username, "password": password});
      localStorage.setItem("users", JSON.stringify(data));
      alert(`Welcome to Chess Planet, ${username}!`);
      createSession(username);
      // Logs in user when they SignUp
      updateDisplay(username);
      showProfile();
      closeSignUp();
    }

  } else {
    alert("Please enter your username and password.");
  }
});

// ========== Navigation Bar toggles ==========
var toggleButton = document.getElementsByClassName("toggle-button")[0];
var navLinks = document.getElementsByTagName("nav")[0];
var accButtton = document.getElementsByClassName("account-buttons")[0];
var profileButton = document.getElementsByClassName("account-menu")[0];

toggleButton.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  accButtton.classList.toggle("active");
  profileButton.classList.toggle("active");
});
