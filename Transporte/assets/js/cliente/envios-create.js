/**
 * Logica interactiva para vista envios-create (cliente) - Transporte
 */

function goToStep(step) {
      document.querySelectorAll('.step-card').forEach(c => c.classList.add('hidden'));
      document.getElementById('stepSection' + step).classList.remove('hidden');

      for (let i = 1; i <= 3; i++) {
        const ind = document.getElementById('stepIndicator' + i);
        if (i === step) {
          ind.className = 'text-cyan-700 flex items-center justify-center gap-2 border-b-2 border-cyan-600 pb-2';
          ind.querySelector('span:first-child').className = 'w-5 h-5 rounded-full bg-cyan-600 text-white flex items-center justify-center text-[10px]';
        } else if (i < step) {
          ind.className = 'text-emerald-700 flex items-center justify-center gap-2 border-b-2 border-emerald-500 pb-2';
          ind.querySelector('span:first-child').className = 'w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px]';
        } else {
          ind.className = 'text-slate-400 flex items-center justify-center gap-2 border-b-2 border-transparent pb-2';
          ind.querySelector('span:first-child').className = 'w-5 h-5 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center text-[10px]';
        }
      }

      calcShippingRate();
    }

    function calcShippingRate() {
      const peso = parseFloat(document.getElementById('pesoInput').value) || 1;
      const largo = parseFloat(document.getElementById('dimLargo').value) || 10;
      const ancho = parseFloat(document.getElementById('dimAncho').value) || 10;
      const alto = parseFloat(document.getElementById('dimAlto').value) || 10;

      const volWeight = (largo * ancho * alto) / 5000;
      document.getElementById('volWeightDisplay').innerText = volWeight.toFixed(1) + ' kg/vol';

      const chargeableWeight = Math.max(peso, volWeight);
      const zone = document.getElementById('comunaDestino').value;
      const carga = document.getElementById('tipoCargaSelect').value;

      let basePrice = 5000;
      if (zone === 'RM-Periferica') basePrice = 7500;
      if (zone === 'Valparaiso') basePrice = 12000;
      if (zone === 'Interurbano') basePrice = 18000;

      let extraRate = chargeableWeight * 450;
      if (carga === 'Fragil') extraRate += 3000;
      if (carga === 'Pallet') extraRate += 15000;

      const totalRate = Math.round(basePrice + extraRate);
      document.getElementById('finalRateDisplay').innerText = '$' + totalRate.toLocaleString('es-CL') + ' CLP';
    }

    function handleShippingSubmit(e) {
      e.preventDefault();
      alert('¡Orden de flete TRK-2026-0050 generada exitosamente! El conductor ha sido notificado para retiro.');
      window.location.href = 'envios-list.html';
    }

    calcShippingRate();