//change image
const img = document.querySelector("img");
img.addEventListener("click", () => {
    let src = img.getAttribute("src");
    if(src == "images/corgi.jpg"){
        img.setAttribute("src","images/corgi2.jpg")
    }
    else
    {
        img.setAttribute("src","images/corgi.jpg")
    }
});

//
const NAMEKEY = "name";
const btn = document.querySelector("button");
const h2 = document.querySelector("h2");

const setUser = () => {
    const name = prompt("enter your name");
    if(!name){
        setUser();
    }
    else
    {
        localStorage.setItem("name", name);
        h2.textContent = `Welcome ${localStorage.getItem(NAMEKEY)}!`;
    }
};

btn.addEventListener("click", setUser);

if(!localStorage.getItem(NAMEKEY)){
    setUser();
}
else
{
    h2.textContent = `Welcome ${localStorage.getItem(NAMEKEY)}!`;
}





