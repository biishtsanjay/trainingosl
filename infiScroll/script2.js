// 1.

const container = document.getElementById("container");
const loading = document.querySelector(".loading");


// 2.  fetch the records
let limit = 5;
let page = 1;
async function getPost() {
    const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`)
    // .then((response) =>console.log(response.json()));
    const posts = await postResponse.json();
    return posts;

}

// 3.
async function addDataToDOM() {
    const posts = await getPost()
    console.log(posts);
    posts.map(post => {
        
        return `
        const postElement = document.createElement('div');
        postElement.classList.add('blog-post');
        postElement.innerHTML = 
            <h2 class="circle">${post.id}</h2> 
            <h2 class="title">${post.title}</h2>
            <p class="text">${post.body}</p>
        `;
        
    })
    container.appendChild(postElement);
    // loading.classList.remove('show');
};

// 4.
function showLoading() {
    loading.classList.add('show');
    //   load more data
    setTimeout(() => {
        loading.classList.remove("show");

        setTimeout(() => {
            page++;
            addDataToDOM();
        }, 2000)
    }, 1000)
}

addDataToDOM();

// 5.
window.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (clientHeight + scrollTop >= scrollHeight - 5) {
        // show animation of loading
        showLoading();

    }
})