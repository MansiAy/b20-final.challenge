// gsap.registerPlugin(ScrollTrigger);

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true
// });
// locoScroll.on("scroll", ScrollTrigger.update);

// ScrollTrigger.scrollerProxy("#main", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   },
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   pinType: document.querySelector("#home").style.transform ? "transform" : "fixed"
// });


// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// ScrollTrigger.refresh();
// var tl1= gsap.timeline({
//     scrollTrigger:{
//         trigger:"#home",
//         start:"top top",
//         markers:true,
//         scrub:1,
// }
// });
// tl1.to("#img",{
//     top:"-10%",
//     ease:Power1
    
// })
// tl1.to("#line1",{

//     height:0,
//     ease:Expo.easeInOut,
//     duration:2
// })
var tl1=gsap.timeline({
    scrollTrigger:{
        trigger:"#home",
        start:"top top",
        pin:true,
        scrub:1
    }
});
tl1.to("#image",{
    top:"-60%",
    ease:Power1,
    duration:10
    
},"a")
tl1.to("#text p:nth-child(1)  ",{
    y:"-100%",
    delay:-.4,
    stagger:.1,
    duration:2,
    ease:Power0
      },"a")


 tl1.to("#text p:nth-child(2)  ",{
     y:"-100%",
     duration:2,
     stagger:.1,

     delay:.3,
     ease:Power0
      },"a")
// tl.to("#line2",{
//     y:
// })