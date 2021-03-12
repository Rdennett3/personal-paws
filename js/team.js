$('#toggle').click(function() {
  $(this).toggleClass('active');
  $('#overlay').toggleClass('open');
 });


gsap.registerPlugin(ScrollTrigger);

gsap.from(".teamintro p", {
    scrollTrigger:{
      trigger:".teamintro",
      start:"top 50%"
    },
    y:100,
    autoAlpha:0,
    duration:1,
});

gsap.from("#teamItemOne img", {
  scrollTrigger:{
    trigger:"#teamItemOne",
    start:"top 50%"
  },
  y:100,
  autoAlpha:0,
  duration:1,
});

gsap.from("#teamItemTwo h2",{
  scrollTrigger:{
    trigger:"#teamItemTwo",
    start:"top 50%"
  },
  y:100,
  autoAlpha:0,
  duration:1,
});

gsap.from("#teamItemTwo p",{
  scrollTrigger:{
    trigger:"#teamItemTwo",
    start:"top 50%"
  },
  y:100,
  autoAlpha:0,
  duration:1,
});

gsap.from("#textContainer1 p", {
  scrollTrigger:{
    trigger:"#textContainer1",
    start:"top 50%"
  },
  y:100,
  autoAlpha:0,
  duration:1,
});

gsap.from("#textContainer2 p", {
  scrollTrigger:{
    trigger:"#textContainer2",
    start:"top 50%"
  },
  y:100,
  autoAlpha:0,
  duration:1,
});

gsap.from("#textContainer3 p", {
  scrollTrigger:{
    trigger:"#textContainer3",
    start:"top 50%"
  },
  y:100,
  autoAlpha:0,
  duration:1,
});

gsap.from("#textContainer4 p", {
  scrollTrigger:{
    trigger:"#textContainer4",
    start:"top 50%"
  },
  y:100,
  autoAlpha:0,
  duration:1,
});

gsap.from("#textContainer5 p", {
  scrollTrigger:{
    trigger:"#textContainer5",
    start:"top 50%"
  },
  y:100,
  autoAlpha:0,
  duration:1,
});
