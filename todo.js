const addBtn=document.getElementById("addBtn");
const todoInput=document.getElementById("todoInput");
let id=0;


function removeTodo(currentId){  
    let div = document.getElementById(currentId);
    div.remove();   
}

function UncheckTodo(currentId) {
   
    let div = document.getElementById(currentId);
    console.log(div);
    div.childNodes[1].classList.toggle("check")
}


addBtn.addEventListener('click',(e)=>{
 let currentId =id++;
e.preventDefault();
let div = document.createElement("div");
div.setAttribute("class","singleTodo");
div.setAttribute("id",currentId);
let val=todoInput.value;

if(val=='') {
    alert("enter your todo ");
}
else {
div.innerHTML=
   `           
         <h2>${val}</h2>
          <input type="checkBox" name="" id="" onClick="UncheckTodo(${currentId})">
          <button onClick=removeTodo(${currentId})>removeTodo</button>         
   `
   document.getElementById("allTodo").appendChild(div);
   todoInput.value = '';
  
} 
})



