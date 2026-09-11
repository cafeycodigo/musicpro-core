/**
 * Logica interactiva para vista registro (cliente) - Tienda
 */

function handleRegister() {
      const p1 = document.getElementById('regPass').value;
      const p2 = document.getElementById('regPassConfirm').value;
      if (p1 !== p2) {
        alert('Las contraseñas no coinciden. Por favor verifícalas.');
        return;
      }
      const name = document.getElementById('regName').value;
      alert(`¡Bienvenido a MusicPro Store, ${name}! Tu cuenta ha sido creada exitosamente. Hemos cargado tu cupón de bienvenida del 10% OFF.`);
      window.location.href = "tienda-catalog.html";
    }