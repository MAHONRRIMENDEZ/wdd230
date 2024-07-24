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

// Hambuerguer menu

const hamburguerElement = document.querySelector('#myButton');
const navElement = document.querySelector('.menuLinks');

hamburguerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburguerElement.classList.toggle('open')
})

// number of visits
const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} 
else {
	visitsDisplay.textContent = `Welcome! Let us know if you have any questions.`;
}


numVisits++;

localStorage.setItem("numVisits-ls", numVisits);


// Get current date and time
var currentTimestamp = new Date().toISOString().slice(0, 19).replace('T', ' ');
document.getElementById("timestamp").value = currentTimestamp;



// Get current date and time

const url = './data/members.json';

const cards = document.querySelector('#member-container');

async function getMembersData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.members);
    displayMembers(data.members);
}

getMembersData();

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('p');
        let membershipLevel = document.createElement('p');
        let otherInfo = document.createElement('p');

        let logo = document.createElement('img');


        name.textContent = `${member.name} ${member.address} ${member.logo} ${member.phone} ${member.website} ${member.membershipLevel} ${member.otherInfo}`;

        logo.setAttribute('src', member.imageurl);
        logo.setAttribute('alt', `logo of ${member.name} ${member.address}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '340');
        logo.setAttribute('height', '440');

        card.appendChild(name);
        card.appendChild(logo);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(membershipLevel);
        card.appendChild(otherInfo);

        cards.appendChild(card);
    });
}

