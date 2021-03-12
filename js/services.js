$('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
   });

  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".servicesContainerLeft img", {
      scrollTrigger:{
        trigger:".servicesContainerLeft img",
        start:"top 50%",
      },
      y:100,
      autoAlpha:0,
      duration:1,
  });

  gsap.from(".containerRightItem:nth-of-type(1)", {
    scrollTrigger:{
        trigger:".containerRightItem:nth-of-type(1)",
        start:"top 50%",
    },
    y:100,
    autoAlpha:0,
    duration:1,
  });

  gsap.from(".containerRightItem:nth-of-type(2)", {
    scrollTrigger:{
        trigger:".containerRightItem:nth-of-type(2)",
        start:"top 50%",
    },
    y:100,
    autoAlpha:0,
    duration:1,
  });

  gsap.from(".containerRightItem:nth-of-type(3)", {
    scrollTrigger:{
        trigger:".containerRightItem:nth-of-type(3)",
        start:"top 50%",
    },
    y:100,
    autoAlpha:0,
    duration:1,
  });

  gsap.from(".boardingLeftItem:nth-of-type(1)", {
    scrollTrigger:{
        trigger:".boardingLeftItem:nth-of-type(1)",
        start:"top 60%",
    },
    y:100,
    autoAlpha:0,
    duration:1,
  });

  gsap.from(".boardingLeftItem:nth-of-type(2)", {
    scrollTrigger:{
        trigger:".boardingLeftItem:nth-of-type(2)",
        start:"top 60%",
    },
    y:100,
    autoAlpha:0,
    duration:1,
  });

  gsap.from(".boardingLeftItem:nth-of-type(3)", {
    scrollTrigger:{
        trigger:".boardingLeftItem:nth-of-type(3)",
        start:"top 60%",
    },
    y:100,
    autoAlpha:0,
    duration:1,
  });

  gsap.from(".boardingLeftItem:nth-of-type(4)", {
    scrollTrigger:{
        trigger:".boardingLeftItem:nth-of-type(4)",
        start:"top 60%",
    },
    y:100,
    autoAlpha:0,
    duration:1,
  });

  gsap.from(".boardingContainerRight img", {
    scrollTrigger:{
      trigger:".boardingContainer",
      start:"top 50%"
    },
    y:100,
    autoAlpha:0,
    duration:1,
  });
