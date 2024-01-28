const button = document.querySelector('.btn-platform');
const platformElement = document.querySelector('.btn-platform .platforms');

button.addEventListener('click', () => {
    platformElement.classList.toggle('active');
});