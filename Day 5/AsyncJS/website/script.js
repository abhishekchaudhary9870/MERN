console.log("...App Started...")
function callAPI(){
fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=9a690acf120149669c07c3b20c32732c")
.then((res)=> res.json())
.then((data)=> renderUI(data))
}







function renderUI(data){

    const articles = data.articles;
    console.log(articles);
    const root=document.getElementById("root");
for(let i=0;i<articles.length;i++){
const ar=articles[i];
// console.log(ar)

    const div=document.createElement("div");
    div.setAttribute("class","news-card");
    const h3 =document.createElement("h3");
    h3.innerText= ar.title;
    const img=document.createElement("img");
    img.src=ar.urlToImage;
    const a=document.createElement("a");
    a.innerText='Read More...'
    a.target="_blank";
    a.href=ar.url;
a.textContent='To-be-continued';

// div.innerText='Card'
const p=document.createElement("p");
p.innerText=ar.description;
div.appendChild(h3);
div.appendChild(img);
root.appendChild(div);
div.appendChild(p);
div.appendChild(a)
}
}
// renderUI();
callAPI();