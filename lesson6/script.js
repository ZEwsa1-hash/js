const images = document.querySelectorAll('.gallery img');

images.forEach(img => {
  img.addEventListener('click', () => {
    document.body.style.backgroundImage = `url(${img.src})`;

    images.forEach(i => i.classList.remove('active'));
    img.classList.add('active');
  });
});
