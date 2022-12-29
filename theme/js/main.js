let documentHeading = document.getElementById("document_heading");
let caret = document.getElementById("caret");
let tipingText = document.getElementById("tiping_text");
let heading_text = " The World's Creative Developers";
let timing = 200;
let headingItrator = 0;
let topNav = document.getElementById("top_nav");


function typewriter() {
    let textLenght = heading_text.length;
    caret.classList.remove("dynamic_caret");
    if (headingItrator < textLenght) {
        if (headingItrator == 0) {
            caret.classList.add("dynamic_caret");
        } else {
            caret.classList.remove("dynamic_caret");
        }
        documentHeading.innerText += heading_text.charAt(headingItrator);
        tipingText.style.opacity = "0";
        headingItrator++;
    } else {
        caret.classList.add("dynamic_caret");
        tipingText.style.opacity = "1";
        setTimeout(()=>{
            documentHeading.innerText = "";
            headingItrator = 0;
        }, 1000 * 2);
    }
    setTimeout(typewriter, timing);
}
typewriter();

window.onscroll = ()=> { fixed_top_nav(); }
let sticky = topNav.offsetTop;
function fixed_top_nav() {
    if (window.pageYOffset > (sticky + 350)) {
        topNav.classList.add("fixed_top_nav");
    } else {
        topNav.classList.remove("fixed_top_nav");
    }
}
function emailUs() {
    let prom = confirm("Sorry service is unavailable. \nRedirecting to contact page...","");
    if(prom == true){
        window.location.href = "./contact.html";
    }
    return false;
}