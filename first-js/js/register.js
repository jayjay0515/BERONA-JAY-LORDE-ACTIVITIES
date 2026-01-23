function register(){
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmpassword = document.getElementById('confirmpassword').value;

    //alert(username  + ' ' +password);
    if(username.length === 0 ||password.length===0||confirmpassword.length===0){
        alert("username,password and confirm password required");
    
    }else if(password!==confirmpassword){
        alert("password mismath");
    }
    else{
        alert("Registered succesfully");
    }
}
