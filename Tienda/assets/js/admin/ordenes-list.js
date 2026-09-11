/**
 * Logica interactiva para vista ordenes-list (admin) - Tienda
 */

function filterByState(state) {
      document.querySelectorAll('.state-filter-btn').forEach(btn => {
        if (btn.getAttribute('data-state') === state) {
          btn.className = 'state-filter-btn px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-600 text-white';
        } else {
          btn.className = 'state-filter-btn px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 text-slate-600 hover:bg-slate-200';
        }
      });

      const query = document.getElementById('adminOrderSearch').value.toLowerCase();
      const rows = document.querySelectorAll('.admin-order-row');

      rows.forEach(row => {
        const rowState = row.getAttribute('data-state');
        const text = row.innerText.toLowerCase();

        const matchState = (state === 'all' || rowState === state);
        const matchQuery = text.includes(query);

        row.style.display = (matchState && matchQuery) ? '' : 'none';
      });
    }

    function filterAdminOrders() {
      const query = document.getElementById('adminOrderSearch').value.toLowerCase();
      const rows = document.querySelectorAll('.admin-order-row');

      rows.forEach(row => {
        const text = row.innerText.toLowerCase();
        row.style.display = text.includes(query) ? '' : 'none';
      });
    }