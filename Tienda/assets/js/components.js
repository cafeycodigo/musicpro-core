/**
 * MusicPro Store - Componentes y Utilidades JS
 */
(function (window, document) {
  'use strict';

  if (window.tailwind) {
    window.tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', 'sans-serif'],
            heading: ['"Outfit"', 'sans-serif']
          }
        }
      }
    };
  }

  const TiendaStore = {
    /**
     * Formateador de moneda para Tienda ($ 199.990)
     */
    formatPrice: function (amount) {
      return new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP',
        maximumFractionDigits: 0
      }).format(amount);
    },

    /**
     * Toast de confirmación de compra o adición al carrito
     */
    showToast: function (message, type = 'success') {
      let container = document.getElementById('store-toast-container');
      if (!container) {
        container = document.createElement('div');
        container.id = 'store-toast-container';
        container.className = 'store-toast-container';
        document.body.appendChild(container);
      }

      const icons = {
        success: 'fa-cart-shopping text-emerald-400',
        info: 'fa-circle-info text-indigo-400',
        warning: 'fa-triangle-exclamation text-amber-400',
        danger: 'fa-circle-xmark text-rose-400'
      };

      const toast = document.createElement('div');
      toast.className = 'store-toast';
      toast.innerHTML = `
        <i class="fa-solid ${icons[type] || icons.success} text-base flex-shrink-0"></i>
        <div class="flex-1">${message}</div>
        <button onclick="this.parentElement.remove()" class="text-indigo-300 hover:text-white transition">
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

  window.TiendaStore = TiendaStore;
  window.openModal = function (id) { TiendaStore.toggleModal(id, true); };
  window.closeModal = function (id) { TiendaStore.toggleModal(id, false); };

})(window, document);
