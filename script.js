const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('appear');
    }
  });
});
observer.observe(document.querySelector('.fade-text'));