
const post_1=document.getElementById("post_1");
const post_2=document.getElementById("post_2");
const addPosts=document.getElementById("addPosts");
const classOverview=document.getElementById("classOverview");

const postReactionForm=document.createElement('form');
const postReactionSimleInput=document.createElement('button');
const postReactionLoveInput=document.createElement('button');
const postReactionLaughInput=document.createElement('button');
const postForm=document.createElement('form');
const art=document.getElementById('newPosts');
const sector=document.createElement('section');
const submitButton=document.createElement('button');
const postLable=document.createElement('label');
const postComment=document.createElement('textarea');
const line=document.createElement('br');


submitButton.className="submitButton";

const checkIds=[];
const selectPostID=[];

const posts="Entertainment";


document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();

    fetch(`https://travel-share-journal.herokuapp.com/${posts}`)
    .then(obj => obj.json())
    .then(data => setValues(data.all))

    function setValues(data){
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
            newImg.src=data[i].gif;

            if(data[i].post.length <= 220 ){
                newMsg.textContent=data[i].post;
            }else{
                newMsg.textContent=data[i].post.substring(0,220);
            }
            
            newImg.className="gifs";
            newHeader.className="heads";
            newH1.className="titles";
            newH2.className="locs";
            sector.className="selection";
            newMsg.className="p";

            sector.id=data[i].id;
            checkIds.push(data[i].id); 

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
            const getIdNum=document.getElementById(checkIds[i]);
            getIdNum.addEventListener('click', (e) => {
                e.preventDefault();
                classOverview.className="hideClass";
                getPostById(checkIds[i],selectPostID[i]);
        })
        }

    }

    
});


function getPostById(idNum){
    console.log(typeof(idNum));    
    console.log(idNum);
    fetch(`https://travel-share-journal.herokuapp.com/posts/${idNum}`)
    .then(obj => obj.json())
    .then(data => {
        const newHeader=document.createElement('header');
        const newH1=document.createElement('h1');
        const newH2=document.createElement('h2');
        const newImg=document.createElement('img');
        const newMsg=document.createElement('p');

        newH1.textContent=data.title;
        newH2.textContent=data.location;
        newMsg.textContent=data.post;
        newImg.src=data.gif;

        newImg.className="gifImg";
        newHeader.className="heads";
        newH1.className="postTitle";
        newH2.className="locs";
        sector.className="selection";
        newMsg.className="p";

        newHeader.append(newH2);
        newHeader.append(newH1);
        // newHeader.append(line)
        sector.append(newHeader);
        sector.append(newImg);
        sector.append(newMsg);

        art.style.marginTop="12vh";
        newImg.style.width="200px";
        newImg.style.height="200px";
 
        postComment.cols="55";
        postComment.rows="2";
        postComment.placeholder="Comments..";
        submitButton.type="submit";
        submitButton.textContent="Comment";
        newMsg.style.fontFamily="'Montserrat', sans-serif";
        newMsg.style.fontSize="20px";
        newH1.style.fontSize="20px";
        // newH1.style.marginBottom="8px";
        newMsg.style.marginBottom="8px";
        newMsg.style.marginTop="8px";
        
        postForm.append(postLable);
        postForm.append(postComment);
        postForm.append(line);
        postForm.append(submitButton);
        sector.append(postForm);


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
            fetch(`https://travel-share-journal.herokuapp.com/posts/reactions/${idNum}`, options)
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
            addPostComment.textContent=data.comments[i];
            addPostComment.style.fontFamily="'Montserrat', sans-serif";
            addPostComment.style.paddingLeft="20px";
            sector.append(addPostComment);
        }
       

        submitButton.addEventListener('click', (e) => {
            e.preventDefault();
            submitComment(e);
        
            function submitComment(e) {
                const data = {
                    comment: postComment.value,
                };

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
                fetch(`https://travel-share-journal.herokuapp.com/posts/comments/${idNum}`, options)
                    .then(console.log("New comment added"))
                    .then(addTheComments(parseInt(idNum),postComment.value))
                    .then(postComment.value="")
                    .catch(err => console.warn("Oops, something went wrong."))
            };
        });

        art.append(sector);
        sector.style.border="5px solid #a9cfe2";
      
    })

}

function expansion() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " expanded";
    } else {
      x.className = "topnav";
    }
  }


function addTheComments(idNum,value){
    const addNewComment=document.createElement('p');       
    addNewComment.textContent=value;
    addNewComment.style.fontFamily="'Montserrat', sans-serif";
    addNewComment.style.paddingLeft="20px";
    sector.append(addNewComment);
}

