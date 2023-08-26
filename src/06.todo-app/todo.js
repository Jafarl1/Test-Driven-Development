class Todo {
  constructor() {
    this.todoList = [];
  }

  addTask(task, isCompleted) {
    if (typeof task === "string" && typeof isCompleted === "boolean")
      this.todoList.push({ task, isCompleted });
    else throw new Error("Wrong format.");
  }

  deleteTask(index) {
    if (this.todoList.length === 0) throw new Error("The list is empty.");
    else if (
      typeof index === "number" &&
      index > 0 &&
      index < this.todoList.length
    )
      this.todoList.splice(index, 1);
    else throw new Error("Wrong format.");
  }

  markTaskAsDone(index) {
    if (this.todoList.length === 0) throw new Error("The list is empty.");
    else if (
      typeof index === "number" &&
      index > 0 &&
      index < this.todoList.length
    )
      this.todoList[index].isCompleted = true;
    else throw new Error("Wrong format.");
  }
}

module.exports = Todo;
