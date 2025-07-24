// ================= To-Do List =================
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;
    li.onclick = () => removeTask(index);
    taskList.appendChild(li);
  });
}

function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();
  if (!task) return;
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  input.value = "";
  loadTasks();
}

function removeTask(index) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  loadTasks();
}

// ================= Product Listing =================
const products = [
  { name: "Laptop", category: "electronics", price: 1000, rating: 4.5 },
  { name: "Book A", category: "books", price: 20, rating: 4.8 },
  { name: "Smartphone", category: "electronics", price: 700, rating: 4.2 },
  { name: "Book B", category: "books", price: 15, rating: 4.6 }
];

function filterAndSort() {
  const category = document.getElementById("categoryFilter").value;
  const sort = document.getElementById("sortOption").value;

  let filtered = category === "all" ? products : products.filter(p => p.category === category);

  if (sort === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (sort === "price") {
    filtered.sort((a, b) => a.price - b.price);
  }

  const container = document.getElementById("productContainer");
  container.innerHTML = "";
  filtered.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `<strong>${p.name}</strong><br>
                     Category: ${p.category}<br>
                     Price: $${p.price}<br>
                     Rating: ${p.rating}`;
    container.appendChild(div);
  });
}

// ================= Initialization =================
window.onload = () => {
  loadTasks();
  filterAndSort();
};