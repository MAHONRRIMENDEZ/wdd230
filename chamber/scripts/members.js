// Get members info

const url = './data/members.json';

const cards = document.querySelector('#cards');

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
        let fullName = document.createElement('h2');
        let memberInfo = document.createElement('p');
        let memberPhone = document.createElement('p');
        let memberWebsite = document.createElement('p');
        let otherInfo = document.createElement('p');
        let portrait = document.createElement('img');
        
        fullName.textContent = `${member.name} - ${member.membershipLevel}`;
        memberInfo.textContent = ` Address: ${member.address}`;
        memberPhone.textContent = ` Phone: ${member.phone}`;
        memberWebsite.textContent = `Website: ${member.website}`;
        otherInfo.textContent = `${member.otherInfo}`;

        portrait.setAttribute('src', member.imageurl);
        portrait.setAttribute('alt', `Portrait of ${member.name} ${member.membershipLevel}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '250');
        portrait.setAttribute('height', '150');


        card.appendChild(fullName);
        card.appendChild(memberInfo);
        card.appendChild(memberPhone);
        card.appendChild(memberWebsite);
        card.appendChild(portrait);
        card.appendChild(otherInfo);

        cards.appendChild(card);
    });
}
 // Function to switch to grid view
const setGrid = document.querySelector('#grid-view-btn')
const setList = document.querySelector('#list-view-btn')
setGrid.addEventListener('click',() => {
    setGrid.className="active"
    setList.className=""
    cards.className='grid'
})
setList.addEventListener('click',() => {
    setList.className="active"
    setGrid.className=""
    cards.className='list' 
})


