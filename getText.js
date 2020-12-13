const getMyText = document.getElementById("getText");
const output = document.getElementById("output");
 
const  getText =()=>{
fetch("sample.txt")
.then((res)=> res.text())
.then((data)=>{
return output.innerHTML = data;
})
.catch((err)=>{
    console.log(err);
})
}


getMyText.addEventListener("click", getText);