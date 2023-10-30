
// var main = document.querySelector('.main')

// window.addEventListener("mousemove",function(details){
//   gsap.to('#center', {
//     left: details.clientX +'px',
//     top: details.clientY +'px',
//     ease : Power3

//   })
// });





function init(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);


ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());


ScrollTrigger.refresh();

}

init()


var crsr = document.querySelector(".curser")
var main = document.querySelector(".main")
var video = document.querySelector(".page1 video")


main.addEventListener("mousemove", function(dets){
  crsr.style.left = dets.x+ "px";
  crsr.style.top = dets.y+ "px";
})

video.addEventListener("mouseenter",function(){
 
  crsr.style.width = "80px",
  crsr.style.height = "20px",
  crsr.style.borderRadius = "30px",
  crsr.innerHTML= "sound on ",
  crsr.color= "white",
  crsr.backgroundColor= "green"
  

})

video.addEventListener("mouseleave", function(){
  crsr.style.width = "20px",
  crsr.style.height = "20px",
  crsr.innerHTML= ""
})





var tl = gsap.timeline({
  scrollTrigger : { 
    trigger : ".page1 h1 ", 
    scroller : ".main"  ,
     markers : true ,
     start : "top 27%",
     end : "top 0", 
     scrub : 3, 

 }
})

tl.to(".page1 h1",{
     x : -100,
      
   
    
},"anim")


tl.to(".page1 h2",{
  x : 100,
},"anim") 

tl.to(".page1 video" , {
  width : "80%", 

}, "anim")



var tl2 = gsap.timeline({
  scrollTrigger : { 
    trigger : ".page1 h1 ", 
    scroller : ".main"  ,
     markers : true ,
     start : "top -127%",
     end : "top -120%", 
     scrub : 3, 

 }
})
tl2.to(".main",{
  backgroundColor : "#fff",
  
})


