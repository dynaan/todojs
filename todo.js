const addBtn=document.getElementById("addBtn");
const todoInput=document.getElementById("todoInput");

function removeTodo(id){
    
    let div = document.getElementById(id);
    div.remove();
       
    
}

function UncheckTodo(id) {
    let div = document.getElementById(id);
    
    console.log(div);
    //  .classList.toggle("check")
    

    
    
}


let id=1;
addBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    
let div = document.createElement("div");
div.setAttribute("class","singleTodo");
div.setAttribute("id",id);
let val=todoInput.value;

if(val=='') {
    alert("enter your todo ");
}
else {
div.innerHTML=
 ` 
                
          <h2>${val}</h2>
          <input type="checkBox" name="" id="" onClick="UncheckTodo(${id})">
          <button onClick=removeTodo(${id})>removeTodo</button>
          
            
   `
   document.getElementById("allTodo").appendChild(div);
   todoInput.value = '';
  

} 
})



