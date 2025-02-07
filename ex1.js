//array of strings 
var myTasks = [];
// function for adding tasks 
function addTask(task) {
    myTasks.push(task);
    console.log(task + "has been added to my tasks.");
    return myTasks.length;
}
// this will show you the tasks that are in the list 
function listAllTasks() {
    myTasks.forEach(function (ele) {
        console.log("Item: " + ele + "is on my tasks list.");
    });
}
// this allows you to delete tasks from the list
function deleteTask(Task) {
    var index = myTasks.indexOf(Task);
    if (index > -1) {
        myTasks.splice(index, 1);
        console.log("Item: " + Task + "has been removed from my Tasks list.");
    }
    else {
        console.log("Item: " + Task + "was Not found on Tasks list."); // if item isnt there print an error message
    }
    return myTasks.length;
}
// showing functionality
addTask("Work");
addTask("Eat");
listAllTasks();
deleteTask("Sleep");
