// Selectors
const counterPost = document.getElementById("charCounterPost");

// const newPost = document.getElementById("newPost");
// const gifSearchButton = document.getElementById("gifs");
// const addGifButton = document.querySelector("#addGif");
// const addPostButton = document.getElementById("journalsubmit");
// Adding a visible remaining characters feature 
newPost.addEventListener("input", (e) => {
    const target = e.target;
    const maxLength = target.getAttribute("maxlength");
    let currentLength = target.value.length;
    counterPost.textContent = `${maxLength - currentLength} characters remaining`;
  // Button is enabled since textarea has text:
  addPostButton.disabled = false;
});


//Giphy feature 
let apiKey = "EmK1vBdg1ZIGje2nKx614fyuVDlGOxjE";
let results = document.querySelector('.giphy-search__results');

function fetchGiphy() {
    results.innerHTML = '';
    let str = document.querySelector('#gif-search-bar').value.trim();
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=1&q=${str}`;
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
};

const searchbar = document.querySelector('.giphy-search__container input');
const gifImageContainer = document.querySelector('.giphy-search__results');

searchbar.addEventListener('keydown', handleGifSearch);
gifImageContainer.addEventListener('click', addSelectedGifToPost);

//giphy API key 
// let APIKEY = "EmK1vBdg1ZIGje2nKx614fyuVDlGOxjE";
//       // you will need to get your own API KEY
//       // https://developers.giphy.com/dashboard/
//       document.addEventListener("DOMContentLoaded", init);
//       function init() {
//         document.getElementById("btnSearch").addEventListener("click", ev => {
//           ev.preventDefault(); //to stop the page reload
//           let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=1&q=`;
//           let str = document.getElementById("search").value.trim();
//           url = url.concat(str);
//           console.log(url);
//           fetch(url)
//             .then(response => response.json())
//             .then(content => {
//               //  data, pagination, meta
//               console.log(content.data);
//               console.log("META", content.meta);
//               let fig = document.createElement("figure");
//               let img = document.createElement("img");
//               let fc = document.createElement("figcaption");
//               img.src = content.data[0].images.downsized.url;
//               img.alt = content.data[0].title;
//               fc.textContent = content.data[0].title;
//               fig.appendChild(img);
//               fig.appendChild(fc);
//               let out = document.querySelector(".out");
//               out.insertAdjacentElement("afterbegin", fig);
//               document.querySelector("#search").value = "";
//             })
//             .catch(err => {
//               console.error(err);
//             });
//         });
//       };