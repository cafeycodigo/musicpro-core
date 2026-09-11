# Bodega WMS - Sistema de Gestión de Almacén e Inventario

El módulo de **Bodega (WMS)** de MusicPro proporciona el control operativo y administrativo de inventario físico, maestro de artículos, gestión de ubicaciones en racks, auditoría de Kardex y procesamiento de solicitudes de despacho para sucursales B2B.

---

## 📂 Estructura de Contenidos

```text
Bodega/
├── README.md                  <-- Este archivo de documentación
├── requerimientos.html        <-- Página web interactiva con 250 requisitos en tablas Tailwind
├── requisitos.md              <-- Especificación formal en Markdown (100 RF, 50 RNF, 100 RD)
├── assets/
│   ├── css/
│   │   ├── components.css    <-- Estilos de semáforos, racks, tablas WMS y toasts
│   │   ├── admin/            <-- Estilos específicos de las 15 vistas admin
│   │   └── cliente/          <-- Estilos específicos de las 7 vistas cliente
│   └── js/
│       ├── components.js     <-- Namespace BodegaWMS, buscadores y modal helpers
│       ├── admin/            <-- Controladores JS de las 15 vistas admin
│       └── cliente/          <-- Controladores JS de las 7 vistas cliente
├── admin/                     <-- Vistas administrativas (15 archivos HTML)
└── cliente/                   <-- Vistas de sucursal / solicitante (7 archivos HTML)
```

---

## 💻 Vistas del Sistema

### 1. Panel de Administración (Back-Office)
* [index.html](admin/index.html): Dashboard WMS con métricas de stock total, mermas y alertas.
* [articulos-list.html](admin/articulos-list.html): Maestro de productos con código SKU, categoría y stock.
* [articulos-create.html](admin/articulos-create.html): Creación de nuevo artículo con márgenes y barcode.
* [articulos-edit.html](admin/articulos-edit.html): Edición de datos maestras de producto.
* [articulos-detail.html](admin/articulos-detail.html): Ficha técnica detallada del artículo.
* [ubicaciones-list.html](admin/ubicaciones-list.html): Catálogo de ubicaciones físicas y ocupación en racks.
* [ubicaciones-create.html](admin/ubicaciones-create.html): Generador de pasillos, estantes y capacidades.
* [ubicaciones-edit.html](admin/ubicaciones-edit.html): Edición de límites de almacenamiento.
* [categorias-list.html](admin/categorias-list.html): Gestión de familias y categorías de inventario.
* [proveedores-list.html](admin/proveedores-list.html): Directorio de proveedores e integraciones B2B.
* [motivos-ajuste.html](admin/motivos-ajuste.html): Configuración de causas de mermas y ajustes de inventario.
* [zonas-almacen.html](admin/zonas-almacen.html): Configuración de zonas térmicas y de resguardo.
* [movimientos-list.html](admin/movimientos-list.html): Kardex histórico de entradas, salidas y transferencias.
* [movimientos-create.html](admin/movimientos-create.html): Registro manual de movimientos de stock.
* [movimientos-detail.html](admin/movimientos-detail.html): Detalle auditado de comprobante de movimiento.

### 2. Portal de Solicitantes / Sucursales (Front-Office)
* [index.html](cliente/index.html): Hub de sucursal para pedir repuestos e instrumentos.
* [login.html](cliente/login.html): Inicio de sesión para encargados de tienda.
* [stock-catalog.html](cliente/stock-catalog.html): Catálogo consultivo con semáforo de disponibilidad.
* [solicitudes-list.html](cliente/solicitudes-list.html): Listado de requerimientos de despacho emitidos.
* [solicitudes-create.html](cliente/solicitudes-create.html): Formulario interactivo para armar pedido de stock.
* [solicitudes-edit.html](cliente/solicitudes-edit.html): Modificación de solicitudes en estado borrador.
* [solicitudes-detail.html](cliente/solicitudes-detail.html): Estado en tiempo real del despacho de sucursal.

---

## 👨‍💻 Autor & Créditos
* **Creado por:** [Bemtorres](https://github.com/Bemtorres)
* **GitHub:** [@Bemtorres](https://github.com/Bemtorres)

