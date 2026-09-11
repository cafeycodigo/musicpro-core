/**
 * Logica interactiva para vista cuentas-list (admin) - Tarjeta
 */

let searchDebounceTimer;
    let targetAccount = null;

    function handleSearch() {
      clearTimeout(searchDebounceTimer);
      searchDebounceTimer = setTimeout(() => {
        applyFilters();
      }, 200);
    }

    function applyFilters() {
      const query = document.getElementById('searchInput').value.toLowerCase().trim();
      const plan = document.getElementById('planFilter').value;
      const status = document.getElementById('statusFilter').value;

      const rows = document.querySelectorAll('#accountsBody .account-row');
      let visibleCount = 0;

      rows.forEach(row => {
        const text = row.dataset.search;
        const rowPlan = row.dataset.plan;
        const rowStatus = row.dataset.status;

        const matchesQuery = query === '' || text.includes(query);
        const matchesPlan = plan === 'ALL' || rowPlan === plan;
        const matchesStatus = status === 'ALL' || rowStatus === status;

        if (matchesQuery && matchesPlan && matchesStatus) {
          row.classList.remove('hidden');
          visibleCount++;
        } else {
          row.classList.add('hidden');
        }
      });

      document.getElementById('totalCountDisplay').textContent = `${visibleCount} cuentas`;
    }

    function openFreezeModal(contractId, clientName) {
      targetAccount = contractId;
      document.getElementById('modalContractId').textContent = contractId;
      document.getElementById('modalClientName').textContent = clientName;
      document.getElementById('freezeModal').classList.remove('hidden');
    }

    function closeFreezeModal() {
      document.getElementById('freezeModal').classList.add('hidden');
    }

    function confirmFreeze() {
      const reason = document.getElementById('freezeReason').value;
      closeFreezeModal();
      alert(`La cuenta ${targetAccount} ha sido bloqueada preventivamente por motivo: ${reason}. Se ha revocado el token transaccional.`);
      location.reload();
    }