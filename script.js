document.addEventListener('DOMContentLoaded',() =>{
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        let taskText = taskInput.value.trim();
        
        if(taskText !== '') {
            
            const taskItem = document.createElement('li');
            taskItem.textContent = taskText;
            taskList.appendChild(taskItem);


           const removeButton = document.createElement('button');
           removeButton.textContent = 'Remove';
           removeButton.className = 'remove-btn';

           removeButton.addEventListener('click', () => {
            taskItem.remove();
           })
           taskItem.appendChild(removeButton);
           taskList.appendChild(taskItem);

           taskInput.value = '';
        } else {
            alert('Please enter a task');
        }

        addButton.addEventListener('click', addTask);

        taskInput.addEventListener('keydown', (event) => {
            if(event.key === 'Enter') {
                addTask();
            }
        });

    }
    addTask();
 
})