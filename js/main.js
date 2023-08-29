const elDarkMode = document.querySelector('.button');
// const elLightMode = document.querySelector('.button-light');


elDarkMode.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});

// elLightMode.addEventListener('click', function () {
//     document.body.classList.remove('dark-mode');
// });