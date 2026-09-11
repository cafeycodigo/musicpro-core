/**
 * Logica interactiva para vista direcciones-list (cliente) - Transporte
 */

let activeAddrId = null;

    function openDeleteAddrModal(id, name) {
      activeAddrId = id;
      document.getElementById('deleteAddrName').innerText = name;
      document.getElementById('deleteAddrModal').classList.remove('hidden');
    }

    function closeDeleteAddrModal() {
      document.getElementById('deleteAddrModal').classList.add('hidden');
      activeAddrId = null;
    }

    function confirmDeleteAddr() {
      if (activeAddrId) {
        const card = document.querySelector(`[data-id="${activeAddrId}"]`);
        if (card) card.remove();
        alert('Dirección eliminada correctamente.');
      }
      closeDeleteAddrModal();
    }