const Todo = require("./todo.js");

describe("Todo class methods:", () => {
  let todo;

  beforeEach(() => {
    todo = new Todo();
  });

  test("should be defined", () => {
    expect(todo.addTask).toBeDefined();
    expect(todo.deleteTask).toBeDefined();
    expect(todo.markTaskAsDone).toBeDefined();
  });

  describe("The addTask method:", () => {
    test("should add tasks to the list", () => {
      todo.addTask("Read a book.", true);

      expect(todo.todoList).toHaveLength(1);
      expect(todo.todoList[0].task).toBe("Read a book.");
      expect(todo.todoList[0].isCompleted).toBe(true);
    });

    test("should add tasks to the list", () => {
      todo.addTask("Go shopping for Alice.", false);

      expect(todo.todoList).toHaveLength(1);
      expect(todo.todoList[0].task).toBe("Go shopping for Alice.");
      expect(todo.todoList[0].isCompleted).toBe(false);
    });

    test("should throw an error for wrong format", () => {
      expect(() => {
        todo.addTask("Wrong format", "not a boolean");
      }).toThrow("Wrong format.");
    });
  });

  describe("The deleteTask method:", () => {
    test("should check if the list is empty", () => {
      todo.todoList = [];

      expect(() => {
        todo.deleteTask(1);
      }).toThrow("The list is empty.");
    });

    test("should check if the parameter is valid", () => {
      todo.todoList = [1, 2, 3, 4];

      expect(() => {
        todo.deleteTask(6);
      }).toThrow("Wrong format.");
    });

    test("should delete item from the list", () => {
      todo.todoList = [1, 2, 3, 4];
      todo.deleteTask(2);

      expect(todo.todoList).toHaveLength(3);
      expect(todo.todoList[2]).toBe(4);
      expect(todo.todoList[2]).not.toContain(3);
    });
  });

  describe("The markAsDone method:", () => {
    test("should check if the list is empty", () => {
      todo.todoList = [];

      expect(() => {
        todo.markTaskAsDone(1);
      }).toThrow("The list is empty.");
    });

    test("should check if the parameter is valid", () => {
      todo.todoList = [1, 2];

      expect(() => {
        todo.markTaskAsDone(4);
      }).toThrow("Wrong format.");
    });

    test("should mark as done the list item", () => {
      todo.todoList = [
        { task: "Read a book.", isCompleted: false },
        { task: "Go shopping for Alice.", isCompleted: false },
      ];
      todo.markTaskAsDone(1);

      expect(todo.todoList).toHaveLength(2);
      expect(todo.todoList[1].isCompleted).toBe(true);
    });
  });
});
