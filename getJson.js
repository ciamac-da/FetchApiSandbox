const getMyUsers = document.getElementById("getUsers");

const getUsers = () =>{
    fetch("users.json")
}



getMyUsers.addEventListener("click", getUsers)