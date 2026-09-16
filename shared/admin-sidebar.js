/**
 * MusicPro UI - Universal Admin Sidebar Generator & Fixer
 * Garantiza barras laterales completas, fijas, responsivas y consistentes en todos los módulos Admin.
 */
(function () {
  'use strict';

  const SIDEBAR_DATA = {
    bodega: {
      name: 'WMS Bodega',
      subtitle: 'Back-Office Admin',
      icon: 'fa-solid fa-boxes-stacked',
      color: 'amber',
      brandLink: '../../index.html',
      portalLink: '../cliente/index.html',
      portalText: 'Ver Portal Sucursales',
      userInitials: 'JB',
      userName: 'Juan Bustamante',
      userRole: 'Jefe de Bodega Central',
      sections: [
        {
          title: 'Módulos Principales',
          links: [
            { href: 'index.html', label: 'Dashboard WMS', icon: 'fa-solid fa-gauge-high' },
            { href: 'articulos-list.html', match: ['articulos-list.html', 'articulos-create.html', 'articulos-detail.html', 'articulos-edit.html'], label: 'Maestro de Artículos', icon: 'fa-solid fa-barcode' },
            { href: 'ubicaciones-list.html', match: ['ubicaciones-list.html', 'ubicaciones-create.html', 'ubicaciones-edit.html'], label: 'Ubicaciones & Racks', icon: 'fa-solid fa-table-cells-large' },
            { href: 'categorias-list.html', label: 'Categorías & Familias', icon: 'fa-solid fa-tags' },
            { href: 'proveedores-list.html', label: 'Proveedores', icon: 'fa-solid fa-truck-ramp-box' },
            { href: 'motivos-ajuste.html', label: 'Motivos de Ajuste', icon: 'fa-solid fa-clipboard-check' },
            { href: 'zonas-almacen.html', label: 'Gestión de Pasillos', icon: 'fa-solid fa-warehouse' },
            { href: 'movimientos-list.html', match: ['movimientos-list.html', 'movimientos-create.html', 'movimientos-detail.html'], label: 'Movimientos & Mermas', icon: 'fa-solid fa-arrows-rotate' }
          ]
        },
        {
          title: 'Operaciones Rápidas',
          links: [
            { href: 'articulos-create.html', label: 'Nuevo Artículo', icon: 'fa-solid fa-plus-circle text-amber-400' },
            { href: 'movimientos-create.html', label: 'Ingreso / Ajuste', icon: 'fa-solid fa-file-circle-plus text-amber-400' }
          ]
        }
      ]
    },
    tienda: {
      name: 'Tienda Admin',
      subtitle: 'E-Commerce & Retail',
      icon: 'fa-solid fa-store',
      color: 'emerald',
      brandLink: '../../index.html',
      portalLink: '../cliente/index.html',
      portalText: 'Ver Front Tienda',
      userInitials: 'GV',
      userName: 'Gerencia Comercial',
      userRole: 'Admin General Ventas',
      sections: [
        {
          title: 'Gestión Comercial',
          links: [
            { href: 'index.html', label: 'Dashboard Ventas', icon: 'fa-solid fa-chart-pie' },
            { href: 'productos-list.html', match: ['productos-list.html', 'productos-create.html', 'productos-edit.html'], label: 'Catálogo Productos', icon: 'fa-solid fa-box-open' },
            { href: 'categorias-list.html', label: 'Categorías & Árbol', icon: 'fa-solid fa-folder-tree' },
            { href: 'ordenes-list.html', match: ['ordenes-list.html', 'ordenes-detail.html'], label: 'Órdenes de Compra', icon: 'fa-solid fa-receipt' },
            { href: 'cupones-list.html', match: ['cupones-list.html', 'cupones-create.html', 'cupones-edit.html'], label: 'Cupones & Promociones', icon: 'fa-solid fa-tags' },
            { href: 'clientes-list.html', label: 'Directorio Clientes', icon: 'fa-solid fa-users' },
            { href: 'tarifas-envio.html', label: 'Reglas & Tarifas Envío', icon: 'fa-solid fa-truck-ramp-box' }
          ]
        },
        {
          title: 'Acceso Rápido',
          links: [
            { href: 'productos-create.html', label: 'Crear Producto', icon: 'fa-solid fa-plus-circle text-emerald-400' },
            { href: 'cupones-create.html', label: 'Crear Cupón', icon: 'fa-solid fa-ticket text-emerald-400' }
          ]
        }
      ]
    },
    tarjeta: {
      name: 'Tarjeta Admin',
      subtitle: 'Riesgo & Emisión',
      icon: 'fa-solid fa-credit-card',
      color: 'amber',
      brandLink: '../../index.html',
      portalLink: '../cliente/index.html',
      portalText: 'Ir a Portal Titular',
      userInitials: 'FS',
      userName: 'Fernando Silva',
      userRole: 'Riesgo & Créditos',
      sections: [
        {
          title: 'Gestión Financiera',
          links: [
            { href: 'index.html', label: 'Métricas Globales', icon: 'fa-solid fa-chart-line' },
            { href: 'cuentas-list.html', match: ['cuentas-list.html', 'cuentas-create.html', 'cuentas-detail.html', 'cuentas-edit.html'], label: 'Clientes & Cuentas', icon: 'fa-solid fa-users-gear' },
            { href: 'productos-tarjetas-list.html', match: ['productos-tarjetas-list.html', 'productos-tarjetas-create.html', 'productos-tarjetas-edit.html'], label: 'Planes de Tarjeta', icon: 'fa-solid fa-layer-group' },
            { href: 'transacciones-audit-list.html', match: ['transacciones-audit-list.html', 'transacciones-audit-detail.html'], label: 'Transacciones en Vivo', icon: 'fa-solid fa-receipt' },
            { href: 'fraude-reglas.html', label: 'Reglas Antifraude', icon: 'fa-solid fa-shield-halved' },
            { href: 'beneficios-list.html', label: 'Catálogo Beneficios', icon: 'fa-solid fa-gift' }
          ]
        },
        {
          title: 'Operaciones',
          links: [
            { href: 'cuentas-create.html', label: 'Evaluar Nuevo Cliente', icon: 'fa-solid fa-user-plus text-amber-400' },
            { href: 'productos-tarjetas-create.html', label: 'Crear Producto Tarjeta', icon: 'fa-solid fa-credit-card text-amber-400' }
          ]
        }
      ]
    },
    transporte: {
      name: 'Torre Logística',
      subtitle: 'Flota & Despacho',
      icon: 'fa-solid fa-route',
      color: 'cyan',
      brandLink: '../../index.html',
      portalLink: '../cliente/index.html',
      portalText: 'Ver Portal Remitentes',
      userInitials: 'RT',
      userName: 'Rodrigo Tapia',
      userRole: 'Jefe de Operaciones',
      sections: [
        {
          title: 'Operaciones Centrales',
          links: [
            { href: 'index.html', label: 'Torre de Control', icon: 'fa-solid fa-tower-broadcast' },
            { href: 'vehiculos-list.html', match: ['vehiculos-list.html', 'vehiculos-create.html', 'vehiculos-edit.html'], label: 'Flota & Vehículos', icon: 'fa-solid fa-truck' },
            { href: 'conductores-list.html', match: ['conductores-list.html', 'conductores-create.html', 'conductores-edit.html'], label: 'Conductores', icon: 'fa-solid fa-id-card-clip' },
            { href: 'zonas-list.html', label: 'Zonas & Tarifas', icon: 'fa-solid fa-map-location-dot' },
            { href: 'rutas-list.html', match: ['rutas-list.html', 'rutas-create.html', 'rutas-detail.html'], label: 'Planificador de Rutas', icon: 'fa-solid fa-clipboard-list' },
            { href: 'incidencias-list.html', label: 'Incidencias & Excepciones', icon: 'fa-solid fa-triangle-exclamation text-amber-400' }
          ]
        },
        {
          title: 'Acción Rápida',
          links: [
            { href: 'rutas-create.html', label: 'Asignar Ruta', icon: 'fa-solid fa-plus-circle text-cyan-400' },
            { href: 'vehiculos-create.html', label: 'Registrar Vehículo', icon: 'fa-solid fa-truck-medical text-cyan-400' },
            { href: 'conductores-create.html', label: 'Registrar Conductor', icon: 'fa-solid fa-user-check text-cyan-400' }
          ]
        }
      ]
    }
  };

  function getModuleKey() {
    const path = window.location.pathname.toLowerCase().replace(/\\/g, '/');
    if (path.includes('/bodega/')) return 'bodega';
    if (path.includes('/tienda/')) return 'tienda';
    if (path.includes('/tarjeta/')) return 'tarjeta';
    if (path.includes('/transporte/')) return 'transporte';
    return null;
  }

  function getActiveFilename() {
    const path = window.location.pathname.replace(/\\/g, '/');
    const parts = path.split('/');
    return parts[parts.length - 1] || 'index.html';
  }

  window.toggleAdminSidebar = function () {
    const sidebar = document.getElementById('adminSidebar');
    const backdrop = document.getElementById('sidebarBackdrop');
    if (sidebar) sidebar.classList.toggle('-translate-x-full');
    if (backdrop) backdrop.classList.toggle('hidden');
  };

  function renderSidebar() {
    const moduleKey = getModuleKey();
    if (!moduleKey || !SIDEBAR_DATA[moduleKey]) return;

    const data = SIDEBAR_DATA[moduleKey];
    const currentFile = getActiveFilename();

    // Crear backdrop móvil si no existe
    let backdrop = document.getElementById('sidebarBackdrop');
    if (!backdrop) {
      backdrop = document.createElement('div');
      backdrop.id = 'sidebarBackdrop';
      backdrop.onclick = window.toggleAdminSidebar;
      backdrop.className = 'fixed inset-0 bg-slate-950/70 z-40 hidden md:hidden backdrop-blur-xs transition-opacity';
      document.body.appendChild(backdrop);
    }

    // Buscar o preparar elemento <aside>
    let aside = document.querySelector('aside');
    if (!aside) {
      aside = document.createElement('aside');
      document.body.insertBefore(aside, document.body.firstChild);
    }

    aside.id = 'adminSidebar';
    aside.className = 'w-64 bg-slate-900 text-slate-300 flex flex-col justify-between flex-shrink-0 border-r border-slate-800 fixed inset-y-0 left-0 z-50 -translate-x-full md:translate-x-0 md:sticky md:top-0 md:h-screen overflow-y-auto transition-transform duration-300 ease-in-out';

    // Generar navegación por secciones
    let navHtml = '';
    const colorClass = data.color === 'emerald' ? 'emerald' : (data.color === 'cyan' ? 'cyan' : 'amber');
    
    data.sections.forEach(section => {
      navHtml += `<div class="px-3 pt-3 pb-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">${section.title}</div>`;
      section.links.forEach(link => {
        const isMatch = (link.match && link.match.includes(currentFile)) || (link.href === currentFile);
        
        let activeClasses = `hover:bg-slate-800/80 hover:text-white text-slate-400 font-medium`;
        if (isMatch) {
          if (colorClass === 'emerald') {
            activeClasses = `bg-emerald-500/10 text-emerald-400 font-semibold border border-emerald-500/20`;
          } else if (colorClass === 'cyan') {
            activeClasses = `bg-cyan-500/10 text-cyan-400 font-semibold border border-cyan-500/20`;
          } else {
            activeClasses = `bg-amber-500/10 text-amber-400 font-semibold border border-amber-500/20`;
          }
        }

        navHtml += `
          <a href="${link.href}" class="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs transition ${activeClasses}">
            <i class="${link.icon} w-4 text-center"></i>
            <span>${link.label}</span>
          </a>
        `;
      });
    });

    let badgeColorClass = 'bg-amber-500 text-slate-950 shadow-amber-500/20';
    let subtitleColor = 'text-amber-400';
    let userTextColor = 'text-amber-400';
    
    if (colorClass === 'emerald') {
      badgeColorClass = 'bg-emerald-500 text-slate-950 shadow-emerald-500/20';
      subtitleColor = 'text-emerald-400';
      userTextColor = 'text-emerald-400';
    } else if (colorClass === 'cyan') {
      badgeColorClass = 'bg-cyan-500 text-slate-950 shadow-cyan-500/20';
      subtitleColor = 'text-cyan-400';
      userTextColor = 'text-cyan-400';
    }

    aside.innerHTML = `
      <div>
        <div class="h-16 px-6 flex items-center justify-between border-b border-slate-800">
          <a href="${data.brandLink}" class="flex items-center gap-3 group">
            <div class="w-9 h-9 rounded-xl ${badgeColorClass} flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-105 transition-transform">
              <i class="${data.icon}"></i>
            </div>
            <div>
              <span class="font-heading font-bold text-white text-base leading-tight block">${data.name}</span>
              <span class="text-[10px] ${subtitleColor} font-medium uppercase tracking-wider">${data.subtitle}</span>
            </div>
          </a>
          <button type="button" onclick="toggleAdminSidebar()" class="md:hidden text-slate-400 hover:text-white p-1">
            <i class="fa-solid fa-xmark text-lg"></i>
          </button>
        </div>

        <div class="px-3 py-4 space-y-1">
          ${navHtml}
        </div>
      </div>

      <div class="p-4 border-t border-slate-800">
        <a href="${data.portalLink}" class="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 hover:text-white transition mb-3 border border-slate-700/60">
          <i class="fa-solid fa-house-laptop ${userTextColor}"></i>
          <span>${data.portalText}</span>
        </a>

        <div class="flex items-center gap-3 pt-1">
          <div class="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center font-bold text-xs ${userTextColor} border border-slate-700 flex-shrink-0">
            ${data.userInitials}
          </div>
          <div class="overflow-hidden">
            <div class="text-xs font-semibold text-white truncate">${data.userName}</div>
            <div class="text-[10px] text-slate-400 truncate">${data.userRole}</div>
          </div>
        </div>
      </div>
    `;

    // Inyectar botón de menú hamburguesa en el <header> principal si no existe
    const topHeader = document.querySelector('header');
    if (topHeader && !topHeader.querySelector('.sidebar-toggle-btn')) {
      const toggleBtn = document.createElement('button');
      toggleBtn.type = 'button';
      toggleBtn.className = 'sidebar-toggle-btn md:hidden p-2 text-slate-600 hover:text-slate-900 rounded-xl hover:bg-slate-100 transition mr-2';
      toggleBtn.onclick = window.toggleAdminSidebar;
      toggleBtn.innerHTML = '<i class="fa-solid fa-bars text-lg"></i>';
      topHeader.insertBefore(toggleBtn, topHeader.firstChild);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderSidebar);
  } else {
    renderSidebar();
  }

})();
