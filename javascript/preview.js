
const q="travel";
const limit= 1;
const key="xr36JpsP033KfmDe2JLnczqLinBF57cf";


let url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${q}&limit=${limit}&offset=0&rating=g&lang=en`;

console.log(url);
fetch(url)
.then(response => response.json())
.then(content => {
    console.log(content.data);
    console.log("META", content.meta);
    let fig = document.createElement("figure");
    let img = document.createElement("img");
    img.src = content.data[0].images.downsized.url;
    fig.appendChild(img);
    let out = document.querySelector(".gifs");
    out.insertAdjacentElement("afterbegin", fig);
})
