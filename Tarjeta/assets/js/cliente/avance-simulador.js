/**
 * Logica interactiva para vista avance-simulador (cliente) - Tarjeta
 */

let currentAmount = 500000;
    let currentInstallments = 12;
    const monthlyRate = 0.0149;

    function formatCLP(val) {
      return '$' + Math.round(val).toLocaleString('es-CL');
    }

    function setInstallments(n, btn) {
      currentInstallments = n;
      document.querySelectorAll('.inst-btn').forEach(b => {
        b.classList.remove('active', 'border-2', 'border-amber-400', 'bg-amber-400/10', 'text-amber-400');
        b.classList.add('border', 'border-slate-600', 'bg-slate-900');
      });
      btn.classList.remove('border', 'border-slate-600', 'bg-slate-900');
      btn.classList.add('active', 'border-2', 'border-amber-400', 'bg-amber-400/10', 'text-amber-400');
      updateSimulation();
    }

    function updateSimulation() {
      const slider = document.getElementById('amountSlider');
      currentAmount = parseInt(slider.value);
      document.getElementById('amountDisplay').textContent = formatCLP(currentAmount);

      // Cálculo de cuota fórmula francesa: P * [ r*(1+r)^n ] / [ (1+r)^n - 1 ]
      const r = monthlyRate;
      const n = currentInstallments;
      const factor = Math.pow(1 + r, n);
      const monthlyPayment = (currentAmount * (r * factor)) / (factor - 1);
      const totalCTC = (monthlyPayment * n) + 1990 + (currentAmount * 0.008);
      const tax = currentAmount * 0.008;

      document.getElementById('installmentDisplay').textContent = formatCLP(monthlyPayment);
      document.getElementById('sumMonto').textContent = formatCLP(currentAmount);
      document.getElementById('sumCuotas').textContent = n + ' Meses';
      document.getElementById('sumTax').textContent = formatCLP(tax);
      document.getElementById('sumCtc').textContent = formatCLP(totalCTC);
    }

    function confirmAdvance() {
      alert('¡Avance aprobado! Hemos transferido ' + formatCLP(currentAmount) + ' a tu Banco de Chile. Recibirás comprobante por email.');
      window.location.href = 'voucher.html';
    }

    // Inicializar
    updateSimulation();