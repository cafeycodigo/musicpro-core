/**
 * Logica interactiva para vista login (cliente) - Transporte
 */

function togglePassVisibility() {
      const input = document.getElementById('remPass');
      const icon = document.getElementById('eyeIcon');
      if (input.type === 'password') {
        input.type = 'text';
        icon.className = 'fa-solid fa-eye-slash text-xs';
      } else {
        input.type = 'password';
        icon.className = 'fa-solid fa-eye text-xs';
      }
    }

    function setRemitenteType(type, btn) {
      document.querySelectorAll('.rem-tab').forEach(b => {
        b.className = "rem-tab py-1.5 rounded-lg font-medium text-slate-500 hover:text-slate-900 transition";
      });
      btn.className = "rem-tab py-1.5 rounded-lg font-bold bg-white text-slate-900 shadow-xs transition";
      const lbl = document.getElementById('lblUser');
      const input = document.getElementById('remUser');
      if (type === 'EMP') {
        lbl.textContent = "RUT de Empresa o Email";
        input.placeholder = "Ej: 76.840.119-2 o correo corporativo";
      } else {
        lbl.textContent = "RUT Personal o Correo";
        input.placeholder = "Ej: 18.940.122-3 o tu correo";
      }
    }

    function handleLogin() {
      window.location.href = "envios-list.html";
    }