const taskBtn = document.getElementById('add-task-btn');
const taskDesc = document.getElementById('task-description');
const todoList = document.getElementsByClassName('.todo-list');

let tasks;
!localStorage.tasks ? tasks = [] : tasks = JSON.parse(localStorage.getItem('tasks'));

// samples obj if click btn
function NewTask(description) {
  this.description = description;
  this.isFinished = false;
}

let updateStorage = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

taskBtn.addEventListener('click', () => {
  tasks.push(new NewTask(taskDesc.value));
  updateStorage();
  console.log(tasks);
});
