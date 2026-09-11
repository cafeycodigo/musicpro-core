/**
 * Logica interactiva para vista cuentas-create (admin) - Tarjeta
 */

function calculateScoring() {
      const income = parseFloat(document.getElementById('incomeInput').value) || 0;
      const seniority = parseInt(document.getElementById('senioritySelect').value) || 1;

      let score = 500 + Math.min(350, Math.round(income / 6000)) + (seniority * 40);
      score = Math.min(960, Math.max(350, score));

      document.getElementById('scoreDisplay').textContent = score;
      
      const maxCap = Math.round(income * (1.5 + (seniority * 0.5)));
      document.getElementById('maxCapDisplay').textContent = `$${maxCap.toLocaleString('es-CL')} CLP`;

      const badge = document.getElementById('scoreBadge');
      const rec = document.getElementById('recPlanDisplay');
      if (score >= 800) {
        badge.textContent = "Riesgo Mínimo (Aprobado)";
        badge.className = "px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200 inline-block";
        rec.textContent = "MusicPro Platinum / Black";
      } else if (score >= 650) {
        badge.textContent = "Riesgo Medio (Aprobado con Límites)";
        badge.className = "px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-200 inline-block";
        rec.textContent = "MusicPro Gold";
      } else {
        badge.textContent = "Riesgo Elevado (Requiere Aval)";
        badge.className = "px-3 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-800 border border-rose-200 inline-block";
        rec.textContent = "MusicPro Classic";
      }
    }

    function updatePlanDefaults() {
      const plan = document.getElementById('cardPlanSelect').value;
      const credit = document.getElementById('assignedCredit');
      const usd = document.getElementById('assignedUsd');
      const rate = document.getElementById('assignedRate');

      if (plan === 'classic') {
        credit.value = 500000;
        usd.value = 500;
        rate.value = "2.10% mensual (CAE 29.8%)";
      } else if (plan === 'gold') {
        credit.value = 1200000;
        usd.value = 1200;
        rate.value = "1.89% mensual (CAE 26.5%)";
      } else if (plan === 'platinum') {
        credit.value = 2500000;
        usd.value = 2500;
        rate.value = "1.75% mensual (CAE 24.2%)";
      } else if (plan === 'black') {
        credit.value = 4500000;
        usd.value = 5000;
        rate.value = "1.50% mensual (CAE 20.8%)";
      }
    }

    function emitCardContract() {
      alert('¡Evaluación aprobada y contrato emitido exitosamente! Se ha creado el contrato #CTA-10072 y enviado el kit digital de bienvenida al cliente.');
      window.location.href = "cuentas-list.html";
    }