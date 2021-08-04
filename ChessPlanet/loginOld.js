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
function validate() {
  var username = getElementsById("username").value;
  var password = getElementById("password").value;

  if (username == "admin" && password== "123") {
    alert("Welcome to Chess Planet!");
  } else {
    alert("Incorrect username or password.");
  }
};

// Login Menu
var loginForm = document.getElementById('login')

loginForm.addEventListener('submit', function(e) {
  e.preventDefault(); // prevent auto submission of the form

  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  if (username == "" || password == "") {
    alert("Please enter your username and password.");
  }

  if (username == "nicholas" && password== "123") {
    alert(`Welcome to Chess Planet, ${username}!`);
    closeLogin();

  } else {
    alert("Incorrect username or password.");
  }
})

//SignUp Menu
var signUpForm = document.getElementById('signup')

signUpForm.addEventListener('submit', function(e) {
  e.preventDefault();

  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var password2 = document.getElementById('password2').value;

  if (username == "" || password == "") {
    alert("Please enter your username and password.");
  } else {
      if (password !== password2) {
        alert("Password do not match!");
      } else {
        alert(`Welcome to Chess Planet, ${username}!`);
      }
    }
  })
