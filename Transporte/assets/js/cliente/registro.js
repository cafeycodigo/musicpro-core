/**
 * Logica interactiva para vista registro (cliente) - Transporte
 */

function handleRegister() {
      const p1 = document.getElementById('regPass').value;
      const p2 = document.getElementById('regPassConfirm').value;
      if (p1 !== p2) {
        alert('Las contraseñas no coinciden. Por favor verifícalas.');
        return;
      }
      const name = document.getElementById('regName').value;
      alert(`¡Remitente registrado exitosamente! Bienvenido, ${name}. Ahora puedes generar órdenes de retiro y guías de despacho.`);
      window.location.href = "envios-list.html";
    }