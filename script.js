
  for (let i = 0; i < 20; i++) {
    let bubble = document.createElement("div");
    bubble.className = "bubble";
    bubble.style.width = `${Math.random()*40 + 20}px`;
    bubble.style.height = bubble.style.width;
    bubble.style.left = `${Math.random()*100}%`;
    bubble.style.animationDuration = `${Math.random()*6 + 4}s`;
    document.body.appendChild(bubble);
  }

  // Intersection fade-in
  const elements = document.querySelectorAll('.fade');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('show'); });
  }, { threshold: 0.2 });
  elements.forEach(el => observer.observe(el));

  // Progress bar
  window.addEventListener("scroll", () => {
    let docHeight = document.documentElement.scrollHeight - window.innerHeight;
    let scrolled = (window.scrollY / docHeight) * 100;
    document.getElementById("progress-bar").style.width = scrolled + "%";

    // Show top button
    document.getElementById("topBtn").style.display =
      window.scrollY > 300 ? "block" : "none";
  });

  // Modal controls
  function openModal() {
    document.getElementById("modal").style.display = "flex";
  }
  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }
