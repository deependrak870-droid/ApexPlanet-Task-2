
// CONTACT FORM VALIDATION

const form = document.getElementById("contactForm");
const result = document.getElementById("formResult");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name === "" || email === "" || message === "") {
    result.textContent = "Please fill all required fields!";
    result.style.color = "red";
  }
  else if (!emailPattern.test(email)) {
    result.textContent = "Please enter a valid email address!";
    result.style.color = "red";
  }
  else {
    result.textContent = "Form validated successfully!";
    result.style.color = "green";
    form.reset();
  }
});

// TO-DO LIST DOM MANIPULATION

const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

function addTask() {
  const task = taskInput.value.trim();

  if (task === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = task;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";

  deleteButton.addEventListener("click", function() {
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(deleteButton);
  taskList.appendChild(li);

  taskInput.value = "";
  taskInput.focus();
}

addTaskButton.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    addTask();
  }
});
