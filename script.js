function buyNow(product) {
    alert(`Has seleccionado el ${product}. ¡Gracias por tu compra!`);
  }
  
  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Gracias por contactarnos. Nos pondremos en contacto pronto.');
  });
  