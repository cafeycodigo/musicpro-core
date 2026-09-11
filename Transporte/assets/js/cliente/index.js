/**
 * Logica interactiva para vista index (cliente) - Transporte
 */

function goToTracking() {
      const code = document.getElementById('heroTrackingInput').value.trim();
      if (!code) {
        alert('Por favor ingresa un número de guía.');
        return;
      }
      window.location.href = "tracking-detail.html";
    }