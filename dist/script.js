var mySideBar = document.getElementById("sidebarmenu");
var myBg = document.getElementById("bg");


function openMenu() {
    mySideBar.style.display = "block";
    myBg.style.display = "block";
}

function closeMenu() {
    mySideBar.style.display = "none";
    myBg.style.display = "none";

}

function toggleImg(element) {
    document.getElementById("showimg").style.display = "block";
    document.getElementById("displayimg").src = element.src;
    let captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}