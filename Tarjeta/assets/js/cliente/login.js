/**
 * Logica interactiva para vista login (cliente) - Tarjeta
 */

function togglePinVisibility() {
      const input = document.getElementById('pinInput');
      const icon = document.getElementById('pinEyeIcon');
      if (input.type === 'password') {
        input.type = 'text';
        icon.className = 'fa-solid fa-eye-slash text-xs';
      } else {
        input.type = 'password';
        icon.className = 'fa-solid fa-eye text-xs';
      }
    }

    function toggleVirtualKeypad() {
      const kp = document.getElementById('virtualKeypad');
      kp.classList.toggle('hidden');
    }

    function addPinDigit(digit) {
      const input = document.getElementById('pinInput');
      if (input.value.length < 6) {
        input.value += digit;
      }
    }

    function clearPin() {
      document.getElementById('pinInput').value = '';
    }

    function handleLogin() {
      window.location.href = "tarjeta-dashboard.html";
    }