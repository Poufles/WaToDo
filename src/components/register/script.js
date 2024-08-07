const btn = document.querySelector('button');
const container = document.querySelector('.container.registerpage')
const reg = document.querySelector('.registerpage .signup');

btn.addEventListener('mouseup', () => {
    container.classList.remove('initial');
    container.classList.add('final');
    setTimeout(() => {
        container.classList.add('noradius');
    }, 150);
});

reg.addEventListener('mouseup', () => {
    reg.classList.add('active');
    reg.classList.remove('pressed');
});

reg.addEventListener('mousedown', () => {
    reg.classList.add('pressed');
});

reg.addEventListener('mouseleave', () => {
    reg.classList.remove('pressed');
});