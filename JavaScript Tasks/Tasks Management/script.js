let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
const taskForm = document.getElementById('task-form');
const taskListContainer = document.getElementById('task-list-view');
const pendingTasks = document.getElementById('pending-tasks');
const completedTasks = document.getElementById('completed-tasks');
const currentView = document.getElementById('current-view');
const filterBtn = document.getElementById('filter-btn');
const filterDropdown = document.getElementById('filter-dropdown');
const filterPriority = document.getElementById('priority-filter');
const filterDate = document.getElementById('date-filter');
const applyFilterBtn = document.getElementById('apply-filter');
const newTaskLink = document.getElementById('new-task-link');
const pendingTasksLink = document.getElementById('pending-tasks-link');
const completedTasksLink = document.getElementById('completed-tasks-link');
const allTasksLink = document.getElementById('all-tasks-link');

function showView(view) {
    document.getElementById('new-task-view').style.display = 'none';
    document.getElementById('task-list-view').style.display = 'none';

    if (view === 'new') {
        document.getElementById('new-task-view').style.display = 'block';
        currentView.textContent = 'New Task';
    } else if (view === 'tasks') {
        document.getElementById('task-list-view').style.display = 'block';
        currentView.textContent = 'All Tasks';
        renderTasks();
    } else if (view === 'pending') {
        document.getElementById('task-list-view').style.display = 'block';
        currentView.textContent = 'Pending Tasks';
        renderTasks('pending');
    } else if (view === 'completed') {
        document.getElementById('task-list-view').style.display = 'block';
        currentView.textContent = 'Completed Tasks';
        renderTasks('completed');
    }
}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function showMessage(message, type = 'success') {
    const messageContainer = document.getElementById('message-container');
    messageContainer.textContent = message;
    messageContainer.className = `message-container ${type}`;
    messageContainer.style.display = 'block';

    setTimeout(() => {
        messageContainer.style.display = 'none';
    }, 3000);
}

function createTaskElement(task, index) {
    const taskItem = document.createElement('div');
    taskItem.className = 'task-item';

    const statusLabel = document.createElement('div');
    statusLabel.className = 'task-status';
    statusLabel.textContent = task.completed ? 'Completed' : 'Pending';
    statusLabel.style.backgroundColor = task.completed ? '#27ae60' : '#e67e22';
    taskItem.appendChild(statusLabel);

    taskItem.innerHTML += `
        <h3>${task.title}</h3>
        <p>${task.description}</p>
        <p>Due Date: ${task.dueDate}</p>
        <p>Priority: ${task.priority}</p>
        <div class="task-actions">
            <button class="edit-btn" data-index="${index}">Edit</button>
            <button class="delete-btn" data-index="${index}">Delete</button>
            <button class="complete-btn ${task.completed ? '' : 'incomplete'}" data-index="${index}">${task.completed ? 'Mark Incomplete' : 'Mark Complete'}</button>
        </div>
    `;

    taskItem.querySelector('.edit-btn').addEventListener('click', editTask);
    taskItem.querySelector('.delete-btn').addEventListener('click', deleteTask);
    taskItem.querySelector('.complete-btn').addEventListener('click', toggleComplete);

    return taskItem;
}

function renderTasks(filter = 'all') {
    pendingTasks.innerHTML = '';
    completedTasks.innerHTML = '';

    tasks.forEach((task, index) => {
        const taskElement = createTaskElement(task, index);
        if (filter === 'all' || task.completed === (filter === 'completed')) {
            if (task.completed) {
                completedTasks.appendChild(taskElement);
            } else {
                pendingTasks.appendChild(taskElement);
            }
        }
    });
}

function toggleComplete(event) {
    const index = event.target.dataset.index;
    const task = tasks[index];
    task.completed = !task.completed;
    
    const button = event.target;
    if (task.completed) {
        button.textContent = 'Mark Incomplete';
        button.classList.remove('incomplete');
    } else {
        button.textContent = 'Mark Complete';
        button.classList.add('incomplete');
    }
    
    saveTasks();
    renderTasks();
    showMessage(task.completed ? 'Task marked as completed!' : 'Task marked as incomplete!', 'success');
}

function deleteTask(event) {
    const index = event.target.dataset.index;
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
    showMessage('Task deleted!', 'error');
}

function editTask(event) {
    const index = event.target.dataset.index;
    const task = tasks[index];
    
    document.getElementById('task-title').value = task.title;
    document.getElementById('task-description').value = task.description;
    document.getElementById('task-due-date').value = task.dueDate;
    document.getElementById('task-priority').value = task.priority;

    taskForm.onsubmit = function(event) {
        event.preventDefault();
        
        task.title = document.getElementById('task-title').value;
        task.description = document.getElementById('task-description').value;
        task.dueDate = document.getElementById('task-due-date').value;
        task.priority = document.getElementById('task-priority').value;

        tasks[index] = task;
        saveTasks();
        showMessage('Task updated successfully!', 'success');
        showView('tasks');
    };
    
    showView('new');
}

taskForm.onsubmit = function(event) {
    event.preventDefault();

    const title = document.getElementById('task-title').value;
    const description = document.getElementById('task-description').value;
    const dueDate = document.getElementById('task-due-date').value;
    const priority = document.getElementById('task-priority').value;

    const newTask = {
        title,
        description,
        dueDate,
        priority,
        completed: false,
    };

    tasks.push(newTask);
    saveTasks();
    showMessage('Task added successfully!', 'success');
    showView('tasks');
};

newTaskLink.addEventListener('click', () => showView('new'));
allTasksLink.addEventListener('click', () => showView('tasks'));
pendingTasksLink.addEventListener('click', () => showView('pending'));
completedTasksLink.addEventListener('click', () => showView('completed'));

applyFilterBtn.addEventListener('click', () => {
    renderTasks();
});

showView('tasks');
