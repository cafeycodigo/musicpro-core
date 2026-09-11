/**
 * Logica interactiva para vista cupones-list (admin) - Tienda
 */

let activeCoupon = null;

    function filterCoupons() {
      const query = document.getElementById('couponSearch').value.toLowerCase();
      const rows = document.querySelectorAll('.coupon-row');
      rows.forEach(row => {
        const text = row.innerText.toLowerCase();
        row.style.display = text.includes(query) ? '' : 'none';
      });
    }

    function openDeleteCouponModal(code) {
      activeCoupon = code;
      document.getElementById('deleteCouponCode').innerText = code;
      document.getElementById('deleteCouponModal').classList.remove('hidden');
    }

    function closeDeleteCouponModal() {
      document.getElementById('deleteCouponModal').classList.add('hidden');
      activeCoupon = null;
    }

    function confirmDeleteCoupon() {
      if (activeCoupon) {
        const row = document.querySelector(`tr[data-code="${activeCoupon}"]`);
        if (row) row.remove();
        alert(`Cupón ${activeCoupon} eliminado exitosamente.`);
      }
      closeDeleteCouponModal();
    }