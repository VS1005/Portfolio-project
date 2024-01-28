window.addEventListener("scroll",function(){
    const header=document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0)
})

const helloBTN=document.querySelector('.hello');
function alertBTN(){
    alert('Hello !!');
};
helloBTN.addEventListener("click",alertBTN);

const getinTouch=document.querySelector('.co');
function alertContact(){
    alert('Contact to Vatsalya singh by emailing on Outlook at-- s.vatsalya@iitg.ac.in');
};
function mouseHover(){
    newBackgroundColor.style.backgroundColor = 'blue'
};
getinTouch.addEventListener("click",alertContact);
getinTouch.addEventListener("mouseover",mouseHover);