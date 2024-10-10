document.addEventListener('DOMContentLoaded',() =>{
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = taskInput.value.trim();
        console.log(taskText);
        
        if(taskText === '') {
            alert('Please enter a task');
            
        } else {
            let taskItem = document.createElement('li');
            taskItem.textContent = taskText;
            taskList.appendChild(taskItem);
            taskInput.value = '';

           let removeButton = document.createElement('button');
           removeButton.textContent = 'Remove';
           removeButton.classList.add('remove-btn');
           removeButton.addEventListener('click', () => {
            taskItem.remove();
           })
           taskItem.appendChild(removeButton);
           taskList.appendChild(taskItem);

           taskInput.value = '';
        };

        addButton.addEventListener('click', () => {
            addTask();
        })

        taskInput.addEventListener('keydown', (event) => {
            if(event.key === 'Enter') {
                addTask();
            }
        })

    }
    addTask();
    console.log(addTask());
    document.addEventListener('DOMContentLoaded', addTask())
    return
})