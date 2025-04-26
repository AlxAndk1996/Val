// Espera 4 segundos para abrir la caja
setTimeout(() => {
    const regalo = document.querySelector('.regalo');
    const tapa = document.querySelector('.tapa');
    const nota = document.querySelector('.nota');
  
    // Detener la vibración
    regalo.style.animation = 'none';
  
    // Abrir la tapa
    tapa.style.transform = 'translateY(-150px) rotateX(25deg)';
  
    // Mostrar la nota
    nota.style.transform = 'translate(-50%, -50%) scale(1)';
    nota.style.opacity = '1';
    
    const snoopy = document.querySelector('.snoopy');
    snoopy.style.opacity = '1';


  
    // Lanzar las luces
    iniciarLuces();
  }, 4000);
  
  // Lucecitas que rebotan
  function iniciarLuces() {
    const canvas = document.getElementById('luces');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    const luces = [];
  
    for (let i = 0; i < 100; i++) {
      luces.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 2,
        dx: (Math.random() - 0.5) * 4,
        dy: (Math.random() - 0.5) * 4,
        color: `hsl(${Math.random() * 360}, 100%, 70%)`
      });
    }
  
    function animar() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let luz of luces) {
        ctx.beginPath();
        ctx.arc(luz.x, luz.y, luz.radius, 0, Math.PI * 2);
        ctx.fillStyle = luz.color;
        ctx.fill();
  
        luz.x += luz.dx;
        luz.y += luz.dy;
  
        // Rebote
        if (luz.x < 0 || luz.x > canvas.width) luz.dx *= -1;
        if (luz.y < 0 || luz.y > canvas.height) luz.dy *= -1;
      }
      requestAnimationFrame(animar);
    }
  
    animar();
  }
  
  // Ajustar canvas al redimensionar
  window.addEventListener('resize', () => {
    const canvas = document.getElementById('luces');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
  