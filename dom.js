document.addEventListener("DOMContentLoaded", function() {
    let toDoInput = document.querySelector("#toDoInput");
    let addButton = document.querySelector("#addButton");
    let toDoList = document.querySelector("#toDoList");
  
    // Add click event listener to a to-do item
    function addItemClickEvent(item) {
      item.addEventListener("click", function() {
        // Add the "crossed-off" 
        item.classList.add("crossed-off");
  
        // Remove after a timeout
        setTimeout(() => {
          item.remove();
        }, 2000);
      });
    }
  
    // Add click event listeners to existing items
    let existingItems = toDoList.querySelectorAll("li");
    existingItems.forEach(addItemClickEvent);

  // Create input box
    addButton.addEventListener("click", function() {
      // Get the value of the input box
      let todoText = toDoInput.value;
  
      if (todoText !== "") {
        // Create a new list item
        let newTodo = document.createElement("li");
        newTodo.innerText = todoText;
  
        // Add click event listener to the new item
        addItemClickEvent(newTodo);
  
        // Add the new to-do item to the list
        toDoList.appendChild(newTodo);
  
        // Clear the input box
        toDoInput.value = "";
      }
    });
  });