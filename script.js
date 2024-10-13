document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Initialize tasks array from Local Storage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Function to load tasks from Local Storage
    function loadTasks() {
        tasks.forEach(taskText => {
            createTaskElement(taskText);
        });
    }

    // Function to save tasks to Local Storage
    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Function to create a new task item
    function createTaskElement(taskText) {
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // Add event listener to remove button
        removeButton.addEventListener('click', () => {
            // Remove task from DOM
            taskItem.remove();

            // Remove task from tasks array
            tasks = tasks.filter(task => task !== taskText);

            // Update Local Storage
            saveTasks();
        });

        taskItem.appendChild(removeButton);
        taskList.appendChild(taskItem);
    }

    // Function to add a new task
    function addTask() {
        let taskText = taskInput.value.trim();

        if (taskText !== '') {
            // Add task to tasks array
            tasks.push(taskText);

            // Create task element and append it to the list
            createTaskElement(taskText);

            // Save updated tasks to Local Storage
            saveTasks();

            // Clear the input field
            taskInput.value = '';
        } else {
            alert('Please enter a task');
        }
    }

    // Add event listener to "Add Task" button
    addButton.addEventListener('click', addTask);

    // Add event listener for Enter key to add task
    taskInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Load tasks when the page loads
    loadTasks();
});
