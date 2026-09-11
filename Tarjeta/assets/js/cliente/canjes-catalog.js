/**
 * Logica interactiva para vista canjes-catalog (cliente) - Tarjeta
 */

let currentBalance = 14850;
    let selectedItem = null;

    function filterCategory(cat, btn) {
      document.querySelectorAll('.cat-btn').forEach(b => {
        b.className = "cat-btn px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 transition";
      });
      btn.className = "cat-btn px-4 py-2 rounded-xl text-xs font-bold bg-amber-500 text-slate-950 shadow-sm transition";

      const cards = document.querySelectorAll('#canjesGrid .canje-card');
      cards.forEach(card => {
        const matchesCat = cat === 'ALL' || card.dataset.cat === cat;
        if (matchesCat) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    }

    function toggleAffordableOnly() {
      const checked = document.getElementById('affordableOnly').checked;
      const cards = document.querySelectorAll('#canjesGrid .canje-card');
      cards.forEach(card => {
        const pts = parseInt(card.dataset.pts);
        if (checked && pts > currentBalance) {
          card.classList.add('hidden');
        } else {
          card.classList.remove('hidden');
        }
      });
    }

    function openCanjeModal(title, pts, cat) {
      selectedItem = { title, pts, cat };
      document.getElementById('modalBenefitTitle').textContent = title;
      document.getElementById('modalBenefitCat').textContent = cat;
      document.getElementById('modalBenefitPts').textContent = `${pts.toLocaleString('es-CL')} pts`;
      document.getElementById('modalBenefitRemaining').textContent = `${(currentBalance - pts).toLocaleString('es-CL')} pts`;
      document.getElementById('canjeModal').classList.remove('hidden');
    }

    function closeCanjeModal() {
      document.getElementById('canjeModal').classList.add('hidden');
    }

    function executeCanje() {
      currentBalance -= selectedItem.pts;
      document.getElementById('heroPoints').textContent = `${currentBalance.toLocaleString('es-CL')} pts`;
      document.getElementById('navPointsBalance').textContent = `${currentBalance.toLocaleString('es-CL')} Puntos Pro`;
      closeCanjeModal();
      alert(`¡Felicitaciones! Has canjeado con éxito "${selectedItem.title}". Recibirás las instrucciones de retiro y tu cupón digital en tu correo registrado.`);
    }