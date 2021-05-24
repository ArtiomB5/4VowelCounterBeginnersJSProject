let inputButton = document.getElementById('inputButton');
inputButton.addEventListener('click', inputDataCheck);
//получения элемента кнопки и вызов функции при клике на кнопку

let vowelsList = ['a', 'o', 'e', 'i', 'y', 'u'];
//список гласных
let consonantYList = ['ya', 'yo', 'ye', 'yi', 'yu'];
//список когда y согласный

let vowels = 0;

//функция обработки введенных данных, запускается по нажатию кнопки
function inputDataCheck() {
    let InputWord = document.getElementById('inputField').value;
    //получение данных полей названия, даты, суммы

    if (InputWord === "") {
        alert('Please input word.')
    } else {
        vowelsCounter(InputWord);
    }
    //проверка поля вводы на наличие текста, если не пуста то вызывается функция подсчета гласных
}

//функция подсчета гласных, в качестве параметра получает введенный пользователем текст
function vowelsCounter(InputWord) {
    //перебор массива гласных звуков и подсчет их кол-ва
    vowelsList.forEach(
        function (item) {
            for (let index = 0; index < InputWord.length; index++) {
                if (item === InputWord[index]) {
                    vowels++;
                }
            }
        }
    )
    
    
    //перебор массива согласных случаев y и подсчет их кол-ва
    let pos = 0;
    let consonants = 0;
    consonantYList.forEach(
        function (item) {
            while (true) {
                let foundPos = InputWord.indexOf(item, pos);
                if (foundPos == -1) break;

                consonants++;
                pos = foundPos + 1;
            }
        }
    )
    
    vowels = vowels - consonants;

    //сообщение пользовател. количества гласных звуков
    if (vowels === 1) {
        alert('There is ' + vowels + ' vowel!');
    } else {
        alert('There are ' + vowels + ' vowels!');
    }
    
    vowels = 0;
}

//функция очистки поля ввода
function inputClear() {
    document.getElementById('inputField').value = '';
}
