function createBlocks() {
    var word = document.getElementById('wordInput').value;
    localStorage.setItem('word', word);
    var newTab = window.open('index.html', '_blank');
}

function creatBlocks() {
    var word = document.getElementById('wordInput').value;
    localStorage.setItem('word', word);
}