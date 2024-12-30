function submit(){
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
   let name = document.getElementById("name").value;
   let fname = document.getElementById("fname").value;
    let userError = document.getElementById('userError');
    let emailError = document.getElementById('emailError');
    let passwordError = document.getElementById('passwordError');
    let cnfrmPasswordError = document.getElementById('cnfrmError');
    let nameError = document.getElementById('nameError');
    let fnameError = document.getElementById('fnameError');


    if(name === "" ){
        document.getElementById('nameError').style.display = "inline";
        nameError.textContent = 'Name must be filled';
        return false;
    }
    document.getElementById('nameError').style.display = "none";
    if(fname === "" ){
        document.getElementById('fnameError').style.display = "inline";
        fnameError.textContent = 'Father Name must be filled';
        return false;
    }
    document.getElementById('fnameError').style.display = "none";
    // Validate username
    if (username.length < 5) {
        document.getElementById('userError').style.display = "inline";
        userError.textContent = 'Username must be at least 5 characters long';
        return false;
    }

    document.getElementById('userError').style.display = "none";
    
    
    // Validate email format
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').style.display = "inline";
        emailError.textContent = 'Invalid email format';
        return false;
    }
    
    document.getElementById('emailError').style.display = "none";
    
    // Validate password strength
    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(password)) {
        document.getElementById('passwordError').style.display = "inline";
        passwordError.textContent = 'Password must be at least 8 characters long, contain at least one uppercase and one lowercase letter, one number, and one special character';
        return false;

    }
    
    document.getElementById('passwordError').style.display = "none";
    
    // Validate password confirmation
    if (password!== confirmPassword) {
        document.getElementById('cnfrmError').style.display = "inline";
        cnfrmPasswordError.textContent = 'Passwords do not match';
        return false;
    }
    document.getElementById('cnfrmError').style.display = "none";
if(submit){
    alert("Form submitted successfully");
document.write("<b>Name  : </b> " , name , "<br>");
document.write("<b>Father Name  : </b> " , fname , "<br>");
document.write("<b>Username  : </b> " , username , "<br>");
document.write("<b>Email  : </b> " , email , "<br>");
return true;
    
}
  

}






 


