function loadPosts(){
    fetch("https://jsonplaceholder.typicode.com/posts").then(response => response.json()).then(data =>displayposts(data))
}


loadPosts();

function displayposts(posts){
    const postContainer= document.getElementById("post-container");
    for(const post of posts){
        const div = document.createElement('div');
        div.classList.add("post");
        div.innerHTML = `
        <h2>Title: ${post.title}</h2>
        <p>Desc: ${post.body}</p>
        `;
        postContainer.appendChild(div);
    }

}