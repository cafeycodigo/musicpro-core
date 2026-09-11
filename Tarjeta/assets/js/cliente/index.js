/**
 * Logica interactiva para vista index (cliente) - Tarjeta
 */

function updateCalculator() {
      const spend = parseInt(document.getElementById('spendSlider').value);
      document.getElementById('calcAmountDisplay').textContent = `$${spend.toLocaleString('es-CL')} CLP / mes`;

      // 1 point per $1.000 spent per month * 12 months
      const annualPoints = Math.round((spend / 1000) * 12);
      document.getElementById('calcPointsDisplay').textContent = `${annualPoints.toLocaleString('es-CL')} pts`;

      const gift = document.getElementById('calcGiftDisplay');
      if (annualPoints >= 15000) {
        gift.textContent = "Pedal Boss + Gift $50.000";
      } else if (annualPoints >= 8000) {
        gift.textContent = "Masterclass VIP + $30.000";
      } else {
        gift.textContent = "Gift Card $20.000";
      }
    }