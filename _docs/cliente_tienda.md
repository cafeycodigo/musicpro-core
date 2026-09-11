Para el **Portal de Cliente de Tienda (E-Commerce B2C)**, la experiencia está orientada a la conversión rápida, navegación fluida, gestión de compras y administración del perfil personal.

---

### 1. Los 5 Módulos / CRUDs del Cliente

| # | Módulo | Propósito para el Cliente | Vistas y Flujos Clave |
| --- | --- | --- | --- |
| **1** | **Catálogo y Ficha de Producto** | Descubrimiento y selección de artículos. | Catálogo general con filtros (precio, categoría), ficha de producto con selector de variantes (talla, color), zoom de imágenes y reseñas. |
| **2** | **Carrito de Compras** | Gestión de ítems antes del pago. | Drawer lateral o página de carro con ajuste de cantidades (`+`/`-`), eliminación de ítems, cupón de descuento y subtotal en tiempo real. |
| **3** | **Checkout (Flujo de Pago)** | Conversión y formalización de la orden. | Formulario en 3 pasos: 1. Identificación y contacto, 2. Dirección de despacho o retiro, 3. Selección de pasarela de pago. |
| **4** | **Mis Pedidos (Historial y Tracking)** | Consulta de compras pasadas y estado actual. | Listado histórico, vista de detalle del pedido con desglose, comprobante descargable y botón de seguimiento con la empresa de transporte. |
| **5** | **Mi Cuenta y Libreta de Direcciones** | Gestión de datos personales del comprador. | Edición de perfil, cambio de contraseña y CRUD de direcciones de entrega (guardar, editar, eliminar y marcar como predeterminada). |

---

### 2. Estructura de Carpetas y Vistas HTML (Tailwind CSS)

```text
tienda-cliente/
├── assets/
│   ├── js/
│   │   ├── cart.js             # Lógica de persistencia en localStorage para el carrito
│   │   ├── checkout.js         # Validación de pasos de pago
│   │   └── product-detail.js   # Galería de imágenes y selector de variantes
│   └── css/
│       └── custom.css
│
├── index.html                  # Home comercial: Hero banner, categorías destacadas y novedades
├── catalogo.html               # Catálogo completo con sidebar de filtros y grid de cards
├── producto-detalle.html       # Ficha del producto con galería, selector de variantes y reseñas
├── carrito.html                # Vista detallada del carrito de compras
│
├── checkout/
│   ├── despacho.html           # Paso 1: Datos personales y dirección de entrega
│   ├── pago.html               # Paso 2: Selección de medio de pago y resumen de costos
│   └── confirmacion.html       # Paso 3: Pantalla de éxito con # de orden y detalles
│
└── cuenta/
    ├── pedidos/
    │   ├── index.html          # [READ] Historial de compras con estados y badges
    │   └── detalle.html        # [SHOW] Detalle del pedido y seguimiento
    │
    └── direcciones/
        ├── index.html          # [READ] Grid de tarjetas con direcciones guardadas
        ├── create.html         # [CREATE] Formulario para registrar nueva dirección
        └── edit.html           # [UPDATE] Edición de domicilio existente

```

---

### 3. Anatomía Detallada de las Vistas Clave

#### A. Catálogo y Filtros (`catalogo.html`)

* **Header / Navbar del Cliente:**
* Logotipo a la izquierda.
* Buscador central con autocompletado simulado (`w-full max-w-md`).
* Iconos a la derecha: "Mi Cuenta" (dropdown) y "Carrito" con contador flotante (`relative` con badge rojo `absolute -top-2 -right-2 bg-rose-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center`).


* **Layout Principal (2 Columnas):**
* **Sidebar Izquierda (Filtros - 1/4 ancho):** Filtro por árbol de categorías (checkboxes), slider de rango de precio, selector de colores/tallas disponibles y botón "Limpiar Filtros".
* **Grid Principal (3/4 ancho):**
* Barra superior: Contador de resultados ("Mostrando 24 productos") y selector desplegable "Ordenar por" (Precio: menor a mayor, Más vendidos, Novedades).
* Grid de tarjetas (`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`):
* Imagen con efecto zoom al hover (`overflow-hidden rounded-xl group-hover:scale-105 transition`).
* Badge de promoción superior izquierda (`bg-rose-500 text-white text-xs font-bold px-2 py-0.5 rounded-full`).
* Título del producto, categoría sutil y valoración por estrellas en amarillo (`text-amber-400`).
* Precio en oferta destacado en negrita y precio original tachado en gris.
* Botón inferior ancho: "Agregar al Carro" (`bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-lg`).







---

#### B. Ficha de Producto (`producto-detalle.html`)

* **Mitad Izquierda (Galería Multimedia):**
* Imagen principal en alta resolución con borde redondeado.
* Carrusel inferior de miniaturas clicables con borde activo al seleccionar.


* **Mitad Derecha (Configuración de Compra):**
* Título comercial grande (`text-2xl font-bold text-slate-900`), SKU y badge de stock ("En stock, listo para envío").
* Precios destacados y cálculo de cuotas sin interés.
* Selector de Color (botones circulares con borde de selección activa).
* Selector de Talla (botones en pastilla `border border-slate-200 hover:border-indigo-600 py-2 rounded-lg`).
* Selector numérico de cantidad (`-` e `+`) y botón principal "Añadir al Carrito" + botón secundario "Comprar Ahora".
* Acordeón inferior con información colapsable: Descripción técnica, Guía de tallas y Políticas de devolución.



---

#### C. Carrito y Checkout (`carrito.html` y `/checkout/`)

* **Página de Carrito:**
* Tabla/Listado de productos añadidos con miniatura, nombre, talla elegida, precio unitario, control de cantidad y botón de eliminación (icono basura).
* Input para cupón de descuento con botón "Aplicar".
* Caja fija lateral de Totales: Subtotal neto, IVA, Estimación de envío y Total final en negrita grande.
* Botón directo a checkout: "Continuar con el Pago".


* **Paso de Despacho (`checkout/despacho.html`):**
* Formulario limpio con campos: Nombre, Apellidos, Teléfono, Comuna/Ciudad, Calle y Número, Departamento/Oficina y Notas para el repartidor.
* Opción tipo radio para elegir entre "Envío a domicilio" o "Retiro en tienda física".



---

#### D. Libreta de Direcciones (`/cuenta/direcciones/`)

* **Listado (`index.html`):**
* Grid de cards donde cada tarjeta representa una dirección registrada (ej. "Casa", "Oficina").
* Contenido: Nombre del destinatario, dirección formateada, teléfono de contacto y badge "Predeterminada" si aplica.
* Botones de acción en cada card: "Editar", "Eliminar" (con modal) y "Establecer como principal".
* Card vacía punteada con botón central `+ Agregar nueva dirección` vinculada a `create.html`.



---

### 4. Prompt Estructurado para Antigravity

```markdown
Actúa como Desarrollador Frontend Senior especializado en Tailwind CSS.
Crea el Portal de Cliente para el Sistema de Tienda (E-Commerce):

1. Genera el archivo 'catalogo.html':
   - Navbar de cliente con logo ficticio, buscador central, enlace a "Mis Compras" y botón de Carrito con badge flotante numérico.
   - Layout con sidebar izquierda de filtros (categorías con checkboxes, slider de precio y tallas) y grid derecho de productos (3 columnas).
   - Card de producto interactiva con Tailwind: imagen con hover scale, badge de descuento, estrellas de valoración, precios (oferta vs tachado) y botón "Añadir al Carrito".
   - Drawer lateral (off-canvas) que se abre al hacer clic en el botón del carrito en el navbar, mostrando los productos cargados, subtotal y botón "Ir a Pagar".

2. Genera el archivo 'cuenta/pedidos/index.html':
   - Vista de "Mis Pedidos" dentro del área privada del cliente.
   - Navegación lateral de cuenta: "Mis Datos", "Mis Pedidos", "Direcciones Guardadas" y "Cerrar Sesión".
   - Tabla responsiva con: Número de Orden, Fecha, Total pagado, Método de pago, Badge de estado (Pagado, En camino, Entregado) y botón "Ver Detalle / Boleta" vinculado a 'detalle.html'.

Usa Tailwind CSS vía CDN (<script src="https://cdn.tailwindcss.com"></script>) y JavaScript nativo para abrir/cerrar el drawer del carrito y los filtros.

```