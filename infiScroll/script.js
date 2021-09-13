const container =document.getElementById("container");
const loading = document.querySelector(".loading");
getPost();
getPost();
getPost();
getPost();
getPost();

window.addEventListener('scroll', ()=>{
    const { scrollTop, scrollHeight, clientHeight}=document.documentElement;

    // console.log({ scrollTop, scrollHeight, clientHeight});
    if(clientHeight + scrollTop >= scrollHeight - 5){
        // show animation of loading
        showLoading();

    }
})
function showLoading() {
    loading.classList.add('show');
    //   load more data
     setTimeout(getPost, 1000);  
}


async function getPost(){
    const postResponse = await 
    fetch(`https://jsonplaceholder.typicode.com/posts/${getRandomNr()}`);
    const postData = await postResponse.json();
    // console.log(postData);
    const data={post: postData}
    addDataToDOM(data);
}
function getRandomNr(){
    return Math.floor(Math.random() * 100)+1;
}

function addDataToDOM(data){
   
    const postElement = document.createElement('div');
    postElement.classList.add('blog-post');
    postElement.innerHTML =`
    <h2 class="title">${data.post.title}</h2>
    <p class="text">${data.post.body}</p>
    `;
    
    container.appendChild(postElement);
    loading.classList.remove('show');
}

//${data.post.id}

// var index =1;
// <h2 class="circle">${index}</h2>