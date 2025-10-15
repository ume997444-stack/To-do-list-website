const todoInput = document.getElementById("todotask");
const listItems = document.getElementById("list-items");
const addTaskBtn = document.getElementById("AddUpdateClick");

// Add task when Enter key is pressed
todoInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});

// Function to add a new task
function addTask() {
    if (todoInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    // Create list item
    let li = document.createElement("li");
    li.innerHTML = `
        <span class="task-text">${todoInput.value}</span>
        <div class="icons">
            <span class="tick">&#10004;</span>  <!-- ✔ Checkmark -->
            <span class="delete">&#10060;</span>  <!-- ❌ Delete -->
        </div>
    `;

    // Toggle completed class when tick is clicked
    li.querySelector(".tick").addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    // Remove task when delete button is clicked
    li.querySelector(".delete").addEventListener("click", function () {
        li.remove();
    });

    listItems.appendChild(li);
    todoInput.value = "";
}
