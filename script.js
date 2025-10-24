const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
});
document.querySelectorAll('.fade-in, .fade-in-up, .fade-in-left, .fade-in-right')
  .forEach(el => observer.observe(el));