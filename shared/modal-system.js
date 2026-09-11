/**
 * MusicPro UI - Universal Modal System
 * Reemplazo transparente y moderno para alert(), confirm() y prompt()
 */
(function (window, document) {
  'use strict';

  // Preservar métodos nativos
  window.__nativeAlert = window.alert;
  window.__nativeConfirm = window.confirm;
  window.__nativePrompt = window.prompt;

  // Cola de modales pendientes
  const modalQueue = [];
  let isModalActive = false;

  // Estilos embebidos para asegurar independencia total
  const STYLES = `
    .mp-modal-backdrop {
      position: fixed;
      inset: 0;
      z-index: 99999;
      background: rgba(15, 23, 42, 0.65);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;
      opacity: 0;
      transition: opacity 0.22s cubic-bezier(0.16, 1, 0.3, 1);
      font-family: 'Plus Jakarta Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }
    .mp-modal-backdrop.mp-active {
      opacity: 1;
    }
    .mp-modal-card {
      background: #ffffff;
      border-radius: 1.5rem;
      width: 100%;
      max-width: 440px;
      box-shadow: 0 25px 50px -12px rgba(15, 23, 42, 0.28), 0 0 0 1px rgba(226, 232, 240, 0.9);
      overflow: hidden;
      transform: scale(0.92) translateY(12px);
      opacity: 0;
      transition: transform 0.24s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s ease-out;
      display: flex;
      flex-direction: column;
    }
    .mp-modal-backdrop.mp-active .mp-modal-card {
      transform: scale(1) translateY(0);
      opacity: 1;
    }
    .mp-modal-header {
      padding: 1.25rem 1.5rem 0.5rem 1.5rem;
      display: flex;
      align-items: flex-start;
      gap: 1rem;
    }
    .mp-icon-badge {
      width: 2.75rem;
      height: 2.75rem;
      border-radius: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      font-size: 1.25rem;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.08);
    }
    .mp-icon-badge.success {
      background: linear-gradient(135deg, #10b981, #059669);
      color: #ffffff;
      box-shadow: 0 10px 20px -5px rgba(16, 185, 129, 0.4);
    }
    .mp-icon-badge.danger {
      background: linear-gradient(135deg, #f43f5e, #e11d48);
      color: #ffffff;
      box-shadow: 0 10px 20px -5px rgba(244, 63, 94, 0.4);
    }
    .mp-icon-badge.warning {
      background: linear-gradient(135deg, #f59e0b, #d97706);
      color: #ffffff;
      box-shadow: 0 10px 20px -5px rgba(245, 158, 11, 0.4);
    }
    .mp-icon-badge.info {
      background: linear-gradient(135deg, #6366f1, #4f46e5);
      color: #ffffff;
      box-shadow: 0 10px 20px -5px rgba(99, 102, 241, 0.4);
    }
    .mp-icon-badge.prompt {
      background: linear-gradient(135deg, #0ea5e9, #0284c7);
      color: #ffffff;
      box-shadow: 0 10px 20px -5px rgba(14, 165, 233, 0.4);
    }
    .mp-icon-badge.question {
      background: linear-gradient(135deg, #8b5cf6, #7c3aed);
      color: #ffffff;
      box-shadow: 0 10px 20px -5px rgba(139, 92, 246, 0.4);
    }
    .mp-modal-title {
      font-family: 'Outfit', 'Plus Jakarta Sans', sans-serif;
      font-weight: 700;
      font-size: 1.125rem;
      color: #0f172a;
      line-height: 1.35;
      margin: 0;
    }
    .mp-modal-brand {
      font-size: 0.65rem;
      font-weight: 700;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      color: #64748b;
      margin-top: 0.15rem;
      display: flex;
      align-items: center;
      gap: 0.35rem;
    }
    .mp-modal-brand::before {
      content: '';
      display: inline-block;
      width: 6px;
      height: 6px;
      border-radius: 9999px;
      background-color: #6366f1;
    }
    .mp-modal-close-btn {
      margin-left: auto;
      background: transparent;
      border: none;
      color: #94a3b8;
      width: 2rem;
      height: 2rem;
      border-radius: 9999px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: background-color 0.15s, color 0.15s;
    }
    .mp-modal-close-btn:hover {
      background: #f1f5f9;
      color: #334155;
    }
    .mp-modal-body {
      padding: 0.75rem 1.5rem 1.25rem 1.5rem;
      color: #334155;
      font-size: 0.875rem;
      line-height: 1.55;
      word-break: break-word;
    }
    .mp-modal-input-wrap {
      margin-top: 0.85rem;
    }
    .mp-modal-input {
      width: 100%;
      box-sizing: border-box;
      padding: 0.65rem 0.9rem;
      border: 1.5px solid #cbd5e1;
      border-radius: 0.75rem;
      font-size: 0.875rem;
      font-family: inherit;
      color: #0f172a;
      outline: none;
      transition: border-color 0.15s, box-shadow 0.15s;
    }
    .mp-modal-input:focus {
      border-color: #6366f1;
      box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.18);
    }
    .mp-modal-footer {
      padding: 0.85rem 1.5rem 1.25rem 1.5rem;
      background: #f8fafc;
      border-top: 1px solid #f1f5f9;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 0.6rem;
    }
    .mp-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0.55rem 1.15rem;
      border-radius: 0.75rem;
      font-size: 0.8125rem;
      font-weight: 700;
      font-family: inherit;
      cursor: pointer;
      border: none;
      transition: transform 0.1s, box-shadow 0.15s, background-color 0.15s;
      outline: none;
      user-select: none;
    }
    .mp-btn:active {
      transform: scale(0.97);
    }
    .mp-btn-cancel {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      color: #475569;
    }
    .mp-btn-cancel:hover {
      background: #f1f5f9;
      color: #1e293b;
    }
    .mp-btn-primary {
      background: #0f172a;
      color: #ffffff;
      box-shadow: 0 4px 10px rgba(15, 23, 42, 0.18);
    }
    .mp-btn-primary:hover {
      background: #1e293b;
    }
    .mp-btn-primary.success {
      background: #059669;
      box-shadow: 0 4px 12px rgba(5, 150, 105, 0.3);
    }
    .mp-btn-primary.success:hover {
      background: #047857;
    }
    .mp-btn-primary.danger {
      background: #e11d48;
      box-shadow: 0 4px 12px rgba(225, 29, 72, 0.3);
    }
    .mp-btn-primary.danger:hover {
      background: #be123c;
    }
    .mp-btn-primary.warning {
      background: #d97706;
      box-shadow: 0 4px 12px rgba(217, 119, 6, 0.3);
    }
    .mp-btn-primary.warning:hover {
      background: #b45309;
    }
    .mp-btn-primary.info {
      background: #4f46e5;
      box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
    }
    .mp-btn-primary.info:hover {
      background: #4338ca;
    }
    .mp-btn-primary.prompt {
      background: #0284c7;
      box-shadow: 0 4px 12px rgba(2, 132, 199, 0.3);
    }
    .mp-btn-primary.prompt:hover {
      background: #0369a1;
    }
  `;

  // Inyectar CSS en el documento
  function injectStyles() {
    if (document.getElementById('mp-modal-styles')) return;
    const styleEl = document.createElement('style');
    styleEl.id = 'mp-modal-styles';
    styleEl.textContent = STYLES;
    document.head.appendChild(styleEl);
  }

  // Detectar automáticamente el tono emocional del mensaje
  function detectMood(text, fallbackType) {
    if (fallbackType) return fallbackType;
    if (!text || typeof text !== 'string') return 'info';

    const lower = text.toLowerCase();

    // Palabras clave de Éxito
    if (/éxito|exitosamente|aprobad|guardad|cread|actualizad|bienvenid|canjead|transferid|emitid|reversad|generad/.test(lower)) {
      return 'success';
    }
    // Palabras clave de Peligro / Error / Eliminación / Rechazo
    if (/eliminad|borrad|baja|anulad|bloquead|error|fall|no válid|vencid|no coinciden|rechazad|peligro/.test(lower)) {
      return 'danger';
    }
    // Palabras clave de Advertencia
    if (/faltan|atención|advertencia|cuidado|debes|requerid|reprogramand/.test(lower)) {
      return 'warning';
    }
    // Palabras clave de Información / Proceso
    if (/exportand|descargand|abriend|llamand|contactand|conectand|centrand|simulad|ingresa/.test(lower)) {
      return 'info';
    }

    return 'info';
  }

  // Títulos sugeridos según el tipo
  function defaultTitleForMood(mood, mode) {
    if (mode === 'confirm') return 'Confirmación Requerida';
    if (mode === 'prompt') return 'Información Requerida';

    switch (mood) {
      case 'success': return 'Operación Exitosa';
      case 'danger': return 'Atención / Notificación';
      case 'warning': return 'Advertencia';
      case 'info': return 'Notificación del Sistema';
      default: return 'MusicPro Sistema';
    }
  }

  // Iconos SVG integrados y elegantes
  function getIconSvg(mood, mode) {
    if (mode === 'confirm') {
      return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`;
    }
    if (mode === 'prompt') {
      return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>`;
    }

    switch (mood) {
      case 'success':
        return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>`;
      case 'danger':
        return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>`;
      case 'warning':
        return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`;
      case 'info':
      default:
        return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;
    }
  }

  // Renderizar y procesar un modal
  function showModal(config) {
    injectStyles();

    return new Promise((resolve) => {
      const mode = config.mode || 'alert'; // alert | confirm | prompt
      const text = typeof config.message === 'string' ? config.message : (config.message != null ? String(config.message) : '');
      const mood = config.type || (mode === 'confirm' ? 'question' : (mode === 'prompt' ? 'prompt' : detectMood(text)));
      const title = config.title || defaultTitleForMood(mood, mode);
      const confirmText = config.confirmText || (mode === 'confirm' ? 'Confirmar' : (mode === 'prompt' ? 'Aceptar' : 'Entendido'));
      const cancelText = config.cancelText || 'Cancelar';
      const defaultValue = config.defaultValue || '';

      // Crear DOM
      const backdrop = document.createElement('div');
      backdrop.className = 'mp-modal-backdrop';
      backdrop.setAttribute('role', 'dialog');
      backdrop.setAttribute('aria-modal', 'true');

      let inputHtml = '';
      if (mode === 'prompt') {
        inputHtml = `
          <div class="mp-modal-input-wrap">
            <input type="text" class="mp-modal-input" id="mp-prompt-input" value="${defaultValue.replace(/"/g, '&quot;')}" placeholder="${config.placeholder || 'Escribe aquí...'}">
          </div>
        `;
      }

      let cancelBtnHtml = '';
      if (mode === 'confirm' || mode === 'prompt') {
        cancelBtnHtml = `<button type="button" class="mp-btn mp-btn-cancel" id="mp-btn-cancel">${cancelText}</button>`;
      }

      backdrop.innerHTML = `
        <div class="mp-modal-card">
          <div class="mp-modal-header">
            <div class="mp-icon-badge ${mood}">
              ${getIconSvg(mood, mode)}
            </div>
            <div style="flex: 1; min-width: 0;">
              <h3 class="mp-modal-title">${title}</h3>
              <div class="mp-modal-brand">MusicPro Suite • Sistema</div>
            </div>
            <button type="button" class="mp-modal-close-btn" id="mp-btn-close" aria-label="Cerrar">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>
          <div class="mp-modal-body">
            <div>${text.replace(/\n/g, '<br>')}</div>
            ${inputHtml}
          </div>
          <div class="mp-modal-footer">
            ${cancelBtnHtml}
            <button type="button" class="mp-btn mp-btn-primary ${mood}" id="mp-btn-confirm">${confirmText}</button>
          </div>
        </div>
      `;

      document.body.appendChild(backdrop);

      // Trigger de animación de entrada
      requestAnimationFrame(() => {
        backdrop.classList.add('mp-active');
      });

      const btnConfirm = backdrop.querySelector('#mp-btn-confirm');
      const btnCancel = backdrop.querySelector('#mp-btn-cancel');
      const btnClose = backdrop.querySelector('#mp-btn-close');
      const promptInput = backdrop.querySelector('#mp-prompt-input');

      // Foco automático
      if (promptInput) {
        promptInput.focus();
        promptInput.select();
      } else if (btnConfirm) {
        btnConfirm.focus();
      }

      let isClosed = false;

      function closeModal(returnValue) {
        if (isClosed) return;
        isClosed = true;

        document.removeEventListener('keydown', handleKeyDown);
        backdrop.classList.remove('mp-active');

        setTimeout(() => {
          if (backdrop.parentNode) {
            backdrop.parentNode.removeChild(backdrop);
          }
          isModalActive = false;
          resolve(returnValue);
          processQueue();
        }, 220);
      }

      function handleConfirm() {
        if (mode === 'prompt') {
          const val = promptInput ? promptInput.value : '';
          closeModal(val);
        } else if (mode === 'confirm') {
          closeModal(true);
        } else {
          closeModal(true);
        }
      }

      function handleCancel() {
        if (mode === 'prompt') {
          closeModal(null);
        } else if (mode === 'confirm') {
          closeModal(false);
        } else {
          closeModal(false);
        }
      }

      function handleKeyDown(e) {
        if (e.key === 'Escape') {
          e.preventDefault();
          handleCancel();
        } else if (e.key === 'Enter') {
          // Si es prompt o el foco está en un botón
          if (mode === 'prompt' || document.activeElement === btnConfirm) {
            e.preventDefault();
            handleConfirm();
          }
        }
      }

      document.addEventListener('keydown', handleKeyDown);

      btnConfirm.addEventListener('click', handleConfirm);
      if (btnCancel) btnCancel.addEventListener('click', handleCancel);
      if (btnClose) btnClose.addEventListener('click', handleCancel);

      // Clic fuera de la tarjeta para cerrar
      backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) {
          handleCancel();
        }
      });
    });
  }

  // Administrador de la cola
  function processQueue() {
    if (isModalActive || modalQueue.length === 0) return;
    isModalActive = true;
    const nextItem = modalQueue.shift();
    showModal(nextItem.config).then(nextItem.resolve);
  }

  function enqueueModal(config) {
    return new Promise((resolve) => {
      modalQueue.push({ config, resolve });
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', processQueue, { once: true });
      } else {
        processQueue();
      }
    });
  }

  // -------------------------------------------------------------
  // API Pública y Sobreescrituras Transparentes
  // -------------------------------------------------------------

  /**
   * Universal alert modal
   */
  window.alert = function (message, title, type) {
    let config = { mode: 'alert', message };
    if (typeof message === 'object' && message !== null) {
      config = Object.assign({ mode: 'alert' }, message);
    } else {
      if (title) config.title = title;
      if (type) config.type = type;
    }
    return enqueueModal(config);
  };

  /**
   * Universal confirm modal
   * Admite:
   *  - await confirm(message)
   *  - confirm(message).then(...)
   *  - confirm(message, (isConfirmed) => { ... })
   */
  window.confirm = function (message, callbackOrOptions) {
    let config = { mode: 'confirm', message };
    let callback = null;

    if (typeof callbackOrOptions === 'function') {
      callback = callbackOrOptions;
    } else if (typeof callbackOrOptions === 'object' && callbackOrOptions !== null) {
      config = Object.assign(config, callbackOrOptions);
    }

    const promise = enqueueModal(config);

    if (callback) {
      promise.then((confirmed) => {
        callback(confirmed);
      });
    }

    return promise;
  };

  /**
   * Universal prompt modal
   * Admite:
   *  - await prompt(message, defaultValue)
   *  - prompt(message, defaultValue).then(...)
   *  - prompt(message, defaultValue, (value) => { ... })
   */
  window.prompt = function (message, defaultValue, callbackOrOptions) {
    let config = { mode: 'prompt', message, defaultValue: defaultValue || '' };
    let callback = null;

    if (typeof callbackOrOptions === 'function') {
      callback = callbackOrOptions;
    } else if (typeof callbackOrOptions === 'object' && callbackOrOptions !== null) {
      config = Object.assign(config, callbackOrOptions);
    }

    const promise = enqueueModal(config);

    if (callback) {
      promise.then((val) => {
        callback(val);
      });
    }

    return promise;
  };

  // Exposición de utilidades explícitas
  window.modalAlert = window.alert;
  window.modalConfirm = window.confirm;
  window.modalPrompt = window.prompt;
  window.MusicProModal = {
    alert: window.alert,
    confirm: window.confirm,
    prompt: window.prompt,
    nativeAlert: window.__nativeAlert,
    nativeConfirm: window.__nativeConfirm,
    nativePrompt: window.__nativePrompt
  };

})(window, document);
