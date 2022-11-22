Link.addEventListener('click', function (event) { 
    event.preventDefault();
    const userText = prompt('Введите текст');
    const Link = document.querySelector('#Link'); 
    Link.textContent = userText; 
})


