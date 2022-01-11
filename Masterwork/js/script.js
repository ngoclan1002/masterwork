window.onscroll = function () {
    scrollFunction()
};
let header_fix = document.querySelector("header")

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        header_fix.classList.add('nav-fix')
    } else {
        header_fix.classList.remove('nav-fix')
    }
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("back-to-top").style.display = "block";
    } else {
        document.getElementById("back-to-top").style.display = "none";
    }
}

document.querySelector('#back-to-top').addEventListener('click', function () {
    window.scrollTo({top: 0, behavior: "smooth"})
})

let project_toggle = document.querySelector('.project ul.nav-tabs li.nav-item a.nav-link')
