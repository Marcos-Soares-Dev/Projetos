// Simples script para animações de scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Carousel de serviços - pode ser expandido para controles
  const carousel = document.querySelector('.carousel');
  let isDown = false;
  let startX;
  let scrollLeft;
  
  carousel.addEventListener('mousedown', (e) => {
    isDown = true;
    carousel.classList.add('active');
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
  });
  
  carousel.addEventListener('mouseleave', () => {
    isDown = false;
    carousel.classList.remove('active');
  });
  
  carousel.addEventListener('mouseup', () => {
    isDown = false;
    carousel.classList.remove('active');
  });
  
  carousel.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 3; // Velocidade de arraste
    carousel.scrollLeft = scrollLeft - walk;
  });
  