class createTodo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.complete = false;
    }

    getPriority() {
        return this.priority;
    }

    changePriority(priority) {
        this.priority = priority;
    }

    sayHello() {
        console.log("Set >  Horus");
    }

    getStatus() {
        return this.complete;
    }

    setStatus(status) {
        this.complete = status;
    }

}

export default createTodo;