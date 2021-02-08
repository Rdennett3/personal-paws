$('#toggle').click(function() {
  $(this).toggleClass('active');
  $('#overlay').toggleClass('open');
 });

gsap.registerPlugin(ScrollTrigger);

// const topIntroText = gsap.from('#heroItemAlpha h1',  {
//   y:200,
//   pin:true,
//   opacity: 0,
//   scale:.95,
//   duration: 1,
//   ease: 'ease-in',
//   paused: true,
// });

// ScrollTrigger.create({
//   trigger: '.heroContainer',
//   start: 'top 500px',
//   onEnter: () => topIntroText.restart()
// });

// ScrollTrigger.create({
//   trigger: '.heroContainer',
//   start: '-50px bottom',
//   onLeaveBack: () => topIntroText.pause(0)
// });

const serviceHeaderOne = gsap.from('#serviceheaderOne', {
  y:50,
  pin:true,
  opacity:0,
  duration:1,
  ease:'ease-in',
  paused:true
});

ScrollTrigger.create({
  trigger:'.servicesContainerOne',
  start:'100px bottom',
  onEnter: () => serviceHeaderOne.restart()
});

ScrollTrigger.create({
  trigger:'.servicesContainerOne',
  start: '-50px bottom',
  onLeaveBack: () => serviceHeaderOne.pause(0)
});

const introHeader = gsap.from('#introItemAlpha', {
  y:50,
  scale:1.15,
  pin:true,
  opacity:0,
  duration:1,
  ease:'ease-in',
  paused:true
});

ScrollTrigger.create({
  trigger:'.introContainer',
  start:'100px bottom',
  onEnter: () => introHeader.restart()
});

ScrollTrigger.create({
  trigger:'.servicesContainerOne',
  start: '-50px bottom',
  onLeaveBack: () => introHeader.pause(0)
});

const introInfo = gsap.from('#introItemBravo', {
  y:150,
  scale:1.15,
  pin:true,
  opacity:0,
  duration:1.25,
  ease:'ease-in',
  paused:true
});

ScrollTrigger.create({
  trigger:'.introContainer',
  start:'70px bottom',
  onEnter: () => introInfo.restart()
});

ScrollTrigger.create({
  trigger:'.servicesContainerOne',
  start: '50px bottom',
  onLeaveBack: () => introInfo.pause(0)
});

// const teaItemOne = gsap.from ('#teamItemOne', {
//   y:200,
//   pin:true,
//   opacity:.5,
//   duration:1,
//   ease:'ease-in'
// });

// const introone = gsap.from ('#gridTopTwo', {
//   opacity:.7,
//   y:250,
//   scale:1.1115,
//   duration:1,
//   ease:'ease-in-out',
//   pin:true,
// });

// ScrollTrigger.create({
// trigger:'#gridTopTwo',
// start: '100px bottom',
// onEnter: () => introone.restart(0)
// });

// ScrollTrigger.create({
//   trigger: '#gridTopTwo',
//   start:'-200px bottom',
//   onLeaveBack: () => introone.pause(0),
// });

// const introtwo = gsap.from ('#gridTopOne', {
//   opacity:.7,
//   y:200,
//   autoAlpha:0,

//   duration:1.5,
//   ease:'ease-in-out',
//   pin:true,
// });

// const introtwoto = gsap.to ('#gridTopOne', {
//   opacity:1,
//   y:0,
//   autoAlpha:1,
//   scale:1,
// });

// ScrollTrigger.create({
// trigger:'#gridTopTwo',
// start: '100px bottom',
// onEnter: () => introtwo.restart(0)
// });

// ScrollTrigger.create({
//   trigger: '#gridTopTwo',
//   start:'-200px bottom',
//   onLeaveBack: () => introtwo.pause(0),
// });

// const introtwo = gsap.from ('#gridTopOne', {
//   opacity:.7,
//   y:-50,
//   x:-200,
//   duration:1,
//   ease:'ease-in-out',
//   pin:true,
// });

// ScrollTrigger.create({
// trigger:'#gridTopOne',
// start: 'top bottom',
// onEnter: () => introtwo.restart(0)
// });

// ScrollTrigger.create({
//   trigger: '#gridTopOne',
//   start:'-200px top',
//   onLeaveBack: () => introtwo.pause(0),
// });