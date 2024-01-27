class createTodo {
    constructor(title, description, date, priority) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.priority = priority;
        this.complete = false;
    }

    getPriority() {
        return this.priority;
    }

    getTitle() {
        return this.title;
    }

    getDate() {
        return this.date;
    }

    getDescription() {
        return this.description;
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