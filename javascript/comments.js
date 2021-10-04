//defining commenting elements
const commentSection = document.getElementById('commentSection');
const addCommentButton = document.getElementById('addComment');
const writeComment = document.getElementById('makeComment');

//adding a new comment
function addNewComment(e) {
    const commentText = writeComment.value;

    const newComment = document.createElement("P");
    const newCommentText = document.createTextNode(commentText);
    newComment.appendChild(newCommentText);
    commentSection.appendChild(newComment);
}

addCommentButton.addEventListener('click', e => {
    e.preventDefault();
    addNewComment(e);
    //setOnLocalStorage();
})

//defining reaction elements
const smile = document.getElementById('smile');
const laugh = document.getElementById('laugh');
const sad = document.getElementById('sad');

const smileCount = document.getElementById('smileCount');
const laughCount = document.getElementById('laughCount');
const sadCount = document.getElementById('sadCount');

let displaySmileCount = parseInt(smileCount.textContent);
let displayLaughCount = parseInt(laughCount.textContent);
let displaySadCount = parseInt(sadCount.textContent);

//adding a smile reaction
function addSmileReaction(e) {
    displaySmileCount = displaySmileCount + 1;
    smileCount.textContent = displaySmileCount;
}

smile.addEventListener('click', e => {
    e.preventDefault();
    addSmileReaction(e);
});

//adding a laugh reaction
function addLaughReaction(e) {
    displayLaughCount = displayLaughCount + 1;
    laughCount.textContent = displayLaughCount;
}

laugh.addEventListener('click', e => {
    e.preventDefault();
    addLaughReaction(e);
});

//adding a sad reaction
function addSadReaction(e) {
    displaySadCount = displaySadCount + 1;
    sadCount.textContent = displaySadCount;
}

sad.addEventListener('click', e => {
    e.preventDefault();
    addSadReaction(e);
});






//Making sure comments don't disappear after a refresh
// function setOnLocalStorage () {
//     localStorage.setItem('commentSection', commentSection.textContent);
// }



