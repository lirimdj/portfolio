// Contact form interaction
document.querySelector('.contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for reaching out!');
  this.reset();
});

// Drag scroll support for skills and projects
function enableDragScroll(containerSelector) {
  const container = document.querySelector(containerSelector);
  let isDown = false;
  let startX;
  let scrollLeft;

  container.addEventListener('mousedown', (e) => {
    isDown = true;
    container.classList.add('active');
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  });

  container.addEventListener('mouseleave', () => {
    isDown = false;
    container.classList.remove('active');
  });

  container.addEventListener('mouseup', () => {
    isDown = false;
    container.classList.remove('active');
  });

  container.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2; //scroll-fast
    container.scrollLeft = scrollLeft - walk;
  });

  // Touch Events
  container.addEventListener('touchstart', (e) => {
    startX = e.touches[0].pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  });

  container.addEventListener('touchmove', (e) => {
    e.preventDefault();
    const x = e.touches[0].pageX - container.offsetLeft;
    const walk = (x - startX) * 2; //scroll-fast
    container.scrollLeft = scrollLeft - walk;
  });
}

// Enable drag scroll for skills and projects
enableDragScroll('.skills-list');
enableDragScroll('.projects-list');

// Simple fade-in animation on page load
window.addEventListener('load', () => {
  const skills = document.querySelectorAll('.skill-tag');
  const projects = document.querySelectorAll('.project-card');
  skills.forEach((item, index) => {
    item.style.animationDelay = (0.2 + index * 0.15) + 's';
    item.style.animationFillMode = 'forwards';
  });
  projects.forEach((item, index) => {
    item.style.animationDelay = (0.2 + index * 0.15) + 's';
    item.style.animationFillMode = 'forwards';
  });
});
