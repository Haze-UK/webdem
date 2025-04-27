const lines = [
    "Designing bold brands,",
    "Building unforgettable websites.",
  ];
  
  const heroText = document.getElementById('hero-text');
  const finalText = document.createElement('h1');
  finalText.className = 'final-line';
  finalText.textContent = 'Inquire Now.';
  
  function animateLine(text, callback) {
    heroText.innerHTML = '';
    const words = text.split(' ');
  
    words.forEach((word, wIndex) => {
      const wordSpan = document.createElement('span');
      wordSpan.className = 'word';
      heroText.appendChild(wordSpan);
  
      for (let i = 0; i < word.length; i++) {
        const letter = document.createElement('span');
        letter.className = 'letter';
        letter.style.animationDelay = `${(wIndex * 0.2) + (i * 0.03)}s`;
        letter.textContent = word[i];
        wordSpan.appendChild(letter);
      }
      heroText.appendChild(document.createTextNode(' '));
    });
  
    if (callback) {
      setTimeout(callback, text.length * 40 + 800);
    }
  }
  
  function fadeOutWords(callback) {
    const words = document.querySelectorAll('.word');
    words.forEach((word, index) => {
      setTimeout(() => {
        word.classList.add('fade-out');
      }, index * 150);
    });
    setTimeout(callback, words.length * 150 + 800);
  }
  
  function startAnimation() {
    let index = 0;
  
    function next() {
      if (index < lines.length) {
        animateLine(lines[index], () => {
          fadeOutWords(() => {
            index++;
            next();
          });
        });
      } else {
        heroText.innerHTML = '';
        heroText.appendChild(finalText);
      }
    }
  
    next();
  }
  
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.style.display = mobileMenu.style.display === "flex" ? "none" : "flex";
  });
  
  window.addEventListener('load', () => {
    startAnimation();
  });
  