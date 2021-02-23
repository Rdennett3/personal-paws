$('#toggle').click(function() {
  $(this).toggleClass('active');
  $('#overlay').toggleClass('open');
 });



// *********************
// HIDE HEADER ON SCROLL
// *********************

// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("menuContainer").style.top = "0";
//   } else {
//     document.getElementById("menuContainer").style.top = "-50px";
//   }
//   prevScrollpos = currentScrollPos;
// }
// *************************
// END HIDE HEADER ON SCROLL
// *************************

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

// const serviceHeaderOne = gsap.from('#serviceheaderOne', {
//   y:50,
//   pin:true,
//   opacity:0,
//   duration:1,
//   ease:'ease-in',
//   paused:true
// });

// ScrollTrigger.create({
//   trigger:'.servicesContainerOne',
//   start:'100px bottom',
//   onEnter: () => serviceHeaderOne.restart()
// });

// ScrollTrigger.create({
//   trigger:'.servicesContainerOne',
//   start: '-50px bottom',
//   onLeaveBack: () => serviceHeaderOne.pause(0)
// });

// const introHeader = gsap.from('#introItemAlpha', {
//   y:50,
//   scale:1.15,
//   pin:true,
//   opacity:0,
//   duration:1,
//   ease:'ease-in',
//   paused:true
// });

// ScrollTrigger.create({
//   trigger:'.introContainer',
//   start:'100px bottom',
//   onEnter: () => introHeader.restart()
// });

// ScrollTrigger.create({
//   trigger:'.servicesContainerOne',
//   start: '-50px bottom',
//   onLeaveBack: () => introHeader.pause(0)
// });

// const introInfo = gsap.from('#introItemBravo', {
//   y:150,
//   scale:1.15,
//   pin:true,
//   opacity:0,
//   duration:1,
//   ease:'ease-in',
//   paused:true
// });

// ScrollTrigger.create({
//   trigger:'.introContainer',
//   start:'70px bottom',
//   onEnter: () => introInfo.restart()
// });

// ScrollTrigger.create({
//   trigger:'.servicesContainerOne',
//   start: '50px bottom',
//   onLeaveBack: () => introInfo.pause(0)
// });

// const packTitle = gsap.from('.packTitle h1', {
//   y:-20,
//   x:-20,
//   pin:true,
//   opacity:0,
//   duration:1,
//   ease:'ease-in-out',
//   paused:true
// });

// ScrollTrigger.create({
//   trigger:'.packTitle',
//   start:'150px bottom',
//   onEnter: () => packTitle.restart()
// });

// ScrollTrigger.create({
//   trigger:'.packTitle',
//   start: '-50px bottom',
//   onLeaveBack: () => packTitle.pause(0)
// });

// const packOneInfo = gsap.from('#gridTopOne p', {
//   scale:.9,
//   y:25,
//   x:75,
//   pin:true,
//   opacity:0,
//   duration:1,
//   ease:'ease-in',
//   paused:true
// });

// ScrollTrigger.create({
//   trigger:'#gridTopOne',
//   start:'100px bottom',
//   onEnter: () => packOneInfo.restart()
// });

// ScrollTrigger.create({
//   trigger:'#gridTopOne',
//   start: '-50px bottom',
//   onLeaveBack: () => packOneInfo.pause(0)
// });

// const packLeader = gsap.from('#gridTopThree h1', {
//   scale:.9,
//   y:25,
//   x:25,
//   pin:true,
//   opacity:.75,
//   duration:1,
//   ease:'ease-in',
//   paused:true
// });

// ScrollTrigger.create({
//   trigger:'#gridTopThree',
//   start:'100px bottom',
//   onEnter: () => packLeader.restart()
// });

// ScrollTrigger.create({
//   trigger:'#gridTopThree',
//   start: '-50px bottom',
//   onLeaveBack: () => packLeader.pause(0)
// });

// const packLeaderImage = gsap.from('#gridTopTwo img', {
//   y:25,
//   x:25,
//   pin:true,
//   autoAlpha: 0,
//   duration:1,
//   ease:'ease-in',
//   paused:true
// });

// ScrollTrigger.create({
//   trigger:'#gridTopTwo',
//   start:'100px bottom',
//   onEnter: () => packLeaderImage.restart()
// });

// ScrollTrigger.create({
//   trigger:'#gridTopTwo',
//   start: '-50px bottom',
//   onLeaveBack: () => packLeaderImage.pause(0)
// });

// const gridLowerItemOne = gsap.from('#gridLowerItemOne h1', {
//   y:25,
//   x:-25,
//   pin:true,
//   opacity:0,
//   duration:1,
//   ease:'ease-in',
//   paused:true
// });

// ScrollTrigger.create({
//   trigger:'#gridLowerItemOne',
//   start:'100px bottom',
//   onEnter: () => gridLowerItemOne.restart()
// });

// ScrollTrigger.create({
//   trigger:'#gridLowerItemOne',
//   start: '-50px bottom',
//   onLeaveBack: () => gridLowerItemOne.pause(0)
// });

// const gridLowerItemTwo = gsap.from('#gridLowerItemTwo img', {
//   y:25,
//   x:-25,
//   pin:true,
//   autoAlpha:0,
//   // duration:1,
//   ease:'ease-in',
//   paused:true
// });

// ScrollTrigger.create({
//   trigger:'#gridLowerItemTwo',
//   start:'100px bottom',
//   onEnter: () => gridLowerItemTwo.restart()
// });

// ScrollTrigger.create({
//   trigger:'#gridLowerItemTwo',
//   start: '-50px bottom',
//   onLeaveBack: () => gridLowerItemTwo.pause(0)
// });

// const gridLowerItemThree = gsap.from('#gridLowerItemThree p', {
//   y:25,
//   x:-25,
//   pin:true,
//   autoAlpha:0,
//   duration:1,
//   ease:'ease-in',
//   paused:true
// });

// ScrollTrigger.create({
//   trigger:'#gridLowerItemThree',
//   start:'100px bottom',
//   onEnter: () => gridLowerItemThree.restart()
// });

// ScrollTrigger.create({
//   trigger:'#gridLowerItemThree',
//   start: '-50px bottom',
//   onLeaveBack: () => gridLowerItemThree.pause(0)
// });

// const testimonialUpper = gsap.from('.testimonialUpper h1', {
//   y:-25,
//   x:25,
//   pin:true,
//   opacity:0,
//   duration:1,
//   ease:'ease-in-out',
//   paused:true
// });

// ScrollTrigger.create({
//   trigger:'.testimonialUpper',
//   start:'100px bottom',
//   onEnter: () => testimonialUpper.restart()
// });

// ScrollTrigger.create({
//   trigger:'#testimonialUpper',
//   start: '-50px bottom',
//   onLeaveBack: () => testimonialUpper.pause(0)
// });

// const testimonialItem = gsap.from('.testimonialItem p', {
//   y:-25,
//   x:-25,
//   pin:true,
//   opacity:0,
//   duration:1,
//   ease:'ease-in-out',
//   paused:true
// });

// ScrollTrigger.create({
//   trigger:'.testimonialItem p',
//   start:'200px bottom',
//   onEnter: () => testimonialItem.restart()
// });

// ScrollTrigger.create({
//   trigger:'.testimonialItem p',
//   start: '-50px bottom',
//   onLeaveBack: () => testimonialItem.pause(0)
// });

