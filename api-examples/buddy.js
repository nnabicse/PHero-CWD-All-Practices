const loadBuddies = () =>{
    fetch("https://randomuser.me/api/?results=5")
    .then(response => response.json())
    .then(data => displayBuddies(data))
}


const displayBuddies = (data) =>{
    const buddies = data.results;
    const buddiesContainer = document.getElementById("buddies-container");
    for(buddy of buddies){
        console.log(buddy);
        const p = document.createElement ("p");
        p.innerText = `Name: ${buddy.name.title + " " + buddy.name.first + " " + buddy.name.last} E-mail: ${buddy.email}`;
        buddiesContainer.appendChild(p);
    }
}