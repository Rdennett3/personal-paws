$('#toggle').click(function() {
  $(this).toggleClass('active');
  $('#overlay').toggleClass('open');
 });

gsap.registerPlugin(ScrollTrigger);

const topIntroText = gsap.from('#heroItemAlpha h1',  {
  y:200,
  pin:true,
  opacity: 0,
  scale:.95,
  duration: 1,
  ease: 'ease-in',
  paused: true,
});

ScrollTrigger.create({
  trigger: '.heroContainer',
  start: 'top 500px',
  onEnter: () => topIntroText.restart()
});

ScrollTrigger.create({
  trigger: '.heroContainer',
  start: '-50px bottom',
  onLeaveBack: () => topIntroText.pause(0)
});

const animIntro2018 = gsap.from('#introItemh2',  {
  pin:true,
  opacity: 0,
  duration: 1,
  ease: 'ease-in',
  paused: true,
});

ScrollTrigger.create({
  trigger: '.heroContainerLower',
  start: 'top 200px',
  onEnter: () => animIntro2018.restart()
});

ScrollTrigger.create({
  trigger: '.heroContainerLower',
  start: '-50px bottom',
  onLeaveBack: () => animIntro2018.pause(0)
});

const animIntroAlpha = gsap.from('#introItemAlpha h1',  {
  y: -50,
  pin:true,
  opacity: 0,
  duration: 1,
  ease: 'ease-in',
  paused: true
});

ScrollTrigger.create({
  trigger: '.introContainer',
  start: '200px bottom',
  onEnter: () => animIntroAlpha.restart()
});

ScrollTrigger.create({
  trigger: '.introContainer',
  start: '-50px bottom',
  onLeaveBack: () => animIntroAlpha.pause(0)
});

const animIntroBravo = gsap.from('#introItemBravo p',  {
  y: -50,
  x:50,
  pin:true,
  opacity: 0,
  duration: 1,
  ease: 'ease-in',
  paused: true
});

ScrollTrigger.create({
  trigger: '.introContainer',
  start: '200px bottom',
  onEnter: () => animIntroBravo.restart()
});

ScrollTrigger.create({
  trigger: '.introContainer',
  start: '-50px bottom',
  onLeaveBack: () => animIntroBravo.pause(0)
});

const anim = gsap.from('#gridTopH1',  {
  y: -50,
  pin:true,
  opacity: 0,
  duration: 1,
  scale:.75,
  ease: 'ease-in',
  paused: true
});

ScrollTrigger.create({
  trigger: '#gridTopOne',
  start: '200px bottom',
  onEnter: () => anim.restart()
});

ScrollTrigger.create({
  trigger: '#gridTopOne',
  start: '-50px bottom',
  onLeaveBack: () => anim.pause(0)
});

const anim2 = gsap.from('#thecrew', {
  y: -50,
  pin:true,
  opacity: 0,
  duration: 1,
  scale:.75,
  ease: 'ease-in',
  paused: true
});

ScrollTrigger.create({
  trigger:'#gridLowerItemThree',
  start:'200px bottom',
  onEnter: () => anim2.restart()
});

ScrollTrigger.create({
  trigger:'#gridLowerItemThree',
  start: '-50px bottom',
  onLeaveBack: () => anim2.pause(0)
});

const anim3 = gsap.from('#gridLowerItemTwo img', {
  pin:true,
  opacity:0,
  duration:1,

  ease:'ease-in',
  paused:true
});

ScrollTrigger.create({
  trigger:'#gridLowerItemTwo',
  start:'200px bottom',
  onEnter: () => anim3.restart()
});

ScrollTrigger.create({
  trigger:'#gridLowerItemTwo',
  start: '-50px bottom',
  onLeaveBack: () => anim3.pause(0)
});

const anim4 = gsap.from('#gridTopTwo img', {
  // y:150,
  pin:true,
  opacity:0,
  duration:1,
  ease:'ease-in',
  paused:true
});

ScrollTrigger.create({
  trigger:'#gridTopTwo',
  start:'200px bottom',
  onEnter: () => anim4.restart()
});

ScrollTrigger.create({
  trigger:'#gridTopTwo',
  start: '-50px bottom',
  onLeaveBack: () => anim4.pause(0)
});

const anim5 = gsap.from('#gridTopOne p', {
  y:150,
  pin:true,
  opacity:0,
  duration:1,
  // scale:.75,
  ease:'ease-in',
  paused:true
});

ScrollTrigger.create({
  trigger:'#gridTopTwo',
  start:'200px bottom',
  onEnter: () => anim5.restart()
});

ScrollTrigger.create({
  trigger:'#gridTopTwo',
  start: '-50px bottom',
  onLeaveBack: () => anim5.pause(0)
});

const anim6 = gsap.from('#gridLowerItemThree p', {
  y:150,
  pin:true,
  opacity:0,
  duration:1,
  // scale:.75,
  ease:'ease-in',
  paused:true
});

ScrollTrigger.create({
  trigger:'#gridLowerItemThree',
  start:'200px bottom',
  onEnter: () => anim6.restart()
});

ScrollTrigger.create({
  trigger:'#gridLowerItemThree',
  start: '-50px bottom',
  onLeaveBack: () => anim6.pause(0)
});

const anim7 = gsap.from('#gridLowerItemThree a', {
  // y:50,
  pin:true,
  opacity:0,
  duration:.5,
  // scale:.75,
  ease:'ease-in',
  paused:true
});

ScrollTrigger.create({
  trigger:'#gridLowerItemThree',
  start:'100px bottom',
  onEnter: () => anim7.restart()
});

ScrollTrigger.create({
  trigger:'#gridLowerItemThree',
  start: '-50px bottom',
  onLeaveBack: () => anim7.pause(0)
});

const anim8 = gsap.from('#ctaInnerBravo h1', {
  y:100,
  pin:true,
  opacity:0,
  duration:1,
  // scale:.75,
  ease:'ease-in',
  paused:true
});

ScrollTrigger.create({
  trigger:'#ctaInnerAlpha',
  start:'100px bottom',
  onEnter: () => anim8.restart()
});

ScrollTrigger.create({
  trigger:'#ctaInnerAlpha',
  start: '-50px bottom',
  onLeaveBack: () => anim8.pause(0)
});

const anim9 = gsap.from('#ctaInnerAlpha img', {
  y:100,
  pin:true,
  opacity:0,
  duration:1,
  // scale:.75,
  ease:'ease-in',
  paused:true
});

ScrollTrigger.create({
  trigger:'#ctaInnerAlpha',
  start:'100px bottom',
  onEnter: () => anim9.restart()
});

ScrollTrigger.create({
  trigger:'#ctaInnerAlpha',
  start: '-50px bottom',
  onLeaveBack: () => anim9.pause(0)
});

const anim10 = gsap.from('#ctaInnerBravo a', {
  y:-30,
  pin:true,
  opacity:0,
  duration:.75,
  // scale:.75,
  ease:'ease-in',
  paused:true
});

ScrollTrigger.create({
  trigger:'#ctaInnerBravo',
  start:'100px bottom',
  onEnter: () => anim10.restart()
});

ScrollTrigger.create({
  trigger:'#ctaInnerBravo',
  start: '-50px bottom',
  onLeaveBack: () => anim10.pause(0)
});

const anim11 = gsap.from('#itemOne',  {
  y: -50,
  pin:true,
  opacity: 0,
  duration: 1,
  ease: 'ease-in',
  paused: true
});

ScrollTrigger.create({
  trigger: 'lizkaitItem',
  start: '200px bottom',
  onEnter: () => anim11.restart()
});

ScrollTrigger.create({
  trigger: 'lizkaitItem',
  start: '-50px bottom',
  onLeaveBack: () => anim11.pause(0)
});

const anim12 = gsap.from('#packTitleH1',  {
  y: -50,
  pin:true,
  opacity: 0,
  duration: 1,
  ease: 'ease-in',
  paused: true
});

ScrollTrigger.create({
  trigger: '.packTitle',
  start: '200px bottom',
  onEnter: () => anim12.restart()
});

ScrollTrigger.create({
  trigger: '.packTitle',
  start: '-50px bottom',
  onLeaveBack: () => anim12.pause(0)
});