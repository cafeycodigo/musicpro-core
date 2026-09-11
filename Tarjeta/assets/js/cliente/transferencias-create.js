/**
 * Logica interactiva para vista transferencias-create (cliente) - Tarjeta
 */

let mode = 'CASH';

    function setTransferMode(newMode) {
      mode = newMode;
      const tabCash = document.getElementById('tabCash');
      const tabPoints = document.getElementById('tabPoints');
      const bankFields = document.getElementById('bankFields');
      const cuotasContainer = document.getElementById('cuotasContainer');
      const lblAmount = document.getElementById('lblAmount');
      const amountPrefix = document.getElementById('amountPrefix');
      const amountHelpText = document.getElementById('amountHelpText');
      const simBox = document.getElementById('simBox');

      if (mode === 'CASH') {
        tabCash.className = "p-4 rounded-2xl border-2 border-amber-500 bg-amber-50/50 text-left transition flex items-center gap-4";
        tabPoints.className = "p-4 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 text-left transition flex items-center gap-4";
        bankFields.classList.remove('hidden');
        cuotasContainer.classList.remove('hidden');
        lblAmount.textContent = "Monto a Transferir ($ CLP)";
        amountPrefix.textContent = "$";
        amountHelpText.textContent = "Cupo disponible máximo: $2.450.000 CLP";
        simBox.classList.remove('hidden');
      } else {
        tabPoints.className = "p-4 rounded-2xl border-2 border-amber-500 bg-amber-50/50 text-left transition flex items-center gap-4";
        tabCash.className = "p-4 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 text-left transition flex items-center gap-4";
        bankFields.classList.add('hidden');
        cuotasContainer.classList.add('hidden');
        lblAmount.textContent = "Cantidad de Puntos Pro a Ceder";
        amountPrefix.textContent = "pts";
        amountHelpText.textContent = "Puntos disponibles: 14.850 pts";
        simBox.classList.add('hidden');
      }
      calculateCommission();
    }

    function calculateCommission() {
      if (mode !== 'CASH') return;
      const amount = parseFloat(document.getElementById('inputAmount').value) || 0;
      const cuotas = parseInt(document.getElementById('selectCuotas').value) || 1;
      document.getElementById('simAmount').textContent = `$${amount.toLocaleString('es-CL')} CLP`;
      const cuotaEst = Math.round((amount + 1990) / cuotas);
      document.getElementById('simCuota').textContent = `$${cuotaEst.toLocaleString('es-CL')} CLP / mes`;
    }

    function fillSavedRecipient() {
      document.getElementById('destName').value = "Benjamín Morales Bravo";
      document.getElementById('destRut').value = "18.940.122-3";
      document.getElementById('destBank').value = "santander";
      document.getElementById('destAccountType').value = "Cta. Corriente";
      document.getElementById('destAccountNum').value = "74819203";
      document.getElementById('destEmail').value = "benjamin.morales@musicpro.cl";
    }

    function openSecurityModal() {
      document.getElementById('securityModal').classList.remove('hidden');
    }

    function closeSecurityModal() {
      document.getElementById('securityModal').classList.add('hidden');
    }

    function executeTransfer() {
      closeSecurityModal();
      alert('¡Transferencia procesada con éxito! Los fondos han sido transferidos de manera inmediata con comprobante digital.');
      window.location.href = "movimientos-list.html";
    }