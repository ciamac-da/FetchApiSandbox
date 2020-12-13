const submitPost = document.getElementById("addPost");
const myTitle = document.getElementById("output");
const myBody = document.getElementById("myBody");

const submitMyPost = (e) =>{
    e.preventDefault();
    
    let title  = document.getElementById("title").value;
    let body   = document.getElementById("body").value;
    
    fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
        "Accept":"application/json, text/plain, */*",
        "Content-Type":"application/json"
    },
    body:JSON.stringify({title:title, body:body})

})
.then((res)=> res.json())
.then((data)=>{
    console.log(data.title);
    myTitle.innerHTML = data.title
    myBody.innerHTML = data.body

})
.catch((err)=> console.log(err))

}

submitPost.addEventListener("submit", submitMyPost)