function validateEmail() {
    var email = document.getElementById("email").value;
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(email)) {
      alert("Email is valid");
    } else {
      alert("Please enter a valid email");
    }
  }