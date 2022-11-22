let input = document.querySelector('input');
let button = document.querySelector('button');
let duplicateField= document.querySelector('#duplicateField');

input.addEventListener('input', (event) => {
    event.preventDefault();
    duplicateField.textContent = input.value
})

button.addEventListener('click', (event) => {
    console.log(input.value);
    input.value = " ";
    duplicateField.textContent = " ";
})