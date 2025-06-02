console.log("")

const input = document.getElementById('task');
const button = document.getElementById('add');
const message = document.getElementById('message-error');

button.addEventListener('click', () => {
    if (input.value === '') {
        input.classList.add('error');
        message.classList.add('visible');
        return
    }

    const li = document.createElement('li')
    li.textContent = task.value
    document.querySelector('ul').appendChild(li)

});
