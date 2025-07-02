// Morphing SVG path animation
const path = document.getElementById('morph-path');
const shapes = [
  // Circle-like
  'M50 20 Q70 20 70 50 Q70 80 50 80 Q30 80 30 50 Q30 20 50 20 Z',
  // Squished horizontally
  'M50 20 Q80 35 70 50 Q80 65 50 80 Q20 65 30 50 Q20 35 50 20 Z',
  // Squished vertically
  'M50 10 Q70 30 70 50 Q70 70 50 90 Q30 70 30 50 Q30 30 50 10 Z',
  // Wavy
  'M50 20 Q80 30 70 50 Q80 70 50 80 Q20 70 30 50 Q20 30 50 20 Z',
];
let i = 0;

function morph() {
  i = (i + 1) % shapes.length;
  path.animate([
    { d: path.getAttribute('d') },
    { d: shapes[i] }
  ], {
    duration: 900,
    fill: 'forwards',
    easing: 'cubic-bezier(.68,-0.55,.27,1.55)'
  });
  setTimeout(() => {
    path.setAttribute('d', shapes[i]);
    morph();
  }, 900);
}

setTimeout(morph, 900);
