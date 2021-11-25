var projectlinks = document.querySelectorAll("#projectlinks ul li")
var texts = ["CHESS", "CODING", "CRICKET", "MATH"]
var imgs = ["chess.jpg", "coding.jpg", "cricket.jpg", "math.jpg"]
var mainimg = document.getElementById("mainimg")
var imgdesc = document.getElementById("imgdesc")
var imganddesc = document.querySelector("#imganddesc")
var time = 2500
var i = 0

function elementInViewport(el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;

    while (el.offsetParent) {
        el = el.offsetParent;
        top += el.offsetTop;
        left += el.offsetLeft;
    }

    return (
        top >= window.pageYOffset &&
        left >= window.pageXOffset &&
        (top + height) <= (window.pageYOffset + window.innerHeight) &&
        (left + width) <= (window.pageXOffset + window.innerWidth)
    );
}
window.addEventListener("scroll", animation)

function animation() {
    for (i = 0; i < projectlinks.length; i++) {
        if (elementInViewport(projectlinks[i])) {
            projectlinks[i].classList.add("projectlinksinview")
        }
    }
    if (elementInViewport(imganddesc)) {
        imganddesc.classList.add("imganddescinview")
    }
}

setInterval("changeimg()", time)

function changeimg() {
    if (i < imgs.length - 1) {
        i++
    } else {
        i = 0
    }
    mainimg.src = imgs[i]
    imgdesc.innerHTML = texts[i]
}

function menuchange() {
    var menubar1 = document.querySelector('#bar1')
    var menubar2 = document.querySelector('#bar2')
    var menubar3 = document.querySelector('#bar3')
    var ul = document.querySelector('ul')
    menubar1.classList.toggle('bar1change')
    menubar2.classList.toggle('bar2change')
    menubar3.classList.toggle('bar3change')
    ul.classList.toggle('ulchange')
}
