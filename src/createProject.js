import createTodo from "./createTodo";

class createProject {
    constructor() {
        this.project = [];
    }

    addProject(title, description, dueDate, priority) {
        this.project.push(new createTodo(title, description, dueDate, priority));   
    }

    getAmountTasks() {
        return this.project.length;
    }

}

export default createProject;