const form = document.querySelector("form")


form.addEventListener("submit", (e) => {
    e.preventDefault()
    

    const username = form.username.value
    const password = form.password.value
    const authentificated = authentification(username, password)
    if(authentificated){
        window.location.href = "index.html"

    }
    else{
        alert("wrong")
    }
    
})


//to check username and password

function authentification (username, password){
    if(username === "admin" && password === "password"){
        return true
    } else{
        return false
    }
}
