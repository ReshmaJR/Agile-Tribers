document.getElementById("userForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("ageError").textContent = "";
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const age = document.getElementById("age").value.trim();
  
    let isValid = true;
  
    if (name === "") {
      document.getElementById("nameError").textContent = "Name is required.";
      isValid = false;
    }
  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
      document.getElementById("emailError").textContent = "Email is required.";
      isValid = false;
    } else if (!emailPattern.test(email)) {
      document.getElementById("emailError").textContent = "Enter a valid email.";
      isValid = false;
    }
  
    if (age === "") {
      document.getElementById("ageError").textContent = "Age is required.";
      isValid = false;
    } else if (isNaN(age) || age <= 0) {
      document.getElementById("ageError").textContent = "Enter a valid age.";
      isValid = false;
    }
  
    if (isValid) {
      const userData = {
        name: name,
        email: email,
        age: age
      };
  
      localStorage.setItem("userData", JSON.stringify(userData));
  
      window.location.href = "display.html";
    }
  });
  