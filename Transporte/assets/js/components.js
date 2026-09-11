/**
 * MusicPro Transporte Express - Componentes y Utilidades JS
 */
(function (window, document) {
  'use strict';

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

  const TransporteExpress = {
    /**
     * Formatea un código de seguimiento (TRK-9823-CL)
     */
    formatTrackingCode: function (code) {
      return code.toUpperCase().trim();
    },

    /**
     * Toast de estado logístico
     */
    showToast: function (message, type = 'info') {
      let container = document.getElementById('logistics-toast-container');
      if (!container) {
        container = document.createElement('div');
        container.id = 'logistics-toast-container';
        container.className = 'logistics-toast-container';
        document.body.appendChild(container);
      }

      const icons = {
        success: 'fa-truck-fast text-emerald-400',
        info: 'fa-location-dot text-blue-400',
        warning: 'fa-triangle-exclamation text-amber-400',
        danger: 'fa-circle-xmark text-rose-400'
      };

      const toast = document.createElement('div');
      toast.className = 'logistics-toast';
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

  window.TransporteExpress = TransporteExpress;
  window.openModal = function (id) { TransporteExpress.toggleModal(id, true); };
  window.closeModal = function (id) { TransporteExpress.toggleModal(id, false); };

})(window, document);
