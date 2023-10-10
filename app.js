// #UI Variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// #Functions
// *Load all events
loadEventListeners();
function loadEventListeners() {
    form.addEventListener('submit', addTask)
}

// *Add Notes
function addTask(e) {
    // Validate Note input
    if (taskInput.value === '') {
        alert('Add a task');
    }

    // Create an Li element for each notes added
    const li = document.createElement('li');
    li.className = 'collection-item'; //'collection-item' for materialize styling
    // create textnode and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // create new link element - to delete the created Note
    const link = document.createElement('a');
    // Add class to the link
    link.className = 'delete-item secondary-content'; //'secondary-content' for materialize styling
    // Icon for the above delete link
    link.innerHTML = '<i class="fa fa-remove"></i>'
    // Append the link and its assocaited ison to the Note's li
    li.appendChild(link);

    // DIsplay Notes (Li) in the UI
    taskList.append(li);

    // Remove the input
    taskInput.value = '';

    // To prevent default behaviour - form submit
    e.preventDefaualt();
}