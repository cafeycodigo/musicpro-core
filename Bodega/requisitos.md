# Especificación Exhaustiva de Requisitos - Bodega WMS

Este documento contiene la matriz completa de requisitos de software para **Bodega WMS**, totalizando 250 especificaciones formales (100 Requerimientos Funcionales, 50 Requerimientos No Funcionales y 100 Requerimientos de Diseño, UI y Componentes) estructurados para los roles de **Administrador**, **Mantenedores** y **Clientes**.

> 💡 Para consultar estos requisitos de forma interactiva con filtros en tiempo real, abre [requerimientos.html](requerimientos.html).

---

## 1. Requerimientos Funcionales (100 RF)

| ID | Nombre del Requisito | Rol / Ámbito | Prioridad | Especificación Detallada |
| :--- | :--- | :--- | :---: | :--- |
| **RF-BOD-001** | Alta de SKU Único | Administrador | Crítica | Generación y registro obligatorio de código SKU alfanumérico único para cada artículo musical o accesorio. |
| **RF-BOD-002** | Escaneo de Código de Barras EAN-13 | Mantenedor | Alta | Validación y captura de código EAN-13 mediante lector óptico o teclado con validación de dígito verificador. |
| **RF-BOD-003** | Descripción Técnica y Comercial | Mantenedor | Media | Campos para nombre comercial, marca, modelo, país de origen y descripción detallada del instrumento. |
| **RF-BOD-004** | Clasificación Jerárquica | Mantenedor | Alta | Asignación de categoría principal (Guitarras, Percusión, Teclados, Audio) y subcategoría específica. |
| **RF-BOD-005** | Control de Costo de Reposición | Administrador | Alta | Registro de costo promedio ponderado y último costo de compra en moneda nacional. |
| **RF-BOD-006** | Parametrización de Stock Mínimo | Administrador | Alta | Definición de umbral de stock mínimo para emisión automática de sugerencias de compra. |
| **RF-BOD-007** | Stock de Seguridad por Demanda | Administrador | Media | Configuración de stock de reserva para amortiguar picos de demanda estacional. |
| **RF-BOD-008** | Punto de Reorden Automático | Administrador | Alta | Cálculo automático del punto de reposición considerando lead time de proveedores. |
| **RF-BOD-009** | Unidad de Medida y Presentación | Mantenedor | Media | Soporte para unidades base (UN), cajas master, sets y pares con factores de conversión. |
| **RF-BOD-010** | Cálculo Volumétrico y Peso | Mantenedor | Alta | Registro de peso bruto, tara, dimensiones (largo x ancho x alto cm) y volumen en metros cúbicos. |
| **RF-BOD-011** | Control de Fragilidad y Estibabilidad | Mantenedor | Alta | Clasificación de productos frágiles (pianos, amplificadores de tubo) y número máximo de camas de estiba. |
| **RF-BOD-012** | Gestión de Números de Serie | Mantenedor | Crítica | Captura obligatoria de serial number individual para instrumentos de alta gama (guitarras custom, mixers). |
| **RF-BOD-013** | Gestión de Lotes y Vencimientos | Mantenedor | Media | Control de lote y fecha de vencimiento para insumos consumibles (cuerdas, limpiadores, lubricantes). |
| **RF-BOD-014** | Asociación de Proveedores Homologados | Administrador | Media | Vinculación de múltiples proveedores por artículo indicando código de proveedor y prioridad. |
| **RF-BOD-015** | Galería Multimedia de Producto | Mantenedor | Media | Carga de hasta 5 fotografías de referencia y manual de usuario en formato PDF. |
| **RF-BOD-016** | Artículos Sustitutos y Equivalentes | Mantenedor | Media | Configuración de productos alternativos para sustitución inmediata ante quiebre de stock. |
| **RF-BOD-017** | Definición de Combos y Kits | Mantenedor | Media | Agrupación de artículos para conformación de packs promocionales (guitarra + funda + afinador). |
| **RF-BOD-018** | Desactivación Lógica de Artículos | Administrador | Alta | Inactivación de SKUs descontinuados impidiendo nuevos ingresos pero manteniendo historial. |
| **RF-BOD-019** | Auditoría de Modificaciones de Ficha | Administrador | Crítica | Log inmutable con usuario, fecha, hora y campos modificados en la ficha del artículo. |
| **RF-BOD-020** | Etiquetado Térmico de SKU | Mantenedor | Alta | Generación de etiquetas autoadhesivas con código de barras, SKU y nombre para rotulado de bultos. |
| **RF-BOD-021** | Búsqueda Predictiva de Artículos | Mantenedor | Alta | Buscador rápido con autocompletado por fragmento de SKU, nombre, marca o código de barras. |
| **RF-BOD-022** | Exportación de Catálogo Maestro | Mantenedor | Media | Descarga del catálogo completo en formato CSV o Excel con todos los atributos maestros. |
| **RF-BOD-023** | Importación Masiva de Artículos | Administrador | Alta | Carga de planilla de actualización masiva con previsualización y validación de errores. |
| **RF-BOD-024** | Control de Garantía de Fábrica | Mantenedor | Baja | Registro del período de cobertura de garantía de fabricante en meses por producto. |
| **RF-BOD-025** | Indicador de Rotación ABC | Mantenedor | Alta | Cálculo automático de clasificación ABC según frecuencia de movimiento y valor monetario. |
| **RF-BOD-026** | Definición de Almacenes y Bodegas | Administrador | Crítica | Creación de bodegas lógicas y físicas (Central, Pulmón, Sucursal, Cuarentena, Taller). |
| **RF-BOD-027** | Codificación Estructurada de Ubicaciones | Mantenedor | Alta | Estructura de ubicación compuesta por Zona-Pasillo-Rack-Nivel-Posición (Ej: Z1-P03-R02-N4-P1). |
| **RF-BOD-028** | Capacidad Máxima de Carga por Posición | Mantenedor | Crítica | Límite en kilogramos soportados por posición de rack con advertencia de sobrecarga. |
| **RF-BOD-029** | Límite Volumétrico por Slot | Mantenedor | Alta | Capacidad máxima en metros cúbicos utilizables por nicho de estantería. |
| **RF-BOD-030** | Clasificación de Tipo de Ubicación | Mantenedor | Media | Tipos de posición: Pallet estándar, estante de picking liviano, suelo de apilamiento, jaula cerrada. |
| **RF-BOD-031** | Zona de Cuarentena y Calidad | Administrador | Alta | Ubicaciones especiales bloqueadas para artículos en inspección o recepción no conforme. |
| **RF-BOD-032** | Zona de Mermas y Scrap | Administrador | Media | Ubicación destinada a productos deteriorados pendientes de baja contable o reciclaje. |
| **RF-BOD-033** | Zona de Cross-Docking | Mantenedor | Alta | Área de tránsito rápido para mercadería con despacho inmediato sin almacenaje en rack. |
| **RF-BOD-034** | Generación de Código de Barras de Ubicación | Mantenedor | Alta | Impresión de etiquetas con código de barras para fijación física en perfiles de estantería. |
| **RF-BOD-035** | Validación de Slot en Put-Away | Mantenedor | Crítica | Lectura obligatoria del código de rack al posicionar mercadería para asegurar coincidencia. |
| **RF-BOD-036** | Reubicación Interna entre Posiciones | Mantenedor | Alta | Traslado de stock entre ubicaciones con actualización inmediata del mapa de bodega. |
| **RF-BOD-037** | Consolidación de Pallets | Mantenedor | Media | Unificación de bultos parciales en una sola posición para optimizar espacio disponible. |
| **RF-BOD-038** | Bloqueo Temporal de Pasillos | Administrador | Alta | Bloqueo operativo de pasillo por mantención de montacargas o inventario físico. |
| **RF-BOD-039** | Visualizador 2D de Racks | Mantenedor | Alta | Vista gráfica interactiva de niveles y nichos con semáforo de ocupación porcentual. |
| **RF-BOD-040** | Filtro de Ubicaciones Disponibles | Mantenedor | Alta | Listado de slots libres filtrados por capacidad de peso, altura y cercanía a zona de despacho. |
| **RF-BOD-041** | Sugerencia Automática de Ubicación | Administrador | Alta | Algoritmo de recomendación de slot óptimo según rotación ABC y peso del artículo. |
| **RF-BOD-042** | Control de Altura de Pallet | Mantenedor | Media | Validación de despeje vertical según sensor o tope físico del nivel de estantería. |
| **RF-BOD-043** | Asignación de Ubicación Fija de Picking | Mantenedor | Alta | Configuración de slot primario de extracción rápida por SKU de alta demanda. |
| **RF-BOD-044** | Reabastecimiento de Zona de Picking | Mantenedor | Alta | Alertas de reposición desde racks de almacenamiento hacia ubicaciones de picking liviano. |
| **RF-BOD-045** | Cálculo de Ocupación Global de Bodega | Administrador | Alta | Métrica porcentual de m³ ocupados vs disponibles en el almacén en tiempo real. |
| **RF-BOD-046** | Historial de Movimientos por Posición | Mantenedor | Media | Trazabilidad de qué artículos han sido almacenados en un slot específico. |
| **RF-BOD-047** | Compatibilidad de Familias en Rack | Mantenedor | Alta | Reglas para evitar almacenar químicos cerca de maderas finas o instrumentos acústicos. |
| **RF-BOD-048** | Zonificación por Temperatura y Humedad | Mantenedor | Media | Ubicaciones especiales con monitoreo para pianos de cola y cuerdas de alta precisión. |
| **RF-BOD-049** | Desasignación Masiva de Ubicaciones | Administrador | Baja | Limpieza de slots vacíos para permitir redistribución de layouts de pasillos. |
| **RF-BOD-050** | Consulta Rápida por Escaneo de Slot | Mantenedor | Alta | Al escanear un rack, despliegue inmediato del listado de SKUs y cantidades albergadas. |
| **RF-BOD-051** | Recepción con Orden de Compra | Mantenedor | Crítica | Ingreso de mercadería validando cantidades contra documento de compra a proveedor. |
| **RF-BOD-052** | Registro de Discrepancias en Recepción | Mantenedor | Alta | Generación de acta de faltantes o sobrantes al momento de descargar el camión proveedor. |
| **RF-BOD-053** | Control de Bultos Dañados en Arribo | Mantenedor | Alta | Rechazo de bultos rotos y traspaso directo a zona de no conformidades. |
| **RF-BOD-054** | Ingreso por Devolución de Cliente (RMA) | Mantenedor | Alta | Reincorporación de artículos probados en taller con estado apto para la venta. |
| **RF-BOD-055** | Ajuste Positivo por Inventario Físico | Administrador | Crítica | Ingreso justificado de unidades sobrantes tras recuento cíclico auditado. |
| **RF-BOD-056** | Ajuste Negativo por Faltante | Administrador | Crítica | Rebaja de stock por robo, extravío o descalce con aprobación obligatoria de jefatura. |
| **RF-BOD-057** | Baja por Merma de Obsolescencia | Mantenedor | Media | Salida de stock por productos descontinuados con informe técnico de baja. |
| **RF-BOD-058** | Baja por Rotura Interna | Mantenedor | Alta | Registro de instrumentos dañados en manipulación interna con detalle de causante. |
| **RF-BOD-059** | Salida por Muestra Comercial | Mantenedor | Media | Despacho de artículos para exhibición en ferias o endorsers musicales. |
| **RF-BOD-060** | Salida a Servicio Técnico Externo | Mantenedor | Alta | Despacho temporal de equipos para calibración o reparación por garantía. |
| **RF-BOD-061** | Reingreso desde Servicio Técnico | Mantenedor | Alta | Retorno de unidades reparadas con actualización de su estado y ubicación asignada. |
| **RF-BOD-062** | Motivos de Ajuste Parametrizados | Administrador | Alta | Catálogo de causas de ajuste vinculadas a cuentas contables de imputación. |
| **RF-BOD-063** | Niveles de Autorización de Mermas | Administrador | Crítica | Regla de aprobación dual si el monto de la merma supera .000 CLP. |
| **RF-BOD-064** | Kardex Físico y Valorado | Mantenedor | Crítica | Visualización cronológica de entradas, salidas, saldos físicos y valorizados por SKU. |
| **RF-BOD-065** | Filtro de Kardex por Rango de Fechas | Mantenedor | Alta | Exportación de movimientos entre fechas con filtros por tipo de operación. |
| **RF-BOD-066** | Bloqueo de Stock para Inventario Rotativo | Mantenedor | Alta | Congelamiento temporal de movimientos en pasillos asignados a recuento físico. |
| **RF-BOD-067** | Carga de Conteo Cíclico | Mantenedor | Alta | Ingreso de conteos manuales mediante escáner y comparación contra saldo del sistema. |
| **RF-BOD-068** | Informe de Variaciones de Stock | Administrador | Alta | Cálculo automático de porcentajes de exactitud de registro de inventario (ERI). |
| **RF-BOD-069** | Emisión de Comprobante de Movimiento | Mantenedor | Alta | Generación de voucher foliado para respaldo físico firmado de traslados. |
| **RF-BOD-070** | Trazabilidad de Serial en Movimientos | Mantenedor | Crítica | Asociación del número de serie en cada paso de recepción, rack y despacho. |
| **RF-BOD-071** | Reversión de Movimiento Erróneo | Mantenedor | Crítica | Anulación justificada de movimiento de stock con registro contable compensatorio. |
| **RF-BOD-072** | Auditoría de Sobregiros de Stock | Administrador | Crítica | Alerta y bloqueo ante intentos de salida de stock superior a la existencia real. |
| **RF-BOD-073** | Notificación de Quiebre de Stock | Mantenedor | Alta | Aviso emergente automático cuando el saldo disponible llega a cero. |
| **RF-BOD-074** | Cálculo de Costo Promedio Ponderado | Mantenedor | Alta | Actualización matemática del costo de inventario con cada recepción de compra. |
| **RF-BOD-075** | Cierre Mensual de Inventario | Administrador | Crítica | Generación de balance de existencias y valorización total al último día del mes. |
| **RF-BOD-076** | Catálogo Consultivo con Semáforo | Cliente | Crítica | Visualización de disponibilidad en tiempo real: Verde (disponible), Amarillo (bajo stock), Rojo (agotado). |
| **RF-BOD-077** | Buscador de Repuestos y Accesorios | Cliente | Alta | Búsqueda por texto y categoría de repuestos originales de instrumentos. |
| **RF-BOD-078** | Creación de Solicitud de Despacho | Cliente | Crítica | Armado de pedido con selección de sucursal destino, artículos y cantidades. |
| **RF-BOD-079** | Asignación de Prioridad de Despacho | Cliente | Alta | Selección de prioridad (Normal 48h, Urgente 24h, Quiebre en Tienda). |
| **RF-BOD-080** | Fecha Requerida de Entrega | Cliente | Alta | Selección en calendario de la fecha máxima permitida para arribo a sucursal. |
| **RF-BOD-081** | Validación de Stock en Tiempo Real | Cliente | Alta | Bloqueo de adición si la cantidad requerida supera el saldo libre de bodega. |
| **RF-BOD-082** | Borrador de Solicitud | Cliente | Media | Guardado temporal de solicitudes para edición y envío posterior. |
| **RF-BOD-083** | Aprobación de Solicitudes B2B | Administrador | Crítica | Revisión, ajuste de cantidades y autorización de pedidos de sucursales. |
| **RF-BOD-084** | Rechazo Justificado de Pedido | Administrador | Alta | Cancelación de solicitud con comentario explicativo enviado al solicitante. |
| **RF-BOD-085** | Generación de Ola de Picking | Mantenedor | Alta | Agrupación de múltiples solicitudes para recolección conjunta por pasillos. |
| **RF-BOD-086** | Hoja de Ruta de Extracción (Pick-List) | Mantenedor | Alta | Orden secuencial de posiciones de rack para minimizar traslados del operario. |
| **RF-BOD-087** | Confirmación de Picking por Escaneo | Mantenedor | Crítica | Verificación de SKU y cantidad mediante pistola láser antes de consolidar. |
| **RF-BOD-088** | Empaque y Generación de Bultos | Mantenedor | Alta | Agrupación de artículos recolectados en cajas y asignación de etiqueta de bulto. |
| **RF-BOD-089** | Pesaje y Cubicaje de Despacho | Mantenedor | Media | Pesaje en balanza industrial y registro del peso final para transporte. |
| **RF-BOD-090** | Emisión de Guía de Despacho Interna | Mantenedor | Crítica | Generación de guía de despacho valorizada para traslado en carretera. |
| **RF-BOD-091** | Entrega a Chofer de Transporte | Mantenedor | Alta | Asignación de guía y bultos a la patente del vehículo de distribución. |
| **RF-BOD-092** | Monitoreo de Estado del Pedido | Cliente | Crítica | Tracking visual de la solicitud: En Revisión -> En Picking -> En Tránsito -> Recibido. |
| **RF-BOD-093** | Confirmación de Recepción en Destino | Cliente | Crítica | Validación de recepción de bultos en sucursal con lector o check manual. |
| **RF-BOD-094** | Reporte de Discrepancias en Destino | Cliente | Alta | Notificación de cajas abiertas, dañadas o faltantes al recibir en tienda. |
| **RF-BOD-095** | Firma Digital de Recepción | Cliente | Alta | Captura de firma de encargado de tienda y RUT de quien recepciona. |
| **RF-BOD-096** | Historial de Despachos Recibidos | Cliente | Media | Archivo histórico de pedidos completados con descarga de guías asociadas. |
| **RF-BOD-097** | Indicador de Cumplimiento OTIF | Administrador | Alta | Métricas de entregas completas y a tiempo (On-Time In-Full) hacia sucursales. |
| **RF-BOD-098** | Alerta de Solicitudes Pendientes | Administrador | Alta | Aviso preventivo si una solicitud lleva más de 24 horas sin ser procesada. |
| **RF-BOD-099** | Autenticación de Encargados de Tienda | Cliente | Crítica | Inicio de sesión exclusivo por sucursal con restricción de acceso a otras tiendas. |
| **RF-BOD-100** | Reporte de Despachos por Sucursal | Administrador | Media | Informe mensual de volumen en unidades y valor monetario transferido por tienda. |

---

## 2. Requerimientos No Funcionales (50 RNF)

| ID | Categoría | Rol / Impacto | Prioridad | Criterio de Medición y Aceptación |
| :--- | :--- | :--- | :---: | :--- |
| **RNF-BOD-001** | Rendimiento | Sistema | Alta | Tiempo de respuesta en búsquedas de SKU inferior a 150 milisegundos en tablas de 1.000 ítems. |
| **RNF-BOD-002** | Rendimiento | Sistema | Alta | Carga completa de la interfaz de picking en terminales móviles en menos de 1.0 segundo. |
| **RNF-BOD-003** | Rendimiento | Sistema | Media | Generación y renderizado de reportes Kardex de hasta 10.000 filas en menos de 2.5 segundos. |
| **RNF-BOD-004** | Rendimiento | Sistema | Media | Exportación de inventario maestro a formato CSV procesado en menos de 1.5 segundos. |
| **RNF-BOD-005** | Rendimiento | Sistema | Media | Consumo de memoria RAM de la pestaña del navegador inferior a 85 MB bajo uso continuo. |
| **RNF-BOD-006** | Rendimiento | Sistema | Media | Tasa de cuadros de renderizado a 60 FPS en animaciones y desplazamientos de tablas densas. |
| **RNF-BOD-007** | Rendimiento | Sistema | Crítica | Soporte concurrente de hasta 50 operarios bodegueros realizando escaneos simultáneos. |
| **RNF-BOD-008** | Rendimiento | Sistema | Alta | Latencia de validación de slot en put-away inferior a 80 milisegundos. |
| **RNF-BOD-009** | Rendimiento | Sistema | Media | Optimización de carga diferida (lazy-loading) en visualización 2D de racks de almacenamiento. |
| **RNF-BOD-010** | Rendimiento | Sistema | Alta | Tiempo de respuesta de actualización de semáforo de catálogo inferior a 100 ms. |
| **RNF-BOD-011** | Seguridad | Sistema | Crítica | Autenticación basada en roles estrictos (Administrador, Mantenedor de Bodega, Receptor de Sucursal). |
| **RNF-BOD-012** | Seguridad | Sistema | Crítica | Registro inmutable de auditoría para cada movimiento de inventario, merma o ajuste contable. |
| **RNF-BOD-013** | Seguridad | Sistema | Alta | Expiración automática de sesión tras 20 minutos de inactividad en terminales compartidas. |
| **RNF-BOD-014** | Seguridad | Sistema | Crítica | Protección contra inyecciones de código en campos de búsqueda de SKU y códigos de barras. |
| **RNF-BOD-015** | Seguridad | Sistema | Crítica | Restricción de modificación de costos unitarios reservada únicamente para jefatura de almacén. |
| **RNF-BOD-016** | Seguridad | Sistema | Alta | Firma criptográfica SHA-256 en comprobantes de despacho y guías electrónicas. |
| **RNF-BOD-017** | Seguridad | Sistema | Media | Enmascaramiento de datos sensibles de proveedores en vistas de operarios de patio. |
| **RNF-BOD-018** | Seguridad | Sistema | Alta | Bloqueo temporal de usuario tras 5 intentos fallidos consecutivos de inicio de sesión. |
| **RNF-BOD-019** | Seguridad | Sistema | Media | Trazabilidad obligatoria de dirección IP y MAC de terminales industriales de radiofrecuencia. |
| **RNF-BOD-020** | Seguridad | Sistema | Crítica | Prohibición estricta de saldos negativos de stock a nivel de reglas lógicas del frontend. |
| **RNF-BOD-021** | Usabilidad | Sistema | Crítica | Compatibilidad plug-and-play con pistolas lectoras de código de barras USB y Bluetooth (emulación teclado). |
| **RNF-BOD-022** | Usabilidad | Sistema | Alta | Contraste visual de texto que cumpla con el estándar WCAG 2.1 nivel AAA para baja iluminación en pasillos. |
| **RNF-BOD-023** | Usabilidad | Sistema | Alta | Botones táctiles con área de toque mínima de 48x48 píxeles para operarios con guantes de seguridad. |
| **RNF-BOD-024** | Usabilidad | Sistema | Alta | Retroalimentación sonora diferenciada: tono agudo para lectura exitosa y tono grave para error de escaneo. |
| **RNF-BOD-025** | Usabilidad | Sistema | Media | Soporte completo de navegación por teclado mediante teclas de función (F1: Ayuda, F2: Escanear, F4: Guardar). |
| **RNF-BOD-026** | Usabilidad | Sistema | Media | Mensajes de error redactados en lenguaje claro indicando acción correctiva requerida. |
| **RNF-BOD-027** | Usabilidad | Sistema | Alta | Visualización de semáforo de disponibilidad intuitivo sin dependencia exclusiva del color (uso de iconos). |
| **RNF-BOD-028** | Usabilidad | Sistema | Alta | Interfaz de usuario disponible 100% en español con terminología estándar de logística (WMS). |
| **RNF-BOD-029** | Usabilidad | Sistema | Alta | Diseño adaptativo fluido optimizado para tablets industriales de montacargas (1024x768). |
| **RNF-BOD-030** | Usabilidad | Sistema | Crítica | Mantenimiento del foco automático en el campo de escaneo tras cada lectura de bulto. |
| **RNF-BOD-031** | Fiabilidad | Sistema | Crítica | Integridad referencial absoluta entre movimientos de Kardex y saldos físicos de racks. |
| **RNF-BOD-032** | Fiabilidad | Sistema | Crítica | Manejo de desconexión transitoria de red Wi-Fi en pasillos mediante cola local de lecturas pendientes. |
| **RNF-BOD-033** | Fiabilidad | Sistema | Crítica | Idempotencia en registros de recepción para evitar duplicación de existencias por doble clic. |
| **RNF-BOD-034** | Fiabilidad | Sistema | Alta | Disponibilidad de servicio requerida del 99.9% durante turnos operativos de almacén (24/7). |
| **RNF-BOD-035** | Fiabilidad | Sistema | Alta | Validación estricta de formato EAN-13 calculando y verificando el dígito verificador módulo 10. |
| **RNF-BOD-036** | Fiabilidad | Sistema | Media | Copias de seguridad del estado de inventario generables en menos de 60 segundos. |
| **RNF-BOD-037** | Fiabilidad | Sistema | Alta | Bloqueo optimista en actualizaciones concurrentes de stock para evitar condiciones de carrera. |
| **RNF-BOD-038** | Fiabilidad | Sistema | Media | Persistencia automática de borradores de pedidos en sucursal ante cierre accidental del navegador. |
| **RNF-BOD-039** | Fiabilidad | Sistema | Media | Recuperación automática de estado ante reinicio forzado del dispositivo colector. |
| **RNF-BOD-040** | Fiabilidad | Sistema | Media | Tolerancia a caídas de periféricos sin congelamiento de la aplicación web. |
| **RNF-BOD-041** | Compatibilidad | Sistema | Alta | Compatibilidad total con Google Chrome v95+, Mozilla Firefox v90+, Microsoft Edge v95+. |
| **RNF-BOD-042** | Compatibilidad | Sistema | Crítica | Soporte en navegadores webkit embebidos en terminales móviles Android 10+ (Zebra TC26, Honeywell EDA51). |
| **RNF-BOD-043** | Compatibilidad | Sistema | Media | Cumplimiento estricto de estándares W3C en código HTML5 semántico y CSS3. |
| **RNF-BOD-044** | Compatibilidad | Sistema | Alta | Independencia de frameworks pesados para permitir ejecución en hardware con recursos limitados. |
| **RNF-BOD-045** | Compatibilidad | Sistema | Alta | Impresión directa de etiquetas compatible con impresoras Zebra (ZPL) y genéricas vía spooler del OS. |
| **RNF-BOD-046** | Compatibilidad | Sistema | Alta | Resolución mínima de pantalla soportada de 360x640 píxeles sin pérdida de funcionalidades críticas. |
| **RNF-BOD-047** | Compatibilidad | Sistema | Media | Tipografía monospaciada estándar para códigos SKU, evitando desajustes de caracteres. |
| **RNF-BOD-048** | Compatibilidad | Sistema | Alta | Empaquetado modular de activos en ssets/css/ y ssets/js/ sin dependencias cruzadas. |
| **RNF-BOD-049** | Compatibilidad | Sistema | Media | Capacidad de operación en modo pantalla completa (Kiosko) en terminales de mesón de recepción. |
| **RNF-BOD-050** | Compatibilidad | Sistema | Alta | Manejo de zonas horarias estándar UTC-4 / UTC-3 (Chile Continental) para fechas de auditoría. |

---

## 3. Requerimientos de Diseño, UI y Componentes (100 RD)

| ID | Componente / Elemento | Rol / Aplicación | Prioridad | Especificación de Diseño y Comportamiento UI/UX |
| :--- | :--- | :--- | :---: | :--- |
| **RD-BOD-001** | Sistema de Diseño | Diseño & UI | Alta | Paleta cromática con fondo oscuro Slate-900 (#0f172a) y contraste Amber-500 (#f59e0b). |
| **RD-BOD-002** | Sistema de Diseño | Diseño & UI | Alta | Uso exclusivo de tipografía Plus Jakarta Sans para elementos de lectura y formularios. |
| **RD-BOD-003** | Sistema de Diseño | Diseño & UI | Alta | Uso de Outfit en titulares y números de métricas para brindar estética moderna y limpia. |
| **RD-BOD-004** | Sistema de Diseño | Diseño & UI | Crítica | Uso de Share Tech Mono en códigos SKU, códigos de barra y coordenadas de pasillo. |
| **RD-BOD-005** | Sistema de Diseño | Diseño & UI | Media | Bordes redondeados de tarjetas con radio consistente de 1.5rem (rounded-3xl) y 0.75rem (rounded-xl). |
| **RD-BOD-006** | Sistema de Diseño | Diseño & UI | Media | Sombras suaves con elevación difusa (shadow-xl y shadow-2xl con tinte de color de acento). |
| **RD-BOD-007** | Sistema de Diseño | Diseño & UI | Crítica | Paleta semántica: Verde (#10b981) óptimo, Amarillo (#f59e0b) advertencia, Rojo (#ef4444) crítico. |
| **RD-BOD-008** | Sistema de Diseño | Diseño & UI | Alta | Modo oscuro nativo en panel de administración para reducir fatiga visual en turnos nocturnos. |
| **RD-BOD-009** | Sistema de Diseño | Diseño & UI | Media | Scrollbars personalizadas con pista transparente y thumb gris pizarra redondeado. |
| **RD-BOD-010** | Sistema de Diseño | Diseño & UI | Alta | Uso de iconos SVG vectoriales mediante biblioteca FontAwesome 6.5.1 Pro/Free. |
| **RD-BOD-011** | Componente UI | Diseño & UI | Alta | Sidebar de navegación colapsable con ancho fijo de 16rem (w-64) y enlaces interactivos. |
| **RD-BOD-012** | Componente UI | Diseño & UI | Alta | Header superior fijo de 4rem de altura (h-16) con migas de pan (breadcrumbs) jerárquicas. |
| **RD-BOD-013** | Componente UI | Diseño & UI | Media | Badge de estado WMS en sidebar indicando rol activo (Back-Office Admin vs Portal Sucursal). |
| **RD-BOD-014** | Componente UI | Diseño & UI | Crítica | Píldora semáforo de stock (.stock-pill) con icono de círculo y texto en negrita superior. |
| **RD-BOD-015** | Componente UI | Diseño & UI | Alta | Tarjeta de KPI de stock con icono en recuadro traslúcido, valor numérico en texto 3xl y tendencia. |
| **RD-BOD-016** | Componente UI | Diseño & UI | Crítica | Tabla WMS compacta (.wms-table-compact) con padding vertical reducido para maximizar líneas visibles. |
| **RD-BOD-017** | Componente UI | Diseño & UI | Media | Encabezados de tabla con fondo pizarra oscuro, texto en mayúsculas pequeñas (tracking-wider) y borde inferior. |
| **RD-BOD-018** | Componente UI | Diseño & UI | Media | Efecto hover en filas de tabla con cambio sutil de luminosidad (hover:bg-slate-800/60). |
| **RD-BOD-019** | Componente UI | Diseño & UI | Alta | Fila destacada con borde izquierdo coloreado de 4px para indicar registros con discrepancias o alerta. |
| **RD-BOD-020** | Componente UI | Diseño & UI | Media | Paginador interactivo con botones de anterior/siguiente y numeración de página activa resaltada. |
| **RD-BOD-021** | Componente UI | Diseño & UI | Alta | Campo de búsqueda con icono de lupa integrado en el interior izquierdo y botón de limpieza rápida. |
| **RD-BOD-022** | Componente UI | Diseño & UI | Media | Selectores desplegables estilizados con flecha personalizada y anillo de enfoque ámbar al hacer clic. |
| **RD-BOD-023** | Componente UI | Diseño & UI | Alta | Inputs de formulario con fondo slate-800, borde slate-700 y texto blanco legible. |
| **RD-BOD-024** | Componente UI | Diseño & UI | Media | Indicador de campo obligatorio mediante asterisco rojo y texto de ayuda complementario en gris. |
| **RD-BOD-025** | Componente UI | Diseño & UI | Media | Switch de alternancia (toggle switch) con animación deslizante suave para activar/desactivar SKUs. |
| **RD-BOD-026** | Componente UI | Diseño & UI | Crítica | Modal de confirmación centrado con backdrop oscuro difuminado (backdrop-blur-sm). |
| **RD-BOD-027** | Componente UI | Diseño & UI | Media | Botón de cierre (X) en modales con efecto hover circular y animación de giro sutil. |
| **RD-BOD-028** | Componente UI | Diseño & UI | Alta | Contenedor de notificaciones flotantes (Toasts) ubicado en la esquina inferior derecha. |
| **RD-BOD-029** | Componente UI | Diseño & UI | Alta | Toast con icono semántico según estado (éxito verde, alerta amarilla, error rojo). |
| **RD-BOD-030** | Componente UI | Diseño & UI | Alta | Barra de progreso de capacidad en racks con transición fluida de anchura (transition-all). |
| **RD-BOD-031** | Componente UI | Diseño & UI | Alta | Visualizador de estantería en cuadrícula que simula los 4 niveles verticales de almacenamiento. |
| **RD-BOD-032** | Componente UI | Diseño & UI | Alta | Nicho de rack individual con borde punteado si está vacío y borde sólido con badge si está ocupado. |
| **RD-BOD-033** | Componente UI | Diseño & UI | Media | Tooltip emergente al pasar el cursor sobre un nicho mostrando SKU albergado, cantidad y peso. |
| **RD-BOD-034** | Componente UI | Diseño & UI | Alta | Tarjeta de artículo en catálogo con imagen enmarcada, código de barra simulado y botón de solicitud. |
| **RD-BOD-035** | Componente UI | Diseño & UI | Media | Badge de categoría de producto con colores pastel diferenciados (Cuerdas: Azul, Audio: Violeta). |
| **RD-BOD-036** | Componente UI | Diseño & UI | Alta | Selector de cantidades numéricas con botones de más (+) y menos (-) táctiles grandes. |
| **RD-BOD-037** | Componente UI | Diseño & UI | Alta | Resumen de solicitud en panel lateral con subtotal de unidades y peso total acumulado en kg. |
| **RD-BOD-038** | Componente UI | Diseño & UI | Alta | Botón de acción principal con gradiente ámbar, sombra brillante y escala sutil al presionar (active:scale-95). |
| **RD-BOD-039** | Componente UI | Diseño & UI | Media | Botón secundario con borde neutral y fondo translúcido (hover:bg-slate-700/50). |
| **RD-BOD-040** | Componente UI | Diseño & UI | Alta | Botón de peligro con fondo rojo tenue y texto rojo brillante para acciones destructivas. |
| **RD-BOD-041** | Componente UI | Diseño & UI | Alta | Estado vacío (Empty State) con ilustración SVG descriptiva y botón para crear el primer registro. |
| **RD-BOD-042** | Componente UI | Diseño & UI | Media | Esqueleto de carga (Skeleton Loader) con animación de pulso gris para tablas y tarjetas en espera. |
| **RD-BOD-043** | Componente UI | Diseño & UI | Media | Spinner de carga circular giratorio para retroalimentación de llamadas asíncronas. |
| **RD-BOD-044** | Componente UI | Diseño & UI | Alta | Visor de código de barras renderizado con líneas vectoriales nítidas y texto inferior legible. |
| **RD-BOD-045** | Componente UI | Diseño & UI | Media | Etiqueta de SKU con formato troquelado y código QR para impresión en rotuladoras térmicas. |
| **RD-BOD-046** | Componente UI | Diseño & UI | Alta | Línea de tiempo vertical de Kardex con puntos de colores según tipo de movimiento. |
| **RD-BOD-047** | Componente UI | Diseño & UI | Media | Pestañas superiores (Tabs) para alternar entre Datos Maestros, Ubicación y Movimientos. |
| **RD-BOD-048** | Componente UI | Diseño & UI | Media | Pestaña activa con línea inferior ámbar brillante y texto en negrita destacada. |
| **RD-BOD-049** | Componente UI | Diseño & UI | Media | Acordeón colapsable para agrupar especificaciones técnicas avanzadas en fichas de producto. |
| **RD-BOD-050** | Componente UI | Diseño & UI | Alta | Alerta fija en cabecera para informar sobre inventarios en curso o bloqueos de pasillo. |
| **RD-BOD-051** | Interacción & UX | Diseño & UI | Media | Micro-animación de entrada en modales con escalado desde 95% a 100% y opacidad progresiva. |
| **RD-BOD-052** | Interacción & UX | Diseño & UI | Baja | Transición de color suave en botones con duración de 150ms y curva cúbica de aceleración. |
| **RD-BOD-053** | Interacción & UX | Diseño & UI | Media | Efecto de elevación translateY(-2px) en tarjetas interactivas de catálogo al hacer hover. |
| **RD-BOD-054** | Interacción & UX | Diseño & UI | Alta | Efecto de pulsación en indicador de stock crítico para llamar la atención del operario. |
| **RD-BOD-055** | Interacción & UX | Diseño & UI | Media | Animación de sacudida (shake) en campo de entrada ante error de validación de código escaneado. |
| **RD-BOD-056** | Interacción & UX | Diseño & UI | Alta | Cierre de modales al presionar la tecla Escape o hacer clic fuera del área del diálogo. |
| **RD-BOD-057** | Interacción & UX | Diseño & UI | Media | Mantenimiento visual de estado presionado en botones durante llamadas de guardado. |
| **RD-BOD-058** | Interacción & UX | Diseño & UI | Baja | Desplazamiento suave (smooth scroll) al navegar hacia secciones específicas de una ficha larga. |
| **RD-BOD-059** | Interacción & UX | Diseño & UI | Media | Indicador de progreso de guardado en formularios extensos mediante barra delgada superior. |
| **RD-BOD-060** | Interacción & UX | Diseño & UI | Alta | Previsualización instantánea de imagen cargada antes de enviar formulario de artículo. |
| **RD-BOD-061** | Layout & Adaptabilidad | Diseño & UI | Media | Diseño fluido con ancho máximo de 80rem (max-w-7xl) centrado en pantalla. |
| **RD-BOD-062** | Layout & Adaptabilidad | Diseño & UI | Alta | Menú hamburguesa en vistas móviles para desplegar navegación lateral como drawer lateral. |
| **RD-BOD-063** | Layout & Adaptabilidad | Diseño & UI | Alta | Ocultamiento progresivo de columnas no prioritarias de tabla en pantallas menores a 768px. |
| **RD-BOD-064** | Layout & Adaptabilidad | Diseño & UI | Alta | Disposición en una columna para móviles y dos/tres columnas para pantallas de escritorio en formularios. |
| **RD-BOD-065** | Layout & Adaptabilidad | Diseño & UI | Alta | Alineación numérica a la derecha en todas las columnas de cantidades, costos y porcentajes. |
| **RD-BOD-066** | Layout & Adaptabilidad | Diseño & UI | Media | Alineación centrada para columnas de acciones, estados y códigos de barras. |
| **RD-BOD-067** | Layout & Adaptabilidad | Diseño & UI | Baja | Separador visual entre secciones con línea delgada de 1px en color pizarra (border-slate-800). |
| **RD-BOD-068** | Layout & Adaptabilidad | Diseño & UI | Media | Espaciado consistente de 1.5rem (gap-6) entre tarjetas del dashboard principal. |
| **RD-BOD-069** | Layout & Adaptabilidad | Diseño & UI | Media | Padding interno de contenedor principal de 1.5rem a 2rem según tamaño de pantalla. |
| **RD-BOD-070** | Layout & Adaptabilidad | Diseño & UI | Baja | Pie de página institucional discreto con copyright y versión del sistema en gris pizarra. |
| **RD-BOD-071** | Componente UI | Diseño & UI | Alta | Selector de fecha interactivo con calendario desplegable para fecha de entrega requerida. |
| **RD-BOD-072** | Componente UI | Diseño & UI | Alta | Badge de prioridad de solicitud: Normal (Azul), Urgente (Naranja), Quiebre (Rojo). |
| **RD-BOD-073** | Componente UI | Diseño & UI | Alta | Visor de ruta de picking con números ordinales ordenados (1°, 2°, 3°) por posición de rack. |
| **RD-BOD-074** | Componente UI | Diseño & UI | Media | Tarjeta de resumen de bulto con desglose de ítems contenidos y etiqueta de fragilidad. |
| **RD-BOD-075** | Componente UI | Diseño & UI | Alta | Panel de firma digital con lienzo táctil (canvas) para captura de rúbrica en pantalla. |
| **RD-BOD-076** | Componente UI | Diseño & UI | Media | Fila de totales destacados en pie de tabla con fondo diferenciado y tipografía en negrita. |
| **RD-BOD-077** | Componente UI | Diseño & UI | Media | Icono de advertencia en amarillo para artículos sin rotación en los últimos 90 días. |
| **RD-BOD-078** | Componente UI | Diseño & UI | Media | Filtro de rango numérico con slider doble para filtrar por peso mínimo y máximo. |
| **RD-BOD-079** | Componente UI | Diseño & UI | Alta | Chip de filtro activo removible con botón de cruz (X) para restablecer criterios de búsqueda. |
| **RD-BOD-080** | Componente UI | Diseño & UI | Alta | Menú de acciones por fila mediante botón de tres puntos verticales desplegando menú flotante. |
| **RD-BOD-081** | Componente UI | Diseño & UI | Alta | Modal especial de Ajuste de Merma con desglose de cuenta contable y selector de causa. |
| **RD-BOD-082** | Componente UI | Diseño & UI | Alta | Visor de Kardex con código de color en cantidades: Verde (+ Ingreso) y Rojo (- Salida). |
| **RD-BOD-083** | Componente UI | Diseño & UI | Alta | Badge con icono de candado para ubicaciones o pasillos con bloqueo operativo activo. |
| **RD-BOD-084** | Componente UI | Diseño & UI | Media | Barra superior con aviso de modo de demostración o sincronización pendiente. |
| **RD-BOD-085** | Componente UI | Diseño & UI | Media | Indicador de capacidad volumétrica en m³ con formato decimal fijo a dos cifras (ej: 4.25 m³). |
| **RD-BOD-086** | Componente UI | Diseño & UI | Alta | Selector de sucursal destino en portal cliente con logotipo y dirección de cada tienda. |
| **RD-BOD-087** | Componente UI | Diseño & UI | Media | Botón de descarga de comprobante con icono de archivo PDF e indicador de peso de archivo. |
| **RD-BOD-088** | Componente UI | Diseño & UI | Media | Tarjeta de transportista asignado con fotografía de conductor y patente del vehículo. |
| **RD-BOD-089** | Componente UI | Diseño & UI | Alta | Stepper visual de progreso de despacho con 4 pasos conectados por línea horizontal. |
| **RD-BOD-090** | Componente UI | Diseño & UI | Media | Paso completado en stepper con círculo verde y checkmark blanco en su interior. |
| **RD-BOD-091** | Estilo & Detalle | Diseño & UI | Crítica | Regla de impresión CSS (@media print) que oculta menús laterales y botones de acción. |
| **RD-BOD-092** | Estilo & Detalle | Diseño & UI | Alta | Optimización de contraste en blanco y negro puro para impresiones en hojas tamaño carta. |
| **RD-BOD-093** | Estilo & Detalle | Diseño & UI | Baja | Borde redondeado en imágenes de producto con anillo exterior delgado en slate-700. |
| **RD-BOD-094** | Estilo & Detalle | Diseño & UI | Baja | Efecto de brillo metálico en badge de artículos con categoría de alta gama (Custom Shop). |
| **RD-BOD-095** | Estilo & Detalle | Diseño & UI | Media | Indicador de batería y señal Wi-Fi simulado en cabecera de terminal de operario. |
| **RD-BOD-096** | Estilo & Detalle | Diseño & UI | Alta | Mensaje de confirmación de borrado con texto en rojo advirtiendo irreversibilidad de la acción. |
| **RD-BOD-097** | Estilo & Detalle | Diseño & UI | Media | Efecto visual de halo (glow) en botones primarios al recibir el foco del teclado. |
| **RD-BOD-098** | Estilo & Detalle | Diseño & UI | Baja | Visualización compacta de datos de auditoría en pie de tarjeta con tipografía tamaño 10px. |
| **RD-BOD-099** | Estilo & Detalle | Diseño & UI | Media | Alineación vertical centrada de todos los elementos interactivos dentro de las celdas de tabla. |
| **RD-BOD-100** | Estilo & Detalle | Diseño & UI | Crítica | Consistencia 100% garantizada de clases utilitarias Vanilla Tailwind CSS en toda la suite. |
