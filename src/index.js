//const { list } = require("mocha/lib/reporters/base");
//allow script to run when html is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // your code here
const create = document.getElementById("create-task-form");
create.addEventListener("submit", function(event){
  event.preventDefault();
const taskInput = document.getElementById("new-task-description");// gets task input
const taskText = taskInput.value.trim();
const prioritySelect = document.getElementById("priority");

if (taskText === "") // prevents empty task
  return;
const li = document.createElement("li"); //create li
li.textContent = taskText;// sets its text content to the task input value

document.getElementById("tasks").appendChild(li);// makes it visible

const priorityValue = prioritySelect.value;
if (priorityValue === "high") {
  li.style.color = "red";
} else if (priorityValue === "medium") {
  li.style.color = "purple";
} else if (priorityValue === "low") {
  li.style.color = "green";
}




//add delete button
const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.addEventListener("click", () => {
      li.remove();


    });

    li.appendChild(deleteBtn); // Append delete button to li
    document.getElementById("tasks").appendChild(li);




//clears submiiting form

taskInput.value = "";


});

});

