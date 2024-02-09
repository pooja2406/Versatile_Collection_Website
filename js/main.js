
const getElement = (selector) => {
  const element = document.querySelector(selector)
  if (element) return element
  throw Error(`Please double check your class names, there is no ${selector} class`)
}

const links = getElement('.nav-links')
const navBtnDOM = getElement('.nav-btn')

navBtnDOM.addEventListener('click', () => {
  links.classList.toggle('show-links')
})

const date = getElement('#date')
const currentYear = new Date().getFullYear()
date.textContent = currentYear

// like


var like = parseInt($(".number").text()) + 1;
var flag = true;
var timeline1 = gsap.timeline({ repeatDelay: 0.7, paused: true});
timeline1.to(".button", {duration: 0.7, width: 50, ease: Back.easeIn}) 
  .to(".like", {duration: 0.2, opacity: 0}, "-=0.7")
.to(".number", {duration: 0.2,opacity: 0, fontSize: 0}, "-=0.7")
.to(".far", {duration: 0.4, display: "none"}, "-=0.5") 
.to(".fa", {duration: 0.1, display: "inline-block"},"-=0.1")
.to(".button", {duration: 0.7, width: 170})
.to(".like", { opacity: 1},"-=0.5")
.to(".d", {duration: 0.3, opacity: 1, translateX: 0},"-=0.2").to(".number", {duration: 0.2, opacity: 1, text: like, fontSize: 25}, "-=0.1");

$(".button").click(function(){
  event.stopPropagation();
  flag ? timeline1.play() :   timeline1.progress(0).pause();
  flag = !flag;    

  
}); 

/*
Original design by Kashish Mehta 
Dribbble - https://dribbble.com/kashish4xd
Design - https://dribbble.com/shots/11353059-Like-Button
*/
 $(function () {
        $(":file").change(function () {
            if (this.files && this.files[0]) {
                var reader = new FileReader();

                reader.onload = imageIsLoaded;
                reader.readAsDataURL(this.files[0]);
            }
        });
    });

    function imageIsLoaded(e) {
        $('#myImg').attr('src', e.target.result);
        $('#yourImage').attr('src', e.target.result);
    }; 