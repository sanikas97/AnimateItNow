// List of available animations (contributors can add more here)
const animations = [
  {
    folder: 'animated-login',
    title: 'Animated Login',
    desc: 'A stylish animated login form with smooth transitions.',
  },
  {
    folder: 'morphing-loader',
    title: 'Morphing Loader',
    desc: 'A loader animation with morphing shapes and vibrant colors.',
  },
];

const gallery = document.getElementById('gallery');

animations.forEach((anim, i) => {
  const card = document.createElement('div');
  card.className = 'animation-card';
  card.style.animationDelay = `${0.1 + i * 0.1}s`;

  card.innerHTML = `
    <div class="animation-card-title">${anim.title}</div>
    <div class="animation-card-desc">${anim.desc}</div>
    <a class="animation-card-link" href="animations/${anim.folder}/index.html" target="_blank">View Demo</a>
  `;

  gallery.appendChild(card);
});