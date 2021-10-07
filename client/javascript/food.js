
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

const posts="Food and Drink";

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
            sector.id=`${i}`;
            checkIds.push(sector.id);
            selectPostID.push(data[i].id);
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



function getPostById(idNum,numberOfId){
    console.log(typeof(idNum));    
    console.log(idNum);
    fetch(`http://localhost:3000/${posts}`)
    .then(obj => obj.json())
    .then(data => {
        const CommentsArr=[]; 
        const newHeader=document.createElement('header');
        const newH1=document.createElement('h1');
        const newH2=document.createElement('h2');
        const newImg=document.createElement('img');
        const newMsg=document.createElement('p');

        newH1.textContent=data.all[idNum].title;
        newH2.textContent=data.all[idNum].location;
        newMsg.textContent=data.all[idNum].post;
        newImg.src=data.all[idNum].gif;

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
        console.log(data.all[idNum].reactions.smile);
      
        const addPostReactionSmile=document.createElement('p');
        const addPostReactionLove=document.createElement('p');
        const addPostReactionLaugh=document.createElement('p');

        postReactionSimleInput.type="submit";
        postReactionLoveInput.type="submit";
        postReactionLaughInput.type="submit";

        postReactionSimleInput.textContent=data.all[idNum].reactions.smile;
        postReactionLoveInput.textContent=data.all[idNum].reactions.love;
        postReactionLaughInput.textContent=data.all[idNum].reactions.laugh;
        
        console.log(data.all[idNum].reactions);
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


        console.log(data.all[idNum].comments.length);
        for(let i = 0; i < data.all[idNum].comments.length ; i++){
            const addPostComment=document.createElement('p');           
            // console.log(data.all[idNum].comments[i]);
            addPostComment.textContent=data.all[idNum].comments[i];
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
                console.log(`http://localhost:3000/posts/comments/${numberOfId}`);
                fetch(`http://localhost:3000/posts/comments/${numberOfId}`, options)
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


