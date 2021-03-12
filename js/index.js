$('#toggle').click(function() {
  $(this).toggleClass('active');
  $('#overlay').toggleClass('open');
 });

gsap.registerPlugin(ScrollTrigger);

gsap.from("#introItemAlpha h1", {
  scrollTrigger: {
    trigger: ".introContainer",
  },
  y:100,
  autoAlpha:0,
  duration:1,
});

gsap.from("#introItemBravo p", {
  scrollTrigger:{
    trigger:"#introItemBravo",
  },
  y:150,
  autoAlpha:0,
  duration:1,
});

gsap.from("#aboutone h1", {
  scrollTrigger:{
    trigger:".aboutOuter",
    start: "top 80%",
  },
  y:50,
  autoAlpha:0,
  duration:1,
});

gsap.from("#abouttwo p", {
  scrollTrigger:{
    trigger:".aboutOuter",
    start: "top 40%",
  },
  y:200,
  autoAlpha:0,
  duration:1,
});

gsap.from("#aboutthree img", {
  scrollTrigger:{
    trigger:".aboutOuter",
    start:"top 80%",
  },
  y:50,
  autoAlpha:0,
  duration:1,
});

gsap.from("#aboutfour img", {
  scrollTrigger:{
    trigger:"#aboutfour",
    start:"top 80%",
  },
  y:50,
  autoAlpha:0,
  duration:1,
});

gsap.from("#aboutfive p", {
  scrollTrigger:{
    trigger:"#aboutfive",
    start:"top 40%",
  },
   y:200,
   autoAlpha:0,
   duration:1,
});

gsap.from(".testimonialUpper h1", {
  scrollTrigger:{
    trigger:".testimonialUpper",
    start:"top 70%"
  },
  y:100,
  autoAlpha:0,
  duration:1,
})

gsap.from(".testimonialItem", {
  scrollTrigger:{
    trigger:".testimonialItem p",
    start:"top 80%"
  },
  y:100,
  rotate:-3,
  autoAlpha:0,
  duration:.75,
  stagger:.2
});

gsap.from("#ctaInnerAlpha img", {
  scrollTrigger:{
    trigger:".cta",
    start:"top 40%"
  },
  y:200,
  autoAlpha:0,
  duration:1,
});

gsap.from(".mainBtn", {
  scrollTrigger:{
    trigger:".cta",
    start:"top 45%",
  },
  y:50,
  autoAlpha:0,
  duration:1
});

gsap.from( "#ctaInnerBravo h1", {
  scrollTrigger:{
    trigger:".cta",
    start:"top 50%"
  },
  y:-20,
  autoAlpha:0,
  duration:1,
});

gsap.from(".imageItem", {
  scrollTrigger:{
    trigger:".hmpImages",
    start:"top 40%",
  },
  x:50, 
  autoAlpha:0,
  duration:.75,
  stagger:.1,
});