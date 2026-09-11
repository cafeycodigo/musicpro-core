/**
 * MusicPro Bodega WMS - Componentes y Utilidades JS
 */
(function (window, document) {
  'use strict';

  // Configuración Tailwind para Bodega WMS
  if (window.tailwind) {
    window.tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', 'sans-serif'],
            heading: ['"Outfit"', 'sans-serif'],
            mono: ['"Share Tech Mono"', 'monospace']
          }
        }
      }
    };
  }

  const BodegaWMS = {
    /**
     * Muestra una notificación Toast flotante
     */
    showToast: function (message, type = 'info') {
      let container = document.getElementById('wms-toast-container');
      if (!container) {
        container = document.createElement('div');
        container.id = 'wms-toast-container';
        container.className = 'wms-toast-container';
        document.body.appendChild(container);
      }

      const icons = {
        success: 'fa-check-circle text-emerald-400',
        warning: 'fa-triangle-exclamation text-amber-400',
        danger: 'fa-circle-xmark text-rose-400',
        info: 'fa-circle-info text-blue-400'
      };

      const toast = document.createElement('div');
      toast.className = 'wms-toast';
      toast.innerHTML = `
        <i class="fa-solid ${icons[type] || icons.info} text-base flex-shrink-0"></i>
        <div class="flex-1">${message}</div>
        <button onclick="this.parentElement.remove()" class="text-slate-400 hover:text-white transition">
          <i class="fa-solid fa-xmark text-xs"></i>
        </button>
      `;

      container.appendChild(toast);
      setTimeout(() => {
        if (toast.parentElement) toast.remove();
      }, 4000);
    },

    /**
     * Filtra una tabla HTML en tiempo real por búsqueda de texto
     */
    setupTableSearch: function (inputId, tableId) {
      const input = document.getElementById(inputId);
      const table = document.getElementById(tableId);
      if (!input || !table) return;

      input.addEventListener('input', function (e) {
        const query = e.target.value.toLowerCase().trim();
        const rows = table.querySelectorAll('tbody tr');
        rows.forEach(row => {
          const text = row.textContent.toLowerCase();
          row.style.display = text.includes(query) ? '' : 'none';
        });
      });
    },

    /**
     * Alterna la visibilidad de modales simples
     */
    toggleModal: function (modalId, show = true) {
      const modal = document.getElementById(modalId);
      if (!modal) return;
      if (show) {
        modal.classList.remove('hidden');
      } else {
        modal.classList.add('hidden');
      }
    }
  };

  window.BodegaWMS = BodegaWMS;

  // Exportar helpers globales de modales comunes para Bodega
  window.openModal = function (id) { BodegaWMS.toggleModal(id, true); };
  window.closeModal = function (id) { BodegaWMS.toggleModal(id, false); };

})(window, document);
