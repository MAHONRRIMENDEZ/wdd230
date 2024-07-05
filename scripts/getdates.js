// Hamburguer menu
const hamburguerElement = document.querySelector('#myButton');
const navElement = document.querySelector('.menuLinks');

hamburguerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburguerElement.classList.toggle('open')
})
// Current year
function getCurrentYear() {
    const currentYearElement = document.getElementById('currentyear');
    const currentYear = new Date().getFullYear();
    currentYearElement.textContent = currentYear;
}

function getLastModifiedDate() {
    const lastModifiedElement = document.getElementById('lastModified');
    const lastModified = new Date(document.lastModified);
    const formattedDate = `${lastModified.getDate()}/${lastModified.getMonth() + 1}/${lastModified.getFullYear()} ${lastModified.getHours()}:${lastModified.getMinutes().toString().padStart(2, '0')}`;
    lastModifiedElement.textContent = `Last Modified: ${formattedDate}`;
}
getCurrentYear();
getLastModifiedDate();

// Dark mode

const darkModeToggle = document.querySelector('#dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', function() {
    
    body.classList.toggle('dark-mode');
});

