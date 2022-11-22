const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
    alert('Служит для вывода информации в консоль');
})

document.querySelector('#alert').addEventListener('click', () => {
    alert('Служит для вывода диалогового окна с сообщением и кнопкой');
})

document.querySelector('#prompt').addEventListener('click', () => {
    prompt('Служит для отображения диалогового окна с запросом на ввод текста');
})