const albums=[
  {title:"De Mysteriis Dom Sathanas",artists:"Mayhem",minutes:46},
  {title:"Reign of Blood",artists:"Slayer",minutes:29},
  {title:"Ride the Lightning",artists:"Metallica",minutes:47},
  {title:"Painkiller",artists:"Judas Priest",minutes:46},
  {title:"Iron Fist",artists:"Motörhead",minutes:37}
];

const page=document.createElement("div");
page.style.fontFamily="Arial";
page.style.background="#002b00";
page.style.color="#fff";
page.style.minHeight="100vh";
page.style.padding="40px";
document.body.appendChild(page);

const header=document.createElement("div");
header.style.textAlign="center";
header.style.marginBottom="40px";
page.appendChild(header);

const title=document.createElement("h1");
title.textContent="Metal Albums Library";
title.style.fontSize="42px";
title.style.marginBottom="10px";
header.appendChild(title);

const subtitle=document.createElement("p");
subtitle.textContent="A curated selection of legendary metal albums";
subtitle.style.fontSize="18px";
subtitle.style.color="#cfcfcf";
header.appendChild(subtitle);

const gallery=document.createElement("div");
gallery.style.display="grid";
gallery.style.gridTemplateColumns="repeat(auto-fit,minmax(250px,1fr))";
gallery.style.gap="20px";
gallery.style.marginTop="50px";
page.appendChild(gallery);

albums.forEach((album)=>{
  const card=document.createElement("div");
  card.style.background="#317531";
  card.style.border="1px solid #003300";
  card.style.borderRadius="10px";
  card.style.padding="15px";
  card.style.textAlign="center";
  card.style.transition="0.3s";
  card.style.cursor="pointer";
  gallery.appendChild(card);

  const h3=document.createElement("h3");
  h3.textContent=album.title;
  h3.style.fontSize="20px";
  h3.style.margin="0";
  card.appendChild(h3);

  const info=document.createElement("p");
  info.textContent=`${album.artists} • ${album.minutes} min`;
  info.style.display="none";
  info.style.marginTop="10px";
  info.style.color="#d0d0d0";
  card.appendChild(info);

  const btn=document.createElement("button");
  btn.textContent="Mostrar info";
  btn.style.marginTop="15px";
  btn.style.padding="8px 12px";
  btn.style.border="none";
  btn.style.borderRadius="6px";
  btn.style.cursor="pointer";
  btn.style.background="#333";
  btn.style.color="#fff";
  btn.style.transition="0.3s";
  btn.addEventListener("mouseover",()=>btn.style.background="#555");
  btn.addEventListener("mouseout",()=>btn.style.background="#333");
  card.appendChild(btn);

  btn.addEventListener("click",()=>{
    const showingInfo=info.style.display==="block";
    if(showingInfo){
      info.style.display="none";
      h3.style.display="block";
      btn.textContent="Mostrar info";
    }else{
      info.style.display="block";
      h3.style.display="none";
      btn.textContent="Mostrar título";
    }
  });
});

const toggleBtn=document.createElement("button");
toggleBtn.textContent="Modo claro ☀️";
toggleBtn.style.position="fixed";
toggleBtn.style.top="20px";
toggleBtn.style.right="20px";
toggleBtn.style.padding="10px 15px";
toggleBtn.style.border="none";
toggleBtn.style.borderRadius="8px";
toggleBtn.style.cursor="pointer";
toggleBtn.style.background="#333";
toggleBtn.style.color="#fff";
toggleBtn.style.fontSize="16px";
toggleBtn.style.zIndex="999";
document.body.appendChild(toggleBtn);

let light=false;

toggleBtn.addEventListener("click",()=>{
  light=!light;

  if(light){
    page.style.background="#ffd6e7";
    page.style.color="#000";
    subtitle.style.color="#333";
    toggleBtn.style.background="#ff8fb3";
    toggleBtn.style.color="#000";
    toggleBtn.textContent="Modo oscuro 🌙";

    gallery.querySelectorAll("div").forEach(card=>{
      card.style.background="#a46e85";
      card.style.border="1px solid #ffb6cf";
      card.style.color="#000";
      card.querySelector("p").style.color="#222";
      card.querySelector("h3").style.display="block";
    });

  }else{
    page.style.background="#002b00";
    page.style.color="#fff";
    subtitle.style.color="#cfcfcf";
    toggleBtn.style.background="#333";
    toggleBtn.style.color="#fff";
    toggleBtn.textContent="Modo claro ☀️";

    gallery.querySelectorAll("div").forEach(card=>{
      card.style.background="#004d00";
      card.style.border="1px solid #003300";
      card.style.color="#fff";
      card.querySelector("p").style.color="#d0d0d0";
      card.querySelector("h3").style.display="block";
    });
  }
});
