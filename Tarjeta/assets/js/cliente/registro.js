/**
 * Logica interactiva para vista registro (cliente) - Tarjeta
 */

function handleCardRegister() {
      const pin1 = document.getElementById('solPin').value;
      const pin2 = document.getElementById('solPinConfirm').value;
      if (pin1 !== pin2) {
        alert('Las claves numéricas no coinciden. Por favor verifícalas.');
        return;
      }
      if (pin1.length < 6) {
        alert('La clave debe tener exactamente 6 dígitos numéricos.');
        return;
      }
      const name = document.getElementById('solName').value;
      alert(`¡Felicitaciones ${name}! Tu solicitud ha sido aprobada de forma instantánea. Se ha generado tu tarjeta virtual activa y hemos acreditado 5.000 Puntos Pro de bienvenida.`);
      window.location.href = "tarjeta-dashboard.html";
    }