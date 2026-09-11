/**
 * Logica interactiva para vista cupones-create (admin) - Tienda
 */

function generateRandomCode() {
      const words = ['MUSIC', 'PRO', 'CYBER', 'VIP', 'GUITAR'];
      const num = Math.floor(10 + Math.random() * 90);
      const code = words[Math.floor(Math.random() * words.length)] + num;
      document.getElementById('couponCodeInput').value = code;
    }

    function handleCreateCoupon(e) {
      e.preventDefault();
      alert('¡Cupón creado exitosamente y disponible para checkout!');
      window.location.href = 'cupones-list.html';
    }