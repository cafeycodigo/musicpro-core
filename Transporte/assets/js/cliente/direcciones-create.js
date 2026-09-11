/**
 * Logica interactiva para vista direcciones-create (cliente) - Transporte
 */

function handleCreateAddress(e) {
      e.preventDefault();
      alert('¡Dirección guardada exitosamente en tu libreta!');
      window.location.href = 'direcciones-list.html';
    }