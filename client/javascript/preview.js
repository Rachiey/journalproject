
const post_1=document.getElementById("post_1");
const post_2=document.getElementById("post_2");
const addPosts=document.getElementById("addPosts");
const classOverview=document.getElementById("classOverview");

const postReactionForm=document.createElement('form');
const postReactionSimleInput=document.createElement('button');
const postReactionLoveInput=document.createElement('button');
const postReactionLaughInput=document.createElement('button');
const postForm=document.createElement('form');
const art=document.getElementById('newPost');
const sector=document.createElement('section');
const submitButton=document.createElement('button');
const postLable=document.createElement('label');
const postComment=document.createElement('textarea');

const checkIds=[];
const selectPostID=[];

const entertainment="entertainment";
const food="Food and Drink";
const sightseeing="Sightseeing";
const posts="posts";



// const q="travel";
// const limit= 1;
// const key="xr36JpsP033KfmDe2JLnczqLinBF57cf";


// let url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${q}&limit=${limit}&offset=0&rating=g&lang=en`;

// console.log(url);
// fetch(url)
// .then(response => response.json())
// .then(content => {
//     console.log(content.data);
//     console.log("META", content.meta);
//     let fig = document.createElement("figure");
//     let img = document.createElement("img");
//     img.src = content.data[0].images.downsized.url;
//     fig.appendChild(img);
//     let out = document.querySelector(".gifs");
//     out.insertAdjacentElement("afterbegin", fig);
// })

// const sent="A project is an individual or collaborative enterprise that is carefully planned and researched about by students. At schools, educational institutes and universities, a project is a research assignment - given to a student - which generally requires a larger amount of effort and more independent work than that involved in a normal essay assignment. It requires students to undertake their own fact-finding and analysis, either from library/internet research or from gathering data empirically. The written report that comes from the project is usually in the form of a dissertation, which will contain sections on the project's inception, analysis, findings and conclusions.";
// const para=document.getElementById("p");
// para.innerHTML=sent.substring(0,130);
// addPosts.addEventListener("loadstart"
document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();

    fetch(`http://localhost:3000/${posts}`)
    .then(obj => obj.json())
    .then(data => setValues(data.all))

    function setValues(data){
        // console.log(data[1].post);
        for (let i = data.length - 1; i >= 0; i--) {
            const art=document.getElementById('addPosts');
            const sector=document.createElement('section');
            const newHeader=document.createElement('header');
            const newH1=document.createElement('h1');
            const newH2=document.createElement('h2');
            const newImg=document.createElement('img');
            const newMsg=document.createElement('p');
            newH1.textContent=data[i].title;
            newH2.textContent=data[i].location;
            newMsg.textContent=data[i].post;
            newImg.src=data[i].gif;

            newImg.className="gifs";
            newHeader.className="heads";
            newH1.className="titles";
            newH2.className="locs";
            sector.className="selection";
            newMsg.className="p";

            sector.id=data[i].id;
            // checkIds.push(sector.id);
            checkIds.push(data[i].id);

            console.log(checkIds);

            newHeader.append(newH2);
            newHeader.append(newH1);
            sector.append(newHeader);
            sector.append(newImg);
            sector.append(newMsg);
            art.append(sector);   
        }
        setID(checkIds)
    }

    function setID(checkIds){
        for (let i =0 ; checkIds.length > i;  i++) {
            // var idNum=`${i}`;
            const getIdNum=document.getElementById(checkIds[i]);
            getIdNum.addEventListener('click', (e) => {
                e.preventDefault();
                classOverview.className="hideClass";
                getPostById(checkIds[i],selectPostID[i]);
        })
        }

    }

    
});

console.log(checkIds);


// addPosts.addEventListener('click', (e) => {
//     e.preventDefault();

//     fetch('http://localhost:3000/posts')
//     .then(obj => obj.json())
//     .then(data => setID(data.all))

//     function setID(data){
//         console.log(data);
//         for (let i = data.length - 1; i >= 0; i--) {
//             var idNum=`${i}`;
//             const getIdNum=document.getElementById(idNum);
//             getIdNum.addEventListener('click', (e) => {
//                 e.preventDefault();
//                 classOverview.className="hideClass";
//                 getPostById(idNum);
//         })
//         }

//     }

    
// });


function getPostById(idNum){
    console.log(typeof(idNum));    
    console.log(idNum);
    fetch(`http://localhost:3000/posts/${idNum}`)
    .then(obj => obj.json())
    .then(data => {
        const CommentsArr=[]; 
        const newHeader=document.createElement('header');
        const newH1=document.createElement('h1');
        const newH2=document.createElement('h2');
        const newImg=document.createElement('img');
        const newMsg=document.createElement('p');

        newH1.textContent=data.title;
        newH2.textContent=data.location;
        newMsg.textContent=data.post;
        newImg.src=data.gif;

        newImg.className="gifs";
        newHeader.className="heads";
        newH1.className="titles";
        newH2.className="locs";
        sector.className="selection";
        newMsg.className="p";

        newHeader.append(newH2);
        newHeader.append(newH1);
        sector.append(newHeader);
        sector.append(newImg);
        sector.append(newMsg);
        // art.append(sector);

        art.style.width="50vw";
        art.style.marginLeft="25vw";
        art.style.marginTop="15vh";
        newH1.style.width="calc((0.6 * 100vw)/2)";
        newImg.style.width="200px";
        newImg.style.height="200px";
        newImg.style.marginLeft="calc((calc(100vw/2) - 200px)/2)";

        
        postComment.cols="55";
        postComment.rows="2";
        postComment.placeholder="Comments..";
        submitButton .type="submit";
        submitButton.textContent="Comment";
        
        postForm.append(postLable);
        postForm.append(postComment);
        // newPost.append(postForm);
        postForm.append(submitButton);
        sector.append(postForm);



        const line=document.createElement('br');
        const addReactionsList=document.createElement('div');
        sector.append(line);
        console.log(data.reactions.smile);
      
        const addPostReactionSmile=document.createElement('p');
        const addPostReactionLove=document.createElement('p');
        const addPostReactionLaugh=document.createElement('p');

        postReactionSimleInput.type="submit";
        postReactionLoveInput.type="submit";
        postReactionLaughInput.type="submit";

        postReactionSimleInput.textContent=data.reactions.smile;
        postReactionLoveInput.textContent=data.reactions.love;
        postReactionLaughInput.textContent=data.reactions.laugh;
        
        console.log(data.reactions);
        addPostReactionSmile.innerHTML=`&#128522;  `;
        addReactionsList.append(addPostReactionSmile);
        addReactionsList.append(postReactionSimleInput);

        addPostReactionLove.innerHTML=`&#128525;  `;
        addReactionsList.append(addPostReactionLove);
        addReactionsList.append(postReactionLoveInput);

        addPostReactionLaugh.innerHTML=`&#128514;  `;
        addReactionsList.append(addPostReactionLaugh);
        addReactionsList.append(postReactionLaughInput);

        addPostReactionSmile.style.display="inline-block";
        addPostReactionLove.style.display="inline-block";
        addPostReactionLaugh.style.display="inline-block";

        addPostReactionSmile.style.marginLeft="6vw";
        postReactionSimleInput.style.marginRight="9vw";
        postReactionLoveInput.style.marginRight="9vw";

        sector.append(addReactionsList);
        sector.append(line);

        function addReaction(e, reactionType) {
            const data = {
                reaction : reactionType,
            };
            const options = {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            };
            fetch(`http://localhost:3000/posts/reactions/${idNum}`, options)
                .then(console.log("New reaction added"))
                .catch(err => console.warn("Oops, something went wrong."))
        };


        postReactionSimleInput.addEventListener('click', (e) => {
            e.preventDefault();
            addReaction(e, "smile");
            postReactionSimleInput.textContent =   1 + parseInt(postReactionSimleInput.textContent);
        })
        
        postReactionLoveInput.addEventListener('click', (e) => {
            e.preventDefault();
            addReaction(e, "love")
            postReactionLoveInput.textContent =   1 + parseInt(postReactionLoveInput.textContent);
        })
        
        postReactionLaughInput.addEventListener('click', (e) => {
            e.preventDefault();
            addReaction(e, "laugh")
            postReactionLaughInput.textContent =   1 + parseInt(postReactionLaughInput.textContent);
        })


        console.log(data.comments.length);
        for(let i = 0; i < data.comments.length ; i++){
            const addPostComment=document.createElement('p');           
            // console.log(data.comments[i]);
            addPostComment.textContent=data.comments[i];
            sector.append(addPostComment);
        }
       

        submitButton.addEventListener('click', (e) => {
            e.preventDefault();
            submitComment(e);
        
            function submitComment(e) {
                const data = {
                    comment: postComment.value,
                };
                
                //if the user doesn't write anything, don't post anything
                if(data.comment === "") {
                    return;
                }
                const options = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                }
                console.log(`http://localhost:3000/posts/comments/${idNum}`);
                fetch(`http://localhost:3000/posts/comments/${idNum}`, options)
                    .then(console.log("New comment added"))
                    .then(addTheComments(parseInt(idNum),postComment.value))
                    .then(postComment.value="")
                    .catch(err => console.warn("Oops, something went wrong."))
            };
        });

        art.append(sector);
        sector.style.border="5px solid black";
      
    })

}




function addTheComments(idNum,value){
    const addNewComment=document.createElement('p');       
    addNewComment.textContent=value;
    sector.append(addNewComment);
}




// post_1.addEventListener('click', (e) => {
//     e.preventDefault();
//     classOverview.className="hideClass";

//     fetch('http://localhost:3000/posts')
//     .then(obj => obj.json())
//     .then(data => {
            
//         const art=document.getElementById('newPost');
//         const sector=document.createElement('section');
//         const newHeader=document.createElement('header');
//         const newH1=document.createElement('h1');
//         const newH2=document.createElement('h2');
//         const newImg=document.createElement('img');
//         const newMsg=document.createElement('p');

//         newH1.textContent=data.all[0].post;
//         newH2.textContent=data.all[0].location;
//         newMsg.textContent=data.all[0].message;
//         newImg.src=data.all[0].gif;

//         newImg.className="gifs";
//         newHeader.className="heads";
//         newH1.className="titles";
//         newH2.className="locs";
//         sector.className="selection";
//         newMsg.className="p";

//         newHeader.append(newH2);
//         newHeader.append(newH1);
//         sector.append(newHeader);
//         sector.append(newImg);
//         sector.append(newMsg);
//         // art.append(sector);

//         art.style.width="50vw";
//         art.style.marginLeft="25vw";
//         art.style.marginTop="15vh";
//         newH1.style.width="calc((0.6 * 100vw)/2)";
//         newImg.style.width="200px";
//         newImg.style.height="200px";
//         newImg.style.marginLeft="calc((calc(100vw/2) - 200px)/2)";
//         // art.style.border="5px solid black";
//         // art.style.backgroundColor="blue";

//         const postForm=document.createElement('form');
//         const submitButton=document.createElement('input');
//         const postLable=document.createElement('label');
//         const postComment=document.createElement('textarea');
//         // postComment.type="textMessage";
//         postComment.cols="55";
//         postComment.rows="2";
//         postComment.textContent="Comments..";
//         submitButton.type="submit";
//         postForm.append(postLable);
//         postForm.append(postComment);
//         // newPost.append(postForm);
//         postForm.append(submitButton);
//         sector.append(postForm);

//         // art.style.border="5px solid black";
//         console.log(data.all[0].comments.length);
//         for(let i = data.all[0].comments.length - 1; i >= 0; i--){
//             const addPostComment=document.createElement('p');
//             const line=document.createElement('br');
//             console.log(data.all[0].comments[i]);
//             addPostComment.textContent=data.all[0].comments[i];
//             sector.append(addPostComment);
//             // sector.append(line);
//         }

//         art.append(sector);
//         sector.style.border="5px solid black";
      
//     })





//     // const newPost=document.getElementById("newPost");
//     // const postTitle=document.createElement('h1');
//     // postTitle.textContent="TiTle";
//     // newPost.append(postTitle);
//     // console.log(postTitle);
//     // const postGif=document.createElement('img');
//     // postGif.src="https://media4.giphy.com/media/9A3t72abirdtyull0m/giphy.gif?cid=2b97f132i3iuiuf7ecbnvmgfh1ruui2suyavurwvupaoz3re&rid=giphy.gif&ct=g";
//     // newPost.append(postGif);
//     // postGif.style.width="240px"
//     // // newPost.style.backgroundColor="yellow";
//     // newPost.style.margin="20vh";
//     // // newPost.style.marginLeft="20vh";
//     // newPost.style.border= "5px solid black";

//     // const postForm=document.createElement('form');
//     // const submitButton=document.createElement('input');
//     // const postLable=document.createElement('label');
//     // const postComment=document.createElement('input');
//     // postComment.type="textMessage";
//     // submitButton.type="submit";
//     // newPost.append(postComment);
//     // postForm.append(submitButton);
//     // newPost.append(postForm);
    
// });

    
