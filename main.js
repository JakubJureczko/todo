// Make all the parts of the taskItem
function makeACheckBox() {
  const newCheckbox = document.createElement("input");
  newCheckbox.type = "checkbox";
  newCheckbox.className = "taskCheckbox";
  return newCheckbox;
}

function makeAEdit() {
  const newEdit = document.createElement("button");
  newEdit.addEventListener("click", editMe);
  newEdit.innerHTML = "Edit";
  newEdit.className = "editButton";
  return newEdit;
}

function makeADelete() {
  const newDelete = document.createElement("button");
  newDelete.addEventListener("click", deleteMe);
  newDelete.innerHTML = "Delete";
  newDelete.className = "deleteButton";
  return newDelete;
}

function makeAText(text) {
  const newText = document.createElement("div");
  newText.innerText = text;
  newText.classList.add("taskText");
  return newText;
}

// Make the taskItem
function makeATaskItem(text) {
  const task = document.createElement("div");
  task.className = "taskItem";
  const chechBox = makeACheckBox();
  const edited = makeAEdit();
  const deleted = makeADelete();
  const textbox = makeAText(text);
  task.appendChild(chechBox);
  task.appendChild(textbox);
  task.appendChild(edited);
  task.appendChild(deleted);
  return task;
}

// Function addTask()
function addTask() {
  const text = document.getElementById("inputField").value;
  const taskContainer = document.getElementById("taskLists");
  if (text) {
    const taskItem = makeATaskItem(text);
    taskContainer.appendChild(taskItem);
    document.getElementById("inputField").value = "";
  }
}

// delete the parent container
function deleteMe() {
  this.parentElement.remove();
}

function editMe() {}

//Prevent the form to refresh the web
const form = document.getElementById("inputBox");
function handleForm(event) {
  event.preventDefault();
}
form.addEventListener("submit", handleForm);
