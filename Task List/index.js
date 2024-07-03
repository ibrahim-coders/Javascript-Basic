//selectors

const formForm = document.getElementById("task-form"); 
const submit = document.getElementById("submit");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
function createTask() {
  const inputValue = taskInput.value;
  if (inputValue) {
    console.log(inputValue);
  } else {
    alert("Please insert a task");
  }
  taskInput.value = "";

  //creating a task list div
  const listDiv = document.createElement("div");
  listDiv.classList.add("tasks");
 
  //create a task name tag /input
  const taskName = document.createElement("input");
  taskName.value = "hello";
  taskName.classList.add("w-80%");
  listDive.appendChild(taskName);
  taskList.appendChild(listDiv);

}



submit.addEventListener("click", createTask);






// function createTaskList(inputValue) {
//   taskList.innerHTML += `


//   `;
//    function deleteTask(event) {
//      console.log("test");
//    }
// }