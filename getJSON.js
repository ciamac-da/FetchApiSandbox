const getMyUsers = document.getElementById("getUsers");
const userOutput = document.getElementById("output");
const getUsers = () =>{
    fetch("users.json")
    .then((res)=>res.json())
    .then((data)=>{
        let output = `<h2>Users</h2>`
        data.forEach( user => {
            output += `
            <ul>
            <li> ID:    ${user.id} </li>
            <li> Name:  ${user.name} </li>
            <li> Email: ${user.email} </li>
            </ul>
            `;
        });
        userOutput.innerHTML = output;
    })
}



getMyUsers.addEventListener("click", getUsers)