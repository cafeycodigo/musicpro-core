# Especificación de Requisitos del Software - Bodega WMS

Este documento detalla todos los requerimientos funcionales, no funcionales, de interfaz y componentes para el subsistema de **Bodega WMS**.

---

## 1. Requerimientos Funcionales (RF-BOD)

| ID | Nombre Requisito | Descripción Funcional Detallada | Prioridad |
| :--- | :--- | :--- | :---: |
| **RF-BOD-01** | **Maestro de Artículos** | El sistema debe permitir consultar, crear, editar y desactivar artículos con código SKU único, código EAN-13, categoría, unidad de medida y precio costo. | Alta |
| **RF-BOD-02** | **Semáforo de Disponibilidad** | En la vista de catálogo (`stock-catalog.html`), el stock debe categorizarse visualmente: Verde (Óptimo > 50 u), Amarillo (Bajo <= 50 u), Rojo (Crítico <= 10 u). | Alta |
| **RF-BOD-03** | **Gestión de Ubicaciones** | Permitir la administración de ubicaciones estructuradas por Pasillo, Rack, Nivel y Posición con cálculo de porcentaje de ocupación en m³. | Alta |
| **RF-BOD-04** | **Registro de Kardex** | Registrar automáticamente cada entrada, salida o transferencia con sello de tiempo, usuario responsable y motivo asociado. | Alta |
| **RF-BOD-05** | **Motivos de Ajuste y Mermas** | Configurar motivos parametrizados (Obsolescencia, Daño, Muestra, Ajuste Físico) asociados a cuentas contables de imputación. | Media |
| **RF-BOD-06** | **Solicitudes de Sucursal** | Permitir a las sucursales armar un carrito de despacho, seleccionar fecha de requerimiento y enviar la solicitud a aprobación. | Alta |
| **RF-BOD-07** | **Recepción de Mercadería** | Registrar ingresos de compras a proveedores asociando número de factura/guía y asignando ubicación física inmediata. | Alta |
| **RF-BOD-08** | **Filtros Avanzados** | Búsqueda reactiva por SKU, nombre, proveedor o categoría sin recargar la página. | Media |

---

## 2. Requerimientos No Funcionales (RNF-BOD)

| ID | Requisito | Criterio de Medición / Validación |
| :--- | :--- | :--- |
| **RNF-BOD-01** | **Densidad de Datos** | La tabla de inventario debe ser capaz de renderizar al menos 500 filas de artículos sin degradación de velocidad. |
| **RNF-BOD-02** | **Formato Monotipo SKU** | Los códigos SKU y EAN deben mostrarse obligatoriamente en tipografía monospaciada `Share Tech Mono`. |
| **RNF-BOD-03** | **Almacenamiento Modular** | Todo código JS debe residir en `Bodega/assets/js/` y estilos en `Bodega/assets/css/`. |

---

## 3. Requerimientos de Interfaz de Usuario (UI/UX)

* **Paleta de Colores:** Fondo Slate Oscuro (`bg-slate-900`), Acentos Amber (`#f59e0b`), Estados Emerald/Rose.
* **Componentes Visuales:**
  * `.stock-pill`: Pill con bordes de color e icono de semáforo.
  * `.rack-slot`: Tarjetas visuales de estantes con animación elevadora.
  * `.wms-table-compact`: Tablas de alta densidad con encabezados fijos.

---

## 4. Requerimientos de Componentes del Software

```text
Bodega/assets/
├── css/
│   ├── components.css        <-- Estilos de semáforo, racks y tablas
│   ├── admin/*.css           <-- Estilos dedicados para las 15 vistas admin
│   └── cliente/*.css         <-- Estilos dedicados para las 7 vistas cliente
└── js/
    ├── components.js         <-- Objeto global BodegaWMS y buscadores
    ├── admin/*.js            <-- Lógica interactiva de las 15 vistas admin
    └── cliente/*.js          <-- Lógica interactiva de las 7 vistas cliente
```
