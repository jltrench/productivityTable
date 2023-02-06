let count = 0;

document.querySelectorAll('.task').forEach(task => {
    task.addEventListener('dragstart', dragStart);
    task.addEventListener('dragend', dragEnd);
});

document.querySelectorAll('.taskContainer').forEach(table => {
    table.addEventListener('dragover', dragOver);
    table.addEventListener('dragleave', dragLeave);
    table.addEventListener('drop', drop);
})

document.querySelector('button').addEventListener('click', createTask);
document.querySelector('input').addEventListener('keypress', e => {
    if(e.key === 'Enter') {
        e.preventDefault();
        createTask();
    }
});


function dragStart(e) {
    e.currentTarget.classList.add('dragging');
}

function dragEnd(e) {
    e.currentTarget.classList.remove('dragging');
}

function dragOver(e) {
    e.preventDefault();
    e.currentTarget.classList.add('hover');
}

function dragLeave(e) {
    e.currentTarget.classList.remove('hover');
}

function drop(e) {
    e.currentTarget.classList.remove('hover');
    let dragTask = document.querySelector('.task.dragging');
    e.currentTarget.appendChild(dragTask);
}

function createTask() {
    let taskArea = document.querySelector('.taskContainer');
    let input = document.querySelector('input');

    let taskName = input.value;

    let newTask = document.createElement('div');
    newTask.classList.add('task');
    newTask.classList.add('dragging')
    newTask.setAttribute('draggable', 'true');

    if(taskName !== '' && count < 10) {
        newTask.innerHTML = taskName;
        taskArea.appendChild(newTask);
        count++;
    }
    
    if(taskName === '') {
        alert('Your task need a name.')
    }
    if(count >= 10) {
        alert('Task limit reached.')
    }
}