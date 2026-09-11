# Tienda Store - Sistema E-Commerce y POS

El subsistema de **Tienda Store** de MusicPro maneja el catálogo público de instrumentos y audio, carrito de compras persistente, proceso de checkout en 3 pasos, gestión de pedidos e inventario de venta, promociones con cupones de descuento y tarifario de envíos.

---

## 📂 Estructura de Contenidos

```text
Tienda/
├── README.md                  <-- Este archivo de documentación
├── requisitos.md              <-- Especificación de requerimientos funcionales y no funcionales
├── assets/
│   ├── css/
│   │   ├── components.css    <-- Cards de producto, badges de descuento, checkout stepper
│   │   ├── admin/            <-- Estilos específicos de las 12 vistas admin
│   │   └── cliente/          <-- Estilos específicos de las 13 vistas cliente
│   └── js/
│       ├── components.js     <-- Namespace TiendaStore, carrito reactivo y formateadores de precio
│       ├── admin/            <-- Controladores JS de las 12 vistas admin
│       └── cliente/          <-- Controladores JS de las 13 vistas cliente
├── admin/                     <-- Vistas administrativas (12 archivos HTML)
└── cliente/                   <-- Vistas de la tienda e-commerce (13 archivos HTML)
```

---

## 💻 Vistas del Sistema

### 1. Panel de Administración E-Commerce (Back-Office)
* [index.html](admin/index.html): Dashboard comercial con volumen de ventas, pedidos pendientes y conversión.
* [productos-list.html](admin/productos-list.html): Catálogo maestro de productos en venta con precios y stock.
* [productos-create.html](admin/productos-create.html): Alta de nuevo producto con carga de imágenes y categoría.
* [productos-edit.html](admin/productos-edit.html): Modificación de precios de lista, oferta y especificaciones.
* [ordenes-list.html](admin/ordenes-list.html): Control de pedidos recibidos con filtros por estado.
* [ordenes-detail.html](admin/ordenes-detail.html): Detalle operativo de orden para empaque y facturación.
* [clientes-list.html](admin/clientes-list.html): Registro de compradores registrados e historial de consumo.
* [cupones-list.html](admin/cupones-list.html): Listado de códigos de descuento activos e historial de usos.
* [cupones-create.html](admin/cupones-create.html): Creador de cupones de porcentaje o monto fijo.
* [cupones-edit.html](admin/cupones-edit.html): Ajuste de fecha de vigencia de promociones.
* [categorias-list.html](admin/categorias-list.html): Estructura de árbol de familias y subcategorías.
* [tarifas-envio.html](admin/tarifas-envio.html): Matriz de costos de despacho por región y zona.

### 2. Portal de Compras / Cliente (Front-Office)
* [index.html](cliente/index.html): Portada e-commerce con carruseles, novedades y ofertas destacadas.
* [tienda-catalog.html](cliente/tienda-catalog.html): Catálogo de productos con filtros reactivos por precio y marca.
* [producto-detalle.html](cliente/producto-detalle.html): Ficha de producto con galería, stock y botón agregar.
* [carrito-view.html](cliente/carrito-view.html): Carrito de compras reactivo con modificación de cantidades y cupones.
* [checkout-step1.html](cliente/checkout-step1.html): Paso 1 del pago: Selección de dirección de entrega.
* [checkout-step2.html](cliente/checkout-step2.html): Paso 2 del pago: Selección de medio de pago y resumen.
* [checkout-success.html](cliente/checkout-success.html): Confirmación de orden de compra procesada exitosamente.
* [compras-list.html](cliente/compras-list.html): Historial de pedidos realizados por el cliente.
* [compras-detail.html](cliente/compras-detail.html): Comprobante detallado de compra con tracking de despacho.
* [direcciones-list.html](cliente/direcciones-list.html): Libreta de domicilios de entrega del usuario.
* [direcciones-create.html](cliente/direcciones-create.html): Adición de nueva dirección de despacho.
* [login.html](cliente/login.html): Inicio de sesión del comprador.
* [registro.html](cliente/registro.html): Formulario de registro de cliente e-commerce.
