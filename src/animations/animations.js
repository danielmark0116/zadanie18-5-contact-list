const logo = document.getElementById('logo');
const appContainer = document.getElementById('app-container');

const timeline = new TimelineLite();

TweenMax.from(logo, 1, {
  width: 1,
  height: 1,
  delay: 0.3,
  ease: Power2.easeInOut
});

timeline.from(appContainer, 0.3, {
  top: -20,
  scale: 0.8,
  ease: Power4.easeOut
});
//   .to(appContainer, 1, { top: -100, ease: Power4.easeOut });
//   .to(appContainer, 0.9, { top: 0, ease: Back.easeOut.config(1.7) });
