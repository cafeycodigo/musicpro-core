/**
 * Logica interactiva para vista producto-detalle (cliente) - Tienda
 */

let qty = 1;
    function updateQty(delta) {
      qty = Math.max(1, qty + delta);
      document.getElementById('qtyInput').textContent = qty;
    }

    function changeImage(src, btn) {
      document.getElementById('mainImage').src = src;
      document.querySelectorAll('.thumb-btn').forEach(b => b.classList.remove('ring-2', 'ring-indigo-600'));
      btn.classList.add('ring-2', 'ring-indigo-600');
    }

    function setColor(name, btn) {
      document.getElementById('colorLabel').textContent = name;
      document.querySelectorAll('.swatch-btn').forEach(b => b.classList.remove('swatch-active'));
      btn.classList.add('swatch-active');
    }

    function toggleCart() {
      const drawer = document.getElementById('cartDrawer');
      drawer.classList.toggle('hidden');
    }

    function addToCart() {
      toggleCart();
    }