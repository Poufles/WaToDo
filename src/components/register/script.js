const btn = document.querySelector('button');
const container = document.querySelector('.container.registerpage')

btn.addEventListener('mouseup', () => {
    container.classList.remove('initial');
    container.classList.add('final');
    setTimeout(() => {
        container.classList.add('noradius');
    }, 150);
});