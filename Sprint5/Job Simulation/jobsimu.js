const studentInput = document.getElementById('studentInput');
const addBtn = document.getElementById('addBtn');
const studentList = document.getElementById('studentList');
const searchInput = document.getElementById('searchInput');
const clearAllBtn = document.getElementById('clearAllBtn');
const studentCount = document.getElementById('studentCount');

const addStudent = () => {
  const name = studentInput.value.trim();
  if (!name) {
    alert('Please enter a name.');
    return;
  }

  const li = document.createElement('li');
  li.innerHTML = `
    <span>${name}</span>
    <div class="actions">
      <button class="edit"><i class="fas fa-pen"></i>Edit</button>
      <button class="delete"><i class="fas fa-trash-alt"></i>Delete</button>
    </div>
  `;
  studentList.appendChild(li);
  studentInput.value = '';
  updateCount();
};

const updateCount = () => {
  studentCount.textContent = studentList.querySelectorAll('li').length;
};

studentList.addEventListener('click', (e) => {
  const li = e.target.closest('li');
  if (!li) return;

  if (e.target.closest('.delete')) {
    li.remove();
    updateCount();
  } else if (e.target.closest('.edit')) {
    const nameSpan = li.querySelector('span');
    const newName = prompt('Edit student name:', nameSpan.textContent);
    if (newName && newName.trim()) {
      nameSpan.textContent = newName.trim();
    }
  }
});

searchInput.addEventListener('input', () => {
  const filter = searchInput.value.toLowerCase();
  const students = studentList.querySelectorAll('li');
  students.forEach((li) => {
    const name = li.querySelector('span').textContent.toLowerCase();
    li.style.display = name.includes(filter) ? '' : 'none';
  });
});

clearAllBtn.addEventListener('click', () => {
  studentList.innerHTML = '';
  updateCount();
});

addBtn.addEventListener('click', addStudent);
studentInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addStudent();
});
