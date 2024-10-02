function validasi(){
    // let valid=false
    let name=document.getElementById("nama").value.trim()
    let mail=document.getElementById("email").value.trim()
    let pass=document.getElementById("password").value.trim()
    let confpass=document.getElementById("confirmpass").value.trim()
    let uppercase=/[A-Z]/
    let number=/[0-9]/

    if(name===""){
        document.getElementById("nonama").innerText="Nama harus diisi"
        return false
    }

    if(mail===""){
        document.getElementById("noemail").innerText="Email harus diisi"
        return false
    }
    else if(mail.split("@").length !==2){
        document.getElementById("noemail").innerText="Format email salah"
        return false
    }
    else if(mail.split("@")[0].length==0){
        document.getElementById("noemail").innerText="Format email salah"
        return false
    }
    else if(mail.split("@")[1].length==0){
        document.getElementById("noemail").innerText="Format email salah"
        return false
    }
    else if(!mail.split("@")[1].includes(".")){
        document.getElementById("noemail").innerText="Format email salah"
        return false
    }
    else if(mail.split("@")[1][0]===(".")){
        document.getElementById("noemail").innerText="Format email salah"
        return false
    }
    if(pass===""){
        document.getElementById("nopass").innerText="Password harus diisi"
        return false
    }
    else if(pass.length < 8){
        document.getElementById("nopass").innerText="Password minimal 8 karakter"
        return false
    }
    else if(!pass.includes("uppercase")){
        document.getElementById("nopass").innerText="Password harus ada huruf besar"
        return false}
    else if(!pass.includes("number")){
        document.getElementById("nopass").innerText="Password harus ada angka"
        return false}
    if(confpass !== pass){
        document.getElementById("noconfirmpass").innerText="Password harus sama"
        return false
    }
}