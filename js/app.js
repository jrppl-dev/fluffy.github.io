import '../css/style.css';

const init = () => {
  const yesBtn = document.getElementById('yes-btn');
  const noBtn = document.getElementById('no-btn');
  const valentineCard = document.getElementById('valentine-card');
  const celebration = document.getElementById('celebration');

  if (!yesBtn || !noBtn || !valentineCard || !celebration) return;

  const moveButton = () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    // Ensure the button stays within the viewport
    const safeX = Math.max(0, Math.min(x, window.innerWidth - noBtn.offsetWidth));
    const safeY = Math.max(0, Math.min(y, window.innerHeight - noBtn.offsetHeight));

    noBtn.style.position = 'fixed'; // Use fixed to ensure it's relative to viewport
    noBtn.style.left = `${safeX}px`;
    noBtn.style.top = `${safeY}px`;
  };

  noBtn.addEventListener('mouseover', moveButton);
  noBtn.addEventListener('click', moveButton);

  yesBtn.addEventListener('click', () => {
    valentineCard.classList.add('hidden');
    celebration.classList.remove('hidden');
    startConfetti();
  });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

function startConfetti() {
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement('div');
    confetti.innerText = '❤️';
    confetti.style.position = 'fixed';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.top = '-20px';
    confetti.style.fontSize = (Math.random() * 20 + 10) + 'px';
    confetti.style.zIndex = '1000';
    confetti.style.pointerEvents = 'none';
    confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
    document.body.appendChild(confetti);
    
    setTimeout(() => {
      confetti.remove();
    }, 5000);
  }
}

// Add falling animation to the head
const style = document.createElement('style');
style.innerHTML = `
  @keyframes fall {
    to {
      transform: translateY(100vh) rotate(360deg);
    }
  }
`;
document.head.appendChild(style);