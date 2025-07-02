// Floating label support is handled by CSS :not(:placeholder-shown)
// Ripple effect for button

document.querySelector('.login-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Login submitted! (Demo)');
});

document.querySelectorAll('button.ripple').forEach(btn => {
  btn.addEventListener('click', function(e) {
    const circle = document.createElement('span');
    circle.className = 'ripple-effect';
    const rect = btn.getBoundingClientRect();
    circle.style.width = circle.style.height = Math.max(rect.width, rect.height) + 'px';
    circle.style.left = (e.clientX - rect.left - rect.width/2) + 'px';
    circle.style.top = (e.clientY - rect.top - rect.height/2) + 'px';
    btn.appendChild(circle);
    setTimeout(() => circle.remove(), 600);
  });
});
