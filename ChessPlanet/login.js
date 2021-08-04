// ========== Login & SignUp Window ==========
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

  var data = localStorage.getItem("accounts");

  if(!data) {
    data = "[]"
    localStorage.setItem("accounts", JSON.stringify(data))
  }

  data = JSON.parse(data);



  function accountExists(accounts, username, password) {
    for(var i in accounts) {
      if(accounts[i]["username"] == username && accounts[i]["password"] == password) {
        return true;
      }
    }
    return false;
  }

  if (username == "" || password == "") {
    alert("Please enter your username and password.");
  }

  if (accountExists(data, username, password)) {
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

    var username = document.getElementById('username2').value;
    var password = document.getElementById('password2').value;
    var password2 = document.getElementById('password22').value;
    console.log(username, password);
    if (!username == "" && !password == "") {
      if (password !== password2) {
        alert("Password do not match!");
      } else {
        var data = localStorage.getItem("accounts");

        if(!data) {
          data = "[]"
          localStorage.setItem("accounts", JSON.stringify(data))
        }

        data = JSON.parse(data);

        data.push({"username": username, "password": password});

        localStorage.setItem("accounts", JSON.stringify(data));
        alert(`Welcome to Chess Planet, ${username}!`);
      }

    } else {
      alert("Please enter your username and password.");
    }
  })

// Others
var showTable = document.getElementById("show");

showTable.addEventListener('click', () => {

  var plus = document.getElementById("toggle").innerHTML;

  if (plus === "+") {
    document.querySelector(".table").style.display = "block";
    document.getElementById("toggle").innerHTML = "–";
  } else {
    document.querySelector(".table").style.display = "none";
    document.getElementById("toggle").innerHTML = "+";
  }
});
