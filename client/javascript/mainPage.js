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
      .then(response => response.json())
      .then(content => {
        //  data, pagination, meta
        console.log(content.data);
        console.log("META", content.meta);
        let fig = document.createElement("figure");
        let img = document.createElement("img");
        let fc = document.createElement("figcaption");
        img.src = content.data[0].images.downsized.url;
        img.alt = content.data[0].title;
        fc.textContent = content.data[0].title;
        fig.appendChild(img);
        fig.appendChild(fc);
        let out = document.querySelector(".out");
        out.insertAdjacentElement("afterbegin", fig);
        document.querySelector("#search").value = "";
      })
      .catch(err => {
        console.error(err);
      });
  });
}


//hashtag feature 
let input, hashtagArray, container, t;

input = document.querySelector('#hashtags');
container = document.querySelector('.tag-container');
hashtagArray = [];

input.addEventListener('keyup', e => {
    if (e.which == 13 && input.value.length > 0) {
      var text = document.createTextNode(input.value);
      var p = document.createElement('p');
      container.appendChild(p);
      p.appendChild(text);
      p.classList.add('tag');
      input.value = '';
      
      let deleteTags = document.querySelectorAll('.tag');
      
      for(let i = 0; i < deleteTags.length; i++) {
        deleteTags[i].addEventListener('click', () => {
          container.removeChild(deleteTags[i]);
        });
      }
    }
});

//katie messing with stuff
//submitting the post
const submitButton = document.getElementById('journalpost');
const journalPostSubmission = document.getElementById('comments');
const locationInput = document.getElementById('location')
const titleInput = document.getElementById('title');

function submitPost(e) {
  console.log(journalPostSubmission.value);
  console.log(locationInput.value);

  const data = {
    title: titleInput.value,
    location: locationInput.value,
    post: journalPostSubmission.value,
    //gif: `${img.src}` //figure out how to access img.src
  }

  //if the user doesn't write anything, don't post anything
  if(data.post === "") {
    return;
  }

  //somehow handle what to do if the user doesn't want to add a gif
  //actually I don't think this is needed because of how the constructor works?
  
  const options = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }
  fetch('http://localhost:3000/posts', options)
    .then(console.log(options))
    .catch(err => console.warn('Oops, something went wrong.'))
}

submitButton.addEventListener('click', e => {
  e.preventDefault(); //get rid of this!
  submitPost(e);
})

