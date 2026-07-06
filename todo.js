var tasks = [];

// Load tasks from local storage when the page loads
var storedTasks = localStorage.getItem("todoTasks");
if (storedTasks) {
  tasks = JSON.parse(storedTasks);
}

var taskList = document.getElementById("taskList");
var taskInput = document.getElementById("taskInput");
var addBtn = document.getElementById("addBtn");

// Function to save current tasks to local storage
function saveTasks() {
  localStorage.setItem("todoTasks", JSON.stringify(tasks));
}

// Function to update the list on the screen
function renderTasks() {
  taskList.innerHTML = "";
  
  for (var i = 0; i < tasks.length; i++) {
    var task = tasks[i];
    
    var li = document.createElement("li");
    if (task.completed) {
      li.className = "completed";
    }

    // Checkbox to mark as completed
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.dataset.index = i;
    
    checkbox.onchange = function() {
      var index = this.dataset.index;
      tasks[index].completed = this.checked;
      saveTasks();
      renderTasks();
    };

    // Text of the task
    var span = document.createElement("span");
    span.className = "task-text";
    span.innerText = task.text;

    // Delete button
    var delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.className = "delete-btn";
    delBtn.dataset.index = i;
    
    delBtn.onclick = function() {
      var index = this.dataset.index;
      tasks.splice(index, 1);
      saveTasks();
      renderTasks();
    };

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(delBtn);
    taskList.appendChild(li);
  }
}

// Add task when clicking the button
addBtn.onclick = function() {
  var text = taskInput.value;
  if (text !== "") {
    tasks.push({
      text: text,
      completed: false
    });
    taskInput.value = ""; // clear input
    saveTasks();
    renderTasks();
  }
};

// Add task when pressing Enter key
taskInput.onkeypress = function(event) {
  if (event.key === "Enter") {
    addBtn.onclick();
  }
};

// Render the initial list
renderTasks();
