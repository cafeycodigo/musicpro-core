Tenog que desarrollar 4 sistema y necesito los requerimientos visuales de cada no paracrear un sistema en html de forma idependiente cada uno.

desarrollar un sistema de Bodega
desarrollar un sistema de Tienda
desarrollar un sistema de Transporte
desarrollar un sistema de Tarjeta

Para estructurar cada sistema de forma independiente en HTML con un panel de administración claro, cada módulo debe contemplar dos vistas fundamentales: la **operativa/cliente** y la **administrativa (backoffice)**.

---

**1. Sistema de Bodega (WMS / Inventario)**

* **Enfoque de diseño:** Tablas densas, lectores de código de barra/SKU, estados visuales por colores (crítico, regular, óptimo).
* **Módulos de la interfaz:**
* *Dashboard:* Métricas de stock total, alertas de quiebre de stock y órdenes de recepción pendientes.
* *Vista de Operador (Recepción/Despacho):* Formulario simple con campo central para escaneo/ingreso de SKU, selector de pasillo/estante y confirmación de ingreso/salida.
* *Panel Administrativo:*
* Catálogo maestro de productos y ubicaciones físicas (racks, zonas de almacenamiento).
* Registro de movimientos históricos (auditoría: usuario, fecha, motivo de ajuste).
* Generador de reportes de rotación y mermas con botones de exportación (CSV/PDF).





---

**2. Sistema de Tienda (E-commerce / POS)**

* **Enfoque de diseño:** Catálogo visual con tarjetas de productos (*cards*), carrito persistente y flujo de checkout directo.
* **Módulos de la interfaz:**
* *Front público / Caja:* Cuadrícula de productos con buscador por texto, filtro de categorías, tarjeta de producto (imagen, precio, stock disponible) y barra lateral con el carrito y cálculo de totales (subtotal, impuestos, total).
* *Panel Administrativo:*
* Gestión de productos: Formulario con subida de imagen, precios de lista vs. descuento, categorías y variantes (talla, color).
* Gestión de pedidos: Tabla con estados (*Pendiente*, *Pagado*, *Preparando*, *Completado*) y detalle expandible de compra.
* Configuración de precios, cupones de descuento y métodos de pago habilitados.





---

**3. Sistema de Transporte y Envíos**

* **Enfoque de diseño:** Líneas de tiempo de tracking, mapas/rutas y tablas de despacho con etiquetas de estado.
* **Módulos de la interfaz:**
* *Vista de Seguimiento / Conductor:* Campo de búsqueda por número de guía/código de seguimiento, visualización del estado actual mediante una barra de progreso secuencial (*Recolectado -> En tránsito -> En reparto -> Entregado*) y botón para captura de firma o foto de entrega.
* *Panel Administrativo:*
* Gestión de flotas y conductores (asignación de vehículos, patentes, capacidad de carga).
* Despachador de rutas: Tabla para agrupar pedidos pendientes en una ruta específica por zona geográfica.
* Monitor de envíos: Filtros por estado, transportista asignado y alertas de retraso o fallos de entrega.





---

**4. Sistema de Tarjetas (Fidelización / Monedero / Crédito)**

* **Enfoque de diseño:** Representación gráfica de la tarjeta virtual, balance destacado y lista cronológica de movimientos.
* **Módulos de la interfaz:**
* *Vista del Titular:* Tarjeta virtual estilizada (número enmascarado, nombre, fecha de vencimiento, tipo de membresía), saldo disponible destacado y resumen de últimas transacciones.
* *Panel Administrativo:*
* Emisión y gestión de tarjetas: Búsqueda de clientes por RUT/ID, activación/bloqueo de tarjetas y asignación de límites de crédito o puntos.
* Operaciones manuales: Módulo para abonos, recargas o canje de puntos con validación de seguridad.
* Auditoría de transacciones: Tabla con detalle de consumos, comercio asociado, comisiones y opciones para autorizar o rechazar cargos sospechosos.





---

**Estructura HTML Base Recomendada para los 4 Proyectos**

Para mantenerlos independientes pero ordenados, conviene utilizar una plantilla de layout compartida en CSS/HTML:

| Elemento | Propósito en el Layout |
| --- | --- |
| **Sidebar (Navegación)** | Enlaces a los módulos (`Dashboard`, `Operación`, `Gestión/Admin`, `Reportes`). |
| **Top Navbar** | Identificador de rol (`Operador` / `Administrador`), selector de perfil y alertas. |
| **Main Container** | Área de trabajo dividida en tarjetas (`.card`), tablas responsivas y formularios. |
| **Modal Container** | Ventanas emergentes para altas rápidas (crear producto, añadir vehículo, registrar tarjeta). |


Aquí tienes la propuesta arquitectónica y visual para desarrollar cada sistema con sus dos capas totalmente diferenciadas: **Panel de Cliente (Front-Office)** y **Panel de Administración (Back-Office)**.

---

### 1. Sistema de Bodega (WMS / Almacén)

**A. Portal de Cliente (Solicitante / Sucursal / Proveedor)**

* **Propósito:** Solicitar despachos de mercadería, registrar envíos entrantes y consultar disponibilidad antes de pedir.
* **Vistas HTML necesarias:**
* *Catálogo de Stock Consultivo:* Buscador por SKU/nombre con semáforo de disponibilidad (Verde: disponible, Amarillo: bajo stock, Rojo: agotado).
* *Formulario de Pedido de Salida:* Selector de productos, cantidad solicitada, sucursal o destino de entrega y fecha requerida.
* *Mis Solicitudes:* Tabla de seguimiento con estados (*Borrador*, *En preparación*, *Despachado*).



**B. Panel Administrativo (Jefe de Bodega / Operario)**

* **Propósito:** Control físico, reabastecimiento, ubicaciones y auditoría.
* **Vistas HTML necesarias:**
* *Tablero Maestro de Inventario:* Tabla avanzada con filtros por pasillo/rack, stock real vs. reservado, costo unitario y alertas de quiebre.
* *Módulo de Picking/Packing:* Listado de pedidos solicitados por clientes para marcar ítems recolectados mediante checkboxes o pistola lectora.
* *Ajustes y Mermas:* Formulario para dar de baja productos por daño o vencimiento con selector de motivo.



---

### 2. Sistema de Tienda (E-Commerce / Retail)

**A. Portal de Cliente (Comprador)**

* **Propósito:** Descubrir productos, gestionar el carrito y realizar la compra.
* **Vistas HTML necesarias:**
* *Catálogo Comercial:* Grid de tarjetas de producto con imagen, precio, botón rápido de «Añadir al carrito» y filtros por categoría.
* *Página de Checkout:* Formulario de datos de contacto, dirección de entrega, selección de método de pago y resumen de costos.
* *Historial de Compras:* Listado de órdenes pasadas con opción de descargar comprobante/factura en PDF.



**B. Panel Administrativo (Gerente de Ventas / Inventario)**

* **Propósito:** Publicar productos, gestionar promociones y procesar despachos.
* **Vistas HTML necesarias:**
* *CRUD de Productos:* Formulario de alta/edición con carga de imágenes, precios normales/oferta, tags y variantes (tallas/colores).
* *Gestión de Pedidos:* Tabla estilo Kanban o listado con cambio de estados (*Pagado*, *Preparando*, *Enviado*, *Cancelado*).
* *Configuración de Tienda:* Banners de cabecera, cupones de descuento y tarifas de envío.



---

### 3. Sistema de Transporte y Envíos

**A. Portal de Cliente (Remitente / Destinatario)**

* **Propósito:** Cotizar envíos, solicitar retiros y rastrear encomiendas en tiempo real.
* **Vistas HTML necesarias:**
* *Cotizador y Solicitud de Envío:* Inputs para origen, destino, peso en kg y dimensiones para calcular precio instantáneo.
* *Tracking Público / En Vivo:* Barra de búsqueda por número de seguimiento y línea de tiempo gráfica paso a paso (*En origen → Centro de distribución → En ruta → Entregado*).
* *Libreta de Direcciones:* Guardado de ubicaciones frecuentes para agilizar solicitudes futuras.



**B. Panel Administrativo (Despachador / Logística)**

* **Propósito:** Asignar cargas, monitorear flota y coordinar conductores.
* **Vistas HTML necesarias:**
* *Planificador de Rutas:* Asignación masiva de encomiendas a vehículos/conductores según zona geográfica.
* *Gestión de Flota y Conductores:* Tabla con patentes, tipo de vehículo, capacidad máxima en kg y estado de mantenciones.
* *Monitor de Incidencias:* Registro de entregas fallidas (domicilio cerrado, dirección incorrecta) con acciones para reprogramar.



---

### 4. Sistema de Tarjetas (Fidelización / Monedero / Crédito)

**A. Portal de Cliente (Titular)**

* **Propósito:** Revisar saldo, ver movimientos y operar con su dinero o puntos.
* **Vistas HTML necesarias:**
* *Billetera Virtual:* Render visual de una tarjeta plástica en CSS con chip, números enmascarados, saldo total y puntos acumulados.
* *Cartola de Movimientos:* Lista cronológica de abonos (verde) y cargos (rojo) con fecha, comercio y categoría de gasto.
* *Acciones Rápidas:* Botones para transferir saldo, canjear puntos por beneficios o bloquear temporalmente la tarjeta por pérdida.



**B. Panel Administrativo (Riesgo / Finanzas / Soporte)**

* **Propósito:** Emisión, fijación de límites y control de fraude.
* **Vistas HTML necesarias:**
* *Directorio de Cuentas:* Búsqueda de clientes por ID/RUT para ver su perfil crediticio, tarjetas asociadas y límites aprobados.
* *Aprobaciones y Ajustes:* Formulario para emitir nuevas tarjetas, aumentar cupo o realizar devoluciones manuales.
* *Consola de Seguridad y Transacciones:* Monitor en tiempo real de cargos con filtros de riesgo y botón para congelar cuentas sospechosas.



---

### Estructura de Archivos Recomendada (Por Proyecto)

Para mantener la total independencia de cada uno de los 4 desarrollos, cada carpeta raíz debe separar el front del cliente y el de administración:

```text
sistema-bodega/
├── cliente/
│   ├── index.html       (Catálogo y consulta de stock)
│   ├── pedidos.html     (Creación y seguimiento de solicitudes)
│   └── css/cliente.css
└── admin/
    ├── index.html       (Dashboard e inventario maestro)
    ├── picking.html     (Control de pedidos y despacho)
    └── css/admin.css

```

*(El mismo esquema se replica para `/sistema-tienda`, `/sistema-transporte` y `/sistema-tarjeta`).*


Aquí tienes el documento de requerimientos visuales y funcionales en formato Markdown, estructurado como **Especificación de Requerimientos de Software (SRS / Prompt Técnico)** listo para alimentar directamente a Antigravity (o cualquier agente de código).

---

# ESPECIFICACIÓN TÉCNICA Y DE INTERFAZ: 4 SISTEMAS WEB INDEPENDIENTES

### Parámetros Generales de Arquitectura Frontend

* **Tecnología base:** HTML5 semántico, CSS3 moderno (CSS Grid, Flexbox, variables CSS nativas) y JavaScript Vanilla para interactividad básica (modales, tabs, filtros).
* **Independencia:** Cada sistema debe ser una carpeta autocontenida sin dependencias compartidas entre sí.
* **Estructura por proyecto:**
```text
[nombre-sistema]/
├── cliente/
│   ├── index.html
│   ├── app.js
│   └── styles.css
└── admin/
    ├── index.html
    ├── admin.js
    └── styles.css

```


* **Estándar Visual Back-Office (Admin):** Layout tipo Dashboard administrativo con Sidebar fija izquierda (260px), Topbar con datos de sesión/rol, y contenedor central con Grid de KPIs numéricos, tablas de datos densas con paginación visual y modales emergentes.
* **Estándar Visual Front-Office (Cliente):** Layout enfocado en experiencia de usuario (UX/B2C/Operativo interno), navegación superior clara, tarjetas visuales (*cards*), formularios paso a paso y estados claros mediante badges de colores.

---

## 1. SISTEMA DE BODEGA (WMS / ALMACÉN)

### 1.1 Portal de Cliente / Sucursal (`/bodega/cliente/`)

* **Objetivo:** Permitir a sucursales o solicitantes consultar stock en tiempo real y emitir solicitudes de despacho.
* **Componentes visuales obligatorios:**
1. **Topbar de navegación:** Identificador de la sucursal activa, botón de «Nueva Solicitud» y campana de notificaciones.
2. **Buscador y Catálogo de Existencias:**
* Input de búsqueda rápida por SKU o descripción.
* Filtro desplegable por categoría de producto.
* Grid de tarjetas de producto con: foto referencial, código SKU, descripción, badge de stock (`Disponible` en verde, `Stock Crítico` en amarillo, `Agotado` en rojo).


3. **Canasta / Creador de Pedido de Salida:**
* Drawer lateral o modal que liste los ítems seleccionados.
* Inputs numéricos con validación de cantidad máxima basada en stock disponible.
* Selector de fecha estimada de recepción requerida y campo de observaciones.


4. **Tabla «Mis Pedidos Recientes»:** Columnas para ID Solicitud, Fecha, Cantidad de bultos, Estado (`Pendiente`, `En Picking`, `Despachado`) y botón para ver detalle.



### 1.2 Panel de Administración (`/bodega/admin/`)

* **Objetivo:** Control total de inventario físico, racks, pasillos, entradas, mermas y auditoría.
* **Componentes visuales obligatorios:**
1. **Sidebar de navegación:** Links a `Dashboard`, `Maestro de Artículos`, `Ubicaciones/Racks`, `Entradas (Recepción)`, `Salidas (Picking)` y `Ajustes`.
2. **Dashboard de Métricas (KPI Cards):** Total SKU activos, Valorizado de inventario, Alertas de quiebre de stock, Solicitudes pendientes de despacho.
3. **Tabla Maestra de Inventario:**
* Columnas: SKU, Código de barras, Descripción, Categoría, Pasillo-Rack-Nivel, Stock Físico, Stock Reservado, Stock Disponible, Acciones.
* Barra de herramientas superior: Botón «Ingresar Nuevo Producto», botón «Ajuste Manual / Merma», exportación a CSV/Excel.


4. **Módulo de Despacho / Picking:**
* Listado de órdenes de sucursales pendientes.
* Vista de checklist para el bodeguero: casillas de verificación para marcar cada producto a medida que se retira del rack.


5. **Modal de Entrada de Mercadería:** Formulario con proveedor, número de guía/factura, selector de producto, cantidad y asignación de ubicación física.



---

## 2. SISTEMA DE TIENDA (E-COMMERCE / RETAIL)

### 2.1 Portal de Cliente / Comprador (`/tienda/cliente/`)

* **Objetivo:** Catálogo comercial interactivo, carrito de compras y flujo de checkout.
* **Componentes visuales obligatorios:**
1. **Header Comercial:** Logo de la tienda, barra de búsqueda centralizada, enlaces de categorías, botón flotante del carrito con contador numérico interactivo.
2. **Banner Promocional / Hero:** Sección de ofertas destacadas.
3. **Grid de Productos:**
* Tarjeta de producto: Imagen con efecto hover, etiqueta de descuento (`-20%`), título, precio tachado anterior, precio final actual, selector de variante (ej. Talla/Color) y botón «Agregar al Carrito».


4. **Carrito Desplegable (Off-canvas / Modal):**
* Lista de ítems con miniaturas, botones `+` y `-` para modificar unidades, botón de eliminar ítem.
* Resumen de costos: Subtotal, Costo de envío, Descuento aplicado y Total.
* Botón destacado «Ir a Pagar».


5. **Sección Checkout / Pago:** Formulario dividido en 3 columnas: Datos de contacto, Dirección de despacho y Selección de método de pago (Tarjetas, Transferencia).



### 2.2 Panel de Administración (`/tienda/admin/`)

* **Objetivo:** Gestión de catálogo, procesamiento de órdenes de venta y configuración comercial.
* **Componentes visuales obligatorios:**
1. **Sidebar:** Links a `Métricas de Venta`, `Catálogo de Productos`, `Órdenes de Compra`, `Cupones/Descuentos` y `Configuración`.
2. **Dashboard de Ventas:** Gráfico de ventas diarias (representación visual mediante barras CSS o SVG), Ticket promedio y Órdenes del día.
3. **Gestor de Catálogo (CRUD):**
* Tabla con miniatura de imagen, SKU, Nombre, Precio lista, Precio oferta, Stock disponible, Switch de activación (`Visible en tienda / Oculto`).
* Formulario modal para «Crear/Editar Producto»: Carga de fotos (drag & drop visual), campos de precios, selector múltiple de categorías y variantes.


4. **Tablero de Control de Pedidos:**
* Estilo lista o columnas tipo Kanban divididas por estados: `Nuevo/Pagado`, `En Preparación`, `En Tránsito`, `Entregado`, `Cancelado`.
* Vista detallada del pedido: Datos del comprador, dirección en Google Maps (link/placeholder) y botón para imprimir etiqueta de embalaje.





---

## 3. SISTEMA DE TRANSPORTE Y LOGÍSTICA

### 3.1 Portal de Cliente / Remitente (`/transporte/cliente/`)

* **Objetivo:** Cotización inmediata de fletes, generación de órdenes de envío y seguimiento en vivo.
* **Componentes visuales obligatorios:**
1. **Cotizador Rápido de Envíos (Widget destacado):**
* Inputs: Dirección Origen, Dirección Destino, Tipo de bulto (Paquete, Sobre, Pallet), Peso aproximado (kg), Dimensiones (Largo x Ancho x Alto en cm).
* Caja de resultado instantáneo con cálculo de tarifa y tiempo estimado de entrega.
* Botón «Solicitar Envío».


2. **Buscador de Seguimiento (Tracking Público):**
* Campo de entrada grande para ingresar el código de envío (ej. `TRK-98234`).


3. **Timeline Gráfico de Estado:**
* Barra de progreso horizontal o vertical con nodos activos: `Orden Creada` → `Recolectado en Origen` → `En Centro de Distribución` → `En Reparto` → `Entregado`.
* Historial de eventos con fecha, hora, ubicación y estado.


4. **Panel «Mis Envíos»:** Tabla de encomiendas enviadas y recibidas con acceso a la descarga del comprobante digital.



### 3.2 Panel de Administración (`/transporte/admin/`)

* **Objetivo:** Asignación de cargas, control de flota, seguimiento de conductores y gestión de incidencias.
* **Componentes visuales obligatorios:**
1. **Sidebar:** Links a `Torre de Control (Envíos)`, `Flota y Vehículos`, `Conductores`, `Planificador de Rutas` e `Incidencias`.
2. **Consola de Despacho (Módulo central):**
* Listado de encomiendas sin asignar clasificadas por zona o comuna.
* Selector para asignar bultos masivamente a un vehículo/conductor específico.


3. **Gestión de Flota de Vehículos:**
* Tabla con datos: Patente/Placa, Tipo de vehículo (Camión, Furgón, Moto), Capacidad máxima de carga (kg/m³), Porcentaje de ocupación actual (barra de progreso visual), Estado (`Disponible`, `En Ruta`, `En Taller`).


4. **Módulo de Gestión de Conductores:** Ficha con foto, nombre, teléfono, licencia de conducir, vehículo asignado y calificación.
5. **Panel de Alertas e Incidencias:** Tabla con envíos marcados con problemas (`Dirección no encontrada`, `Destinatario ausente`, `Paquete dañado`) y botones de acción rápida para reintentar o devolver a origen.



---

## 4. SISTEMA DE TARJETAS (CRÉDITO / FIDELIZACIÓN / BILLETERA)

### 4.1 Portal de Cliente / Titular (`/tarjeta/cliente/`)

* **Objetivo:** Visualización de la tarjeta digital, consulta de saldos, movimientos y acciones de seguridad.
* **Componentes visuales obligatorios:**
1. **Representación Visual de la Tarjeta (CSS Puro):**
* Tarjeta plástica virtual con diseño moderno (gradiente o tema oscuro), logotipo de la marca, chip EMV, número de tarjeta enmascarado (`**** **** **** 4589`), fecha de vencimiento y nombre del titular.
* Switch visual para «Mostrar/Ocultar datos sensibles (CVV y Número completo)».


2. **Tarjetas de Saldo y Cupo:**
* Saldo disponible para compras.
* Deuda actual / Monto facturado.
* Puntos acumulados o Cashback.


3. **Acciones Rápidas (Botones con iconos):**
* «Pagar Tarjeta», «Transferir Fondos», «Canjear Puntos», «Congelar/Bloquear Tarjeta» (botón de seguridad con confirmación).


4. **Cartola de Movimientos:**
* Listado cronológico agrupado por mes.
* Cada fila con: Icono del comercio/rubro, Nombre del establecimiento, Fecha, Estado (`Aprobado`, `En proceso`) y Monto destacado (rojo para gastos, verde para pagos/abonos).





### 4.2 Panel de Administración (`/tarjeta/admin/`)

* **Objetivo:** Emisión de plásticos, control de riesgo, aprobación de límites y auditoría transaccional.
* **Componentes visuales obligatorios:**
1. **Sidebar:** Links a `Métricas Globales`, `Clientes y Cuentas`, `Emisión de Tarjetas`, `Transacciones en Vivo` y `Riesgo/Fraude`.
2. **Métricas Financieras (KPI Cards):** Saldo total colocado, Cartera morosa (%), Volumen transaccionado en las últimas 24h, Número de tarjetas activas.
3. **Buscador y Directorio de Cuentas:**
* Búsqueda por RUT / Cédula de Identidad o Nombre.
* Tabla con: ID Cliente, Nombre completo, Estado de la cuenta (`Activa`, `Bloqueada`, `Morosa`), Línea de crédito aprobada, Cupo utilizado.


4. **Módulo de Evaluación y Emisión:**
* Formulario para asignar nueva tarjeta a un cliente: Selección de tipo (Clásica, Gold, Black), definición de cupo máximo en pesos/dólares y asignación de tasas de interés.


5. **Monitor Transaccional de Seguridad:**
* Flujo en vivo de transacciones con alertas automáticas: compras internacionales atípicas, múltiples intentos fallidos de PIN.
* Botón directo para «Reversar Cargo» o «Bloqueo Preventivo de Cuenta».

Aquí tienes la especificación técnica exhaustiva y granular, diseñada para que **Antigravity** construya las 4 aplicaciones de forma modular utilizando **HTML5 + Tailwind CSS** (vía CDN o CLI).

Para cumplir con el flujo, cada módulo (**Cliente** y **Admin**) se subdivide en flujos **CRUD completos** (Listado/Read, Creación/Create, Edición/Update, Detalle/Show y Eliminación con modal/Delete).

---

# ESPECIFICACIÓN MAESTRA DE DESARROLLO (FRONTEND TAILWIND CSS)

### Pautas Globales de Implementación para Antigravity

* **Framework CSS:** Tailwind CSS (versión 4.x).
* **Patrón de componentes CRUD:**
* **Listado (Read):** Tabla responsiva (`overflow-x-auto`) con barra superior de filtros, buscador en tiempo real, badges de estado con colores contextuales (`bg-emerald-100 text-emerald-800`, `bg-rose-100 text-rose-800`, etc.) y columna de acciones con botones para Ver (Show), Editar (Edit) y Borrar (Delete).
* **Crear / Editar (Create / Update):** Formularios estructurados en tarjetas (`bg-white rounded-xl shadow-sm border border-slate-200 p-6`), inputs estilizados (`border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 px-4 py-2 text-sm w-full`), feedback de validación y botones primarios/secundarios.
* **Detalle (Show):** Vista estilo ficha técnica organizada en grid de 2 o 3 columnas (`grid grid-cols-1 md:grid-cols-3 gap-6`), tarjetas de resumen y tablas anidadas.
* **Eliminar (Delete):** Modal de confirmación (`fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center`) con advertencia de irreversibilidad.



---

## 1. SISTEMA DE BODEGA (WMS)

### 1.1 Portal de Cliente / Solicitante (`/bodega/cliente/`)

#### Vistas y CRUDs Requeridos:

1. **CRUD Solicitudes de Despacho (Mis Pedidos de Salida):**
* `solicitudes-list.html` (Read): Tabla de pedidos emitidos por la sucursal. Columnas: `# Pedido`, `Fecha de solicitud`, `Fecha requerida`, `Cantidad de bultos`, `Prioridad` (Baja/Media/Alta), `Estado` (`Borrador`, `En Picking`, `Despachado`), `Acciones`.
* `solicitudes-create.html` (Create): Formulario maestro-detalle. Cabecera: selector de sucursal de destino, fecha de entrega y notas. Detalle: selector dinámico de SKU con buscador predictivo, input numérico de cantidad (con límite visual según stock disponible), botón "Agregar ítem" y tabla dinámica de ítems con botón de eliminar fila.
* `solicitudes-edit.html` (Update): Mismo formulario anterior, pero bloqueado si el estado pasó de `Borrador` a `En Picking`.
* `solicitudes-detail.html` (Show): Ficha técnica del pedido con línea de tiempo visual del avance, lista detallada de productos asignados y botón de descarga de vale de despacho en PDF.
* *Modal Delete:* Modal de advertencia para cancelar solicitud (solo habilitado si está en estado `Borrador`).


2. **Catálogo Consultivo de Stock:**
* `stock-catalog.html` (Read): Grid de cards (`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6`). Cada card incluye foto referencial, nombre del artículo, SKU, categoría y badge de disponibilidad:
* Verde (`bg-emerald-50 text-emerald-700 ring-1 ring-emerald-600/20`): Stock > 50 uds.
* Amarillo (`bg-amber-50 text-amber-700 ring-1 ring-amber-600/20`): Stock crítico (< 20 uds).
* Rojo (`bg-rose-50 text-rose-700 ring-1 ring-rose-600/20`): Sin existencias.


* Botón directo en la card "Agregar a mi solicitud".



---

### 1.2 Panel de Administración (`/bodega/admin/`)

#### Vistas y CRUDs Requeridos:

1. **CRUD Maestro de Productos / Artículos:**
* `articulos-list.html` (Read): Tabla con miniatura, SKU, Código de barras (EAN-13), Descripción, Categoría, Unidad de medida (Unidad, Caja, Pallet), Stock total físico, Stock reservado, Stock disponible, Acciones.
* `articulos-create.html` (Create): Formulario con tabs o secciones divididas: Datos básicos (nombre, SKU, código de barras), Parámetros de inventario (stock mínimo, stock de reorden, stock máximo), Dimensiones/Peso (largo, ancho, alto, kg) y Categoría.
* `articulos-edit.html` (Update): Formulario precargado para modificar umbrales, nombres y parámetros técnicos.
* `articulos-detail.html` (Show): Ficha integral del producto con desglose de su ubicación física exacta por pasillos y kardex histórico de movimientos.
* *Modal Delete / Desactivar:* Modal de confirmación con opción de "Desactivar SKU" si tiene stock asociado para prevenir inconsistencias.


2. **CRUD Ubicaciones Físicas (Racks, Pasillos y Zonas):**
* `ubicaciones-list.html` (Read): Listado de ubicaciones registradas. Columnas: `Código Ubicación` (Ej: `P01-R03-N2`), `Zona` (Frío, Seco, Alto Valor), `Capacidad Máxima (kg/volumen)`, `Ocupación Actual (%)`, `Estado` (`Libre`, `Parcial`, `Llena`), `Acciones`.
* `ubicaciones-create.html` (Create): Inputs para Pasillo, Rack, Altura/Nivel, Selección de Zona, y peso máximo soportado.
* `ubicaciones-edit.html` (Update): Ajuste de límites de carga y estado operativo de la posición.
* *Modal Delete:* Eliminación de ubicación vacía.


3. **CRUD Movimientos de Entrada y Mermas (Ajustes de Stock):**
* `movimientos-list.html` (Read): Registro de auditoría de entradas y salidas manuales. Columnas: `# Folio`, `Tipo` (Recepción de compra, Merma por rotura, Merma por vencimiento, Ajuste de inventario), `Responsable`, `Fecha`, `Total Unidades`, `Acciones`.
* `movimientos-create.html` (Create): Selector de tipo de movimiento, motivo/justificación, tabla de productos afectados, cantidad de ajuste (+ o -), y selector de ubicación de origen/destino.
* `movimientos-detail.html` (Show): Acta de movimiento firmada digitalmente con desglose de ítems afectados.



---

## 2. SISTEMA DE TIENDA (E-COMMERCE)

### 2.1 Portal de Cliente / Comprador (`/tienda/cliente/`)

#### Vistas y CRUDs Requeridos:

1. **CRUD Carrito de Compras y Checkout:**
* `tienda-catalog.html` (Read): Cuadrícula comercial con filtros laterales (categoría, rango de precio con slider, orden por popularidad/precio). Tarjetas con fotos, badges de oferta (`bg-rose-500 text-white text-xs font-bold px-2 py-1 rounded`), título, precio tachado, precio neto y botón rápido "Añadir al carro".
* `carrito-view.html` (Read / Update / Delete): Vista completa del carrito. Tabla de ítems con controles de cantidad interactivos (`-` y `+`), subtotal por línea, botón de remover con ícono de papelera, input para aplicar código de cupón de descuento y tarjeta lateral fija de totales.
* `checkout-step1.html` (Create - Datos): Formulario de identificación, correo y dirección de despacho (calle, número, comuna/ciudad, notas para el repartidor).
* `checkout-step2.html` (Selección de Pago): Selector estilizado de pasarela (Webpay, Transferencia, Tarjeta de Crédito).
* `checkout-success.html` (Show): Página de confirmación y resumen de la orden con número de seguimiento y botón de descarga de boleta.


2. **CRUD Mis Compras (Historial del Usuario):**
* `compras-list.html` (Read): Historial de órdenes de compra del usuario. Columnas: `# Pedido`, `Fecha`, `Método de Pago`, `Total`, `Estado de Envío`, `Acciones`.
* `compras-detail.html` (Show): Detalle de la compra con desglose de productos comprados, datos de despacho y acceso al tracking.



---

### 2.2 Panel de Administración (`/tienda/admin/`)

#### Vistas y CRUDs Requeridos:

1. **CRUD Catálogo Comercial (Productos en Venta):**
* `productos-list.html` (Read): Tabla de administración con imagen miniatura, Título, SKU, Categoría, Precio normal, Precio oferta, Stock, Switch interactivo de publicación (`Visible / Oculto`), `Acciones`.
* `productos-create.html` (Create): Carga de imágenes múltiples con zona de drag and drop, editor de texto para descripción, selector de categoría, inputs de precios, y gestor de variantes (tallas, colores).
* `productos-edit.html` (Update): Edición completa del producto y sus variantes activas.
* *Modal Delete:* Modal de borrado con confirmación de alerta roja.


2. **CRUD Gestión de Órdenes de Compra:**
* `ordenes-list.html` (Read): Tablero de pedidos con filtros por estado: `Pendiente de Pago`, `Pagado`, `En Preparación`, `Enviado`, `Entregado`, `Cancelado`.
* `ordenes-detail.html` (Show / Update): Ficha del pedido. Permite cambiar el estado mediante un dropdown selectivo, ver datos de facturación y despacho del cliente, y cargar el número de seguimiento de la empresa de transporte.


3. **CRUD Cupones y Promociones:**
* `cupones-list.html` (Read): Tabla con `Código`, `Tipo de descuento` (% o monto fijo), `Valor`, `Uso actual / Límite`, `Vencimiento`, `Estado`, `Acciones`.
* `cupones-create.html` (Create): Generador de códigos, porcentaje de rebaja, compra mínima requerida y rango de fechas de validez.
* `cupones-edit.html` (Update): Modificación de cupo máximo de usos y fechas de vigencia.
* *Modal Delete:* Desactivar o eliminar cupón.



---

## 3. SISTEMA DE TRANSPORTE Y LOGÍSTICA

### 3.1 Portal de Cliente / Remitente (`/transporte/cliente/`)

#### Vistas y CRUDs Requeridos:

1. **CRUD Solicitudes de Envío:**
* `envios-list.html` (Read): Tabla con todos los despachos solicitados por el remitente. Columnas: `# Guía / Tracking`, `Destinatario`, `Destino (Ciudad/Comuna)`, `Fecha de Retiro`, `Estado Actual` (`Retirado`, `En Tránsito`, `En Reparto`, `Entregado`), `Acciones`.
* `envios-create.html` (Create - Cotizador y Solicitud):
* Paso 1: Origen (dirección de retiro) y Destino (dirección de entrega).
* Paso 2: Especificaciones del bulto (peso en kg, dimensiones alto x ancho x profundidad, selector de tipo de carga frágil/peligrosa).
* Paso 3: Tarifa calculada en tiempo real según los inputs y botón de confirmación "Generar Orden de Retiro".


* `envios-edit.html` (Update): Corrección de datos de contacto o dirección del destinatario (habilitado solo antes de que el pedido sea retirado).
* `tracking-detail.html` (Show): Vista de seguimiento público con un stepper/timeline horizontal animado (`Recolectado` → `Centro Logístico` → `En Ruta` → `Entregado`), bitácora de novedades con marcas de tiempo y mapa/placeholder de geolocalización.
* *Modal Delete:* Anulación del envío antes del retiro del transportista.


2. **CRUD Libreta de Direcciones Frecuentes:**
* `direcciones-list.html` (Read): Cards de domicilios guardados (Casa, Oficina, Sucursal Norte, etc.).
* `direcciones-create.html` / `direcciones-edit.html`: Formulario para guardar nombre del contacto, teléfono, dirección y coordenadas/referencias.
* *Modal Delete:* Borrado de dirección habitual.



---

### 3.2 Panel de Administración (`/transporte/admin/`)

#### Vistas y CRUDs Requeridos:

1. **CRUD Flota de Vehículos:**
* `vehiculos-list.html` (Read): Tabla con `Patente / Matrícula`, `Tipo` (Camión 3/4, Van, Moto), `Marca/Modelo`, `Capacidad Máxima (kg y m³)`, `Conductor Asignado`, `Estado` (`En Operación`, `Disponible`, `En Mantenimiento`), `Acciones`.
* `vehiculos-create.html` (Create): Registro de unidad con datos técnicos, fecha de vencimiento de revisión técnica y capacidad de carga.
* `vehiculos-edit.html` (Update): Edición de chofer asignado, kilometraje y estado operativo.
* *Modal Delete:* Baja de vehículo de la flota activa.


2. **CRUD Conductores / Choferes:**
* `conductores-list.html` (Read): Lista con avatar, Nombre, RUT/Cédula, Tipo de Licencia, Teléfono, Vehículo actual y Rating/Calificación.
* `conductores-create.html` (Create): Registro de chofer con subida de documentos (licencia, antecedentes).
* `conductores-edit.html` (Update): Actualización de datos de contacto y estado (`Activo`, `Licencia Médica`, `Suspendido`).
* *Modal Delete:* Baja del transportista.


3. **CRUD Despacho y Planificación de Rutas:**
* `rutas-list.html` (Read): Listado de hojas de ruta del día. Columnas: `# Ruta`, `Conductor / Móvil`, `Zona / Sector`, `Cantidad de Paquetes`, `Progreso de Entrega (% visual)`, `Estado` (`Abierta`, `En Despacho`, `Cerrada`), `Acciones`.
* `rutas-create.html` (Create): Tablero de asignación. Columna izquierda: Encomiendas pendientes agrupadas por zona. Columna derecha: Vehículo seleccionado con medidor visual de capacidad ocupada. Botones para arrastrar o transferir encomiendas a la ruta.
* `rutas-detail.html` (Show): Detalle de la hoja de ruta con la secuencia óptima de paradas y reporte de entregas exitosas vs. fallidas.



---

## 4. SISTEMA DE TARJETAS (FINANCIERO / FIDELIZACIÓN)

### 4.1 Portal de Cliente / Titular (`/tarjeta/cliente/`)

#### Vistas y CRUDs Requeridos:

1. **Vista Principal de Tarjeta y Saldo (Dashboard):**
* `tarjeta-dashboard.html` (Show / Read):
* Componente central: Tarjeta plástica maquetada en CSS (gradiente `bg-gradient-to-tr from-slate-900 via-indigo-950 to-slate-900`, bordes dorados o plateados según categoría, chip EMV, número con máscara `•••• •••• •••• 4589`, vencimiento y nombre del cliente).
* Switch con JavaScript para mostrar/ocultar CVV y numeración completa con confirmación.
* KPIs de cuenta: `Cupo Total Disponible`, `Deuda Facturada del Mes`, `Puntos Acumulados`.
* Botones de acción directa: "Pagar Saldo", "Bloqueo Temporal de Tarjeta".




2. **CRUD Movimientos y Transacciones:**
* `movimientos-list.html` (Read): Cartola bancaria interactiva con filtros por mes y tipo de cargo. Tabla con Icono de rubro (Supermercado, Viajes, Servicios), Nombre del comercio, Fecha y hora, Cuotas (ej: 03/12), y Monto destacado en verde (Abono) o rojo (Cargo/Gasto).
* `movimientos-detail.html` (Show): Comprobante individual de la transacción con código de autorización y desglose de impuestos o propina.


3. **CRUD Transferencias y Canjes:**
* `transferencias-create.html` (Create): Formulario para transferir saldo o puntos: Destinatario (Cuenta/RUT), Banco o Entidad, Monto, y campo de mensaje.
* `canjes-catalog.html` (Read): Catálogo de beneficios canjeables por puntos con botón "Canjear ahora" y modal de confirmación.



---

### 4.2 Panel de Administración (`/tarjeta/admin/`)

#### Vistas y CRUDs Requeridos:

1. **CRUD Emisión y Cuentas de Clientes:**
* `cuentas-list.html` (Read): Directorio de tarjetahabientes. Columnas: `# Contrato`, `RUT / Identificación`, `Titular`, `Tipo de Tarjeta` (Clásica, Gold, Black), `Cupo Aprobado`, `Cupo Utilizado`, `Estado` (`Al Día`, `Mora`, `Bloqueada por Riesgo`), `Acciones`.
* `cuentas-create.html` (Create): Formulario de evaluación crediticia. Datos del cliente, score financiero, selección de producto (Tarjeta Crédito / Prepago), asignación de cupo límite en pesos y tasa de interés pactada.
* `cuentas-edit.html` (Update): Formulario para incremento de cupo, extensión de vigencia o cambio de categoría de cliente.
* `cuentas-detail.html` (Show): Ficha integral del cliente con historial consolidado de facturación y tarjetas adicionales asociadas.
* *Modal Delete / Bloqueo:* Modal de bloqueo preventivo inmediato con selección obligatoria de causa (Fraude, Pérdida, Incumplimiento de pago).


2. **CRUD Parámetros y Tipos de Tarjetas:**
* `productos-tarjetas-list.html` (Read): Tabla de planes (Classic, Gold, Platinum, Black) con sus costos de mantención, tasa de interés y cupos permitidos.
* `productos-tarjetas-create.html` / `edit.html`: Formulario para definir reglas de negocio, porcentaje de acumulación de puntos y beneficios de la tarjeta.


3. **Consola de Auditoría y Control de Fraude:**
* `transacciones-audit-list.html` (Read): Monitor en tiempo real de transacciones entrantes con alerta de colores según nivel de riesgo (Score de riesgo > 80 marcado en rojo).
* `transacciones-audit-detail.html` (Show): Desglose técnico de la transacción (IP de origen, país del comercio, validación 3DS, tipo de terminal) con botones administrativos para:
* Botón "Reversar / Anular Cargo".
* Botón "Bloquear Comercio / Terminal".





---

# INSTRUCCIÓN FINAL DE ARRANQUE PARA ANTIGRAVITY

```markdown
Actúa como un Desarrollador Frontend Senior. Implementa la arquitectura completa definida en esta especificación utilizando HTML5 semántico y Tailwind CSS (vía CDN: <script src="https://cdn.tailwindcss.com"></script>).

Reglas de entrega por vista:
1. Diseña cada archivo HTML de forma 100% funcional y autocontenida.
2. Cada archivo debe tener su barra de navegación/sidebar correspondiente al rol (Cliente o Admin).
3. En las vistas de lista (Read), incluye siempre: barra superior con botón "Crear Nuevo", buscador funcional con debounce simulado en JS, tabla con estados (badges con colores de Tailwind) y la columna de acciones (Ver, Editar, Eliminar).
4. En las acciones de eliminación, programa el modal de confirmación con Tailwind y JS Vanilla para abrir/cerrar.
5. Usa componentes responsivos y estilos consistentes (bordes slate-200, fondos slate-50 para paneles, cards en white con bordes redondeados rounded-xl).

```