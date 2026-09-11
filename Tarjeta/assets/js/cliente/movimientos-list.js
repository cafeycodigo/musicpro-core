/**
 * Logica interactiva para vista movimientos-list (cliente) - Tarjeta
 */

let currentCategory = 'ALL';
    let searchDebounceTimer;

    function setCategoryFilter(category, btn) {
      currentCategory = category;
      document.querySelectorAll('.filter-tab').forEach(b => {
        b.className = "filter-tab px-3 py-1 rounded-lg font-medium text-slate-600 hover:text-slate-900 transition";
      });
      btn.className = "filter-tab px-3 py-1 rounded-lg font-semibold bg-white text-slate-800 shadow-xs transition";
      applyFilters();
    }

    function handleSearch() {
      clearTimeout(searchDebounceTimer);
      searchDebounceTimer = setTimeout(() => {
        applyFilters();
      }, 200);
    }

    function filterTransactions() {
      applyFilters();
    }

    function applyFilters() {
      const query = document.getElementById('searchInput').value.toLowerCase().trim();
      const rows = document.querySelectorAll('#txTableBody .tx-row');

      rows.forEach(row => {
        const text = row.dataset.name;
        const type = row.dataset.type;

        const matchesQuery = query === '' || text.includes(query);
        const matchesCategory = currentCategory === 'ALL' || type === currentCategory;

        if (matchesQuery && matchesCategory) {
          row.classList.remove('hidden');
        } else {
          row.classList.add('hidden');
        }
      });
    }

    function openDownloadModal() {
      document.getElementById('downloadModal').classList.remove('hidden');
    }

    function closeDownloadModal() {
      document.getElementById('downloadModal').classList.add('hidden');
    }

    function downloadFile() {
      alert('Generando y descargando Cartola_Septiembre_2026_MusicProBlack.pdf ...');
      closeDownloadModal();
    }