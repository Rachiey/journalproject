const counterPost = document.getElementById("charCounterPost");

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

//Character Counter 
newPost.addEventListener("input", (e) => {
  const target = e.target;
  const maxLength = target.getAttribute("maxlength");
  let currentLength = target.value.length;
  counterPost.textContent = `${maxLength - currentLength} characters remaining`;
// Button is enabled since textarea has text:
addPostButton.disabled = false;
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
  };


submitButton.addEventListener('click', e => {
  e.preventDefault();
  submitPost(e);
});