let button = document.getElementById("btn");
let input = document.getElementById("inp");
let list = document.getElementById("li");

button.addEventListener("click", function () {
  let checkbox = document.createElement("input");
  let div1 = document.createElement("div");
  let div2 = document.createElement("div");
  div2.className = "checkbox-container";
  div1.className = "checkbox";

  checkbox.type = "checkbox";
  let li = document.createElement("li");
  let span = document.createElement("span");
  span.textContent = input.value;
  li.className = "list-item";

  div1.appendChild(span);
  div1.appendChild(checkbox);
  li.appendChild(div1);

  let deleteButton = document.createElement("button");
  li.appendChild(deleteButton);
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", function () {
    list.removeChild(li);
  });
  let editButton = document.createElement("button");
  li.appendChild(editButton);
  editButton.textContent = "Edit";
  editButton.addEventListener("click", function () {
    let newText = prompt("Edit your task:", span.textContent);
    span.textContent = newText ? newText : span.textContent;
  });
  list.appendChild(li);

  input.value = "";
});

let lightButton = document.getElementById("light");
let darkButton = document.getElementById("dark");

lightButton.addEventListener("click", function () {
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
});
darkButton.addEventListener("click", function () {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
});
document.body.style.backgroundColor = "white";
