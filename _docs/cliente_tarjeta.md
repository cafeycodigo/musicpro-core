Para el **Portal de Cliente de Tarjeta (Billetera Virtual / Tarjetahabiente Front-Office)**, la experiencia debe ser moderna, segura y orientada al autoservicio financiero: visualización de la tarjeta plástica en CSS, consulta inmediata de cupos, cartola de movimientos y control de seguridad.

---

### 1. Los 5 Módulos / CRUDs del Cliente de Tarjeta

| # | Módulo | Propósito para el Cliente | Vistas y Flujos Clave |
| --- | --- | --- | --- |
| **1** | **Billetera y Tarjeta Virtual (Dashboard)** | Visualización del plástico, balances y switches de seguridad. | Tarjeta interactiva en CSS (giro visual o toggle de datos sensibles), barras de cupo disponible vs. deuda facturada, botón rápido de bloqueo temporal y pago de estado de cuenta. |
| **2** | **Cartola de Movimientos (Transacciones)** | Consulta histórica y comprobantes de compra. | Listado cronológico agrupado por mes, filtros por categoría (Comida, Servicios, Viajes), buscador por comercio y modal con detalle del comprobante/cuotas. |
| **3** | **Transferencias y Avances en Efectivo** | Traspaso de fondos a cuentas bancarias externas. | Formulario de simulación de avance en cuotas, selección de cuenta bancaria de destino (CRUD de cuentas guardadas) y pantalla de confirmación. |
| **4** | **Canje de Puntos y Fidelización** | Uso del programa de recompensas/cashback. | Balance de puntos acumulados, catálogo de beneficios/descuentos con botón de canje y modal de generación de cupón digital. |
| **5** | **Configuración de Seguridad y Límites** | Autogestión de parámetros de la tarjeta. | Modificación de límites para compras online/internacionales, activación de compras en el extranjero por fecha y cambio de PIN de seguridad. |

---

### 2. Estructura de Carpetas y Vistas HTML (Tailwind CSS)

```text
tarjeta-cliente/
├── assets/
│   ├── js/
│   │   ├── card-toggle.js      # Revelado de CVV/números con máscara y bloqueo
│   │   ├── transactions.js     # Filtros y búsqueda en tiempo real de movimientos
│   │   └── transfers.js        # Cálculo dinámico de cuotas para avances
│   └── css/
│       └── custom.css          # Animación 3D para el volteo de la tarjeta (opcional)
│
├── index.html                  # Dashboard principal: Tarjeta virtual, saldos y accesos rápidos
├── movimientos.html            # [READ] Cartola completa de compras, abonos y cargos del mes
├── comprobante-modal.html      # [SHOW] Modal emergente con voucher fiscal de la transacción
│
├── operaciones/
│   ├── pagar-tarjeta.html      # Formulario para pago total, mínimo o personalizado
│   ├── avance-efectivo.html    # Cotizador y solicitud de transferencia de fondos
│   └── cuentas-destino/
│       ├── index.html          # [READ] Grid de cuentas bancarias asociadas para transferencias
│       ├── create.html         # [CREATE] Registro de nueva cuenta bancaria externa
│       └── edit.html           # [UPDATE] Modificación de datos de transferencia
│
├── beneficios/
│   ├── index.html              # [READ] Catálogo de premios y cupones de fidelización
│   └── mis-canjes.html         # [READ] Historial de cupones canjeados activos
│
└── seguridad/
    └── index.html              # Switches de compras por internet, exterior y límites diarios

```

---

### 3. Anatomía Detallada de las Vistas Clave

#### A. Dashboard y Tarjeta Virtual (`index.html`)

* **Header / Navbar del Cliente:**
* Logotipo corporativo, indicador de conexión segura (`Candado SSL`), saludo al titular y botón de "Cerrar Sesión".


* **Contenedor Central (Grid responsivo 1 col móvil / 2 cols desktop):**
* **Columna Izquierda (La Tarjeta Plástica en CSS Puro):**
* Tarjeta virtual con aspect ratio bancario (`aspect-[1.586/1] w-full max-w-sm mx-auto rounded-2xl p-6 shadow-2xl relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 text-white border border-slate-700/50`).
* **Elementos del plástico:**
1. Logo de la red (`Visa` / `Mastercard` / Marca propia) y chip EMV dorado con líneas de contacto.
2. Icono Contactless estilizado con SVG.
3. Número de tarjeta enmascarado: `•••• •••• •••• 4589`.
4. Fecha de caducidad (`VAL THRU 09/29`) y nombre del titular en tipografía monospace (`font-mono tracking-widest uppercase`).


* **Barra de herramientas de la tarjeta (bajo el plástico):**
* Botón "Mostrar Datos" (toggle mediante JS que reemplaza los puntos por el número real y revela el CVV de 3 dígitos durante 30 segundos).
* Toggle switch de seguridad: "Bloqueo Temporal" (al activarse, atenúa visualmente la tarjeta con un overlay en gris y badge `Tarjeta Congelada`).




* **Columna Derecha (Saldos y Acciones Rápidas):**
* **Card de Cupo Disponible:** Barra de progreso en Tailwind (`bg-emerald-500`) mostrando: `Cupo Disponible: $1.250.000` / `Cupo Total: $2.000.000`.
* **Card de Deuda Facturada:** Monto a pagar en el período (`$340.500`), fecha límite de pago destacada en rojo y botón destacado `Pagar Tarjeta` (`bg-indigo-600 text-white font-semibold py-2.5 rounded-xl hover:bg-indigo-700 w-full text-center block`).
* **Puntos / Cashback:** Badge con total de puntos (`14.500 Puntos`) y botón rápido "Ver Premios".


* **Fila Inferior (Últimos Movimientos Rápidos):**
* Mini-tabla con las últimas 4 compras y enlace directo `Ver toda la cartola →`.





---

#### B. Cartola de Movimientos (`movimientos.html`)

* **Filtros Superiores:**
* Selector desplegable de período de facturación (Mes actual, Mes anterior, Hace 2 meses).
* Selector por tipo de movimiento: `Todos`, `Compras`, `Abonos/Pagos`, `Avances`.
* Buscador por nombre de comercio con debounce.


* **Tabla de Movimientos con Tailwind:**
* Columnas:
1. **Fecha / Hora:** `09 Sep 2026 - 18:42`.
2. **Comercio y Categoría:** Icono representativo (carrito para supermercado, avión para viajes, pantalla para suscripciones), Nombre del comercio (`Supermercado Lider`), y subtexto de categoría en gris.
3. **Cuotas:** Badge con la cuota actual (ej. `02/06`) o `Contado`.
4. **Monto:**
* Cargos/Gastos: En rojo/negrita (`text-slate-900 font-bold - $45.990`).
* Abonos/Pagos: En verde (`text-emerald-600 font-bold + $150.000`).


5. **Acción:** Botón de icono para ver el comprobante digital en modal.





---

#### C. Simulación de Avance en Efectivo (`operaciones/avance-efectivo.html`)

* **Layout en Card limpia:**
* Input de monto a transferir con slider numérico vinculado.
* Selector de cantidad de cuotas (1 a 24 meses).
* Selector de cuenta bancaria destinataria (dropdown con opción de `+ Añadir nueva cuenta`).
* **Recuadro de Desglose Financiero (Simulación):**
* Valor cuota mensual estimada.
* Tasa de interés mensual aplicada (ej. `1.45%`).
* Costo total del crédito (CAE simulado).


* Botón primario: "Confirmar Transferencia" con modal de confirmación por clave o token temporal.



---

### 4. Prompt Estructurado para Antigravity

```markdown
Actúa como Desarrollador Frontend Senior especializado en Tailwind CSS.
Crea el Portal de Cliente para el Sistema de Tarjeta (Billetera Virtual):

1. Genera el archivo 'index.html':
   - Topbar del cliente con logo, nombre del usuario ("Leonardo Romero"), badge de seguridad SSL y botón de cierre de sesión.
   - Grid principal de 2 columnas en desktop:
     * Columna 1: Tarjeta de crédito plástica maquetada al 100% con Tailwind CSS (gradiente oscuro 'from-slate-900 via-indigo-950 to-slate-950', chip dorado, logo de franquicia bancaria en SVG, número enmascarado '•••• •••• •••• 4589' en 'font-mono tracking-widest', fecha de caducidad y nombre del titular). Debajo, botones para "Mostrar Datos Sensibles (CVV)" y un toggle switch para "Congelar Tarjeta".
     * Columna 2: Resumen de cupos con barras de progreso Tailwind (Cupo disponible vs usado), deuda del mes con fecha de vencimiento y botón primario azul "Pagar Tarjeta".
   - Sección inferior con la lista de los últimos 5 movimientos con iconos temáticos por comercio y montos destacados.
   - Interactividad con JavaScript nativo: el botón "Mostrar Datos" debe alternar la máscara de la tarjeta y el toggle de congelar debe superponer un overlay gris con el texto "Tarjeta Bloqueada".

2. Genera el archivo 'movimientos.html':
   - Layout coherente con la barra de navegación.
   - Barra de filtros: selector de mes/período, selector de tipo de movimiento (Compras, Abonos, Todos) y campo de búsqueda por comercio.
   - Tabla responsiva estilizada con Tailwind: Fecha, Comercio (con icono y categoría), Cuotas (badge), Monto (verde para abonos, oscuro para cargos) y botón para abrir el modal de comprobante.
   - Modal de comprobante con fondo difuminado ('fixed inset-0 bg-slate-900/50 backdrop-blur-sm') que muestre un voucher digital detallado con código de autorización y desglose de pago.

Usa Tailwind CSS vía CDN (<script src="https://cdn.tailwindcss.com"></script>) y JavaScript nativo para toda la interactividad.

```