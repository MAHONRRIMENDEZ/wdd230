const baseURL = "https://mahonrrimendez.github.io/wdd230";
const url = "https://mahonrrimendez.github.io/wdd230/data/links.json";



async function getLinksData() {
    const response = await fetch(url);
    const data = await response.json(); 
    //console.log(data.weeks);
    displayLinks(data.weeks);
}
getLinksData();

const myLinks = document.querySelector("#displayLinks");

function displayLinks(weeks) {
    weeks.forEach(item => {
    const week = document.createElement("h4");
    week.textContent = `${item.week}`;

    const linksList = document.createElement("ul");
    item.links.forEach(link => {
        const listItem = document.createElement("li");
        listItem.innerHTML=`<a href="${link.url}"> - ${link.title}</a>`
        linksList.appendChild(listItem)
    })
    
    
    
    myLinks.appendChild(week);
    myLinks.appendChild(linksList)
    });

}