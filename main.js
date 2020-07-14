

function addTask() {
    const text = document.getElementById('inputField').value;

    if (text) {
        const newElement = document.createElement('div');
        newElement.innerText = text;
        newElement.classList.add('taskItem');
        document.getElementById('taskLists').append(newElement);
        document.getElementById('inputField').value = '';
    }

}