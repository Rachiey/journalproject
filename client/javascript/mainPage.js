// Selectors
const counterPost = document.getElementById("charCounterPost");
const newPost = document.getElementById("newPost");
const gifSearchButton = document.getElementById("giphySearchButton");

// calls the Giphy api and displays the results
// gifSearchButton.addEventListener("click", (e) => {
//     let search = document.getElementById("gifSearch").value;
  
//     //for multi-word entries (replaces space with plus)
// search = search.replace(/\s/g, "+");




// Adding a visible remaining characters feature 
newPost.addEventListener("input", (e) => {
    const target = e.target;
    const maxLength = target.getAttribute("maxlength");
    let currentLength = target.value.length;
    counterPost.textContent = `${maxLength - currentLength} characters remaining`;
  // Button is enabled since textarea has text:
  addPostButton.disabled = false;
});



// //for the GIF feature 
// let APIKEY = "EmK1vBdg1ZIGje2nKx614fyuVDlGOxjE";
// // you will need to get your own API KEY
// // https://developers.giphy.com/dashboard/
// document.addEventListener("DOMContentLoaded", init);
// function init() {
//   document.getElementById("btnSearch").addEventListener("click", ev => {
//     ev.preventDefault(); //to stop the page reload
//     let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=1&q=`;
//     let str = document.getElementById("search").value.trim();
//     url = url.concat(str);
//     console.log(url);
//     fetch(url)
//       .then(response => response.json())
//       .then(content => {
//         //  data, pagination, meta
//         console.log(content.data);
//         console.log("META", content.meta);
//         let fig = document.createElement("figure");
//         let img = document.createElement("img");
//         let fc = document.createElement("figcaption");
//         img.src = content.data[0].images.downsized.url;
//         img.alt = content.data[0].title;
//         fc.textContent = content.data[0].title;
//         fig.appendChild(img);
//         fig.appendChild(fc);
//         let out = document.querySelector(".out");
//         out.insertAdjacentElement("afterbegin", fig);
//         document.querySelector("#search").value = "";
//       })
//       .catch(err => {
//         console.error(err);
//       });
//   });
// }


// //hashtag feature 
// let input, hashtagArray, container, t;

// input = document.querySelector('#hashtags');
// container = document.querySelector('.tag-container');
// hashtagArray = [];

// input.addEventListener('keyup', e => {
//     if (e.which == 13 && input.value.length > 0) {
//       var text = document.createTextNode(input.value);
//       var p = document.createElement('p');
//       container.appendChild(p);
//       p.appendChild(text);
//       p.classList.add('tag');
//       input.value = '';
      
//       let deleteTags = document.querySelectorAll('.tag');
      
//       for(let i = 0; i < deleteTags.length; i++) {
//         deleteTags[i].addEventListener('click', () => {
//           container.removeChild(deleteTags[i]);
//         });
//       }
//     }
// }); 