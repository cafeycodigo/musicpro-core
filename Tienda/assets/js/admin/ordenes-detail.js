/**
 * Logica interactiva para vista ordenes-detail (admin) - Tienda
 */

function updateOrderStatus(newStatus) {
      const badge = document.getElementById('currentStatusBadge');
      badge.innerText = newStatus;
      if (newStatus === 'Entregado') {
        badge.className = 'px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200';
      } else if (newStatus === 'Cancelado') {
        badge.className = 'px-3 py-1 rounded-full text-xs font-bold bg-rose-50 text-rose-700 border border-rose-200';
      } else {
        badge.className = 'px-3 py-1 rounded-full text-xs font-bold bg-cyan-50 text-cyan-700 border border-cyan-200';
      }
      alert(`Estado del pedido actualizado a: ${newStatus}`);
    }

    function saveTracking() {
      const code = document.getElementById('trackingCodeInput').value;
      alert(`Número de seguimiento ${code} asociado correctamente al despacho.`);
    }