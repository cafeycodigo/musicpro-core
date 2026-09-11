/**
 * Logica interactiva para vista tarjeta-dashboard (cliente) - Tarjeta
 */

let isMasked = true;
    let isFrozen = false;

    function toggleCardSensitiveData() {
      if (isMasked) {
        // Unmask
        document.getElementById('cardNumberDisplay').textContent = "4589  7201  3890  4589";
        document.getElementById('cardCvvDisplay').textContent = "842";
        document.getElementById('btnMaskText').textContent = "Ocultar Datos";
        isMasked = false;
      } else {
        // Mask
        document.getElementById('cardNumberDisplay').textContent = "•••• •••• •••• 4589";
        document.getElementById('cardCvvDisplay').textContent = "•••";
        document.getElementById('btnMaskText').textContent = "Mostrar Número & CVV";
        isMasked = true;
      }
    }

    function openPaymentModal() {
      document.getElementById('paymentModal').classList.remove('hidden');
    }

    function closePaymentModal() {
      document.getElementById('paymentModal').classList.add('hidden');
    }

    function confirmPayment() {
      alert('¡Pago procesado exitosamente! Tu cupo disponible ha sido actualizado en tiempo real.');
      closePaymentModal();
    }

    function toggleCardFreezeModal() {
      const modal = document.getElementById('freezeModal');
      modal.classList.toggle('hidden');
    }

    function applyCardFreeze() {
      isFrozen = !isFrozen;
      toggleCardFreezeModal();
      const btn = document.getElementById('btnFreezeState');
      if (isFrozen) {
        btn.innerHTML = `<i class="fa-solid fa-lock-open text-emerald-600"></i><span>Descongelar Tarjeta</span>`;
        btn.className = "px-4 py-2 border border-emerald-300 bg-emerald-50 hover:bg-emerald-100 rounded-xl text-xs font-semibold text-emerald-800 transition flex items-center gap-2";
        alert('Tarjeta congelada preventivamente. Las compras están bloqueadas.');
      } else {
        btn.innerHTML = `<i class="fa-solid fa-snowflake text-cyan-600"></i><span>Congelar Tarjeta</span>`;
        btn.className = "px-4 py-2 border border-slate-300 hover:bg-slate-100 rounded-xl text-xs font-semibold text-slate-700 transition flex items-center gap-2";
        alert('Tarjeta descongelada. Ahora puedes realizar compras normalmente.');
      }
    }