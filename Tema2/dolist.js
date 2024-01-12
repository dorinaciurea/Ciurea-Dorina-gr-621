let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function displayTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = task;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Ștergere';
    deleteButton.onclick = () => deleteTask(index);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);     
  });
}

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const newTask = taskInput.value.trim();
  if (newTask !== '') {
    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    taskInput.value = '';
    displayTasks();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  displayTasks();
}

displayTasks();