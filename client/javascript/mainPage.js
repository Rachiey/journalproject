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
        console.log(img.src);
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
comments.addEventListener("input", (e) => {
  const target = e.target;
  const maxLength = target.getAttribute("maxlength");
  let currentLength = target.value.length;
  counterPost.textContent = `${maxLength - currentLength} characters remaining`;
// Button is enabled since textarea has text:
//addPostButton.disabled = false;
});


//submitting the post
const submitButton = document.getElementById('journalsubmit');
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
    //gif: out.value,
  }

  //if the user doesn't write anything, don't post anything
  if(data.post === "") {
    return;
  }
  
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
  };

submitButton.addEventListener('click', e => {
  submitPost(e);
});