const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const error = document.getElementById('error');

let tasks = [];

taskForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const task = taskInput.value.trim();

  if (task === '') {
    showError('Task cannot be empty!');
    return;
  }

  if (tasks.includes(task)) {
    showError('Duplicate task not allowed!');
    return;
  }

  tasks.push(task);
  addTaskToDOM(task);
  taskInput.value = '';
  error.textContent = '';
});

function addTaskToDOM(taskText) {
  const li = document.createElement('li');

  const span = document.createElement('span');
  span.className = 'task-text';
  span.textContent = taskText;

  const editBtn = document.createElement('button');
  editBtn.className = 'edit-btn';
  editBtn.textContent = 'Edit';
  editBtn.onclick = () => editTask(li, span);

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-btn';
  deleteBtn.textContent = 'Delete';
  deleteBtn.onclick = () => deleteTask(li, taskText);

  li.appendChild(span);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);

  taskList.appendChild(li);
}

function editTask(li, span) {
  const currentText = span.textContent;
  const newText = prompt('Edit your task:', currentText);
  if (newText === null) return;
  const trimmed = newText.trim();

  if (trimmed === '') {
    showError('Task cannot be empty!');
    return;
  }

  if (tasks.includes(trimmed)) {
    showError('Duplicate task not allowed!');
    return;
  }

  const index = tasks.indexOf(currentText);
  if (index !== -1) {
    tasks[index] = trimmed;
    span.textContent = trimmed;
    error.textContent = '';
  }
}

function deleteTask(li, taskText) {
  taskList.removeChild(li);
  tasks = tasks.filter(t => t !== taskText);
}

function showError(msg) {
  error.textContent = msg;
}
