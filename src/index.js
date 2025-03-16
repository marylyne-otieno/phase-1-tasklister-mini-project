//const { list } = require("mocha/lib/reporters/base");

document.addEventListener("DOMContentLoaded", () => {
  // your code here
const create = document.getElementById("create-task-form");
create.addEventListener("submit", function(event){
  event.preventDefault();
const taskInput = document.getElementById("new-task-description");
const taskText = taskInput.value.trim();
const prioritySelect = document.getElementById("priority");

if (taskText === "")
  return;
const li = document.createElement("li"); //create li
li.textContent = taskText;

document.getElementById("tasks").appendChild(li);

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






taskInput.value = "";


});

});

