import createTodo from "./createTodo";
import createProject from "./createProject";


const myInstance = new createTodo('gym', 'workingOut', 'february', 'high');
const myInstance1 = new createTodo('gym', 'workingOut', 'february', 'high');

myInstance.sayHello();
myInstance.setStatus(true);
console.log(myInstance.getStatus());

const project = new createProject();
project.addProject(myInstance);
project.addProject(myInstance1);
console.log(project.getAmountTasks());

console.log('flag');
