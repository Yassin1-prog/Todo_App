import createTodo from "./createTodo";

class createProject {
    constructor(name) {
        this.project = [];
        this.name = name;
    }

    addProject(title, description, dueDate, priority) {
        this.project.push(new createTodo(title, description, dueDate, priority));   
    }

    getAmountTasks() {
        return this.project.length;
    }

    getPriority() {
        return this.project[0].getPriority();
    }

}

export default createProject;