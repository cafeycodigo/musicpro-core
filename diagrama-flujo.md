# Diagramas de Flujo de Usuario - MusicPro Enterprise Suite

Este documento contiene la especificación formal y el modelado de los **flujos de interacción de usuario** de los 4 subsistemas (**Bodega**, **Tienda**, **Transporte** y **Tarjeta/BeatPay**) más el **Ecosistema Global Integrado** de Music Pro Company.

Los diagramas están desarrollados en sintaxis nativa de **Mermaid** y mapean de manera fidedigna la estructura de pantallas y vistas HTML del repositorio.

---

## 📑 Índice de Flujos

1. [Ecosistema Global Integrado (Flujo Triangular Omnicanal)](#1-ecosistema-global-integrado)
2. [Sistema 1: Bodega WMS (Gestión de Almacenes e Inventario)](#2-sistema-de-bodega-wms)
   * [Flujo Cliente / Sucursal B2B (Receptor de Mercadería)](#flujo-bodega-cliente-b2b)
   * [Flujo Administrador / Jefe de Bodega (WMS Backoffice)](#flujo-bodega-administrador)
3. [Sistema 2: Tienda E-Commerce & Retail POS](#3-sistema-de-tienda-e-commerce--retail-pos)
   * [Flujo Cliente / Comprador (Front-Office Web)](#flujo-tienda-cliente)
   * [Flujo Administrador / Cajero POS (Backoffice & Retail)](#flujo-tienda-administrador)
4. [Sistema 3: Transporte Express & Courier](#4-sistema-de-transporte-express--courier)
   * [Flujo Cliente / Remitente & Destinatario](#flujo-transporte-cliente)
   * [Flujo Administrador / Despachador & Chófer](#flujo-transporte-administrador)
5. [Sistema 4: Tarjeta Financiera (BeatPay Virtual)](#5-sistema-de-tarjeta-financiera-beatpay-virtual)
   * [Flujo Cliente / Titular de Tarjeta](#flujo-tarjeta-cliente)
   * [Flujo Administrador / Analista de Riesgo & Fraude](#flujo-tarjeta-administrador)
6. [Matriz de Transición de Pantallas HTML](#6-matriz-de-transición-de-pantallas-html)

---

## 1. Ecosistema Global Integrado

El flujo global refleja la interacción orquestada entre la venta física/online, el abastecimiento logístico desde Bodega Central, la distribución en < 24h mediante Transporte y el financiamiento transversal con BeatPay Virtual.

```mermaid
flowchart TD
    subgraph Cliente["👤 Músico / Cliente Final"]
        C1["Navega Catálogo Tienda<br><code>Tienda/cliente/tienda-catalog.html</code>"]
        C2["Añade al Carrito y Checkout<br><code>Tienda/cliente/carrito-view.html</code>"]
        C3["Selecciona Pago BeatPay Virtual<br><code>Tienda/cliente/checkout-step2.html</code>"]
        C4["Rastrea su Encomienda (TRA)<br><code>Transporte/cliente/tracking-detail.html</code>"]
        C5["Recibe Instrumento y Firma POD"]
    end

    subgraph TiendaM["🛒 Tienda E-Commerce & POS"]
        T1["Valida Stock en Tiempo Real"]
        T2["Genera Orden de Compra<br><code>Tienda/admin/ordenes-detail.html</code>"]
        T3["Solicita Despacho a Bodega"]
    end

    subgraph BodegaM["📦 Bodega Central (WMS)"]
        B1["Recepción de Solicitud<br><code>Bodega/cliente/solicitudes-list.html</code>"]
        B2["Ola de Picking y Packing<br><code>Bodega/admin/movimientos-create.html</code>"]
        B3["Validación de Series & Bultos<br><code>Bodega/admin/articulos-detail.html</code>"]
        B4["Bulto Listo en Muelle de Salida"]
    end

    subgraph TransporteM["🚚 Transporte & Courier"]
        TR1["Genera Guía y Código TRA<br><code>Transporte/cliente/envios-create.html</code>"]
        TR2["Imprime Etiqueta Térmica 4x6<br><code>Transporte/cliente/etiqueta.html</code>"]
        TR3["Asigna a Chófer y Ruta<br><code>Transporte/admin/rutas-create.html</code>"]
        TR4["Reparto de Última Milla & POD"]
    end

    subgraph TarjetaM["💳 BeatPay Virtual (Fintech)"]
        BP1["Valida Cupo y Score Fraude<br><code>Tarjeta/admin/fraude-reglas.html</code>"]
        BP2["Autoriza Transacción y Cuotas<br><code>Tarjeta/cliente/voucher.html</code>"]
        BP3["Abona Fondos y Emite Comprobante"]
    end

    C1 --> C2 --> C3
    C3 --> BP1
    BP1 -->|Aprobado| BP2 --> BP3
    BP3 --> T1 --> T2 --> T3
    T3 --> B1 --> B2 --> B3 --> B4
    B4 --> TR1 --> TR2 --> TR3 --> TR4
    TR4 --> C4 --> C5
```

---

## 2. Sistema de Bodega WMS

### Flujo Bodega Cliente B2B (Sucursales y Receptores)

Representa el viaje de un encargado de sucursal o franquicia que necesita reabastecer stock de instrumentos y accesorios desde la Bodega Central.

```mermaid
flowchart TD
    Start(["Inicio: Portal Sucursal"]) --> Login["Autenticación de Sucursal<br><code>Bodega/cliente/login.html</code>"]
    Login --> Portal["Dashboard Sucursal B2B<br><code>Bodega/cliente/index.html</code>"]
    
    Portal --> Catalog["Consultar Disponibilidad<br><code>Bodega/cliente/stock-catalog.html</code>"]
    Catalog --> CheckStock{"¿Hay Stock Suficiente?"}
    
    CheckStock -- No --> WaitNotify["Configurar Alerta de Reposición"]
    CheckStock -- Sí --> CreateOrder["Crear Solicitud de Pedido<br><code>Bodega/cliente/solicitudes-create.html</code>"]
    
    CreateOrder --> SetItems["Ingresar SKUs, Cantidades y Prioridad"]
    SetItems --> DraftSave{"¿Enviar o Guardar Borrador?"}
    
    DraftSave -- Guardar --> EditOrder["Editar Solicitud Pendiente<br><code>Bodega/cliente/solicitudes-edit.html</code>"]
    DraftSave -- Enviar --> SubmitOrder["Confirmación y Envío"]
    
    EditOrder --> SubmitOrder
    SubmitOrder --> OrderList["Mis Solicitudes<br><code>Bodega/cliente/solicitudes-list.html</code>"]
    OrderList --> TrackDetail["Ver Detalle y Estado de Despacho<br><code>Bodega/cliente/solicitudes-detail.html</code>"]
    TrackDetail --> End(["Fin: Recepción en Tienda"])
```

### Flujo Bodega Administrador (Jefe de Almacén & Operarios)

```mermaid
flowchart TD
    AdminStart(["Inicio: Backoffice Bodega"]) --> AdminDash["Dashboard Maestro WMS<br><code>Bodega/admin/index.html</code>"]
    
    AdminDash --> OpChoice{"Seleccionar Operación"}
    
    %% Gestión de Artículos
    OpChoice -->|Catálogo & Stock| ArtList["Maestro de Artículos<br><code>Bodega/admin/articulos-list.html</code>"]
    ArtList --> ArtCreate["Alta de SKU<br><code>Bodega/admin/articulos-create.html</code>"]
    ArtList --> ArtDetail["Ficha Técnica & Kardex<br><code>Bodega/admin/articulos-detail.html</code>"]
    ArtDetail --> ArtEdit["Modificar Parámetros / Mínimos<br><code>Bodega/admin/articulos-edit.html</code>"]
    
    %% Ubicaciones y Racks
    OpChoice -->|Zonas y Racks| Zonas["Zonas de Almacén<br><code>Bodega/admin/zonas-almacen.html</code>"]
    Zonas --> UbiList["Mapa de Ubicaciones<br><code>Bodega/admin/ubicaciones-list.html</code>"]
    UbiList --> UbiCreate["Crear Posición Pasillo/Rack<br><code>Bodega/admin/ubicaciones-create.html</code>"]
    UbiList --> UbiEdit["Reasignar o Bloquear Ubicación<br><code>Bodega/admin/ubicaciones-edit.html</code>"]
    
    %% Movimientos y Picking
    OpChoice -->|Movimientos & Mermas| MovList["Registro de Movimientos<br><code>Bodega/admin/movimientos-list.html</code>"]
    MovList --> MovCreate["Registrar Entrada / Salida / Ajuste<br><code>Bodega/admin/movimientos-create.html</code>"]
    MovCreate --> Motivos["Definir Motivo de Ajuste / Merma<br><code>Bodega/admin/motivos-ajuste.html</code>"]
    MovList --> MovDetail["Auditoría de Movimiento<br><code>Bodega/admin/movimientos-detail.html</code>"]
    
    %% Proveedores
    OpChoice -->|Proveedores| ProvList["Maestro de Proveedores<br><code>Bodega/admin/proveedores-list.html</code>"]
    OpChoice -->|Categorías| CatList["Categorías de Instrumentos<br><code>Bodega/admin/categorias-list.html</code>"]
```

---

## 3. Sistema de Tienda E-Commerce & Retail POS

### Flujo Tienda Cliente (Comprador Web)

```mermaid
flowchart TD
    TStart(["Visita la Tienda"]) --> Home["Home Comercial<br><code>Tienda/cliente/index.html</code>"]
    Home --> Browse["Catálogo General y por Género<br><code>Tienda/cliente/tienda-catalog.html</code>"]
    
    Browse --> FilterGenre["Filtro: Rock / DJ / Reggaetón / Accesorios"]
    FilterGenre --> ViewProduct["Ficha de Producto con Audio Demo<br><code>Tienda/cliente/producto-detalle.html</code>"]
    
    ViewProduct --> AddCart["Añadir al Carrito de Compras"]
    AddCart --> ViewCart["Carrito Persistente<br><code>Tienda/cliente/carrito-view.html</code>"]
    
    ViewCart --> UserCheck{"¿Usuario Autenticado?"}
    UserCheck -- No --> AuthChoice{"¿Iniciar Sesión o Registrarse?"}
    AuthChoice -- Login --> LoginView["Iniciar Sesión<br><code>Tienda/cliente/login.html</code>"]
    AuthChoice -- Registro --> RegView["Registro Rápido<br><code>Tienda/cliente/registro.html</code>"]
    LoginView --> Step1
    RegView --> Step1
    
    UserCheck -- Sí --> Step1["Checkout Paso 1: Dirección y Envío<br><code>Tienda/cliente/checkout-step1.html</code>"]
    Step1 --> DirChoice{"¿Crear o Usar Dirección?"}
    DirChoice -- Nueva --> DirCreate["Agregar Dirección<br><code>Tienda/cliente/direcciones-create.html</code>"]
    DirChoice -- Existente --> DirList["Seleccionar de Libreta<br><code>Tienda/cliente/direcciones-list.html</code>"]
    
    DirCreate --> Step2["Checkout Paso 2: Forma de Pago<br><code>Tienda/cliente/checkout-step2.html</code>"]
    DirList --> Step2
    
    Step2 --> PayMethod{"Método de Pago"}
    PayMethod -- BeatPay Virtual --> PayBP["Cupo BeatPay + Cuotas sin Interés"]
    PayMethod -- Webpay / Tarjeta Bancaria --> PayWP["Pasarela Externa"]
    
    PayBP --> Success["Pago Exitoso & Confirmación<br><code>Tienda/cliente/checkout-success.html</code>"]
    PayWP --> Success
    
    Success --> Orders["Historial de Compras<br><code>Tienda/cliente/compras-list.html</code>"]
    Orders --> OrderDet["Detalle de Compra y Boleta PDF<br><code>Tienda/cliente/compras-detail.html</code>"]
```

### Flujo Tienda Administrador & POS (Backoffice y Cajero de Sucursal)

```mermaid
flowchart TD
    TAdminStart(["Inicio Backoffice Tienda"]) --> TAdminDash["Dashboard de Ventas & POS<br><code>Tienda/admin/index.html</code>"]
    
    TAdminDash --> AdminActions{"Área de Gestión"}
    
    %% Gestión de Productos
    AdminActions -->|Catálogo Comercial| PList["Listado de Productos<br><code>Tienda/admin/productos-list.html</code>"]
    PList --> PCreate["Crear Producto / Subir Demos MP3<br><code>Tienda/admin/productos-create.html</code>"]
    PList --> PEdit["Editar Precios / Promociones<br><code>Tienda/admin/productos-edit.html</code>"]
    
    %% Gestión de Pedidos
    AdminActions -->|Ventas y Pedidos| OList["Listado de Órdenes Omnicanal<br><code>Tienda/admin/ordenes-list.html</code>"]
    OList --> ODetail["Detalle de Orden, Facturación y Enlace WMS<br><code>Tienda/admin/ordenes-detail.html</code>"]
    
    %% Promociones y Cupones
    AdminActions -->|Marketing y Cupones| CList["Gestión de Cupones<br><code>Tienda/admin/cupones-list.html</code>"]
    CList --> CCreate["Crear Cupón con Vigencia y Topes<br><code>Tienda/admin/cupones-create.html</code>"]
    CList --> CEdit["Modificar o Desactivar Cupón<br><code>Tienda/admin/cupones-edit.html</code>"]
    
    %% Parámetros
    AdminActions -->|Tarifas de Despacho| Shipping["Tarifas y Reglas de Envío<br><code>Tienda/admin/tarifas-envio.html</code>"]
    AdminActions -->|Clientes| CustList["Directorio de Clientes<br><code>Tienda/admin/clientes-list.html</code>"]
    AdminActions -->|Categorías| CatList["Categorías y Géneros<br><code>Tienda/admin/categorias-list.html</code>"]
```

---

## 4. Sistema de Transporte Express & Courier

### Flujo Transporte Cliente (Remitente y Destinatario)

```mermaid
flowchart TD
    TRStart(["Portal Courier"]) --> TRHome["Home de Logística<br><code>Transporte/cliente/index.html</code>"]
    
    TRHome --> PublicTrack{"¿Tiene Código TRA?"}
    PublicTrack -- Sí --> FastTrack["Rastreo Directo<br><code>Transporte/cliente/tracking-detail.html</code>"]
    
    PublicTrack -- No / Cotizar --> CheckAuth{"¿Usuario Registrado?"}
    CheckAuth -- No --> TRLogin["Login / Registro<br><code>Transporte/cliente/login.html</code><br><code>Transporte/cliente/registro.html</code>"]
    CheckAuth -- Sí --> NewShipment
    TRLogin --> NewShipment
    
    NewShipment["Solicitar Envío / Cotizar<br><code>Transporte/cliente/envios-create.html</code>"]
    NewShipment --> SelectAddrs["Origen, Destino y Medidas Paquete"]
    SelectAddrs --> ManageAddrs{"¿Gestionar Libreta de Direcciones?"}
    
    ManageAddrs -- Sí --> AddrList["Libreta de Direcciones<br><code>Transporte/cliente/direcciones-list.html</code>"]
    AddrList --> AddrCreate["Nueva Dirección Frecuente<br><code>Transporte/cliente/direcciones-create.html</code>"]
    AddrCreate --> ConfirmShipment
    ManageAddrs -- No --> ConfirmShipment["Confirmar y Generar Código TRA"]
    
    ConfirmShipment --> PrintLabel["Generar Etiqueta Térmica 4x6<br><code>Transporte/cliente/etiqueta.html</code>"]
    PrintLabel --> ShipList["Mis Envíos Activos<br><code>Transporte/cliente/envios-list.html</code>"]
    ShipList --> ShipEdit["Modificar Instrucciones de Entrega<br><code>Transporte/cliente/envios-edit.html</code>"]
    ShipList --> TrackLive["Tracking en Vivo y POD<br><code>Transporte/cliente/tracking-detail.html</code>"]
    
    TRHome --> Puntos["Consultar Sucursales y Puntos Pick-up<br><code>Transporte/cliente/puntos-red.html</code>"]
```

### Flujo Transporte Administrador (Torre de Control & Chóferes)

```mermaid
flowchart TD
    TRAdminStart(["Torre de Control"]) --> TRAdminDash["Dashboard Operativo de Flota<br><code>Transporte/admin/index.html</code>"]
    
    TRAdminDash --> TROptions{"Módulo de Control"}
    
    %% Rutas y Despacho
    TROptions -->|Rutas de Entrega| RList["Listado de Rutas Diarias<br><code>Transporte/admin/rutas-list.html</code>"]
    RList --> RCreate["Crear y Optimizar Ruta<br><code>Transporte/admin/rutas-create.html</code>"]
    RList --> RDetail["Monitoreo Satelital de Ruta<br><code>Transporte/admin/rutas-detail.html</code>"]
    
    %% Vehículos
    TROptions -->|Flota de Vehículos| VList["Parque de Vehículos<br><code>Transporte/admin/vehiculos-list.html</code>"]
    VList --> VCreate["Alta de Vehículo / Patente<br><code>Transporte/admin/vehiculos-create.html</code>"]
    VList --> VEdit["Mantenimiento y Capacidad kg<br><code>Transporte/admin/vehiculos-edit.html</code>"]
    
    %% Conductores
    TROptions -->|Conductores| CList["Directorio de Choferes<br><code>Transporte/admin/conductores-list.html</code>"]
    CList --> CCreate["Vincular Conductor y Licencia<br><code>Transporte/admin/conductores-create.html</code>"]
    CList --> CEdit["Estado de Disponibilidad<br><code>Transporte/admin/conductores-edit.html</code>"]
    
    %% Incidencias y Zonas
    TROptions -->|Incidencias| IncList["Gestión de Incidencias en Ruta<br><code>Transporte/admin/incidencias-list.html</code>"]
    TROptions -->|Zonificación| ZList["Zonas de Cobertura y Tarifas<br><code>Transporte/admin/zonas-list.html</code>"]
```

---

## 5. Sistema de Tarjeta Financiera (BeatPay Virtual)

### Flujo Tarjeta Cliente (Titular de BeatPay Virtual)

```mermaid
flowchart TD
    BPStart(["Portal BeatPay"]) --> BPHome["Landing Comercial BeatPay<br><code>Tarjeta/cliente/index.html</code>"]
    
    BPHome --> BPAuth{"¿Tiene Cuenta?"}
    BPAuth -- No --> BPRegister["Solicitud y Onboarding Digital<br><code>Tarjeta/cliente/registro.html</code>"]
    BPAuth -- Sí --> BPLogin["Login Seguro<br><code>Tarjeta/cliente/login.html</code>"]
    
    BPRegister --> RiskEngine{"Evaluación de Riesgo Crediticio"}
    RiskEngine -- Aprobado --> BPDash
    RiskEngine -- Requiere Validación --> WaitReview["Revisión de Antecedentes"]
    BPLogin --> BPDash
    
    BPDash["Dashboard Financiero del Titular<br><code>Tarjeta/cliente/tarjeta-dashboard.html</code>"]
    
    BPDash --> BPFeatures{"Operación a Realizar"}
    
    %% Simulación de Avances
    BPFeatures -->|Simular Avance| SimAvance["Simulador de Avance en Cuotas<br><code>Tarjeta/cliente/avance-simulador.html</code>"]
    SimAvance --> ExecTransf["Confirmar Transferencia a Cuenta Bancaria<br><code>Tarjeta/cliente/transferencias-create.html</code>"]
    ExecTransf --> VoucherAvance["Comprobante Oficial / Voucher<br><code>Tarjeta/cliente/voucher.html</code>"]
    
    %% Canjes y Beneficios
    BPFeatures -->|Club de Beneficios| Canjes["Catálogo de Canjes y Descuentos<br><code>Tarjeta/cliente/canjes-catalog.html</code>"]
    
    %% Movimientos y Cartola
    BPFeatures -->|Estado de Cuenta| MovList["Historial de Movimientos<br><code>Tarjeta/cliente/movimientos-list.html</code>"]
    MovList --> MovDetail["Detalle de Compra y CAE<br><code>Tarjeta/cliente/movimientos-detail.html</code>"]
```

### Flujo Tarjeta Administrador (Analista de Riesgo & Fraude)

```mermaid
flowchart TD
    BPAdminStart(["Backoffice Financiero"]) --> BPAdminDash["Dashboard Ejecutivo BeatPay<br><code>Tarjeta/admin/index.html</code>"]
    
    BPAdminDash --> BPOps{"Gestión Financiera"}
    
    %% Cuentas y Tarjetas
    BPOps -->|Cuentas de Clientes| AccList["Maestro de Cuentas<br><code>Tarjeta/admin/cuentas-list.html</code>"]
    AccList --> AccCreate["Apertura de Cuenta y Asignación Cupo<br><code>Tarjeta/admin/cuentas-create.html</code>"]
    AccList --> AccDetail["Expediente Crediticio y Morosidad<br><code>Tarjeta/admin/cuentas-detail.html</code>"]
    AccDetail --> AccEdit["Modificar Línea o Bloqueo Express<br><code>Tarjeta/admin/cuentas-edit.html</code>"]
    
    %% Auditoría y Motor Antifraude
    BPOps -->|Prevención de Fraude| FraudRules["Reglas de Motor Antifraude<br><code>Tarjeta/admin/fraude-reglas.html</code>"]
    BPOps -->|Auditoría Transaccional| TransList["Log de Transacciones en Vivo<br><code>Tarjeta/admin/transacciones-audit-list.html</code>"]
    TransList --> TransDetail["Análisis Forense de Operación<br><code>Tarjeta/admin/transacciones-audit-detail.html</code>"]
    
    %% Productos y Beneficios
    BPOps -->|Productos de Tarjeta| ProdList["Configuración de Tipos de Tarjeta<br><code>Tarjeta/admin/productos-tarjetas-list.html</code>"]
    ProdList --> ProdCreate["Nuevo Segmento / Plástico<br><code>Tarjeta/admin/productos-tarjetas-create.html</code>"]
    ProdList --> ProdEdit["Ajustar Tasas y Requisitos<br><code>Tarjeta/admin/productos-tarjetas-edit.html</code>"]
    BPOps -->|Alianzas y Beneficios| BenList["Convenios de Conciertos y Tiendas<br><code>Tarjeta/admin/beneficios-list.html</code>"]
```

---

## 6. Matriz de Transición de Pantallas HTML

A continuación se documenta el mapa de navegación exacto implementado en el código fuente de la suite:

### Módulo Bodega
| Vista Origen | Acción del Usuario | Vista Destino | Parámetro / Condición |
| :--- | :--- | :--- | :--- |
| `Bodega/cliente/login.html` | Click en "Ingresar a mi Portal" | `Bodega/cliente/index.html` | Credenciales de Sucursal válidas |
| `Bodega/cliente/index.html` | Click en "Ver Catálogo" | `Bodega/cliente/stock-catalog.html` | Explora existencias en WMS |
| `Bodega/cliente/stock-catalog.html`| Click en "Crear Solicitud" | `Bodega/cliente/solicitudes-create.html`| Precarga SKU seleccionado |
| `Bodega/cliente/solicitudes-create.html`| Submit de formulario | `Bodega/cliente/solicitudes-list.html` | Genera orden de pedido |
| `Bodega/cliente/solicitudes-list.html`| Click en botón "Ver" | `Bodega/cliente/solicitudes-detail.html` | ID de Solicitud |
| `Bodega/admin/articulos-list.html` | Click en "+ Nuevo Artículo" | `Bodega/admin/articulos-create.html` | Rol Administrador |
| `Bodega/admin/articulos-list.html` | Click en "Ver Kardex" | `Bodega/admin/articulos-detail.html` | ID de Artículo |
| `Bodega/admin/articulos-detail.html`| Click en "Editar" | `Bodega/admin/articulos-edit.html` | Modificación de stock mín. |
| `Bodega/admin/movimientos-list.html`| Click en "Nuevo Movimiento"| `Bodega/admin/movimientos-create.html` | Entrada, Salida o Ajuste |

### Módulo Tienda
| Vista Origen | Acción del Usuario | Vista Destino | Parámetro / Condición |
| :--- | :--- | :--- | :--- |
| `Tienda/cliente/index.html` | Click en "Explorar Tienda" | `Tienda/cliente/tienda-catalog.html` | Catálogo completo |
| `Tienda/cliente/tienda-catalog.html`| Click en card de instrumento | `Tienda/cliente/producto-detalle.html` | Muestra audio demo |
| `Tienda/cliente/producto-detalle.html`| Click en "Agregar al Carro" | `Tienda/cliente/carrito-view.html` | Persiste en LocalStorage |
| `Tienda/cliente/carrito-view.html` | Click en "Continuar Compra" | `Tienda/cliente/checkout-step1.html` | Validación de ítems |
| `Tienda/cliente/checkout-step1.html`| Confirmar Despacho | `Tienda/cliente/checkout-step2.html` | Dirección seleccionada |
| `Tienda/cliente/checkout-step2.html`| Seleccionar BeatPay y Pagar | `Tienda/cliente/checkout-success.html`| Validación de pago |
| `Tienda/cliente/checkout-success.html`| Click en "Mis Compras" | `Tienda/cliente/compras-list.html` | Consulta historial |
| `Tienda/admin/productos-list.html` | Click en "Nuevo Producto" | `Tienda/admin/productos-create.html` | Catálogo maestro |
| `Tienda/admin/ordenes-list.html` | Click en "Gestionar Orden" | `Tienda/admin/ordenes-detail.html` | Conexión con WMS/Courier |

### Módulo Transporte
| Vista Origen | Acción del Usuario | Vista Destino | Parámetro / Condición |
| :--- | :--- | :--- | :--- |
| `Transporte/cliente/index.html` | Búsqueda rápida por TRA | `Transporte/cliente/tracking-detail.html`| Código de rastreo |
| `Transporte/cliente/index.html` | Click en "Solicitar Envío" | `Transporte/cliente/envios-create.html` | Formulario de encomienda |
| `Transporte/cliente/envios-create.html`| Confirmar y Pagar Flete | `Transporte/cliente/etiqueta.html` | Genera código de barras 4x6 |
| `Transporte/cliente/envios-list.html`| Click en "Ver Seguimiento" | `Transporte/cliente/tracking-detail.html`| Timeline de 4 estados |
| `Transporte/admin/rutas-list.html` | Click en "Nueva Hoja de Ruta"| `Transporte/admin/rutas-create.html` | Selección de chofer y bultos |
| `Transporte/admin/rutas-list.html` | Click en "Monitorear" | `Transporte/admin/rutas-detail.html` | Telemetría en vivo |

### Módulo Tarjeta (BeatPay Virtual)
| Vista Origen | Acción del Usuario | Vista Destino | Parámetro / Condición |
| :--- | :--- | :--- | :--- |
| `Tarjeta/cliente/index.html` | Click en "Solicitar Tarjeta"| `Tarjeta/cliente/registro.html` | Formulario de postulación |
| `Tarjeta/cliente/login.html` | Iniciar Sesión con RUT | `Tarjeta/cliente/tarjeta-dashboard.html`| Acceso al portal cliente |
| `Tarjeta/cliente/tarjeta-dashboard.html`| Click en "Simular Avance" | `Tarjeta/cliente/avance-simulador.html` | Selector de cuotas y monto |
| `Tarjeta/cliente/avance-simulador.html`| Click en "Transferir Fondos"| `Tarjeta/cliente/transferencias-create.html`| Confirmación bancaria |
| `Tarjeta/cliente/transferencias-create.html`| Validación de seguridad | `Tarjeta/cliente/voucher.html` | Comprobante con firma digital |
| `Tarjeta/admin/cuentas-list.html` | Click en "Expediente" | `Tarjeta/admin/cuentas-detail.html` | Auditoría de cupo y riesgo |
| `Tarjeta/admin/fraude-reglas.html` | Configurar score de corte | `Tarjeta/admin/fraude-reglas.html` | Actualización de umbrales |
| `Tarjeta/admin/transacciones-audit-list.html`| Click en "Investigar" | `Tarjeta/admin/transacciones-audit-detail.html`| Trazabilidad de IP y BIN |

---

*Documento generado y mantenido por [Bemtorres](https://github.com/Bemtorres) para la suite corporativa MusicPro Enterprise v2.4.*
