/**
 * Logica interactiva para vista conductores-list (admin) - Transporte
 */

let activeDriverName = null;

    function filterDrivers() {
      const query = document.getElementById('driverSearch').value.toLowerCase();
      const rows = document.querySelectorAll('.driver-row');
      rows.forEach(row => {
        const text = row.innerText.toLowerCase();
        row.style.display = text.includes(query) ? '' : 'none';
      });
    }

    function openDeleteDriverModal(name, rut) {
      activeDriverName = name;
      document.getElementById('deleteDriverName').innerText = name;
      document.getElementById('deleteDriverRut').innerText = rut;
      document.getElementById('deleteDriverModal').classList.remove('hidden');
    }

    function closeDeleteDriverModal() {
      document.getElementById('deleteDriverModal').classList.add('hidden');
      activeDriverName = null;
    }

    function confirmDeleteDriver() {
      if (activeDriverName) {
        const row = document.querySelector(`tr[data-name="${activeDriverName}"]`);
        if (row) row.remove();
        alert(`Conductor ${activeDriverName} dado de baja del equipo de reparto.`);
      }
      closeDeleteDriverModal();
    }