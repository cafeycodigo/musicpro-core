/**
 * Logica interactiva para vista compras-list (cliente) - Tienda
 */

function filterOrders() {
      const status = document.getElementById('statusFilter').value;
      const query = document.getElementById('orderSearch').value.toLowerCase();
      const rows = document.querySelectorAll('.order-row');

      rows.forEach(row => {
        const rowStatus = row.getAttribute('data-status');
        const text = row.innerText.toLowerCase();

        const matchStatus = (status === 'all' || rowStatus === status);
        const matchQuery = text.includes(query);

        row.style.display = (matchStatus && matchQuery) ? '' : 'none';
      });
    }