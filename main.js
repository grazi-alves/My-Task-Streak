const input = document.getElementById("task-input-field");
const addButton = document.getElementById("add-task-button");
const taskList = document.getElementById("task-list");

/* ADICIONAR TAREFA */
addButton.addEventListener("click", addTask);

function addTask() {
    const taskText = input.value.trim();

    if (taskText === "") return;

    const li = document.createElement("li");
    li.innerHTML = `
        ${taskText}
        <button class="delete-button">X</button>
    `;

    taskList.appendChild(li);

    input.value = "";
}


/* DELETAR TAREFA (delegação de evento — funciona em qualquer layout) */
taskList.addEventListener("click", function(e) {
    if (e.target.classList.contains("delete-button")) {
        e.target.parentElement.remove();
    }
});


/* ENTER adiciona tarefa */
input.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});
