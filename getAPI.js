const getMyApi = document.getElementById("getPosts");
const postOutput = document.getElementById("output");
const getApi = () =>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>res.json())
    .then((data)=>{
        let output = `<h2>Posts</h2>`
        data.forEach( post => {
            output += `
            <div>
            <h3> ${post.title} </h3>
            <p> ${post.body} </p>

            </div>
            `;
        });
        postOutput.innerHTML = output;
    })
}

getMyApi.addEventListener("click", getApi)