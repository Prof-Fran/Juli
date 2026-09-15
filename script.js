/* ===================================
   FELIZ CUMPLEAÑOS JULIETA - Script
   =================================== */

// ---- CONFIGURACION DE FOTOS ----
// Agrega aqui las fotos del directorio "assets"
// Cada foto tiene: imagen, caption (texto corto) y mensaje (al dar la vuelta)
const photos = [
  {
    image: 'assets/foto1.jpg',
    caption: 'Tu primer año',
    message: 'El día que llegaste al mundo, todo cobró sentido. Eres el regalo más hermoso que la vida nos dio.'
  },
  {
    image: 'assets/foto2.jpg',
    caption: 'Mundito nuevo',
    message: 'Descubriendo el mundo con ojitos curiosos. Cada paso tuyo era una aventura para nosotros.'
  },
  {
    image: 'assets/foto3.jpg',
    caption: 'Risitas',
    message: 'Rodeada de amor desde siempre y para siempre, con los que están y los que te cuidan con todo su amor.'
  },
  {
    image: 'assets/foto4.jpeg',
    caption: 'Aventurera',
    message: 'No dejes que nadie borre esa sonrisa que siempre alegra a todos los que te ven.'
  },
  {
    image: 'assets/foto5.jpg',
    caption: 'Niña dulce',
    message: 'Con ese corazón enorme que tienes, haces el mundo un lugar mejor para todos los que te rodean.'
  },
  {
    image: 'assets/foto6.jpg',
    caption: 'Amiga de todos',
    message: 'Siempre serás nuestra pequeña, nuestro tesoro, nuestro chanchito.'
  },
  {
    image: 'assets/foto7.jpg',
    caption: 'Estrellita',
    message: 'Brillas con luz propia. No necesitas nada más para ser la persona más increíble que conocemos.'
  },
  {
    image: 'assets/foto8.jpg',
    caption: 'Creciendo',
    message: 'Cada año nos sorprendes más. Verte crecer es lo más hermoso que nos ha pasado.'
  },
  {
    image: 'assets/foto9.jpg',
    caption: 'Sonrisa contagiosa',
    message: 'Tu sonrisa tiene el poder de alejar cualquier nube. Nunca dejes de sonreír, Julieta.'
  },
  {
    image: 'assets/foto10.jpg',
    caption: 'Valiente',
    message: 'Con el corazón en la mano enfrentas cada reto. Tu fuerza nos llena de orgullo y admiración.'
  },
  {
    image: 'assets/foto11.jpg',
    caption: 'Alegría del alma',
    message: 'Llegaste para llenar nuestras vidas de color. Cada día a tu lado es una bendición.'
  },
  {
    image: 'assets/foto12.jpg',
    caption: 'Luz propia',
    message: 'Tu luz ilumina hasta los rincones más oscuros. Sigue brillando siempre, niña hermosa.'
  },
  {
    image: 'assets/foto13.jpg',
    caption: 'Corazón noble',
    message: 'Tu bondad no tiene precio. Eres pura luz y amor, y eso es algo que nadie te puede quitar.'
  },
  {
    image: 'assets/foto14.jpg',
    caption: 'Mujer bonita',
    message: 'Siendo tan joven ya se ve la mujer maravillosa en la que te estás convirtiendo. Estamos sumamente orgullosos.'
  },
  {
    image: 'assets/foto15.jpg',
    caption: 'Fuerza y gracia',
    message: 'Con la fuerza de una guerrera y la gracia de una princesa. Eres todo lo que soñamos y más.'
  },
  {
    image: 'assets/foto16.jpg',
    caption: 'Casi 17',
    message: 'A un paso de cumplir 17 años, ya eres una mujer increíble. ¡El mundo está listo para ti!'
  },
  {
    image: '',
    caption: 'Tus 17 Años ✨',
    message: '¡Felices 17 Años, Julieta! 🎂✨\n\nEste espacio está reservado para guardar la mejor foto de tu festejo.\n\n¡Que este nuevo año de vida esté lleno de momentos mágicos y felicidad!\n\nTe amamos con todo nuestro corazón ❤️',
    special: true
  }
];

// ---- ELEMENTOS DEL DOM ----
const hero = document.getElementById('hero');
const gallerySection = document.getElementById('gallerySection');
const galleryGrid = document.getElementById('galleryGrid');
const revealBtn = document.getElementById('revealBtn');
const backBtn = document.getElementById('backBtn');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxMessage = document.getElementById('lightboxMessage');
const lightboxClose = document.getElementById('lightboxClose');
const particlesContainer = document.getElementById('particles');
const bgMusic = document.getElementById('bgMusic');

// ---- INICIALIZAR ----
function init() {
  createParticles();
  renderGallery();
  setupEventListeners();
}

// ---- PARTICULAS FLOTANTES ----
function createParticles() {
  const symbols = ['&#10047;', '&#10048;', '&#10049;', '&#9829;', '&#10022;'];
  const count = window.innerWidth < 600 ? 15 : 25;

  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];

    const size = Math.random() * 18 + 10;
    const left = Math.random() * 100;
    const duration = Math.random() * 15 + 15;
    const delay = Math.random() * 20;

    particle.style.cssText = `
      left: ${left}%;
      font-size: ${size}px;
      animation-duration: ${duration}s;
      animation-delay: -${delay}s;
      color: hsl(${Math.random() * 40 + 10}, 60%, 75%);
    `;

    particlesContainer.appendChild(particle);
  }
}

// ---- RENDERIZAR GALERIA ----
function renderGallery() {
  galleryGrid.innerHTML = '';

  photos.forEach((photo, index) => {
    const card = document.createElement('div');
    card.classList.add('polaroid-card');
    if (photo.special) card.classList.add('special-empty');
    card.dataset.index = index;

    const frontContent = photo.special
      ? `<div class="empty-placeholder">
           <div class="empty-badge">Próximamente</div>
           <span class="empty-icon">&#128247;</span>
           <span class="empty-title">Tu Foto de los 17</span>
           <span class="empty-desc">Espacio reservado para tu gran festejo &#10022;</span>
           <span class="empty-tap-hint">&#10084; Toca para leer el mensaje</span>
         </div>`
      : `<img src="${photo.image}" alt="${photo.caption}" 
             loading="lazy"
             onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22500%22><rect fill=%22%23E8DDD3%22 width=%22400%22 height=%22500%22/><text fill=%22%23A68B6B%22 font-family=%22sans-serif%22 font-size=%2218%22 x=%22200%22 y=%22250%22 text-anchor=%22middle%22>Foto ${index + 1}</text></svg>'">`;

    const backContent = photo.special
      ? `<div class="polaroid-back special-back">
           <div class="special-back-content">
             <span class="special-back-icon">&#127874;</span>
             <h3 class="special-back-title">¡Felices 17 Años, Juli!</h3>
             <p class="special-back-text">Este espacio está reservado para la mejor foto de tu festejo.</p>
             <p class="special-back-sub">¡Que este nuevo año esté lleno de magia y felicidad!</p>
             <span class="special-back-sign">Te amamos con todo el corazón &#10084;</span>
           </div>
         </div>`
      : `<div class="polaroid-back">
           <div class="polaroid-back-message">
             <span class="polaroid-back-heart">&#10084;</span>
             <div class="message-body">${photo.message}</div>
           </div>
         </div>`;

    card.innerHTML = `
      <div class="polaroid-inner">
        <div class="polaroid-front" data-caption="${photo.caption}">
          ${frontContent}
        </div>
        ${backContent}
      </div>
    `;

    card.addEventListener('click', () => handleCardClick(index));
    galleryGrid.appendChild(card);
  });
}

// ---- MANEJAR CLICK EN TARJETA ----
function handleCardClick(index) {
  const card = galleryGrid.children[index];

  // En mobile, abrir lightbox directamente
  if (window.innerWidth < 600) {
    openLightbox(index);
    return;
  }

  // En desktop, voltear la tarjeta
  card.classList.toggle('flipped');
}

// ---- LIGHTBOX ----
function openLightbox(index) {
  const photo = photos[index];
  const lightboxFront = lightbox.querySelector('.lightbox-front');
  const lightboxPolaroid = lightbox.querySelector('.lightbox-polaroid');

  if (photo.special) {
    lightboxPolaroid.classList.add('lightbox-special');
    lightboxFront.innerHTML = `
      <div class="empty-placeholder lightbox-empty">
        <div class="empty-badge">Próximamente</div>
        <span class="empty-icon">&#128247;</span>
        <span class="empty-title">Tu Foto de los 17</span>
        <span class="empty-desc">Espacio reservado para el festejo de tu cumpleaños</span>
        <span class="empty-tap-hint">&#10084; Toca para dar vuelta y leer tu mensaje</span>
      </div>
    `;
    lightboxMessage.innerHTML = `
      <div class="lightbox-special-msg">
        <span class="lightbox-special-icon">&#127874;</span>
        <h3 class="lightbox-special-title">¡Felices 17 Años, Julieta!</h3>
        <p class="lightbox-special-text">Hoy celebramos tu vida y la hermosa persona en la que te has convertido. Este espacio está esperando la foto de tu gran festejo.</p>
        <p class="lightbox-special-text">¡Que este nuevo año esté lleno de momentos mágicos y sueños cumplidos!</p>
        <span class="lightbox-special-sign">Te amamos con todo nuestro corazón &#10084;</span>
      </div>
    `;
  } else {
    lightboxPolaroid.classList.remove('lightbox-special');
    lightboxFront.innerHTML = `<img id="lightboxImg" src="${photo.image}" alt="${photo.caption}">`;
    lightboxMessage.innerHTML = photo.message;
  }

  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Reset flip state
  lightboxPolaroid.classList.remove('flipped');
}

function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

// ---- EVENT LISTENERS ----
function setupEventListeners() {
  // Boton revelar galeria
  revealBtn.addEventListener('click', () => {
    hero.style.animation = 'fadeOut 0.6s ease-out forwards';

    setTimeout(() => {
      hero.style.display = 'none';
      gallerySection.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 600);

    // Reproducir musica de fondo
    bgMusic.play().catch(e => console.log('No se pudo reproducir la musica:', e));
  });

  // Boton volver al inicio
  backBtn.addEventListener('click', () => {
    gallerySection.classList.remove('active');
    hero.style.display = 'flex';
    hero.style.animation = 'fadeInUp 0.8s ease-out';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Pausar musica de fondo
    bgMusic.pause();
    bgMusic.currentTime = 0;
  });

  // Cerrar lightbox
  lightboxClose.addEventListener('click', closeLightbox);

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Voltear foto en lightbox
  lightbox.querySelector('.lightbox-flip-container').addEventListener('click', () => {
    lightbox.querySelector('.lightbox-polaroid').classList.toggle('flipped');
  });

  // Tecla ESC para cerrar lightbox
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });

  // Touch swipe para cerrar lightbox
  let touchStartY = 0;
  lightbox.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  lightbox.addEventListener('touchend', (e) => {
    const touchEndY = e.changedTouches[0].clientY;
    const diff = touchEndY - touchStartY;
    if (Math.abs(diff) > 80) {
      closeLightbox();
    }
  }, { passive: true });

  // Prevenir zoom en doble tap en iOS (excepto en el lightbox flip)
  document.addEventListener('dblclick', (e) => {
    if (!e.target.closest('.lightbox-flip-container')) {
      e.preventDefault();
    }
  }, { passive: false });
}

// ---- ANIMACIONES CSS DINAMICAS ----
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes fadeOut {
    from { opacity: 1; transform: translateY(0); }
    to { opacity: 0; transform: translateY(-30px); }
  }
`;
document.head.appendChild(styleSheet);

// ---- INICIAR ----
document.addEventListener('DOMContentLoaded', init);
