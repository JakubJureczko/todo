// Make all the parts of the taskItem

function makeACheckBox() {
    const newCheckbox = document.createElement("input");
    newCheckbox.type = "checkbox";
    newCheckbox.className = "taskCheckbox";
    return newCheckbox;
  }
  
  function makeAEdit() {
    const newEdit = document.createElement("div");
    newEdit.innerHTML = "Edit";
    newEdit.className = "editButton";
    return newEdit;
  }
  
  function makeADelete() {
    const newDelete = document.createElement("div");
    newDelete.innerHTML = "Delete";
    newDelete.className = "deleteButton";
    return newDelete;
  }
  
  function makeAText(text) {
    const newText = document.createElement("div");
    newText.innerText = text;
    newText.classList.add("taskItem");
    return newText;
  }
  
  // Make the taskItem
  function makeATaskItem(text) {
    const task = document.createElement("div");
    task.id = "taskItem";
    const chechBox = makeACheckBox();
    const edited = makeAEdit();
    const deleted = makeADelete();
    const textbox = makeAText(text);
    taskItem.appendChild(chechBox);
    taskItem.appendChild(textbox);
    taskItem.appendChild(edited);
    taskItem.appendChild(deleted);
    return task;
  }
  
  // Function addTask()
  function addTask() {
    const text = document.getElementById("inputField").value;
    const taskContainer = document.getElementById("taskLists");
    if (text) {
      const taskItem = makeATaskItem(text);
      taskContainer.append(taskItem);
      text.value = "";
    }
  }
  const button = document.querySelector("button");
  
  button.onclick = function () {
    addTask();
  };
  
  inputBox.onkeydown = function (e) {
    if (e.keyCode === 13) {
      addTask();
    }
  };

  // Make all the parts of the taskItem

function makeACheckBox() {
    const newCheckbox = document.createElement("input");
    newCheckbox.type = "checkbox";
    newCheckbox.className = "taskCheckbox";
    return newCheckbox;
  }
  
  function makeAEdit() {
    const newEdit = document.createElement("div");
    newEdit.innerHTML = "Edit";
    newEdit.className = "editButton";
    return newEdit;
  }
  
  function makeADelete() {
    const newDelete = document.createElement("div");
    newDelete.innerHTML = "Delete";
    newDelete.className = "deleteButton";
    return newDelete;
  }
  
  function makeAText(text) {
    const newText = document.createElement("div");
    newText.innerText = text;
    newText.classList.add("taskItem");
    return newText;
  }
  
  // Make the taskItem
  function makeATaskItem(text) {
    const task = document.createElement("div");
    task.classList = "taskItem";
    const chechBox = makeACheckBox();
    const edited = makeAEdit();
    const deleted = makeADelete();
    const textbox = makeAText(text);
    taskItem.appendChild(chechBox);
    taskItem.appendChild(textbox);
    taskItem.appendChild(edited);
    taskItem.appendChild(deleted);
    return task;
  }
  
  // Function addTask()
  function addTask() {
    const text = document.getElementById("inputField").value;
    const taskContainer = document.getElementById("taskLists");
    if (text) {
      const taskItem = makeATaskItem(text);
      taskContainer.append(taskItem);
      text.value = "";
    }
  }
  const button = document.querySelector("button");
  
  button.onclick = function () {
    addTask();
  };
  
  inputBox.onkeydown = function (e) {
    if (e.keyCode === 13) {
      addTask();
    }
  };