function validasi(){
    let mail=document.getElementById("email").value
    let pass=document.getElementById("password").value
    
    if(mail===""){
        document.getElementById("noemail").innerText="Email Harus diisi"
        return false
    }
    else if(pass===""){
        document.getElementById("nopass").innerText="Password Harus diisi"
        return false
    }
}