
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

const sent="A project is an individual or collaborative enterprise that is carefully planned and researched about by students. At schools, educational institutes and universities, a project is a research assignment - given to a student - which generally requires a larger amount of effort and more independent work than that involved in a normal essay assignment. It requires students to undertake their own fact-finding and analysis, either from library/internet research or from gathering data empirically. The written report that comes from the project is usually in the form of a dissertation, which will contain sections on the project's inception, analysis, findings and conclusions.";
const para=document.getElementById("p");
para.innerHTML=sent.substring(0,200);
