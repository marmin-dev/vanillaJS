const url = new URL(window.location.href)
const urlParams= url.searchParams;
so = document.write(urlParams.get('so'));

if (so == "recommend"){
    let recommend = document.getElementById("recommend")
    recommend.setAttribute("selected",true)
}
else if(so == "popular"){
    let popular = document.getElementById("popular")
    popular.setAttribute("selected",true)
}
else{
    let recent = document.getElementById("recent")
    recent.setAttribute("selected",true)
}

const soValue = urlParams.get('so');

if (soValue === "recommend") {
  let recommend = document.getElementById("recommend");
  recommend.setAttribute("selected", true);
} else if (soValue === "popular") {
  let popular = document.getElementById("popular");
  popular.setAttribute("selected", true);
} else {
  let recent = document.getElementById("recent");
  recent.setAttribute("selected", true);
}