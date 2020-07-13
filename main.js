const close = document.getElementsByClassName('close');
let i;

for (i = 0; i < close.length; i++) {
    close[i].addEventListener('click', function() {
    this.parentElement.style.display = 'none';
    });
}