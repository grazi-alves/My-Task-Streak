const input = document.getElementById("task-input-field");
const addButton = document.getElementById("add-task-button");

const dailyList = document.getElementById("daily-list");
const projetosList = document.getElementById("projetos-list");
const faculdadeList = document.getElementById("faculdade-list");

const totalCount = document.getElementById("total-count");
const doneCount = document.getElementById("done-count");
const pendingCount = document.getElementById("pending-count");

const headerTitle = document.getElementById("header-title");

const sidebar = document.getElementById("sidebar");
const menuToggle = document.getElementById("menu-toggle");

const dailyBtn = document.getElementById("daily-btn");
const projetosBtn = document.getElementById("projetos-btn");
const faculdadeBtn = document.getElementById("faculdade-btn");

let currentList = dailyList;


menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
});

dailyBtn.addEventListener("click", () => switchList("Tarefas Diárias"));
projetosBtn.addEventListener("click", () => switchList("Projetos"));
faculdadeBtn.addEventListener("click", () => switchList("Faculdade"));


addButton.addEventListener("click", addTask);
input.addEventListener("keydown", e => {
  if (e.key === "Enter") addTask();
});

function switchList(type) {
  document.querySelectorAll(".task-list").forEach(list =>
    list.classList.remove("active")
  );

  if (type === "Tarefas Diárias") {
    currentList = dailyList;
  } else if (type === "Projetos") {
    currentList = projetosList;
  } else {
    currentList = faculdadeList;
  }

  currentList.classList.add("active");
  headerTitle.textContent = type;
  updateCounters();
}

function updateCounters() {
  const tasks = currentList.querySelectorAll("li");
  const doneTasks = currentList.querySelectorAll("input:checked");

  totalCount.textContent = tasks.length;
  doneCount.textContent = doneTasks.length;
  pendingCount.textContent = tasks.length - doneTasks.length;
}

function addTask() {
  const text = input.value.trim();
  if (!text) return;

  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const span = document.createElement("span");
  span.className = "task-text";
  span.textContent = text;

  const actions = document.createElement("div");
  actions.className = "task-actions";

  const del = document.createElement("button");
  del.textContent = "X";
  del.className = "delete-button";

  checkbox.addEventListener("change", () => {
    span.classList.toggle("done", checkbox.checked);
    updateCounters();
  });

  del.addEventListener("click", () => {
    li.remove();
    updateCounters();
  });

  actions.appendChild(del);
  li.append(checkbox, span, actions);
  currentList.appendChild(li);

  input.value = "";
  updateCounters();
}

updateCounters();
