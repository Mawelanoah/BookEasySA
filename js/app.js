// BeautyBook - Shared JS utilities

document.addEventListener('DOMContentLoaded', () => {
  // Favourite buttons
  document.querySelectorAll('.fav').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      btn.classList.toggle('active');
      btn.textContent = btn.classList.contains('active') ? '♥' : '♡';
    });
  });

  // Simple search on home
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        window.location.href = 'explore.html?q=' + encodeURIComponent(searchInput.value);
      }
    });
  }

  // Prevent zoom on double tap for better app feel (iOS)
  let lastTouchEnd = 0;
  document.addEventListener('touchend', (e) => {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
      e.preventDefault();
    }
    lastTouchEnd = now;
  }, false);
});

// Utility: format currency for ZA
function formatZAR(amount) {
  return 'R' + amount.toLocaleString('en-ZA');
}
