import createTodo from "./createTodo";
import createProject from "./createProject";

const projects = [];
const inbox = new createProject();
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

    //const task = new createTodo(title, description, date, priority.value);
    projects[0].addProject(title, description, date, priority.value);
    

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
    const newProject = document.createElement('div');
    newProject.textContent = projectName.value;
    list.appendChild(newProject);
    inputContainer.innerHTML = '';
    projectName.value = '';
});