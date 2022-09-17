const Input = document.querySelector(".input input");
const addBtn = document.querySelector(".input button");
const Tasks = document.querySelector(".tasks");
const Remove = document.querySelector(".footer button");

Input.onkeyup = ()=>{
  let user = Input.value; 
  if(user.trim() != 0){ 
    addBtn.classList.add("active"); 
  }else{
    addBtn.classList.remove("active");
  }
}

showTasks(); 

addBtn.onclick = ()=>{ 
  let user = Input.value; 
  let getLocalStorageData = localStorage.getItem("New Tasks"); 
  if(getLocalStorageData == null){ 
    array = []; 
  }else{
    array = JSON.parse(getLocalStorageData);  
  }
  array.push(user); 
  localStorage.setItem("New Tasks", JSON.stringify(array)); 
  showTasks(); 
  addBtn.classList.remove("active"); 
}

function showTasks(){
  let getLocalStorageData = localStorage.getItem("New Tasks");
  if(getLocalStorageData == null){
    array = [];
  }else{
    array = JSON.parse(getLocalStorageData); 
  }
  const pendingTasksNumb = document.querySelector(".Pendingtasks");
  pendingTasksNumb.textContent = array.length; 
  if(array.length > 0){ 
    Remove.classList.add("active"); 
  }else{
    Remove.classList.remove("active"); 
  }
  let newLiTag = "";
  array.forEach((element, index) => {
    newLiTag += `<li>${element}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
  });
  Tasks.innerHTML = newLiTag; 
  Input.value = ""; 
}


function deleteTask(index){
  let getLocalStorageData = localStorage.getItem("New Tasks");
  array = JSON.parse(getLocalStorageData);
  array.splice(index, 1); 
  localStorage.setItem("New Tasks", JSON.stringify(array));
  showTasks(); 
}


Remove.onclick = ()=>{
  let getLocalStorageData = localStorage.getItem("New Tasks"); 
  if(getLocalStorageData == null){ 
    array = []; 
  }else{
    array = JSON.parse(getLocalStorageData);  
    array = []; 
  }
  localStorage.setItem("New Tasks", JSON.stringify(array)); 
  showTasks(); 
}
