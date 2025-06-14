function showSection(id) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.style.display = 'none';
  });

  const target = document.getElementById(id);
  if (target) {
    target.style.display = 'flex';
  }
}

function showAllSections() {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.style.display = 'flex';
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show only Home by default
document.addEventListener('DOMContentLoaded', () => {
  showSection('home');
});
