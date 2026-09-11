/**
 * Logica interactiva para vista transacciones-audit-list (admin) - Tarjeta
 */

let searchDebounceTimer;

    function handleTxSearch() {
      clearTimeout(searchDebounceTimer);
      searchDebounceTimer = setTimeout(() => {
        applyTxFilters();
      }, 200);
    }

    function applyTxFilters() {
      const q = document.getElementById('txSearchInput').value.toLowerCase().trim();
      const risk = document.getElementById('riskFilter').value;
      const rows = document.querySelectorAll('#streamTableBody .tx-stream-row');

      rows.forEach(r => {
        const text = r.dataset.search;
        const rowRisk = r.dataset.risk;

        const matchesQuery = q === '' || text.includes(q);
        const matchesRisk = risk === 'ALL' || rowRisk === risk;

        if (matchesQuery && matchesRisk) {
          r.classList.remove('hidden');
        } else {
          r.classList.add('hidden');
        }
      });
    }

    function simulateNewIncomingTx() {
      const tbody = document.getElementById('streamTableBody');
      const tr = document.createElement('tr');
      tr.className = "hover:bg-rose-50/50 transition bg-rose-50/20 tx-stream-row animate-in fade-in slide-in-from-top-2 duration-300";
      tr.dataset.search = "tx-88905 steam games rusia 95";
      tr.dataset.risk = "HIGH";
      tr.innerHTML = `
        <td class="px-6 py-4 font-mono font-bold text-rose-700">#TX-88905</td>
        <td class="px-6 py-4 text-slate-500 font-mono">Ahora Mismo</td>
        <td class="px-6 py-4">
          <span class="font-bold text-slate-900 block">Camila Morales</span>
          <span class="font-mono text-[10px] text-slate-500">**** **** **** 8102</span>
        </td>
        <td class="px-6 py-4">
          <span class="font-bold text-rose-900 block flex items-center gap-1.5">
            <i class="fa-solid fa-triangle-exclamation text-rose-600"></i>
            Digital Game Store (Rusia)
          </span>
          <span class="text-[10px] text-slate-400">IP atípica: 95.173.136.21</span>
        </td>
        <td class="px-6 py-4 font-mono font-bold text-rose-700 text-sm">USD $120.00</td>
        <td class="px-6 py-4">
          <span class="px-2 py-0.5 rounded text-[10px] font-semibold bg-rose-100 text-rose-800">
            Sin 3DS / Web
          </span>
        </td>
        <td class="px-6 py-4 text-center">
          <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-extrabold bg-rose-600 text-white shadow-sm animate-pulse">
            <i class="fa-solid fa-fire"></i> 95 / 100
          </span>
        </td>
        <td class="px-6 py-4 text-center">
          <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-rose-100 text-rose-800 border border-rose-300">
            En Revisión
          </span>
        </td>
        <td class="px-6 py-4 text-center">
          <a href="transacciones-audit-detail.html" class="px-3 py-1.5 bg-rose-600 hover:bg-rose-500 text-white rounded-lg text-xs font-bold shadow-sm transition flex items-center justify-center gap-1.5 mx-auto w-fit">
            <i class="fa-solid fa-ban"></i>
            <span>Intervenir</span>
          </a>
        </td>
      `;
      tbody.insertBefore(tr, tbody.firstChild);
    }