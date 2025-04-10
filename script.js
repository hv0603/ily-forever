// Floating hearts
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = 4 + Math.random() * 3 + 's';
    document.getElementById('heart-container').appendChild(heart);
    setTimeout(() => heart.remove(), 7000);
  }
  setInterval(createHeart, 200);
  
  // Envelope logic
  const envelope = document.getElementById('envelope');
  const content = document.getElementById('content');
  const poem = document.getElementById('poem');
  const message = document.getElementById('message');
  const photo = document.getElementById('photo');
  
  envelope.addEventListener('click', () => {
    envelope.classList.add('open');
  
    // Fade out envelope
    setTimeout(() => {
      envelope.style.transition = 'opacity 1s ease';
      envelope.style.opacity = '0';
    }, 1000);
  
    // Hide envelope, show content
    setTimeout(() => {
      envelope.style.display = 'none';
      content.style.opacity = '1';
    }, 2000);
  
    // Show poem, hide photo + message
    setTimeout(() => {
      photo.classList.add('hidden');
      message.classList.add('hidden');
      poem.style.opacity = '1';
    }, 8000);
  });




  
