// const close = document.getElementsByClassName('close');


// for (i = 0; i < close.length; i++) {
//     close[i].addEventListener('click', function() {
//     this.parentElement.style.display = 'none';
//     });


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