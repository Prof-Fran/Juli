/* ===================================
   FELIZ CUMPLEAÑOS JULIETA - Script
   =================================== */

// ---- CONFIGURACION DE FOTOS ----
// Agrega aqui las fotos del directorio "assets"
// Cada foto tiene: imagen, caption (texto corto) y mensaje (al dar la vuelta)
const photos = [
  {
    image: 'assets/foto1.jpg',
    caption: 'Tu primer ano',
    message: 'El dia que llegaste al mundo, todo cobro sentido. Eres el regalo mas hermoso que la vida nos dio.'
  },
  {
    image: 'assets/foto2.jpg',
    caption: 'Mundito nuevo',
    message: 'Descubriendo el mundo con ojitos curiosos. Cada paso tuyo era una aventura para nosotros.'
  },
  {
    image: 'assets/foto3.jpg',
    caption: 'Risitas',
    message: 'Rodeada de amor desde siempre y para siempre con los que estan y los que te cuidadan desde lejos.'
  },
  {
    image: 'assets/foto4.jpeg',
    caption: 'Aventurera',
    message: 'No dejes que nadie borre esa sonrisa que siempre alegra al que la ve'
  },
  {
    image: 'assets/foto5.jpg',
    caption: 'Nina dulce',
    message: 'Con ese corazon enorme que tienes, haces el mundo un lugar mejor para todos los que te rodean.'
  },
  {
    image: 'assets/foto6.jpg',
    caption: 'Amiga de todos',
    message: 'Siempre seras nuestra pequeña, nuestro tesoro, nuestro chanchito'
  },
  {
    image: 'assets/foto7.jpg',
    caption: 'Estrellita',
    message: 'Brillas con luz propia. No necesitas nada mas para ser la persona mas increible que conocemos.'
  },
  {
    image: 'assets/foto8.jpg',
    caption: 'Creciendo',
    message: 'Cada anio nos sorprendes mas. Ver crecer es lo mas hermoso que nos ha pasado.'
  },
  {
    image: 'assets/foto9.jpg',
    caption: 'Sonrisa contagiosa',
    message: 'Tu sonrisa tiene el poder de alejar cualquier nube. Nunca dejes de sonreir, Julieta.'
  },
  {
    image: 'assets/foto10.jpg',
    caption: 'Valiente',
    message: 'Con el corazon en la mano enfrentas cada reto. Tu fuerza nos admira y nos enorgullece.'
  },
  {
    image: 'assets/foto11.jpg',
    caption: 'Alegria del alma',
    message: 'Llegaste para llenar nuestras vidas de color. Cada dia a tu lado es una bendicion.'
  },
  {
    image: 'assets/foto12.jpg',
    caption: 'Luz propia',
    message: 'Tu luz ilumina hasta los rincones mas oscuros. Sigue brillando siempre, nina hermosa.'
  },
  {
    image: 'assets/foto13.jpg',
    caption: 'Corazon noble',
    message: 'Tu bondad no tiene precio. Eres pura luz y amor, y eso es algo que nadie te puede quitar.'
  },
  {
    image: 'assets/foto14.jpg',
    caption: 'Mujer bonita',
    message: 'Siendo tan joven ya se ve la mujer maravillosa en la que te estas convirtiendo. Estamos orgullosos.'
  },
  {
    image: 'assets/foto15.jpg',
    caption: 'Fuerza y gracia',
    message: 'Con la fuerza de una guerrera y la gracia de una princesa. Eres todo lo que soñamos y mas.'
  },
  {
    image: 'assets/foto16.jpg',
    caption: 'Casi toda una',
    message: 'A un paso de cumplir 17 anos, ya eres una mujer increible. El mundo esta listo para ti.'
  },
  {
    image: 'assets/foto17.jpg',
    caption: 'Feliz 17',
    message: 'Hoy celebramos tus 17 anos de vida, amor y felicidad. Que todo lo bonito que mereces llegue a ti. Te amamos Julieta.',
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
      ? `<span class="empty-icon">&#128247;</span>
         <span class="empty-text">Aqui va tu recuerdo<br>de este cumpleanos</span>`
      : `<img src="${photo.image}" alt="${photo.caption}" 
             loading="lazy"
             onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22500%22><rect fill=%22%23E8DDD3%22 width=%22400%22 height=%22500%22/><text fill=%22%23A68B6B%22 font-family=%22sans-serif%22 font-size=%2218%22 x=%22200%22 y=%22250%22 text-anchor=%22middle%22>Foto ${index + 1}</text></svg>'">`;

    card.innerHTML = `
      <div class="polaroid-inner">
        <div class="polaroid-front" data-caption="${photo.caption}">
          ${frontContent}
        </div>
        <div class="polaroid-back">
          <div class="polaroid-back-message">
            <span class="polaroid-back-heart">&#10084;</span>
            ${photo.message}
          </div>
        </div>
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
  lightboxImg.src = photo.image;
  lightboxMessage.textContent = photo.message;
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Reset flip state
  lightbox.querySelector('.lightbox-polaroid').classList.remove('flipped');
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
  });

  // Boton volver al inicio
  backBtn.addEventListener('click', () => {
    gallerySection.classList.remove('active');
    hero.style.display = 'flex';
    hero.style.animation = 'fadeInUp 0.8s ease-out';
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
