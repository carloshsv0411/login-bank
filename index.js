function tentarAutorizar() {  
    let token = localStorage.getItem("jwt_token");  
    if (!token) {  
        window.location.href = "login.html";  
        return;  
    }  

    let url = "http://localhost:5000/users/authorize";  

    let request = {  
        method: "POST",  
        headers: { "Content-Type": "application/json" },  
        body: JSON.stringify({jwt_token:token})  
    };  

    fetch(url, request).then(response => response.json()).then(data => {  
        if (data.erro) {  
            window.location.href = "login.html";  
        }  
        if (data.status) {  
            if (data.status === "success") {  
                window.location.href = "dashboard.html";  
            }  
        }  
    });  
}  