const wrapper = document.querySelector('.tasks-wrapper');
const createNoteBtn = document.querySelector('#create-note-btn');

createNoteBtn.addEventListener('onclick', e => {
    
});

const Categories = [
    'Task',
    'Random Thought',
    'Idea'
];

let tasks = [
    {
        name: "Test0",
        created: "April 27, 2021",
        category: Categories[0],
        content: "Temp"
    },
    {
        name: "Test1",
        created: "April 27, 2021",
        category: Categories[2],
        content: "Temp 11/12/2002 12/12/2010"
    },
    {
        name: "Test2",
        created: "April 27, 2021",
        category: Categories[0],
        content: "Temp"
    },
    {
        name: "Test3",
        created: "April 27, 2021",
        category: Categories[1],
        content: "Temp"
    },
    {
        name: "Test4",
        created: "April 27, 2021",
        category: Categories[2],
        content: "Temp"
    },
    {
        name: "Test5",
        created: "April 27, 2021",
        category: Categories[1],
        content: "Temp"
    }
];

function createTask(task){
    tasks.push(task);
}

function createTaskElement(task) {
    let element = document.createElement('div');
    element.id = `task-${task.name}`;
    element.classList.add('task');
    const dates = getAllDatesFromString(task.content);
    element.innerHTML = `<div>${task.name}</div>
                            <div>${task.created}</div>
                            <div>${task.category}</div>
                            <div>${task.content}</div>
                            <div>${dates === null ? '' : dates.map(t => t)}</div>
                            <div>
                                <button class="btn-edit">Edit</button>
                                <button class="btn-archive">Archive</button>
                                <button class="btn-delete">Delete</button>
                            </div>
                         </div>`;
    return element;
}

function getAllDatesFromString(str){
    return str.match(/\d{2}([\/.-])\d{2}\1\d{4}/g);
}

function render() {
    wrapper.innerHTML = '<div class="task-context">\n' +
            '                <div>Name</div>\n' +
            '                <div>Created</div>\n' +
            '                <div>Category</div>\n' +
            '                <div>Content</div>\n' +
            '                <div>Dates</div>\n' +
            '                <div>Actions</div>\n' +
        '                </div>';
    tasks.forEach((task, index) => {
        wrapper.appendChild(createTaskElement(task));
    });
}

render();