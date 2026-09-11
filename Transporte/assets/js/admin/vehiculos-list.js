/**
 * Logica interactiva para vista vehiculos-list (admin) - Transporte
 */

let activePlate = null;

    function filterVehicles() {
      const type = document.getElementById('vehicleTypeFilter').value;
      const query = document.getElementById('vehicleSearch').value.toLowerCase();
      const rows = document.querySelectorAll('.vehicle-row');

      rows.forEach(row => {
        const rowType = row.getAttribute('data-type');
        const text = row.innerText.toLowerCase();

        const matchType = (type === 'all' || rowType === type);
        const matchQuery = text.includes(query);

        row.style.display = (matchType && matchQuery) ? '' : 'none';
      });
    }

    function openDeleteVehModal(plate, name) {
      activePlate = plate;
      document.getElementById('deleteVehPlate').innerText = plate;
      document.getElementById('deleteVehName').innerText = name;
      document.getElementById('deleteVehModal').classList.remove('hidden');
    }

    function closeDeleteVehModal() {
      document.getElementById('deleteVehModal').classList.add('hidden');
      activePlate = null;
    }

    function confirmDeleteVeh() {
      if (activePlate) {
        const row = document.querySelector(`tr[data-plate="${activePlate}"]`);
        if (row) row.remove();
        alert(`Móvil ${activePlate} dado de baja de la flota activa.`);
      }
      closeDeleteVehModal();
    }