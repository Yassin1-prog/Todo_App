import createTodo from "./createTodo";
import createProject from "./createProject";
import { projectLoad } from "./loadProject";

const projects = [];
const inbox = new createProject('Inbox');
projects.push(inbox);

const inbx = document.querySelector(".inbox");
inbx.addEventListener("click", () => {
    projectLoad(projects[0]);
    updateTasks(projects[0]);
});



const dialog = document.querySelector("[data-modal]");
const openButton = document.querySelector(".addTask");
const closeButton = document.querySelector(".close");

const cleanInput = document.querySelectorAll('[title], [description], [date], [priority]');
const taskHolder = document.querySelector('.tasks');


const title = document.querySelector('[title]');
const description = document.querySelector('[description]');
const date = document.querySelector('[date]');
const priority = document.querySelector('[priority]');

openButton.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", (e) => {
    e.preventDefault();
    
    let target;

    const whichProject = document.querySelector('.title');

    for(let i = 0; i < projects.length; i++) {
        if(projects[i].name === whichProject.textContent) {
             target = projects[i];
        }
    }

    let flag = false;
    for(let i = 0; i < target.project.length; i++) {
        if(target.project[i].getTitle() == title.value) {
            flag = true;
            target.project[i].description = description.value;
            target.project[i].date = date.value;
            target.project[i].priority = priority.value;
        }
    }

    if(!flag) {
        target.addProject(title.value, description.value, date.value, priority.value);
    }

    updateTasks(target);

    cleanInput.forEach( input => {
         input.value = '';
    });

    dialog.close();
});


const projectButton = document.querySelector('.addProject');
const inputContainer = document.querySelector('.inputContainer');
const projectName = document.createElement('input');
const list = document.querySelector('.list');
projectName.type = 'text';
projectName.name = 'project';
projectName.placeholder = 'name';
const confirmButton = document.createElement('button');
confirmButton.textContent = "Confirm";
confirmButton.classList.add('Confirm');

projectButton.addEventListener("click", () => {
    inputContainer.appendChild(projectName);
    inputContainer.appendChild(confirmButton);
});


confirmButton.addEventListener("click", () => {
    const createdProject = new createProject(projectName.value);
    projects.push(createdProject);
    inputContainer.innerHTML = '';
    projectName.value = '';
    updateProjects();
});

function updateProjects() {
    list.innerHTML = '';
    projects.forEach((project, index) => {

        const newProject = document.createElement('button');
        newProject.textContent = project.name;
        newProject.classList.add("projectName");
        newProject.setAttribute("data-index", index);

        if(index!==0) list.appendChild(newProject);

        newProject.addEventListener("click",  () => {
            let rowIndex = parseInt(newProject.getAttribute("data-index"));
            projectLoad(projects[rowIndex]);
            updateTasks(projects[rowIndex]);
        });

    });
}

function updateTasks(project) {
    taskHolder.textContent = '';
    
    project.project.forEach((task, index) => {
        const btn = document.createElement('button');
        btn.textContent = task.getTitle();
        btn.setAttribute("data-index", index);
        btn.classList.add('createdButton');
        
        if(task.getPriority() === "low") {
            btn.style.borderLeft = '4px solid green';
        }
        else if(task.getPriority() === "high") {
            btn.style.borderLeft = '4px solid red'
        }
        else {
            btn.style.borderLeft = '4px solid orange'
        }

        const dueDate = document.createElement('div');
        dueDate.textContent = task.getDate();
        dueDate.classList.add('datee');

        const removeButton = document.createElement('button');
        removeButton.textContent = 'remove';
        removeButton.classList.add('move');
        removeButton.setAttribute("data-index", index);

        taskHolder.appendChild(btn);
        taskHolder.appendChild(dueDate);
        taskHolder.appendChild(removeButton);

        btn.addEventListener("click", () => {
            let rowIndex = parseInt(btn.getAttribute("data-index"));
            loadTaskInfo(project.project[rowIndex]);
        });

        removeButton.addEventListener("click", () =>  {
            let colIndex = parseInt(removeButton.getAttribute("data-index"));
            project.project.splice(colIndex, 1);
            updateTasks(project);
        });
    });  
}

function loadTaskInfo(task) {
    dialog.showModal();
    title.value = task.getTitle();
    description.value = task.getDescription();
    date.value = task.getDate();
    priority.value = task.getPriority();

}


window.addEventListener('click', (e) => {
    if (e.target === dialog) {
      dialog.close();
    }
});

