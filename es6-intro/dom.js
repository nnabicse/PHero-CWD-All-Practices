document.getElementById("add-border").addEventListener("click", function(){
    document.getElementById("friend-container").style.border = "2px solid red"
})

function addBg(){
    const firends =  document.getElementsByClassName("friend")

    for(const friend of firends){
        friend.style.backgroundColor = "lightblue"
    }
}

document.getElementById("add-child").addEventListener("click", function(){
    const container =  document.getElementById("friend-container");
    const friendDiv = document.createElement('div');
    friendDiv.classList.add("friend");
    friendDiv.innerHTML = `
            <h3>New Friend</h3>
            <p>Lorem ipsum dolor sit amet.</p>
    `;
    container.appendChild(friendDiv);
})