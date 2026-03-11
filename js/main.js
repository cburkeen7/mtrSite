function initDropdown() {
  const toggle = document.querySelector('.dropdown-toggle');
  const menu = document.querySelector('.dropdown-content');

  if (!toggle || !menu) return;

  toggle.addEventListener('click', function(e) {
    e.stopPropagation(); // don't close immediately
    menu.classList.toggle('show');

    // Update ARIA
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', !expanded);
  });

  // Close if clicking outside
  document.body.addEventListener('click', function() {
    if (menu.classList.contains('show')) {
      menu.classList.remove('show');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}




// After top banner is loaded
function loadBanners() {
  // Load top banner
  fetch('components/topBanner.html')
    .then(res => res.text())
    .then(html => {
      document.getElementById('header').innerHTML = html;
      initDropdown(); // must run AFTER top banner is in DOM
    })
    .catch(err => console.error('Error loading top banner:', err));

  // Load bottom banner
  fetch('components/bottomBanner.html')
    .then(res => res.text())
    .then(html => {
      document.getElementById('footer').innerHTML = html;
    })
    .catch(err => console.error('Error loading bottom banner:', err));
}
document.addEventListener('DOMContentLoaded', loadBanners);

// -----------------------------
// LIGHTBOX
// -----------------------------


// images 
const commercialImages = document.querySelectorAll('.commercial-grid img');
const residentialImages = document.querySelectorAll('.residential-grid img');
const gutterImages = document.querySelectorAll('.gutters-grid img');
const galleryImages = document.querySelectorAll('.gallery-grid img');


// lightbox 
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

commercialImages.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
  });
});

residentialImages.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
  });
});

gutterImages.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
  });
});

galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
  });
});

lightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    lightbox.style.display = 'none';
  }
});

