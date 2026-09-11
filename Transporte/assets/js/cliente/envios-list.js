/**
 * Logica interactiva para vista envios-list (cliente) - Transporte
 */

let activeCancelCode = null;

    function filterEnvios() {
      const state = document.getElementById('stateSelect').value;
      const query = document.getElementById('enviosSearch').value.toLowerCase();
      const rows = document.querySelectorAll('.envio-row');

      rows.forEach(row => {
        const rowState = row.getAttribute('data-state');
        const text = row.innerText.toLowerCase();

        const matchState = (state === 'all' || rowState === state);
        const matchQuery = text.includes(query);

        row.style.display = (matchState && matchQuery) ? '' : 'none';
      });
    }

    function goToTracking() {
      const code = document.getElementById('quickTrackInput').value.trim();
      if (code) {
        window.location.href = 'tracking-detail.html';
      } else {
        alert('Por favor ingresa un código de tracking.');
      }
    }

    function openCancelModal(code) {
      activeCancelCode = code;
      document.getElementById('cancelCodeDisplay').innerText = code;
      document.getElementById('cancelModal').classList.remove('hidden');
    }

    function closeCancelModal() {
      document.getElementById('cancelModal').classList.add('hidden');
      activeCancelCode = null;
    }

    function confirmCancelEnvio() {
      if (activeCancelCode) {
        const row = document.querySelector(`tr[data-code="${activeCancelCode}"]`);
        if (row) row.remove();
        alert(`Orden de envío ${activeCancelCode} anulada.`);
      }
      closeCancelModal();
    }