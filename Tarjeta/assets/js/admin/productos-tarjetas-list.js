/**
 * Logica interactiva para vista productos-tarjetas-list (admin) - Tarjeta
 */

let searchDebounceTimer;
    let targetPlan = '';

    function handlePlanSearch() {
      clearTimeout(searchDebounceTimer);
      searchDebounceTimer = setTimeout(() => {
        const q = document.getElementById('planSearchInput').value.toLowerCase().trim();
        const rows = document.querySelectorAll('#plansTableBody .plan-row');
        rows.forEach(r => {
          if (q === '' || r.dataset.name.includes(q)) {
            r.classList.remove('hidden');
          } else {
            r.classList.add('hidden');
          }
        });
      }, 200);
    }

    function openArchiveModal(planName) {
      targetPlan = planName;
      document.getElementById('modalPlanName').textContent = planName;
      document.getElementById('archiveModal').classList.remove('hidden');
    }

    function closeArchiveModal() {
      document.getElementById('archiveModal').classList.add('hidden');
    }

    function confirmArchive() {
      closeArchiveModal();
      alert(`El plan ${targetPlan} ha sido archivado del catálogo de emisiones.`);
    }