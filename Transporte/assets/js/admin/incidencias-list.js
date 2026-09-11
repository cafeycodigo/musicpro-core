/**
 * Logica interactiva para vista incidencias-list (admin) - Transporte
 */

function openResolveModal(ot, customer, phone, causal) {
      document.getElementById('modalOtLabel').textContent = 'OT: ' + ot + ' • Causal: ' + causal;
      document.getElementById('modalCustomer').textContent = customer;
      document.getElementById('modalPhone').textContent = phone;
      document.getElementById('resolveModal').classList.remove('hidden');
    }
    function closeResolveModal() {
      document.getElementById('resolveModal').classList.add('hidden');
    }