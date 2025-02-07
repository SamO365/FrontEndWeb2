// implements the todo class into the interface
var Todo = /** @class */ (function () {
    function Todo() {
        this.myTasks = [];
    }
    // function for adding tasks 
    Todo.prototype.addTask = function (task) {
        this.myTasks.push(task); //adds tasks to the list
        console.log(task + "has been added to my tasks."); //tells the user about the update
        return this.myTasks.length; // return the length
    };
    // this will show you the tasks that are in the list
    Todo.prototype.listAllTasks = function () {
        this.myTasks.forEach(function (ele) {
            console.log("Item: " + ele + "is on my tasks list.");
        });
    };
    // this allows you to delete tasks from the list
    Todo.prototype.deleteTask = function (Task) {
        var index = this.myTasks.indexOf(Task);
        if (index > -1) {
            this.myTasks.splice(index, 1); //removes 1 element from the array
            console.log("Item: " + Task + "has been removed from my Tasks list.");
        }
        else {
            console.log("Item: " + Task + "was Not found on Tasks list."); // if item isnt there print an error message
        }
        return this.myTasks.length;
    };
    return Todo;
}());
var myTodos = new Todo();
myTodos.addTask("Work");
myTodos.addTask("Eat");
myTodos.listAllTasks();
myTodos.deleteTask("Sleep");
