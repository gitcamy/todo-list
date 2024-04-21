//runs the code only after the entire HTML document has been fully loaded
document.addEventListener('DOMContentLoaded', function() {
    //add new task 
    document.getElementById('submitBtn').addEventListener('click', function(){
        //get the value from the input
        let task = document.getElementById('inputTask').value;

        //create a new list item
        let newTask = document.createElement("li");
        newTask.textContent = task;

        //Append the new list item to the <ul>
        document.getElementById('taskList').appendChild(newTask);

});
});