//runs the code only after the entire HTML document has been fully loaded
document.addEventListener('DOMContentLoaded', function() {
   
    //add new task 
    document.getElementById('submitBtn').addEventListener('click', function(){
        
        //get the value from the input
        let task = document.getElementById('inputTask').value;

         // Check for empty task input and return if empty
         if (task.trim() === '') {
            return; // Avoid adding empty tasks
        }

        //create a new list item
        let newTask = document.createElement("li");
        
        // Create a checkbox and add it to the list item
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('click', function(){
            if (checkbox.checked){
                newTask.classList.add('crossed-out');
            } else {
                newTask.classList.remove('crossed-out');            
            };
        });
        
        //create a text node and append it to the list
        let taskText = document.createTextNode(task);
        newTask.appendChild(checkbox);
        newTask.appendChild(taskText);

        //Append the new list item to the <ul>
        document.getElementById('taskList').appendChild(newTask);

        // Clear the input field after adding the task
        document.getElementById('inputTask').value = '';
     });

});