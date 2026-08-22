const inputBox = document.getElementById("taskInput");
const listContainer=document.getElementById("list-container");
 function addTask(){
    if(inputBox.value.trim()===''){
        alert("Please enter a task!");
    }else{
        let li=document.createElement("li");
        li.textContent=inputBox.value.trim();
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        inputBox.value="";
        saveTasks();
    }
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
    }else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
},false);

function saveTasks() {
 localStorage.setItem("tasks", listContainer.innerHTML);
}
function loadTasks() {
   listContainer.innerHTML = localStorage.getItem("tasks") ;
}
loadTasks();