const box=document.querySelector("#box")
const tasks=document.querySelector("#taskList")
function addTask(){
    if(box.value===''){
    
        alert("You must write something")
    }else{
        let li=document.createElement("li")
        li.innerHTML=box.value;
        tasks.appendChild(li);

        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    
    }
    box.value="";
    savedata();
}
tasks.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        savedata();
    }else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
})
function savedata(){
    localStorage.setItem("data",tasks.innerHTML);
}
function showItem(){
    tasks.innerHTML=localStorage.getItem("data");
}
showItem();
