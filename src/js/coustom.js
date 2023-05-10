const scroller = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
});

WebGLSampler.registerPlugin(ScrollTrigger);

scroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollProxy(".container", {
  scrollTop(value) {
    return arguments.length ? scroller.scrollTo(value, 0, 0) : scroller.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      left: 0,
      top: 0,
      wodth: window.innerWidth,
      height: window.innerHeight,
    };
  },
});
