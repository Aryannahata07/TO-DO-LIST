const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


    const inputValue = document.getElementById('input-box').value;
    



function addTask(){
    if(inputBox.value === '')
        alert("You must write something");
    else {
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value='';
    saveData();
}

document.getElementById('input-box').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {  
        addTask();  
    }
});  // TO DO IT BY PRESSING ENTER

listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");

}
showTask();