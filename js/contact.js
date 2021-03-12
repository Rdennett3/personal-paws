gsap.registerPlugin(ScrollTrigger);

gsap.from(".formItem", {
    scrollTrigger:{
        trigger:".contactContent",
        start:"top 50%",
    },
    y:100,
    autoAlpha:0,
    duration:1,
    stagger:.25,
});
gsap.from(".hearFromYou h1", {
    scrollTrigger:{
        trigger:".hearFromYou",
        start:"top 50%"
    },
    y:100,
    autoAlpha:0,
    duration:1,
});

gsap.from(".hearFromYou p", {
    scrollTrigger:{
        trigger:".hearFromYou",
        start:"top 40%"
    },
    y:100,
    autoAlpha:0,
    duration:1,
});