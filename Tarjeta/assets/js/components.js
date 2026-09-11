/**
 * MusicPro Tarjeta Financiera - Componentes y Utilidades JS
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

  const TarjetaFintech = {
    /**
     * Formatea un número como pesos chilenos ($ 1.250.000)
     */
    formatCLP: function (amount) {
      return new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP',
        maximumFractionDigits: 0
      }).format(amount);
    },

    /**
     * Formatea un monto en dólares (USD $ 890.00)
     */
    formatUSD: function (amount) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(amount);
    },

    /**
     * Enmascara el número de tarjeta (4589 •••• •••• 1290)
     */
    maskPAN: function (pan) {
      const clean = pan.replace(/\s+/g, '');
      if (clean.length < 12) return pan;
      return `${clean.slice(0, 4)} •••• •••• ${clean.slice(-4)}`;
    },

    /**
     * Notificación Toast estilo Fintech
     */
    showToast: function (message, type = 'info') {
      let container = document.getElementById('fintech-toast-container');
      if (!container) {
        container = document.createElement('div');
        container.id = 'fintech-toast-container';
        container.className = 'fintech-toast-container';
        document.body.appendChild(container);
      }

      const icons = {
        success: 'fa-circle-check text-emerald-400',
        warning: 'fa-shield-halved text-amber-400',
        danger: 'fa-triangle-exclamation text-rose-400',
        info: 'fa-credit-card text-amber-400'
      };

      const toast = document.createElement('div');
      toast.className = 'fintech-toast';
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
     * Alternar visibilidad de modales
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

  window.TarjetaFintech = TarjetaFintech;
  window.openModal = function (id) { TarjetaFintech.toggleModal(id, true); };
  window.closeModal = function (id) { TarjetaFintech.toggleModal(id, false); };

})(window, document);
