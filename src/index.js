import createTodo from "./createTodo";
import createProject from "./createProject";
import { projectLoad } from "./loadProject";

const projects = [];
const inbox = new createProject('Inbox');
projects.push(inbox);

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


    target.addProject(title, description, date, priority.value);
    console.log(target.getPriority());
    console.log(target.getAmountTasks());
    console.log(projects.length);

    const btn = document.createElement('button');
    btn.textContent = title.value;
    btn.classList.add('createdButton');

    taskHolder.appendChild(btn);

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
projectName.placeholder = 'name';
const confirmButton = document.createElement('button');
confirmButton.textContent = "Confirm";
confirmButton.classList.add('Confirm');

projectButton.addEventListener("click", () => {
    inputContainer.appendChild(projectName);
    inputContainer.appendChild(confirmButton);

});


confirmButton.addEventListener("click", () => {
    const newProject = document.createElement('button');
    newProject.textContent = projectName.value;
    newProject.classList.add("projectName");
    const createdProject = new createProject(projectName.value);
    list.appendChild(newProject);
    projects.push(createdProject);
    newProject.addEventListener("click", projectLoad(createdProject));
    inputContainer.innerHTML = '';
    projectName.value = '';
});

function updateProjects() {
    projects.forEach
}