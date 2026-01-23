function login(){
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmpassword = document.getElementById('confirmpassword').value;
    const error=document.getElementById('error'); 
    

    //alert(username  + ' ' +password);
    if(username.length === 0 ||password.length===0||confirmpassword.length===0){
        //alert("username,password and confirm password required");
        error.innerHTML="username and password is required"
        error.style.visibility="visible";
        error.style.color="black";
        error.style.backgroundColor ="light-red";
    }else if(password!==confirmpassword){
       // alert("password mismath");
       error.innerHTML="password mismatch"
        error.style.visibility="visible";
        error.style.color="black";
        error.style.backgroundColor ="light-red";
    }
    else if(username==='AKIRA15' && password==='mwamwa'){
        //alert("login succesfull!");
        error.innerHTML="login succesfull"
        error.style.color="green";
        error.style.backgroundColor ="yellow";
        error.style.visibility="visible";
    }else {
        //alert("invalid username or password");
        error.innerHTML="invalid username or password"
        error.style.visibility="visible";
        error.style.color="";black
        error.style.backgroundColor ="light-red";
    }
}
