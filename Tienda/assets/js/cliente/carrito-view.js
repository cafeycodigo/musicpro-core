/**
 * Logica interactiva para vista carrito-view (cliente) - Tienda
 */

let activeDeleteId = null;
    let couponDiscountRate = 0;

    function changeQty(itemId, delta) {
      const qtyEl = document.getElementById('qty-' + itemId);
      let current = parseInt(qtyEl.innerText) + delta;
      if (current < 1) current = 1;
      qtyEl.innerText = current;

      const row = document.querySelector(`[data-id="${itemId}"]`);
      const unitPrice = parseInt(row.getAttribute('data-price'));
      const subtotal = unitPrice * current;

      document.getElementById('subtotal-' + itemId).innerText = '$' + subtotal.toLocaleString('es-CL');
      recalculateCart();
    }

    function recalculateCart() {
      let subtotal = 0;
      let totalItems = 0;

      document.querySelectorAll('.cart-item').forEach(row => {
        const id = row.getAttribute('data-id');
        const unitPrice = parseInt(row.getAttribute('data-price'));
        const qty = parseInt(document.getElementById('qty-' + id).innerText);
        subtotal += (unitPrice * qty);
        totalItems += qty;
      });

      document.getElementById('itemCountLabel').innerText = totalItems;
      document.getElementById('summarySubtotal').innerText = '$' + subtotal.toLocaleString('es-CL');

      let discount = 0;
      if (couponDiscountRate > 0) {
        discount = Math.round(subtotal * couponDiscountRate);
        document.getElementById('discountRow').classList.remove('hidden');
        document.getElementById('discountRow').classList.add('flex');
        document.getElementById('summaryDiscount').innerText = '-$' + discount.toLocaleString('es-CL');
      }

      const total = subtotal - discount;
      document.getElementById('summaryTotal').innerText = '$' + total.toLocaleString('es-CL');
    }

    function applyCoupon() {
      const code = document.getElementById('couponInput').value.trim().toUpperCase();
      if (code === 'MUSICPRO20') {
        couponDiscountRate = 0.20;
        document.getElementById('couponPercent').innerText = '20%';
        alert('¡Cupón MUSICPRO20 aplicado con éxito! Has obtenido 20% de descuento.');
        recalculateCart();
      } else {
        alert('Cupón no válido o vencido. Intenta con: MUSICPRO20');
      }
    }

    function openDeleteCartModal(id, name) {
      activeDeleteId = id;
      document.getElementById('deleteItemName').innerText = name;
      document.getElementById('deleteCartModal').classList.remove('hidden');
    }

    function closeDeleteCartModal() {
      document.getElementById('deleteCartModal').classList.add('hidden');
      activeDeleteId = null;
    }

    function confirmDeleteCart() {
      if (activeDeleteId) {
        const item = document.querySelector(`[data-id="${activeDeleteId}"]`);
        if (item) item.remove();
        recalculateCart();
      }
      closeDeleteCartModal();
    }