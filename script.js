// script.js
let name= "aditya"
let pass= "123"
function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    if (username === "" || password === "") {
      alert("Please fill in both fields.");
      return false; // Prevent form submission
    }else if(username === "name" && password === "pass"){
        window.location.href="webpage.html";
    }
     else {
      alert("Login Unsuccessful!");
      return true; // Allow form submission
    }
  }