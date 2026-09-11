/**
 * Logica interactiva para vista productos-list (admin) - Tienda
 */

let activeDeleteSku = null;

    function filterStoreTable() {
      const cat = document.getElementById('storeCatFilter').value;
      const query = document.getElementById('storeSearch').value.toLowerCase();
      const rows = document.querySelectorAll('.prod-row');

      rows.forEach(row => {
        const rowCat = row.getAttribute('data-cat');
        const text = row.innerText.toLowerCase();

        const matchCat = (cat === 'all' || rowCat === cat);
        const matchQuery = text.includes(query);

        row.style.display = (matchCat && matchQuery) ? '' : 'none';
      });
    }

    function togglePublish(checkbox) {
      if (checkbox.checked) {
        alert('Producto ahora es VISIBLE en el catálogo público.');
      } else {
        alert('Producto ahora está OCULTO en el catálogo público.');
      }
    }

    function openDeleteProdModal(sku, name) {
      activeDeleteSku = sku;
      document.getElementById('deleteProdName').innerText = name;
      document.getElementById('deleteProdModal').classList.remove('hidden');
    }

    function closeDeleteProdModal() {
      document.getElementById('deleteProdModal').classList.add('hidden');
      activeDeleteSku = null;
    }

    function confirmDeleteProd() {
      if (activeDeleteSku) {
        const row = document.querySelector(`tr[data-sku="${activeDeleteSku}"]`);
        if (row) row.remove();
        alert('Producto eliminado exitosamente del catálogo comercial.');
      }
      closeDeleteProdModal();
    }