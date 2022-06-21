// Define UI Variables
const form = document.querySelector('#job-form');
const taskList = document.querySelector('.collection');
const taskInput = document.querySelector('#company');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {

  // // DOM load event
  // document.addEventListener('DOMContentLoaded', getTasks);
  // Add task event
  form.addEventListener('submit', addTask);
  // Remove task event
  taskList.addEventListener('click', removeTask);

}

// // Get Tasks from Local Storage (LS)
// function getTasks() {
//   let tasks;
//   if(localStorage.getItem('tasks') === null){
//     tasks = [];
//   } else {
//     tasks = JSON.parse(localStorage.getItem('company'));
//   }

//   tasks.forEach(function(task){
//     // Create li element
//     const li = document.createElement('li');
//     // Add class
//     li.className = 'collection-item';
//     // Create text node and append to li
//     li.appendChild(document.createTextNode(task));
//     // Create new link element
//     const link = document.createElement('a');
//     // Add class
//     link.className = 'delete-item secondary-content';
//     // Add icon html
//     link.innerHTML = '<i class="fa fa-remove"></i>';
//     // Append the link to li
//     li.appendChild(link);

//     // Append li to ul
//     taskList.appendChild(li);
//   });
// }

function addTask(e){


  // Create li element
  const li = document.createElement('li');
  // Add class
  li.className = 'collection-item';
  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element (X to delete job)
  const link = document.createElement('a');
  // Add class
  link.className = 'delete-item secondary-content';
  // Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append the link to li
  li.appendChild(link);

  // Append li to ul
  taskList.appendChild(li);


  // Store in LS
  storeTaskInLocalStorage(taskInput.value);

  // Clear input
  taskInput.value = '';
  e.preventDefault();

}

// Store Task
function storeTaskInLocalStorage(task) {
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remove Task
function removeTask(e) {
  if(e.target.parentElement.classList.contains('delete-item')) {
      e.target.parentElement.parentElement.remove();

      // // Remove from LS
      // removeTaskFromLocalStorage(e.target.parentElement.parentElement);
  }
}

// Remove from LS
function removeTaskFromLocalStorage(taskItem) {
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task, index){
    if(taskItem.textContent === task){
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}


document.getElementById("submit").onclick=function()
            {
                document.getElementById("table").style.display="block";
                
                var table = document.getElementById("table");
                var row = table.insertRow(-1);
                var comp = row.insertCell(0);
                var title = row.insertCell(1);
                var link = row.insertCell(2);
                var description = row.insertCell(3);
                var notes = row.insertCell(4);
                var date = row.insertCell(5);
                comp.innerHTML = document.getElementById("company").value;
                title.innerHTML = document.getElementById("title").value;
                link.innerHTML = document.getElementById("link").value;
                description.innerHTML = document.getElementById("description").value;
                notes.innerHTML = document.getElementById("notes").value;
                date.innerHTML = document.getElementById("date").value;
                
                return false;
            }



