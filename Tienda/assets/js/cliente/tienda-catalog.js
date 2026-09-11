/**
 * Logica interactiva para vista tienda-catalog (cliente) - Tienda
 */

let currentCart = 3;

    function updatePriceFilter(val) {
      document.getElementById('priceDisplay').innerText = '$' + parseInt(val).toLocaleString('es-CL');
      filterStoreCatalog();
    }

    function filterStoreCatalog() {
      const selectedCat = document.querySelector('input[name="catRadio"]:checked').value;
      const maxPrice = parseInt(document.getElementById('priceSlider').value);
      const query = document.getElementById('catalogSearchInput').value.toLowerCase();
      const cards = document.querySelectorAll('.store-card');
      let visible = 0;

      cards.forEach(card => {
        const cat = card.getAttribute('data-category');
        const price = parseInt(card.getAttribute('data-price'));
        const name = card.getAttribute('data-name').toLowerCase();

        const matchCat = (selectedCat === 'all' || cat === selectedCat);
        const matchPrice = price <= maxPrice;
        const matchQuery = name.includes(query);

        if (matchCat && matchPrice && matchQuery) {
          card.style.display = '';
          visible++;
        } else {
          card.style.display = 'none';
        }
      });

      document.getElementById('productCount').innerText = visible;
    }

    function resetFilters() {
      document.querySelector('input[name="catRadio"][value="all"]').checked = true;
      document.getElementById('priceSlider').value = 1500000;
      document.getElementById('priceDisplay').innerText = '$1.500.000';
      document.getElementById('catalogSearchInput').value = '';
      filterStoreCatalog();
    }

    function addToCart(name, price) {
      currentCart++;
      document.getElementById('headerCartCount').innerText = currentCart;
      
      const toast = document.getElementById('cartToast');
      document.getElementById('toastTitle').innerText = name;
      document.getElementById('toastDesc').innerText = `$${price.toLocaleString('es-CL')} agregado exitosamente.`;
      toast.classList.remove('hidden');

      setTimeout(() => {
        toast.classList.add('hidden');
      }, 4000);
    }