const btn = document.querySelector('.btn');
const x = document.querySelector('.x');

const video = document.querySelector('.vedio')

btn.addEventListener('click', () => {
    video.classList.remove('active')
})

x.addEventListener('click', () => {
    video.classList.add('active')
})