// var word = localStorage.getItem('word');
// if (word) {
//     for (var i = 0; i < word.length; i++) {
//         var block = document.createElement('div');
//         block.className = 'block';
//         document.body.appendChild(block);
//     }
// }

var word = localStorage.getItem('word');

if (word) {
    var blocs = document.createElement('div');
    blocs.className = 'blocs';

    for (var i = 0; i < word.length; i++) {
        var block = document.createElement('div');
        block.className = 'block';
        blocs.appendChild(block);
    }

    document.body.appendChild(blocs);
}



function checkLetter(letter) {
    var word = localStorage.getItem('word');
    var blocks = document.getElementsByClassName('block');

    if (word && word.toLowerCase().includes(letter.toLowerCase())) {
        for (var i = 0; i < word.length; i++) {
            if (word[i].toLowerCase() === letter.toLowerCase()) {
                event.target.style.backgroundColor = 'green';
                if (blocks[i].textContent === "") {
                    blocks[i].textContent = word[i];
                } else {
                    blocks[i].style.backgroundColor = 'red';
                }
            }
        }
    } else {
        event.target.style.backgroundColor = 'red';
    }
}


var reloadButton = document.getElementById('reloadButton');

        // Добавляем обработчик события для кнопки
        reloadButton.addEventListener('click', function() {
            // Перезагружаем содержимое страницы
            location.reload();
        });
