//for the GIF feature 
let APIKEY = "EmK1vBdg1ZIGje2nKx614fyuVDlGOxjE";
// you will need to get your own API KEY
// https://developers.giphy.com/dashboard/



document.addEventListener("DOMContentLoaded", init);
function init() {
  document.getElementById("btnSearch").addEventListener("click", ev => {
    ev.preventDefault(); //to stop the page reload
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=1&q=`;
    let str = document.getElementById("search").value.trim();
    url = url.concat(str);
    console.log(url);
    fetch(url)
        .then(resp => resp.json())
        .then(json => {
            let img = document.createElement('img');
            img.src = json.data[0].images.fixed_height_downsampled.url;
            img.style.cursor = 'pointer';
            results.appendChild(img);
            document.querySelector('#gif-search-bar').value = '';
        })
        .catch(err => {
            console.error(err);
        });
}

const handleGifSearch = event => {
    if (event.key === 'Enter') {
        fetchGiphy();
    }
};

const addSelectedGifToPost = event => {
    event.preventDefault();

    const postContent = document.querySelector('.newPost');
    const gifSearchModal = document.querySelector('.giphy-search');
    const gifImage = document.querySelector('.giphy-search__results img');

    if (gifImage) {
        gifImage.style.height = '200px';
        gifImage.style.objectFit = 'contain';
        postContent.appendChild(gifImage);
        gifSearchModal.style.visibility = 'hidden';
    }
});

//katie messing with stuff
const submitButton = document.getElementById('journalpost');
const journalPostSubmission = document.getElementById('comments');
const locationInput = document.getElementById('location')

function submitPost(e) {
  console.log(journalPostSubmission.value);
  console.log(locationInput.value);

  const data = {
    location: locationInput.value,
    post: journalPostSubmission.value,
    gif: `${img.src}` //figure out how to access img.src
  }

  console.log(data.gif);

  //if the user doesn't write anything, do post anything
  if(data.post === "") {
    return;
  }

  //somehow handle what to do if the user doesn't want to add a gif
  //actually I don't think this is needed because of how the constructor works?
  
  const options = {
    method: 'POST',
    body: JSON.stringify(data)
  }
  fetch('http://localhost:3000/posts', options)
    .then(console.log(data))
    .catch(err => console.warn('Oops, something went wrong.'))
}

submitButton.addEventListener('click', e => {
  e.preventDefault();
  submitPost(e);
})

