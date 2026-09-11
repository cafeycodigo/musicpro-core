# Especificación Exhaustiva de Requisitos - Tienda E-commerce & Retail

Este documento contiene la matriz completa de requisitos de software para el subsistema **Tienda E-commerce & Retail**, totalizando 250 especificaciones formales de ingeniería (100 Requerimientos Funcionales, 50 Requerimientos No Funcionales y 100 Requerimientos de Diseño, UI y Componentes) estructurados para los roles de **Administrador**, **Mantenedores** (Cajeros, Encargados de Tienda y Vendedores) y **Clientes** (Compradores Online y Usuarios Registrados).

> 💡 Para consultar estos requisitos de forma interactiva con filtros en tiempo real, pestañas y búsqueda instantánea, abre [requerimientos.html](requerimientos.html).

---

## 1. Requerimientos Funcionales (100 RF)

| ID | Nombre del Requisito | Rol / Ámbito | Prioridad | Especificación Detallada |
| :--- | :--- | :--- | :---: | :--- |
| **RF-TIE-001** | Catálogo Maestro de Instrumentos | Administrador | Crítica | Administración centralizada de productos clasificados por familias (Cuerdas, Teclados, Percusión, Viento, Audio Pro, Accesorios). |
| **RF-TIE-002** | Ficha Técnica Multiatributo | Mantenedor | Alta | Configuración de atributos específicos: Tipo de madera, número de trastes, micrófonos, escala, color y acabado para instrumentos musicales. |
| **RF-TIE-003** | Gestión de Precios de Venta y Oferta | Administrador | Crítica | Definición de precio de lista normal, precio internet con descuento y precio especial exclusivo Tarjeta MusicPro. |
| **RF-TIE-004** | Control de Stock para Venta Online | Mantenedor | Crítica | Sincronización de existencias disponibles para venta web considerando reservas temporales en carritos activos. |
| **RF-TIE-005** | Galería Multimedia y Muestras de Audio | Mantenedor | Alta | Subida de hasta 8 fotografías en alta resolución, video demo de YouTube y reproductor de muestras de sonido en formato MP3/WAV. |
| **RF-TIE-006** | Gestión de Variantes de Color y Tamaño | Mantenedor | Alta | Soporte para múltiples variantes de un mismo modelo (ej: Sunburst, Negro ?bano, Olympic White) con SKU y stock independiente. |
| **RF-TIE-007** | Asociación de Accesorios Recomendados (Cross-Selling) | Mantenedor | Media | Vinculación de productos complementarios sugeridos al comprar un instrumento (ej: funda, afinador, cable, cuerdas de repuesto). |
| **RF-TIE-008** | Configuración de Combos y Packs de Iniciación | Mantenedor | Media | Creación de packs promocionales con precio bonificado (ej: Pack Guitarra Eléctrica + Amplificador 15W + Correa + Púas). |
| **RF-TIE-009** | Control de Estado del Instrumento (Nuevo vs Open-Box) | Mantenedor | Alta | Etiquetado de artículos nuevos sellados, instrumentos de exhibición (Open Box) o de luthier reacondicionados con garantía. |
| **RF-TIE-010** | Desactivación Temporal por Quiebre de Stock | Mantenedor | Alta | Ocultamiento automático o cambio a estado 'Agotado con aviso de reposición' cuando el saldo libre llega a cero. |
| **RF-TIE-011** | Motor de Cupones de Descuento | Administrador | Crítica | Creación de cupones alfanuméricos con monto fijo en CLP, porcentaje de descuento, compra mínima y límite de usos totales. |
| **RF-TIE-012** | Vigencia Temporal de Campañas Comerciales | Administrador | Alta | Programación de fecha y hora exacta de inicio y fin para campañas promocionales (CyberDay, Black Friday, Mes de la Música). |
| **RF-TIE-013** | Cupones Exclusivos para Nuevos Clientes | Administrador | Media | Generación de código de bienvenida de un solo uso por RUT/correo para compras iniciales superiores a .000 CLP. |
| **RF-TIE-014** | Descuento por Medio de Pago Tarjeta MusicPro | Administrador | Alta | Aplicación automática de descuento adicional (ej: 15% off) al seleccionar la tarjeta propia como forma de liquidación. |
| **RF-TIE-015** | Gestión de Banners y Slider Principal (Hero) | Administrador | Media | Publicación, ordenamiento y vinculación de banners promocionales de cabecera con enlaces a categorías destacadas. |
| **RF-TIE-016** | Campañas de Despacho Gratis Condicional | Administrador | Alta | Regla de envío a costo cero para carritos cuyo subtotal supere los .000 CLP en comunas seleccionadas. |
| **RF-TIE-017** | Restricción de Cupones por Categoría de Producto | Administrador | Media | Exclusión de marcas premium seleccionadas (ej: Gibson Custom, Fender Custom Shop) de cupones masivos de descuento. |
| **RF-TIE-018** | Flash Sales con Contador Regresivo | Administrador | Media | Activación de ofertas relámpago con reloj regresivo visible en tarjeta de producto para incentivar la conversión rápida. |
| **RF-TIE-019** | Monitoreo de Rendimiento de Cupones | Administrador | Media | Reporte de ingresos generados, cantidad de redenciones y costo de descuentos otorgados por campaña. |
| **RF-TIE-020** | Reglas de 2x1 y Regalo por Compra (GWP) | Administrador | Baja | Configuración de regalos automáticos al carrito por compras superiores a cierto umbral (ej: juego de cuerdas gratis). |
| **RF-TIE-021** | Terminal de Punto de Venta (POS) Rápido | Mantenedor | Crítica | Interfaz optimizada para cajeros con búsqueda rápida por escaneo de código de barras o teclado numérico. |
| **RF-TIE-022** | Apertura y Cierre de Turno de Caja | Mantenedor | Crítica | Registro obligatorio de fondo de caja inicial, hora de inicio, cajero responsable y declaración final de efectivo. |
| **RF-TIE-023** | Arqueo y Cuadratura de Caja Diaria | Mantenedor | Crítica | Comparación automática de ventas del sistema vs efectivo físico, vouchers de tarjetas y transferencias con cálculo de diferencias. |
| **RF-TIE-024** | Soporte de Pagos Mixtos y Combinados | Mantenedor | Alta | Capacidad de dividir el total de la boleta entre efectivo, Tarjeta MusicPro, tarjeta bancaria y nota de crédito en una sola transacción. |
| **RF-TIE-025** | Emisión de Boleta y Factura Electrónica | Mantenedor | Crítica | Generación y timbrado de documento tributario electrónico (DTE) con envío inmediato al SII y entrega en ticket térmico o PDF. |
| **RF-TIE-026** | Búsqueda de Cliente por RUT en Mesón | Mantenedor | Alta | Consulta instantánea de datos de facturación, historial de compras y saldo de puntos del cliente al digitar su RUT. |
| **RF-TIE-027** | Aplicación de Descuento Manual Autorizado | Mantenedor | Media | Descuento en mesón por supervisor con ingreso de clave de autorización para compensaciones o exhibición. |
| **RF-TIE-028** | Anulación de Boleta y Devolución | Mantenedor | Crítica | Generación de Nota de Crédito Electrónica y reingreso de mercadería al stock de sala con aprobación de jefatura. |
| **RF-TIE-029** | Impresión de Ticket de Cambio y Garantía | Mantenedor | Alta | Emisión de voucher sin precio con código de barras y vigencia de 30 días para cambios de regalos de instrumentos. |
| **RF-TIE-030** | Retiro de Efectivo de Seguridad (Sangría) | Mantenedor | Alta | Registro de extracción de dinero en efectivo de la gaveta hacia la caja fuerte al acumular más de 0.000 CLP. |
| **RF-TIE-031** | Consulta de Stock Multitienda en Línea | Mantenedor | Alta | Visualización de existencias de un instrumento en todas las sucursales físicas y en la bodega central en tiempo real. |
| **RF-TIE-032** | Gestión de Pedidos de Retiro en Tienda (Click & Collect) | Mantenedor | Crítica | Panel para recepcionar órdenes web, separar el producto del estante, almacenarlo en casillero y notificar al cliente. |
| **RF-TIE-033** | Validación de Entrega en Tienda por Código Seguro | Mantenedor | Crítica | Entrega de producto web al cliente validando código alfanumérico OTP de 6 dígitos enviado a su correo o celular. |
| **RF-TIE-034** | Solicitud de Reabastecimiento a Bodega Central | Mantenedor | Alta | Creación de pedido de reposición de tienda física por quiebre de stock de guitarras, baquetas o accesorios. |
| **RF-TIE-035** | Recepción de Carga de Reposición | Mantenedor | Alta | Confirmación por escaneo de bultos arribados desde camión de transporte y alta en inventario de sala de ventas. |
| **RF-TIE-036** | Control de Muestrarios y Vitrina | Mantenedor | Media | Asignación de instrumentos para prueba de clientes en sala con registro de estado de conservación y calibración. |
| **RF-TIE-037** | Taller de Calibración Rápida en Tienda | Mantenedor | Media | Registro de servicio de afinación, cambio de cuerdas o quintaje entregado al cliente con la compra de su guitarra. |
| **RF-TIE-038** | Recepción de Devolución por Falla de Fábrica | Mantenedor | Alta | Ingreso de instrumento con falla técnica, emisión de orden de servicio y envío a taller de luthería central. |
| **RF-TIE-039** | Control de Mermas de Sala de Venta | Mantenedor | Alta | Registro de daños ocasionados por manipulación de clientes o accidentes en exhibición con informe fotográfico. |
| **RF-TIE-040** | Historial de Ventas por Vendedor de Salón | Mantenedor | Media | Asociación del código de vendedor al ticket de compra para liquidación mensual de comisiones comerciales. |
| **RF-TIE-041** | Buscador Predictivo con Autocompletado | Cliente | Crítica | Búsqueda instantánea con vista previa de miniaturas de producto, marca y precio al escribir las primeras 2 letras. |
| **RF-TIE-042** | Filtros Facetados Avanzados | Cliente | Alta | Filtros múltiples por familia, marca, rango de precio, número de cuerdas, tipo de pastillas, disponibilidad y ofertas. |
| **RF-TIE-043** | Ordenamiento Inteligente del Catálogo | Cliente | Media | Opciones de orden por: Más Populares, Menor Precio, Mayor Precio, Novedades y Mejor Calificados. |
| **RF-TIE-044** | Selector de Acabado y Color en Ficha | Cliente | Alta | Intercambio instantáneo de fotos de producto al hacer clic en las muestras de color (swatches) disponibles. |
| **RF-TIE-045** | Reproductor de Sonido Integrado | Cliente | Alta | Módulo interactivo para escuchar audios de muestra del instrumento con botón de Play/Pausa en la ficha técnica. |
| **RF-TIE-046** | Zoom de Alta Resolución en Fotografías | Cliente | Media | Ampliación detallada al pasar el cursor sobre la imagen para inspeccionar vetas de madera y herrajes. |
| **RF-TIE-047** | Indicador de Disponibilidad por Sucursal | Cliente | Alta | Pestaña 'Consultar Stock en Tiendas' indicando disponibilidad inmediata en Santiago Centro, Las Condes, Viña, Concepción. |
| **RF-TIE-048** | Simulador de Cuotas sin Interés | Cliente | Alta | Cálculo automático de valor cuota en 3, 6, 12 o 24 pagos con Tarjeta MusicPro y tarjetas bancarias. |
| **RF-TIE-049** | Sistema de Reseñas y Calificación con Estrellas | Cliente | Media | Publicación de comentarios, valoración de 1 a 5 estrellas y fotos reales subidas por compradores verificados. |
| **RF-TIE-050** | Módulo de Preguntas y Respuestas sobre el Producto | Cliente | Baja | Sección interactiva para formular preguntas técnicas respondidas por especialistas de la tienda. |
| **RF-TIE-051** | Carrito de Compras Persistente | Cliente | Crítica | Almacenamiento de artículos agregados en el navegador para que no se pierdan si el usuario cierra la ventana. |
| **RF-TIE-052** | Drawer Lateral Deslizable de Carrito | Cliente | Alta | Vista rápida del carrito sin abandonar la página de navegación con cálculo de subtotal y botón a checkout. |
| **RF-TIE-053** | Modificación Rápida de Cantidades en Carrito | Cliente | Alta | Incremento o disminución de unidades con botones táctiles y actualización de totales sin recargar la página. |
| **RF-TIE-054** | Validación de Cupón de Descuento en Carrito | Cliente | Alta | Campo para ingresar cupón promocional con feedback visual inmediato de ahorro en pesos chilenos. |
| **RF-TIE-055** | Checkout Optimizado en 2 Pasos | Cliente | Crítica | Paso 1: Datos de contacto y entrega (Domicilio o Retiro); Paso 2: Selección de medio de pago y confirmación. |
| **RF-TIE-056** | Opción de Compra como Invitado sin Registro Obligatorio | Cliente | Alta | Permitir completar la compra ingresando únicamente correo, RUT de facturación y dirección de despacho. |
| **RF-TIE-057** | Selección de Modalidad de Despacho | Cliente | Crítica | Alternativa entre: Despacho a Domicilio Express (vía Transporte MusicPro) o Retiro Gratuito en Tienda seleccionada. |
| **RF-TIE-058** | Cálculo Automático de Costo de Envío por Comuna | Cliente | Alta | Tarificación dinámica de flete según peso del pedido y comuna de destino seleccionada en selector. |
| **RF-TIE-059** | Selección de Medio de Pago Seguro | Cliente | Crítica | Opciones: Tarjeta MusicPro, Webpay Plus (Crédito/Débito), Transferencia Khipu y Servipag. |
| **RF-TIE-060** | Opción de Boleta o Factura con Datos de Empresa | Cliente | Alta | Formulario para ingresar Razón Social, Giro Comercial, RUT y Dirección tributaria si se requiere factura. |
| **RF-TIE-061** | Registro e Inicio de Sesión de Clientes | Cliente | Crítica | Creación de cuenta con correo electrónico y contraseña segura, o acceso social con Google. |
| **RF-TIE-062** | Libreta de Direcciones de Envío | Cliente | Alta | Guardado y administración de múltiples domicilios (Casa, Estudio de Grabación, Oficina) con alias. |
| **RF-TIE-063** | Historial de Pedidos y Descarga de Boletas | Cliente | Crítica | Listado histórico de todas las compras web con número de orden, detalle de ítems y descarga de boleta en PDF. |
| **RF-TIE-064** | Seguimiento de Compra en Tiempo Real | Cliente | Crítica | Página de tracking con estado: Pago Confirmado -> Preparando en Bodega -> En Camino -> Entregado. |
| **RF-TIE-065** | Lista de Deseos (Wishlist) Personal | Cliente | Media | Guardado de guitarras y equipos deseados con botón de corazón y notificación automática ante baja de precio. |
| **RF-TIE-066** | Botón de Recompra Rápida | Cliente | Media | Reordenar consumibles habituales (cuerdas, baquetas, cables) con un solo clic desde el historial de compras. |
| **RF-TIE-067** | Solicitud de Cambio o Devolución Online (RMA) | Cliente | Alta | Formulario de post-venta para iniciar derecho a retracto dentro de los primeros 10 días desde la entrega. |
| **RF-TIE-068** | Comprobante de Compra Exitoso con QR | Cliente | Alta | Pantalla final con resumen detallado de la orden, código de retiro con QR y confirmación enviada por email. |
| **RF-TIE-069** | Recuperación Segura de Contraseña | Cliente | Alta | Envío de enlace temporal cifrado al correo registrado para restablecer contraseña ante olvido. |
| **RF-TIE-070** | Actualización de Perfil y Preferencias Musicales | Cliente | Baja | Configuración de preferencias (Géneros favoritos, instrumento principal) para recibir ofertas personalizadas. |
| **RF-TIE-071** | Panel de Control de Ventas en Vivo | Administrador | Crítica | Dashboard gerencial con ventas totales del día, ticket promedio, unidades vendidas y tasa de conversión. |
| **RF-TIE-072** | Reporte de Ventas por Canal (Online vs Tiendas Físicas) | Administrador | Alta | Comparativa porcentual de ingresos generados por la web vs cada una de las sucursales físicas. |
| **RF-TIE-073** | Reporte de Productos Más Vendidos (Top Sellers) | Administrador | Alta | Ranking de instrumentos y accesorios con mayor rotación y margen bruto de contribución. |
| **RF-TIE-074** | Gestión de Estados de Pedidos Centralizados | Administrador | Crítica | Control de ciclo de vida de órdenes: Pendiente de Pago, Aprobado, En Preparación, Despachado, Completado, Anulado. |
| **RF-TIE-075** | Exportación Contable de Ventas a Excel / CSV | Administrador | Alta | Descarga masiva de ventas filtradas por fechas con desglose de IVA, monto neto y medio de pago. |
| **RF-TIE-076** | Auditoría de Reembolsos y Devoluciones | Administrador | Crítica | Registro inmutable de montos devueltos a clientes, causa justificada y usuario que autorizó la nota de crédito. |
| **RF-TIE-077** | Monitoreo de Carritos Abandonados | Administrador | Media | Visualización de carritos dejados sin completar con métricas de valor potencial y activación de emails de rescate. |
| **RF-TIE-078** | Administración de Clientes y Segmentación | Administrador | Alta | Directorio de clientes registrados con clasificación en Clientes Nuevos, Recurrentes y VIP Endorsers. |
| **RF-TIE-079** | Moderación de Reseñas de Clientes | Administrador | Media | Aprobación o rechazo de comentarios públicos con filtro automático de lenguaje inapropiado o spam. |
| **RF-TIE-080** | Configuración de Costos de Envío por Zona | Administrador | Alta | Mantenedor de tarifas de flete urbano, regional e interurbano asociadas a los despachos del subsistema Transporte. |
| **RF-TIE-081** | Validación de RUT Chileno con Algoritmo Módulo 11 | Administrador | Crítica | Verificación matemática obligatoria de dígito verificador en todos los formularios de compra y registro. |
| **RF-TIE-082** | Reserva Temporal de Stock durante Checkout | Administrador | Crítica | Bloqueo preventivo de inventario por 15 minutos mientras el cliente completa el pago en la pasarela bancaria. |
| **RF-TIE-083** | Liberación Automática de Reservas Expiradas | Administrador | Crítica | Restitución inmediata del stock retenido si el cliente abandona o cancela el pago en Webpay. |
| **RF-TIE-084** | Prevención de Sobrevendidos (Over-selling) | Administrador | Crítica | Control transaccional que impide que dos clientes compren simultáneamente la última unidad de un instrumento. |
| **RF-TIE-085** | Trazabilidad de Garantía Legal de 6 Meses | Administrador | Alta | Control de plazo de 6 meses según Ley Pro-Consumidor para reparación, cambio o devolución sin costo. |
| **RF-TIE-086** | Generación de Orden de Despacho hacia Transporte | Administrador | Crítica | Integración automática de pedidos pagados para generar la solicitud de flete en el subsistema Transporte Express. |
| **RF-TIE-087** | Integración de Cobro con Tarjeta Financiera Propia | Administrador | Crítica | Comunicación directa con el subsistema Tarjeta MusicPro para procesar cobros y consultar cupo disponible. |
| **RF-TIE-088** | Configuración de Mensajes Automatizados de Correo | Administrador | Media | Plantillas HTML para confirmación de compra, boleta adjunta, aviso de retiro en tienda y tracking de envío. |
| **RF-TIE-089** | Gestión de Puntos de Fidelización MusicPro Rewards | Administrador | Media | Acumulación de 1 punto por cada 0 CLP de compra canjeables por descuentos en accesorios de música. |
| **RF-TIE-090** | Configuración de Impuestos y Retenciones | Administrador | Alta | Parámetro global de IVA 19% con desglose transparente en comprobantes tributarios según legislación chilena. |
| **RF-TIE-091** | Canje de Puntos de Fidelización en Checkout | Cliente | Media | Selector para aplicar saldo acumulado de puntos como descuento directo en el total a pagar. |
| **RF-TIE-092** | Localizador de Tiendas con Mapa y Horarios | Cliente | Alta | Directorio de sucursales con dirección exacta, teléfono de mesón, mapa interactivo y horarios de atención. |
| **RF-TIE-093** | Atención por Chat en Vivo con Asesor Especialista | Cliente | Media | Widget flotante para conversar con luthier o especialista en audio antes de comprar instrumentos complejos. |
| **RF-TIE-094** | Calculadora de Envíos en Ficha de Producto | Cliente | Alta | Módulo en ficha para ingresar comuna y ver valor exacto y fecha estimada de entrega antes de añadir al carro. |
| **RF-TIE-095** | Compra Rápida con 1 Clic para Clientes Registrados | Cliente | Media | Botón 'Comprar Ahora' que reutiliza dirección y medio de pago predeterminado para compra instantánea. |
| **RF-TIE-096** | Descarga de Manuales de Usuario y Drivers | Cliente | Baja | Pestaña de soporte con enlaces a manuales PDF y software de interfaces de audio adquiridas en la tienda. |
| **RF-TIE-097** | Filtro de Instrumentos para Principiantes vs Profesionales | Cliente | Media | Categorización por nivel de habilidad (Principiante, Intermedio, Profesional/Custom) para orientar al comprador. |
| **RF-TIE-098** | Suscripción a Boletín de Ofertas y Conciertos | Cliente | Baja | Formulario al pie de página para recibir novedades de nuevos arribos y masterclasses gratuitas. |
| **RF-TIE-099** | Modo Comparador de Instrumentos Lado a Lado | Cliente | Media | Herramienta para contrastar especificaciones técnicas y precios de hasta 3 guitarras o teclados simultáneamente. |
| **RF-TIE-100** | Auditoría Global de Sesiones y Carritos | Administrador | Crítica | Log de seguridad con trazabilidad de compras completadas, intentos fallidos de pago y carritos abiertos. |

---

## 2. Requerimientos No Funcionales (50 RNF)

| ID | Categoría | Rol / Impacto | Prioridad | Criterio de Medición y Aceptación |
| :--- | :--- | :--- | :---: | :--- |
| **RNF-TIE-001** | Rendimiento | Sistema | Crítica | Tiempo de respuesta del catálogo menor a 150 ms para listas de 100 productos bajo 5.000 usuarios concurrentes. |
| **RNF-TIE-002** | Rendimiento | Sistema | Alta | Tiempo de carga inicial del Home (Largest Contentful Paint - LCP) inferior a 1.2 segundos en redes 4G. |
| **RNF-TIE-003** | Rendimiento | Sistema | Alta | Respuesta del motor de búsqueda predictiva inferior a 70 ms tras teclear el término de búsqueda. |
| **RNF-TIE-004** | Rendimiento | Sistema | Crítica | Procesamiento de checkout y confirmación de pago en pasarela bancaria completado en menos de 2.0 segundos. |
| **RNF-TIE-005** | Rendimiento | Sistema | Media | Uso de formato de imagen WebP optimizado con compresión progresiva y peso promedio menor a 120 KB por foto. |
| **RNF-TIE-006** | Rendimiento | Sistema | Media | Tasa de fotogramas fluida a 60 FPS durante desplazamientos rápidos y animaciones de apertura de carrito. |
| **RNF-TIE-007** | Rendimiento | Sistema | Alta | Consumo de memoria RAM del navegador cliente inferior a 90 MB tras navegar 50 páginas de productos. |
| **RNF-TIE-008** | Rendimiento | Sistema | Media | Carga diferida (lazy loading) nativa de imágenes situadas fuera del área visible inicial de pantalla. |
| **RNF-TIE-009** | Rendimiento | Sistema | Alta | Soporte de hasta 20.000 carritos simultáneos en campañas masivas de venta tipo CyberMonday. |
| **RNF-TIE-010** | Rendimiento | Sistema | Media | Tiempo de generación de boleta electrónica en PDF inferior a 800 ms para impresión de mostrador. |
| **RNF-TIE-011** | Seguridad | Sistema | Crítica | Cumplimiento con normas PCI-DSS Nivel 1: no se almacena ningún número de tarjeta (PAN) ni código CVV en bases locales. |
| **RNF-TIE-012** | Seguridad | Sistema | Crítica | Cifrado obligatorio TLS 1.3 con certificados SSL clase EV para todas las transacciones de la tienda. |
| **RNF-TIE-013** | Seguridad | Sistema | Crítica | Protección activa contra ataques Cross-Site Scripting (XSS) y Cross-Site Request Forgery (CSRF) en todos los formularios. |
| **RNF-TIE-014** | Seguridad | Sistema | Alta | Cifrado de contraseñas de usuarios mediante algoritmo bcrypt o Argon2id con sal única por usuario. |
| **RNF-TIE-015** | Seguridad | Sistema | Alta | Limitación de tasa de peticiones (Rate Limiting) de 10 intentos por minuto en el formulario de login y cupones. |
| **RNF-TIE-016** | Seguridad | Sistema | Crítica | Separación rigurosa de privilegios: Cajero solo accede a POS de su sucursal, Admin maneja configuración global. |
| **RNF-TIE-017** | Seguridad | Sistema | Alta | Sanitización y validación estricta de todos los campos de texto libre para prevenir inyecciones SQL. |
| **RNF-TIE-018** | Seguridad | Sistema | Media | Expiración automática de sesión de cajero tras 15 minutos de inactividad para evitar cobros no autorizados. |
| **RNF-TIE-019** | Seguridad | Sistema | Alta | Firma electrónica avanzada en documentos tributarios SII para prevenir alteración o fraude fiscal. |
| **RNF-TIE-020** | Seguridad | Sistema | Crítica | Cumplimiento con la Ley chilena 19.628 sobre protección de la vida privada y tratamiento de datos personales. |
| **RNF-TIE-021** | Usabilidad | Sistema | Crítica | Diseño adaptable fluido para pantallas móviles (375px), tablets (768px), laptops (1366px) y monitores (1920px). |
| **RNF-TIE-022** | Usabilidad | Sistema | Alta | Cumplimiento con directrices de accesibilidad WCAG 2.1 nivel AA con ratios de contraste superiores a 4.5:1. |
| **RNF-TIE-023** | Usabilidad | Sistema | Alta | Elementos táctiles en dispositivos móviles con área de toque mínima de 48x48 píxeles. |
| **RNF-TIE-024** | Usabilidad | Sistema | Media | Formularios de checkout con soporte para autocompletado nativo del navegador (nombre, email, teléfono, dirección). |
| **RNF-TIE-025** | Usabilidad | Sistema | Alta | Mensajes de error redactados en lenguaje claro y empático con indicación exacta de cómo corregir el campo. |
| **RNF-TIE-026** | Usabilidad | Sistema | Media | Soporte completo de navegación mediante teclado (Tab, Enter, Escape, Flechas) en catálogo y modales. |
| **RNF-TIE-027** | Usabilidad | Sistema | Alta | Formato de moneda estandarizado en Pesos Chilenos (CLP) con separador de miles con punto (ej: .490.000). |
| **RNF-TIE-028** | Usabilidad | Sistema | Media | Mantenimiento del estado de los filtros aplicados en el catálogo al utilizar el botón atrás del navegador. |
| **RNF-TIE-029** | Usabilidad | Sistema | Media | Indicadores visuales evidentes para productos con bajo stock ('¡Solo quedan 2 unidades!'). |
| **RNF-TIE-030** | Usabilidad | Sistema | Alta | Proceso de compra en mesón de caja completable en menos de 45 segundos por cliente atendido. |
| **RNF-TIE-031** | Fiabilidad | Sistema | Crítica | Disponibilidad mensual de servicio del 99.95% excluyendo ventanas de mantenimiento planificado nocturno. |
| **RNF-TIE-032** | Fiabilidad | Sistema | Crítica | Idempotencia absoluta en pasarela de pagos para evitar dobles cobros ante reintentos accidentales del cliente. |
| **RNF-TIE-033** | Fiabilidad | Sistema | Crítica | Integridad referencial estricta: ninguna venta puede generarse sin asignación a una sucursal o bodega emisora. |
| **RNF-TIE-034** | Fiabilidad | Sistema | Alta | Capacidad del POS de mesón de operar en modo desconexión temporal y sincronizar boletas al reanudar enlace. |
| **RNF-TIE-035** | Fiabilidad | Sistema | Alta | Persistencia de artículos del carrito en almacenamiento local durante al menos 14 días consecutivos. |
| **RNF-TIE-036** | Fiabilidad | Sistema | Media | Copias de respaldo automatizadas cada 6 horas del estado de ventas, carritos y transacciones de caja. |
| **RNF-TIE-037** | Fiabilidad | Sistema | Alta | Tolerancia a caídas de pasarela principal con conmutación automática a pasarela de contingencia. |
| **RNF-TIE-038** | Fiabilidad | Sistema | Media | Manejo transparente de pérdida transitoria de red en terminales móviles sin congelamiento de interfaz. |
| **RNF-TIE-039** | Fiabilidad | Sistema | Crítica | Consistencia ACID estricta en el decremento de existencias durante la confirmación de la venta. |
| **RNF-TIE-040** | Fiabilidad | Sistema | Alta | Tiempo medio de recuperación ante fallas (MTTR) inferior a 15 minutos en infraestructura de nube. |
| **RNF-TIE-041** | Compatibilidad | Sistema | Alta | Compatibilidad total con Google Chrome, Mozilla Firefox, Microsoft Edge y Safari en versiones de escritorio y móviles. |
| **RNF-TIE-042** | Compatibilidad | Sistema | Alta | Compatibilidad con impresoras térmicas ESC/POS de 58 mm y 80 mm para emisión de comprobantes de caja. |
| **RNF-TIE-043** | Compatibilidad | Sistema | Alta | Soporte para pistolas lectoras de código de barras 1D y 2D USB y Bluetooth mediante emulación de teclado. |
| **RNF-TIE-044** | Compatibilidad | Sistema | Media | Compatibilidad con estándares de datos estructurados Schema.org (Product, Offer, AggregateRating) para SEO. |
| **RNF-TIE-045** | Compatibilidad | Sistema | Media | Optimización de metadatos OpenGraph y Twitter Cards para vista previa enriquecida en redes sociales. |
| **RNF-TIE-046** | Compatibilidad | Sistema | Media | Soporte para gaveta de dinero con apertura automática conectada a puerto RJ11 de impresora térmica. |
| **RNF-TIE-047** | Compatibilidad | Sistema | Media | Manejo correcto de codificación de caracteres UTF-8 sin caracteres corruptos en todo el catálogo. |
| **RNF-TIE-048** | Compatibilidad | Sistema | Alta | Arquitectura modular de estilos y scripts desacoplados en assets/css y assets/js sin frameworks pesados. |
| **RNF-TIE-049** | Compatibilidad | Sistema | Media | Compatibilidad con dispositivos de pago Transbank POS integrado y autónomo vía protocolo estándar. |
| **RNF-TIE-050** | Compatibilidad | Sistema | Alta | Integración API RESTful con subsistemas Bodega WMS, Tarjeta Financiera y Transporte Express. |

---

## 3. Requerimientos de Diseño, UI y Componentes (100 RD)

| ID | Componente / Elemento | Rol / Aplicación | Prioridad | Especificación de Diseño y Comportamiento UI/UX |
| :--- | :--- | :--- | :---: | :--- |
| **RD-TIE-001** | Sistema de Diseño | Diseño & UI | Alta | Paleta cromática con fondo oscuro Slate-950 (#020617), tarjetas Slate-900 y acento Violeta/Índigo (#6366f1 y #8b5cf6). |
| **RD-TIE-002** | Sistema de Diseño | Diseño & UI | Alta | Tipografía Outfit para titulares comerciales, precios destacados, banners y nombres de instrumentos. |
| **RD-TIE-003** | Sistema de Diseño | Diseño & UI | Alta | Tipografía Plus Jakarta Sans para descripciones técnicas, especificaciones y textos de formularios. |
| **RD-TIE-004** | Sistema de Diseño | Diseño & UI | Crítica | Tipografía monospaciada Share Tech Mono para SKUs, folios de boleta y números de transacción. |
| **RD-TIE-005** | Sistema de Diseño | Diseño & UI | Media | Radio de borde redondeado de 1.5rem (rounded-3xl) en tarjetas de producto y 0.75rem (rounded-xl) en botones e inputs. |
| **RD-TIE-006** | Sistema de Diseño | Diseño & UI | Media | Efectos de sombras suaves difusas (shadow-xl y shadow-indigo-500/10) al hacer hover sobre tarjetas de instrumentos. |
| **RD-TIE-007** | Sistema de Diseño | Diseño & UI | Crítica | Paleta semántica: Verde (#10b981) En Stock, Ámbar (#f59e0b) Pocas Unidades, Rojo (#ef4444) Agotado. |
| **RD-TIE-008** | Sistema de Diseño | Diseño & UI | Alta | Fondo de contraste oscuro premium para hacer destacar las maderas nobles y colores brillantes de las guitarras. |
| **RD-TIE-009** | Sistema de Diseño | Diseño & UI | Media | Scrollbars personalizadas con pista transparente y thumb violeta oscuro redondeado. |
| **RD-TIE-010** | Sistema de Diseño | Diseño & UI | Alta | Iconografía vectorial musical y comercial (guitarras, carritos, tarjetas, estrellas, cupones) con FontAwesome 6.5. |
| **RD-TIE-011** | Navegación | Diseño & UI | Alta | Barra de navegación principal fija (Sticky Header) con logotipo MusicPro Store, categorías, buscador y carrito. |
| **RD-TIE-012** | Navegación | Diseño & UI | Alta | Megamenú desplegable al pasar el cursor sobre 'Instrumentos' mostrando familias y marcas destacadas. |
| **RD-TIE-013** | Navegación | Diseño & UI | Media | Burbuja de conteo en icono de carrito (Cart Badge) que indica el número total de unidades agregadas. |
| **RD-TIE-014** | Navegación | Diseño & UI | Media | Botón de retorno rápido al Hub Central con icono de flecha hacia la izquierda y efecto hover índigo. |
| **RD-TIE-015** | Navegación | Diseño & UI | Alta | Selector de vista rápida entre Panel Admin POS y Catálogo Cliente desde la cabecera. |
| **RD-TIE-016** | Layout | Diseño & UI | Media | Contenedor maestro con ancho máximo de 80rem (max-w-7xl) centrado con márgenes simétricos. |
| **RD-TIE-017** | Layout | Diseño & UI | Alta | Cuadrícula de productos responsive: 1 columna en smartphones, 2 en tablets, 3 en laptops y 4 en pantallas amplias. |
| **RD-TIE-018** | Layout | Diseño & UI | Alta | Sidebar colapsable de filtros en catálogo con acordeones para Marca, Precio, Color y Disponibilidad. |
| **RD-TIE-019** | Layout | Diseño & UI | Media | Barra superior de promociones (Announcement Bar) con mensaje deslizante 'Envío Gratis sobre .990'. |
| **RD-TIE-020** | Layout | Diseño & UI | Baja | Pie de página institucional completo con sellos de seguridad bancaria, medios de pago y enlaces legales. |
| **RD-TIE-021** | Catálogo | Diseño & UI | Crítica | Tarjeta de producto (.product-card) con marco oscuro sutil, fondo de foto limpio y elevación suave al hover. |
| **RD-TIE-022** | Catálogo | Diseño & UI | Alta | Cinta diagonal de descuento (Discount Ribbon) en esquina superior izquierda con porcentaje de rebaja. |
| **RD-TIE-023** | Catálogo | Diseño & UI | Alta | Botón de corazón flotante (Wishlist Toggle) en esquina superior derecha para guardar producto a la lista de deseos. |
| **RD-TIE-024** | Catálogo | Diseño & UI | Alta | Despliegue claro de marca, modelo y precio normal tachado junto al precio oferta destacado en violeta. |
| **RD-TIE-025** | Catálogo | Diseño & UI | Media | Insignia 'Tarjeta MusicPro' con precio exclusivo y cálculo de cuotas sin interés. |
| **RD-TIE-026** | Catálogo | Diseño & UI | Alta | Botón de adición directa al carrito en tarjeta con icono de bolsa y microinteracción de éxito al presionar. |
| **RD-TIE-027** | Catálogo | Diseño & UI | Media | Muestras de color circulares (Color Swatches) en la parte inferior de la tarjeta para alternar acabados. |
| **RD-TIE-028** | Catálogo | Diseño & UI | Media | Estrellas de valoración promedio doradas junto al número de reseñas entre paréntesis. |
| **RD-TIE-029** | Catálogo | Diseño & UI | Alta | Píldora semáforo de stock (.stock-pill) en tarjeta: 'Stock Disponible' o 'sltimas 3 unidades'. |
| **RD-TIE-030** | Catálogo | Diseño & UI | Media | Efecto de cambio de imagen secundario (Second Image Reveal) al posar el cursor sobre la foto del instrumento. |
| **RD-TIE-031** | Ficha Producto | Diseño & UI | Crítica | Diseño en 2 columnas: Columna izquierda con galería de imágenes y columna derecha con panel de compra. |
| **RD-TIE-032** | Ficha Producto | Diseño & UI | Alta | Miniaturas verticales de galería con borde violeta en la imagen activa y transición suave al cambiar. |
| **RD-TIE-033** | Ficha Producto | Diseño & UI | Alta | Lente de aumento (Zoom Lens) que amplía detalles de vetas de madera al posar el cursor sobre la imagen principal. |
| **RD-TIE-034** | Ficha Producto | Diseño & UI | Alta | Título de producto en tipografía Outfit tamaño 3xl negrita con distintivo de marca oficial. |
| **RD-TIE-035** | Ficha Producto | Diseño & UI | Crítica | Bloque de precio destacado con tipografía gigante, desglose de IVA incluido y opciones de cuotas. |
| **RD-TIE-036** | Ficha Producto | Diseño & UI | Alta | Selector de acabados con botones de muestra real de color y etiqueta del nombre del acabado. |
| **RD-TIE-037** | Ficha Producto | Diseño & UI | Alta | Selector numérico de cantidad con botones grandes (+) y (-) protegidos contra stock máximo. |
| **RD-TIE-038** | Ficha Producto | Diseño & UI | Crítica | Botón principal 'Añadir al Carrito' con gradiente violeta a índigo, texto blanco y sombra luminosa. |
| **RD-TIE-039** | Ficha Producto | Diseño & UI | Media | Botón secundario 'Comprar Ahora' que inicia el checkout directo sin pasos intermedios. |
| **RD-TIE-040** | Ficha Producto | Diseño & UI | Alta | Pestañas de contenido inferior para: 'Especificaciones Técnicas', 'Muestras de Audio', 'Garantía' y 'Reseñas'. |
| **RD-TIE-041** | Carrito | Diseño & UI | Crítica | Drawer lateral deslizante desde la derecha (.cart-drawer) con backdrop oscuro difuminado (backdrop-blur-sm). |
| **RD-TIE-042** | Carrito | Diseño & UI | Alta | Encabezado de carrito con contador de artículos y botón circular de cierre con efecto hover. |
| **RD-TIE-043** | Carrito | Diseño & UI | Alta | Tarjeta individual por producto en carrito con miniatura, nombre, acabado, precio unitario y subtotal. |
| **RD-TIE-044** | Carrito | Diseño & UI | Alta | Selector de cantidad integrado en cada fila del carrito con actualización inmediata de precio. |
| **RD-TIE-045** | Carrito | Diseño & UI | Media | Botón con icono de papelera para eliminar ítem del carrito con confirmación suave. |
| **RD-TIE-046** | Carrito | Diseño & UI | Alta | Barra de progreso de envío gratis: 'Te faltan .000 para despacho gratis' con barra violeta animada. |
| **RD-TIE-047** | Carrito | Diseño & UI | Alta | Resumen financiero en pie de carrito: Subtotal, Descuentos aplicados, Envío estimado y Total final. |
| **RD-TIE-048** | Carrito | Diseño & UI | Crítica | Botón 'Proceder al Pago' de ancho completo con gradiente vibrante y microinteracción de clic. |
| **RD-TIE-049** | Carrito | Diseño & UI | Media | Sello de compra 100% segura con iconos de candado y certificados de encriptación. |
| **RD-TIE-050** | Carrito | Diseño & UI | Alta | Estado vacío de carrito con ilustración de funda vacía y botón 'Explorar Instrumentos'. |
| **RD-TIE-051** | Checkout | Diseño & UI | Crítica | Indicador de progreso de compra (Stepper) en 2 pasos: 1. Identificación y Entrega, 2. Pago y Confirmación. |
| **RD-TIE-052** | Checkout | Diseño & UI | Alta | Selector en tarjetas grandes para modalidad de entrega: 'Despacho a Domicilio' vs 'Retiro en Tienda'. |
| **RD-TIE-053** | Checkout | Diseño & UI | Alta | Desplegable de comunas de Chile con cálculo instantáneo del costo de envío correspondiente. |
| **RD-TIE-054** | Checkout | Diseño & UI | Alta | Selector de sucursal para retiro físico mostrando dirección, mapa pequeño y horario de atención. |
| **RD-TIE-055** | Checkout | Diseño & UI | Alta | Switch toggle para alternar entre solicitud de 'Boleta Electrónica' o 'Factura con RUT de Empresa'. |
| **RD-TIE-056** | Checkout | Diseño & UI | Crítica | Tarjetas de opciones de medios de pago con logotipos oficiales: Tarjeta MusicPro, Webpay, Transferencia. |
| **RD-TIE-057** | Checkout | Diseño & UI | Alta | Panel resumen de orden fijo en lateral derecho (Sticky Order Summary) visible durante todo el checkout. |
| **RD-TIE-058** | Checkout | Diseño & UI | Alta | Campo de cupón de descuento en checkout con validación en tiempo real y mensaje en verde de ahorro. |
| **RD-TIE-059** | Checkout | Diseño & UI | Alta | Pantalla de confirmación de compra exitosa con icono de check animado, número de orden #TIE y QR de retiro. |
| **RD-TIE-060** | Checkout | Diseño & UI | Media | Botón de descarga de comprobante y boleta en formato PDF tras finalizar el pedido exitosamente. |
| **RD-TIE-061** | POS & Admin | Diseño & UI | Crítica | Pantalla de caja POS con buscador superior prominente para lectura de código de barras por láser. |
| **RD-TIE-062** | POS & Admin | Diseño & UI | Crítica | Tabla compacta de ticket de venta en POS con filas alternadas, cálculo de subtotal y botón de descuento. |
| **RD-TIE-063** | POS & Admin | Diseño & UI | Alta | Teclado numérico virtual táctil en pantalla para ingreso rápido de montos recibidos en efectivo. |
| **RD-TIE-064** | POS & Admin | Diseño & UI | Alta | Display numérico gigante que muestra 'Total a Pagar', 'Monto Recibido' y 'Vuelto' en tipografía Share Tech Mono. |
| **RD-TIE-065** | POS & Admin | Diseño & UI | Alta | Tabla administrativa de pedidos con badges de estado: 'Pendiente', 'Pagado', 'En Tránsito', 'Entregado'. |
| **RD-TIE-066** | POS & Admin | Diseño & UI | Media | Encabezados de tabla con fondo slate-950, texto mayúscula tracking-wider y líneas sutiles. |
| **RD-TIE-067** | POS & Admin | Diseño & UI | Alta | Efecto hover en filas de tabla con iluminación violeta suave (hover:bg-violet-950/20). |
| **RD-TIE-068** | POS & Admin | Diseño & UI | Media | Paginador interactivo con botones redondeados y selector de filas por página (10, 25, 50, 100). |
| **RD-TIE-069** | POS & Admin | Diseño & UI | Alta | Menú de acciones rápidas por fila: Ver detalle de orden, Imprimir boleta, Reenviar correo, Anular. |
| **RD-TIE-070** | POS & Admin | Diseño & UI | Media | Barra de filtros avanzados con campos de fecha, sucursal emisora y rango de montos. |
| **RD-TIE-071** | Formularios | Diseño & UI | Alta | Inputs con fondo slate-900, borde slate-800, texto blanco legible y anillo de enfoque violeta brillante. |
| **RD-TIE-072** | Formularios | Diseño & UI | Alta | Formateo automático de RUT mientras el usuario escribe con puntos y guion (ej: 12.345.678-9). |
| **RD-TIE-073** | Formularios | Diseño & UI | Media | Indicador de seguridad de contraseña en registro mediante barra de colores (Débil, Media, Fuerte). |
| **RD-TIE-074** | Formularios | Diseño & UI | Alta | Visibilidad de contraseña con botón de ojo para alternar entre texto oculto y visible. |
| **RD-TIE-075** | Formularios | Diseño & UI | Media | Selectores desplegables personalizados con flecha violeta y opciones agrupadas por categoría. |
| **RD-TIE-076** | Formularios | Diseño & UI | Alta | Área de subida de fotos de productos con previsualización en miniatura y reordenamiento por arrastre. |
| **RD-TIE-077** | Formularios | Diseño & UI | Media | Interruptor toggle para activar o pausar campañas de cupones con animación fluida. |
| **RD-TIE-078** | Formularios | Diseño & UI | Alta | Mensajes de error en rojo bajo el input indicando exactamente la corrección necesaria. |
| **RD-TIE-079** | Formularios | Diseño & UI | Media | Etiquetas flotantes o fijas con asterisco violeta en campos de llenado obligatorio. |
| **RD-TIE-080** | Formularios | Diseño & UI | Baja | Botón de limpieza rápida (clear button) en campos de búsqueda de texto. |
| **RD-TIE-081** | Modales | Diseño & UI | Alta | Modales centrados con backdrop oscuro desenfocado (backdrop-blur-md) y animación de escala suave. |
| **RD-TIE-082** | Modales | Diseño & UI | Alta | Modal de Vista Rápida de Producto (Quick View) con foto, selector de color y botón de carrito sin salir del catálogo. |
| **RD-TIE-083** | Modales | Diseño & UI | Media | Modal de confirmación de anulación de boleta en POS con justificación requerida y botón de alerta. |
| **RD-TIE-084** | Notificaciones | Diseño & UI | Alta | Toasts emergentes en esquina inferior derecha: '¡Producto añadido al carrito!', con miniatura y botón de ver. |
| **RD-TIE-085** | Notificaciones | Diseño & UI | Media | Toast de alerta con borde amarillo cuando un cupón ingresado no cumple con el monto mínimo requerido. |
| **RD-TIE-086** | Feedback | Diseño & UI | Alta | Esqueletos de carga (Skeleton Loaders) con pulso gris en tarjetas de catálogo mientras se obtienen los datos. |
| **RD-TIE-087** | Feedback | Diseño & UI | Media | Spinner de carga circular violeta dentro del botón durante la llamada de procesamiento de pago. |
| **RD-TIE-088** | Feedback | Diseño & UI | Alta | Animación de sacudida (shake) en campo de cupón ante código inexistente o expirado. |
| **RD-TIE-089** | Feedback | Diseño & UI | Media | Efecto de micro-explosión de confeti o destello al confirmar la compra exitosa en la pantalla final. |
| **RD-TIE-090** | Feedback | Diseño & UI | Alta | Banner fijo de advertencia en cabecera si una sucursal seleccionada se encuentra cerrada por feriado. |
| **RD-TIE-091** | Impresión | Diseño & UI | Crítica | Estilos CSS para impresión (@media print) optimizados para formato térmico de 80mm de ancho para boletas POS. |
| **RD-TIE-092** | Impresión | Diseño & UI | Alta | Formato de factura electrónica en hoja tamaño carta con logo MusicPro, desglose contable y timbre SII. |
| **RD-TIE-093** | Impresión | Diseño & UI | Media | Eliminación completa de colores de fondo, imágenes pesadas y elementos interactivos al imprimir. |
| **RD-TIE-094** | Comprobantes | Diseño & UI | Alta | Código de barras Code 128 nítido en pie de ticket de cambio para lectura en pistola lectora. |
| **RD-TIE-095** | Comprobantes | Diseño & UI | Media | Código QR de alta resolución con enlace directo a la verificación electrónica de la boleta en el SII. |
| **RD-TIE-096** | Estilo & Detalle | Diseño & UI | Baja | Efecto de brillo holográfico sutil en badge de productos calificados como 'Edición Limitada'. |
| **RD-TIE-097** | Estilo & Detalle | Diseño & UI | Media | Bordes sutiles con tinte violeta en elementos seleccionados (border-violet-500/30). |
| **RD-TIE-098** | Estilo & Detalle | Diseño & UI | Baja | Indicador de versión del sistema y estado de conexión en la esquina inferior izquierda del POS. |
| **RD-TIE-099** | Estilo & Detalle | Diseño & UI | Alta | Alineación perfecta de cifras monetarias a la derecha en todas las tablas y desgloses de compra. |
| **RD-TIE-100** | Estilo & Detalle | Diseño & UI | Crítica | Garantía absoluta de consistencia de clases utilitarias Vanilla Tailwind CSS en toda la tienda. |
