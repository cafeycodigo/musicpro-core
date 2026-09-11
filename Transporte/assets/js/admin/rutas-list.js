/**
 * Logica interactiva para vista rutas-list (admin) - Transporte
 */

function filterRoutes() {
      const query = document.getElementById('routeSearch').value.toLowerCase();
      const rows = document.querySelectorAll('.route-row');
      rows.forEach(row => {
        const text = row.getAttribute('data-search').toLowerCase();
        row.style.display = text.includes(query) ? '' : 'none';
      });
    }