// Subscribe form handler
document.getElementById('subscribeForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = e.target.email.value;

  fetch('https://n8n.yourdomain.com/webhook', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  })
    .then(() => {
      alert('Thanks for subscribing!');
      e.target.reset();
    })
    .catch(() => {
      alert('Oops! Something went wrong.');
    });
});

// Parallax scroll effect
window.addEventListener('scroll', () => {
  const hero = document.querySelector('main');
  hero.style.backgroundPositionY = `${window.scrollY * 0.5}px`;
});