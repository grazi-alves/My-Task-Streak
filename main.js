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
        <span class="task-text">${taskText}</span>

        <div class="task-actions">
            <button class="star-button">☆</button>
            <button class="delete-button">X</button>
        </div>
    `;

    taskList.appendChild(li);
    input.value = "";
}


/* CLIQUES NA LISTA (delete + estrela) */
taskList.addEventListener("click", function(e) {

    /* DELETE */
    if (e.target.classList.contains("delete-button")) {
        e.target.closest("li").remove();
    }

    /* ESTRELA */
    if (e.target.classList.contains("star-button")) {
        e.target.classList.toggle("starred");

        if (e.target.classList.contains("starred")) {
            e.target.textContent = "⭐";
        } else {
            e.target.textContent = "☆";
        }
    }
});


/* ENTER adiciona tarefa */
input.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});
