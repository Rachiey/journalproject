const post_1=document.getElementById("post_1");
const post_2=document.getElementById("post_2");
const classOverview=document.getElementById("classOverview");

const q="travel";
const limit= 1;
const key="xr36JpsP033KfmDe2JLnczqLinBF57cf";


let url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${q}&limit=${limit}&offset=0&rating=g&lang=en`;

console.log(url);
fetch(url)
.then(response => response.json())
.then(content => {
    console.log(content.data);
    console.log("META", content.meta);
    let fig = document.createElement("figure");
    let img = document.createElement("img");
    img.src = content.data[0].images.downsized.url;
    fig.appendChild(img);
    let out = document.querySelector(".gifs");
    out.insertAdjacentElement("afterbegin", fig);
})

const sent="A project is an individual or collaborative enterprise that is carefully planned and researched about by students. At schools, educational institutes and universities, a project is a research assignment - given to a student - which generally requires a larger amount of effort and more independent work than that involved in a normal essay assignment. It requires students to undertake their own fact-finding and analysis, either from library/internet research or from gathering data empirically. The written report that comes from the project is usually in the form of a dissertation, which will contain sections on the project's inception, analysis, findings and conclusions.";
const para=document.getElementById("p");
para.innerHTML=sent.substring(0,130);

post_2.addEventListener('click', (e) => {
    e.preventDefault();

    fetch('http://localhost:3000/posts')
    .then(obj => obj.json())
    .then(data => setValues(data.all))

    function setValues(data){
        console.log(data[1].post);
    // for (let i = data.length - 1; i >= 0; i--) {
        const art=document.getElementById('addPosts');
        const sector=document.createElement('section');
        const newHeader=document.createElement('header');
        const newH1=document.createElement('h1');
        const newH2=document.createElement('h2');
        const newImg=document.createElement('img');
        newH1.textContent=data[0].post;
        newH2.textContent=data[0].location;
        newImg.src=data[0].gif;
        newImg.className="gifs";
        newHeader.className="post";
        newH1.className="titles";
        newH2.className="locs";
        sector.className="selection";
        newHeader.append(newH2);
        newHeader.append(newH1);
        sector.append(newHeader);
        sector.append(newImg);
        art.append(sector);

        const newLoc = document.getElementById("rep");
        const newTitle = document.getElementById("reps");
        // const posts = document.createElement("div");
        // posts.classList.add("posts");
        newTitle.textContent = data[1].post;
        newLoc.textContent = data[1].location;
    
        
    
     }
    

});



post_1.addEventListener('click', (e) => {
    e.preventDefault();
    classOverview.className="hideClass";


    const newPost=document.getElementById("newPost");
    const postTitle=document.createElement('h1');
    postTitle.textContent="TiTle";
    newPost.append(postTitle);
    console.log(postTitle);
    const postGif=document.createElement('img');
    postGif.src="https://media4.giphy.com/media/9A3t72abirdtyull0m/giphy.gif?cid=2b97f132i3iuiuf7ecbnvmgfh1ruui2suyavurwvupaoz3re&rid=giphy.gif&ct=g";
    newPost.append(postGif);
    postGif.style.width="240px"
    // newPost.style.backgroundColor="yellow";
    newPost.style.margin="20vh";
    // newPost.style.marginLeft="20vh";
    newPost.style.border= "5px solid black";

    const postForm=document.createElement('form');
    const postInput=document.createElement('input');
    const postLable=document.createElement('label');
    const postComment=document.createElement('input');
    postComment.type="textMessage";
    postInput.type="submit";
    newPost.append(postComment);
    postForm.append(postInput);
    newPost.append(postForm);
    
});

    
