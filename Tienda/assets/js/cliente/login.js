/**
 * Logica interactiva para vista login (cliente) - Tienda
 */

function togglePassVisibility() {
      const input = document.getElementById('passInput');
      const icon = document.getElementById('eyeIcon');
      if (input.type === 'password') {
        input.type = 'text';
        icon.className = 'fa-solid fa-eye-slash text-xs';
      } else {
        input.type = 'password';
        icon.className = 'fa-solid fa-eye text-xs';
      }
    }

    function handleLogin() {
      window.location.href = "tienda-catalog.html";
    }

    function mockSocialLogin(provider) {
      alert(`Autenticación simulada con ${provider}. Redirigiendo a tu catálogo...`);
      window.location.href = "tienda-catalog.html";
    }