console.log("Hell world")
const defaultproject = []

class checklistItem {
    constructor(title, description){
        this.title = title,
        this.description = description,
        this.complete = 0
    }
    setComplete(value){
        if (this.complete == 0 && value == 1){
            this.complete = value;
        } else if (this.complete == 1 && value == 0){
            this.complete = value;
        }
    }
    getInfo(){
        console.log(`The title of this is: ${this.title}, the description is ${this.description}, it is ${this.complete == 1 ? "complete" : "not complete"}`)
    }
}

class Todo extends checklistItem{
    constructor(title, description, dueDate, priority, notes, itemlist = []){
        super(title, description),
        this.dueDate = dueDate,
        this.priority = priority,
        this.notes = notes,
        this.itemlist = itemlist,
        this.complete = 0
    }
    //Add items to checklist
    addChecklistItem(checklistItem){
        this.itemlist.push(checklistItem)
    }
    removeChecklistItem(checklistItem){
        this.itemlist.remove(checklistItem)
    }

    countItems(){
        console.log(this.itemlist.length)
    }

    getItems(){
        return this.itemlist
    }

    setComplete(value){
        if (this.complete == 0 && value == 1){
            this.complete = value;
        } else if (this.complete == 1 && value == 0){
            this.complete = value;
        }
    }

}; 
class Project extends Todo {
    constructor(title, description, dueDate, priority, notes, itemlist){
        super(title, description, dueDate, priority, notes, itemlist),
        this.complete = 0
    }

    set setComplete(value){
        if (value == 0 & this.value == 1){
            this.value = value;
        } else if (value == 1 && this.value == 0){
            this.value = value
        }
    }
    getInfo(){
        console.log(`The title of this is: ${this.title}, the description is ${this.description}, it is ${this.complete == 1 ? "complete" : "not complete"}`)
    }
    
    addTodoItem = super.addChecklistItem;
    removeTodoItem = super.removeChecklistItem;

    //add function to add Todo items
}
const test_item = new checklistItem("Test item", "Hello world");
const test_todo = new Todo("Test todo", "Hello world", "09-06-2040", 1, "Nice notes");
const test_proj = new Project("Test project", "Hello this is a new project", "20-03-2060", 0, "Nice project")
console.log(test_item);
console.log(test_todo);
test_item.getInfo();
test_todo.getInfo();
test_proj.getInfo();
test_todo.addChecklistItem(test_item)
test_proj.addTodoItem(test_todo);
console.log(test_todo)
console.log(test_proj)
test_todo.countItems()
test_proj.countItems()


//Separate classes into certain functions
