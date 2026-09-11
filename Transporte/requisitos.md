# Especificación Exhaustiva de Requisitos - Transporte Express

Este documento contiene la matriz completa de requisitos de software para el subsistema **Transporte Express**, totalizando 250 especificaciones formales de ingeniería (100 Requerimientos Funcionales, 50 Requerimientos No Funcionales y 100 Requerimientos de Diseño, UI y Componentes) estructurados para los roles de **Administrador**, **Mantenedores** (Despachadores, Choferes y Coordinadores de Flota) y **Clientes** (Remitentes y Destinatarios).

> 💡 Para consultar estos requisitos de forma interactiva con filtros en tiempo real, pestañas y búsqueda instantánea, abre [requerimientos.html](requerimientos.html).

---

## 1. Requerimientos Funcionales (100 RF)

| ID | Nombre del Requisito | Rol / Ámbito | Prioridad | Especificación Detallada |
| :--- | :--- | :--- | :---: | :--- |
| **RF-TRA-001** | Registro de Vehículo de Carga | Administrador | Crítica | Alta de unidades con patente, marca, modelo, año, tipo (Furgón, Camión 3/4, Tráiler) y VIN. |
| **RF-TRA-002** | Capacidad Volumétrica y Carga Útil | Mantenedor | Crítica | Parametrización estricta de metros cúbicos (m³) y peso máximo en kilogramos (kg) soportados por vehículo. |
| **RF-TRA-003** | Control de Vencimiento de Documentación | Administrador | Alta | Alertas de caducidad para Revisión Técnica, Seguro Obligatorio (SOAP), Permiso de Circulación y Gases. |
| **RF-TRA-004** | Asignación de Dispositivo GPS | Mantenedor | Alta | Vinculación de IMEI y proveedor telemático al vehículo para monitoreo de posicionamiento satelital. |
| **RF-TRA-005** | Control de Odómetro y Kilometraje | Mantenedor | Alta | Registro obligatorio de lectura de odómetro al iniciar y finalizar cada turno o ruta de despacho. |
| **RF-TRA-006** | Gestión de Estados Operativos de Flota | Mantenedor | Alta | Estados: Disponible, En Ruta, En Mantenimiento, En Taller Externo, Fuera de Servicio y Reservado. |
| **RF-TRA-007** | Ficha Técnica de Equipamiento Frío/Seco | Mantenedor | Media | Especificación de rampa hidráulica, sensor de temperatura interna y cerradura de seguridad electrónica. |
| **RF-TRA-008** | Asociación de Conductor Titular y Suplente | Mantenedor | Media | Asignación preferente de choferes habilitados por tipo y tonelaje de vehículo. |
| **RF-TRA-009** | Auditoría de Inactivación de Vehículo | Administrador | Alta | Bloqueo preventivo de despacho para móviles con documentación vencida o fallas críticas no resueltas. |
| **RF-TRA-010** | Exportación de Parque Automotor | Mantenedor | Media | Descarga en Excel y PDF del estado actual, kilometraje acumulado y disponibilidad de la flota. |
| **RF-TRA-011** | Ficha Integral de Chofer | Administrador | Crítica | Registro de RUT, nombres, teléfono de emergencia, grupo sanguíneo y dirección residencial del conductor. |
| **RF-TRA-012** | Control de Licencia de Conducir | Administrador | Crítica | Validación de clase de licencia (A2, A4, A5) y fecha de control médico municipal obligatorio. |
| **RF-TRA-013** | Hoja de Vida del Conductor | Administrador | Alta | Carga de certificado de antecedentes y registro interno de incidentes de tránsito o amonestaciones. |
| **RF-TRA-014** | Asignación de Smartphone Corporativo | Mantenedor | Media | Control de número de serie de equipo móvil y chip SIM entregado para la App Móvil de Conductor. |
| **RF-TRA-015** | Control de Jornada y Descanso | Administrador | Crítica | Bloqueo automático de asignación de ruta a conductores que superen 5 horas de conducción continua. |
| **RF-TRA-016** | Checklist de Inspección Pre-Operacional | Mantenedor | Crítica | Formulario digital de verificación diaria de neumáticos, luces, frenos, extintor y niveles de fluidos. |
| **RF-TRA-017** | Registro de Acompañante / Peoneta | Mantenedor | Media | Asociación de auxiliares de carga para rutas de instrumentos musicales de gran volumen (pianos, amplificadores). |
| **RF-TRA-018** | Calificación de Conducción Segura | Administrador | Media | Ranking de choferes basado en frenadas bruscas, excesos de velocidad y reclamos de clientes. |
| **RF-TRA-019** | Bloqueo Preventivo de Conductor | Administrador | Alta | Suspensión temporal de asignación por licencia vencida, licencia médica o sanción disciplinaria. |
| **RF-TRA-020** | Historial de Rutas por Chofer | Mantenedor | Media | Trazabilidad cronológica de despachos ejecutados, tiempos de entrega y tasa de éxito de entregas. |
| **RF-TRA-021** | Definición de Zonas Geográficas y Polígonos | Administrador | Crítica | Delimitación de zonas operativas urbanas e interurbanas mediante polígonos GeoJSON por comuna y región. |
| **RF-TRA-022** | Matriz de Tiempos de Tránsito (SLA) | Administrador | Alta | Configuración de tiempos máximos de entrega según zona de destino (Mismo día 12h, Express 24h, Estándar 48h). |
| **RF-TRA-023** | Tarificador Base por Peso y Volumen | Administrador | Alta | Cálculo automático de flete comparando peso físico vs peso volumétrico (factor aforo estándar 1m³ = 250kg). |
| **RF-TRA-024** | Recargo por Carga Frágil o Delicada | Administrador | Media | Aplicación de sobretasa porcentual para instrumentos de alto valor (violines de luthier, sintetizadores). |
| **RF-TRA-025** | Zonificación de Riesgo y Restricciones | Administrador | Alta | Marcado de sectores con horario restringido para camiones pesados o requerimiento de escolta. |
| **RF-TRA-026** | Tarifas Especiales por Convenio | Administrador | Media | Asignación de listas de precios corporativas para traslados entre sucursales de MusicPro. |
| **RF-TRA-027** | Configuración de Ventanas Horarias | Mantenedor | Media | Definición de franjas de recepción por cliente: Mañana (09:00 - 13:00) o Tarde (14:00 - 18:00). |
| **RF-TRA-028** | Tarificador de Kilometraje Interurbano | Administrador | Media | Cálculo de cobro por kilómetro excedente para entregas fuera del radio urbano de cobertura. |
| **RF-TRA-029** | Parámetros de Costo de Peajes y Tags | Mantenedor | Media | Estimación y liquidación automática de costos de peajes y pasadas de autopistas urbanas concesionadas. |
| **RF-TRA-030** | Simulador de Tarifas Interno | Mantenedor | Media | Herramienta de cálculo rápido de flete para despachadores antes de generar la orden formal. |
| **RF-TRA-031** | Ingreso de Solicitud de Flete / Despacho | Mantenedor | Crítica | Creación de orden con origen, destino, datos de contacto, descripción de bultos y dimensiones. |
| **RF-TRA-032** | Generación Automática de Número de Seguimiento (Tracking) | Mantenedor | Crítica | Asignación de código alfanumérico único de rastreo con prefijo TRA (ej: TRA-2026-98124). |
| **RF-TRA-033** | Impresión de Etiqueta Térmica con Código de Barras | Mantenedor | Crítica | Emisión de etiqueta autoadhesiva 10x15 cm con barcode Code 128, QR y datos resumidos de entrega. |
| **RF-TRA-034** | Validación de Guía Electrónica Tributaria | Mantenedor | Alta | Verificación de folio y timbre electrónico SII vinculado a la guía de despacho de traslado. |
| **RF-TRA-035** | Recepción de Carga en Hub Central | Mantenedor | Alta | Pistoleo de bultos provenientes de Bodega WMS para ingreso oficial al patio de carga de transporte. |
| **RF-TRA-036** | Inspección de Estado Físico del Embalaje | Mantenedor | Alta | Registro de sellos intactos o cajas con daños exteriores previo a la carga en camión. |
| **RF-TRA-037** | Pesaje y Cubicación de Verificación | Mantenedor | Media | Contraste del peso real en báscula vs peso declarado en orden de pedido para ajuste tarifario. |
| **RF-TRA-038** | Asignación de Tipo de Servicio | Mantenedor | Alta | Clasificación en servicio Prioritario (entrega antes de las 11:00 AM) o Servicio Estándar día hábil. |
| **RF-TRA-039** | Consolidación de Despachos Multibulto | Mantenedor | Media | Agrupación de hasta 10 bultos bajo una sola guía maestra manteniendo tracking individual por pieza. |
| **RF-TRA-040** | Cancelación de Orden de Despacho | Administrador | Alta | Anulación justificada de flete con reversa contable antes de que el vehículo inicie ruta. |
| **RF-TRA-041** | Creación de Hoja de Ruta Diaria | Mantenedor | Crítica | Agrupación de guías de despacho en un circuito cerrado asignado a un vehículo y chofer específico. |
| **RF-TRA-042** | Optimización Algorítmica de Secuencia de Paradas | Mantenedor | Alta | Ordenamiento inteligente de puntos de entrega para reducir tiempo y kilómetros recorridos. |
| **RF-TRA-043** | Control de Límite de Capacidad por Ruta | Mantenedor | Crítica | Alerta inmediata si la suma de peso o m³ de las guías excede la capacidad útil del furgón. |
| **RF-TRA-044** | Reasignación Rápida de Entregas entre Rutas | Mantenedor | Alta | Transferencia de paradas de un vehículo averiado a otro disponible mediante drag & drop o selección. |
| **RF-TRA-045** | Estimación de Hora de Arribo (ETA) Dinámica | Mantenedor | Alta | Cálculo de hora proyectada de llegada a cada destino considerando estado de tráfico vial. |
| **RF-TRA-046** | Generación de Manifiesto de Carga de Ruta | Mantenedor | Alta | Documento resumen oficial que lista patentes, chofer, bultos y destinatarios para control en carretera. |
| **RF-TRA-047** | Confirmación de Carga Completa de Camión | Mantenedor | Crítica | Validación por escaneo de todos los bultos antes de autorizar el cierre de compuertas. |
| **RF-TRA-048** | Autorización y Despacho de Salida | Mantenedor | Crítica | Cambio de estado de ruta a 'En Tránsito' con estampilla de tiempo y hora de salida de portón. |
| **RF-TRA-049** | División de Rutas AM / PM | Mantenedor | Media | Planificación de doble vuelta para furgones urbanos que retornan a recargar a mediodía. |
| **RF-TRA-050** | Simulador de Consumo de Combustible por Ruta | Mantenedor | Media | Proyección estimada de litros de diésel requeridos para el circuito planificado. |
| **RF-TRA-051** | Torre de Control de Despachos en Tiempo Real | Mantenedor | Crítica | Mapa interactivo con georreferenciación de cada camión de la flota y estado del recorrido. |
| **RF-TRA-052** | Alerta de Desvío de Ruta | Mantenedor | Alta | Notificación visual si el móvil se aparta más de 1.5 km del trazado óptimo autorizado. |
| **RF-TRA-053** | Alerta de Parada Prolongada No Autorizada | Mantenedor | Alta | Disparo de alarma si un camión permanece detenido más de 20 minutos con motor encendido o apagado. |
| **RF-TRA-054** | Alerta de Exceso de Velocidad | Mantenedor | Crítica | Registro instantáneo de eventos que superen límites legales urbanos (50 km/h) o de carretera (100 km/h). |
| **RF-TRA-055** | Canal de Comunicación Directa con Chofer | Mantenedor | Alta | Envío de mensajes prioritarios o desvíos de tráfico a la pantalla móvil del conductor. |
| **RF-TRA-056** | Visualización de Porcentaje de Cumplimiento de Ruta | Mantenedor | Media | Barra de avance en tiempo real: Entregadas vs Pendientes vs Rechazadas en la jornada. |
| **RF-TRA-057** | Registro de Paradas de Descanso | Mantenedor | Media | Marcaje de colación o descanso legal del conductor con pausa en el cálculo de SLA. |
| **RF-TRA-058** | Geocercas de Arribo a Sucursales | Mantenedor | Alta | Detección automática de entrada y salida del camión en el radio perimetral de 200m de la tienda. |
| **RF-TRA-059** | Monitoreo de Nivel de Batería de App Chofer | Mantenedor | Media | Advertencia preventiva si el smartphone del conductor tiene menos del 15% de carga eléctrica. |
| **RF-TRA-060** | Historial de Trazado de Trayectorias | Administrador | Alta | Reproducción en video o línea de tiempo del recorrido histórico de un vehículo en una fecha dada. |
| **RF-TRA-061** | Captura de Firma Digital del Receptor (POD) | Mantenedor | Crítica | Lienzo táctil en pantalla móvil para que el cliente firme con el dedo o stylus al recibir la carga. |
| **RF-TRA-062** | Registro de Datos del Receptor Final | Mantenedor | Crítica | Captura obligatoria de RUT, nombre completo y relación con el destinatario (Titular, Familiar, Conserje). |
| **RF-TRA-063** | Evidencia Fotográfica de Entrega | Mantenedor | Crítica | Captura y subida de hasta 3 fotografías geolocalizadas mostrando la caja intacta y el frontis del domicilio. |
| **RF-TRA-064** | Estampilla GPS de Prueba de Entrega | Mantenedor | Crítica | Incrustación indeleble de latitud, longitud y timestamp satelital en el certificado de entrega. |
| **RF-TRA-065** | Motivos de Entrega Fallida Tipificados | Mantenedor | Crítica | Catálogo: Dirección incorrecta, Domicilio cerrado, Receptor ausente, Rechazado por daño, Zona insegura. |
| **RF-TRA-066** | Fotografía Obligatoria de Visita Fallida | Mantenedor | Alta | Captura de foto de la fachada y número municipal para acreditar la concurrencia física del chofer. |
| **RF-TRA-067** | Generación de Comprobante de Entrega en PDF | Mantenedor | Alta | Creación automática del documento POD valorizado descargable inmediatamente por cliente y emisor. |
| **RF-TRA-068** | Reintento Automático de Entrega | Mantenedor | Alta | Reprogramación de la guía fallida para la siguiente ventana operativa (segundo intento sin costo). |
| **RF-TRA-069** | Retorno a Bodega de Carga No Entregada | Mantenedor | Crítica | Protocolo de reingreso al almacén central y custodia de bultos fallidos al término del turno. |
| **RF-TRA-070** | Gestión de Incidentes de Tránsito o Panne | Mantenedor | Crítica | Reporte inmediato de accidente o avería mecánica con activación de auxilio y transbordo de carga. |
| **RF-TRA-071** | Reporte de Carga Dañada en Transporte | Mantenedor | Alta | Apertura de siniestro por golpe o caída de instrumento con informe preliminar y fotografías del empaque. |
| **RF-TRA-072** | Cobro Contra Entrega (COD) si aplica | Mantenedor | Media | Confirmación de recepción de pago en efectivo o transferencia bancaria antes de entregar mercadería. |
| **RF-TRA-073** | Encuesta Rápida de Satisfacción en Entrega | Mantenedor | Media | Calificación opcional de 1 a 5 estrellas por parte del receptor en la pantalla del dispositivo móvil. |
| **RF-TRA-074** | Auditoría de Reclamos por Entrega Errónea | Administrador | Alta | Módulo de investigación de discrepancias confrontando foto de entrega, GPS y datos del receptor. |
| **RF-TRA-075** | Notificación Inmediata de Entrega Completada | Mantenedor | Alta | Envío de correo y mensaje SMS automático al remitente y receptor confirmando entrega exitosa. |
| **RF-TRA-076** | Rastreo Público de Envíos sin Registro | Cliente | Crítica | Buscador en línea donde el cliente ingresa su número de seguimiento TRA y obtiene el estado actual. |
| **RF-TRA-077** | Línea de Tiempo Visual de Seguimiento | Cliente | Crítica | Stepper: Orden Creada -> Recibida en Hub -> En Ruta de Reparto -> En Camino a tu Dirección -> Entregado. |
| **RF-TRA-078** | Visualización de Rango Horario de Llegada | Cliente | Alta | Despliegue de ventana horaria estimada de visita para que el cliente esté preparado para recibir. |
| **RF-TRA-079** | Mapa en Vivo de sltima Milla | Cliente | Alta | Vista cartográfica que muestra la posición aproximada del furgón cuando se encuentra a menos de 5 paradas. |
| **RF-TRA-080** | Identificación del Conductor Asignado | Cliente | Alta | Visualización de nombre de pila, foto corporativa y patente del vehículo para seguridad del cliente. |
| **RF-TRA-081** | Calculadora Pública de Flete | Cliente | Alta | Cotizador interactivo donde el cliente ingresa comuna origen, comuna destino, peso y medidas en cm. |
| **RF-TRA-082** | Solicitud de Retiro a Domicilio | Cliente | Alta | Formulario para agendar retiro de instrumentos para traslado a taller, servicio técnico o venta consignada. |
| **RF-TRA-083** | Selección de Fecha Preferente de Retiro | Cliente | Media | Calendario interactivo para elegir día hábil disponible para recolección de encomienda. |
| **RF-TRA-084** | Instrucciones Especiales de Entrega | Cliente | Media | Campo libre para indicaciones como 'Dejar en conserjería', 'Tocar timbre 302' o 'No doblar'. |
| **RF-TRA-085** | Consulta y Descarga de Comprobante POD | Cliente | Crítica | Visualización y descarga del PDF con firma digital, hora y foto de entrega ingresando RUT de recepción. |
| **RF-TRA-086** | Historial de Envíos del Cliente Registrado | Cliente | Alta | Panel con tabla de todos los despachos solicitados o recibidos en los últimos 12 meses. |
| **RF-TRA-087** | Cambio de Dirección de Entrega en Tránsito | Cliente | Alta | Opción de redirigir a dirección cercana si el móvil aún no ha salido a la última milla. |
| **RF-TRA-088** | Autorización de Tercero para Recepción | Cliente | Alta | Ingreso del RUT y nombre del vecino o familiar facultado para recibir si el titular no está. |
| **RF-TRA-089** | Creación de Reclamo por Demora o Deterioro | Cliente | Alta | Generación de ticket de soporte indicando número de orden y adjuntando fotos del paquete dañado. |
| **RF-TRA-090** | Notificaciones por WhatsApp y Correo | Cliente | Media | Suscripción voluntaria a alertas por WhatsApp con enlaces directos al estado de la entrega. |
| **RF-TRA-091** | Control de Rendimiento de Combustible | Administrador | Alta | Cálculo de km/litro por camión comparando odómetro vs boletas de carga de diésel registradas. |
| **RF-TRA-092** | Gestión de Cargas de Combustible | Mantenedor | Media | Registro de litros cargados, monto total en CLP, estación de servicio y fotografía de boleta. |
| **RF-TRA-093** | Plan de Mantenimiento Preventivo de Flota | Mantenedor | Alta | Alertas programadas para cambio de aceite cada 10.000 km, rotación de neumáticos y frenos. |
| **RF-TRA-094** | Reporte de Tasa de Efectividad de Entrega | Administrador | Alta | Porcentaje global de entregas exitosas al primer intento (First Time Delivery Rate > 92%). |
| **RF-TRA-095** | Medición de Cumplimiento de SLA por Zona | Administrador | Alta | Monitoreo de horas efectivas vs comprometidas clasificadas por región y comuna. |
| **RF-TRA-096** | Liquidación de Fletes a Transportistas Externos | Administrador | Alta | Cálculo de pagos para choferes contratistas según guías entregadas, kilómetros y tarifas pactadas. |
| **RF-TRA-097** | Huella de Carbono por Envío | Administrador | Media | Estimación de gramos de CO2 emitidos por kilogramo transportado en base al motor del vehículo. |
| **RF-TRA-098** | Auditoría de Inconsistencias de GPS | Administrador | Alta | Reporte de pérdidas de señal satelital o discrepancias de odómetro entre turnos de choferes. |
| **RF-TRA-099** | Matriz de Costo Operativo por Kilómetro | Administrador | Media | Consolidación de combustible + peajes + depreciación + sueldos para fijación de tarifas rentables. |
| **RF-TRA-100** | Dashboard Ejecutivo de Transporte | Administrador | Crítica | Panel con KPIs en vivo: Flota activa, envíos en ruta, entregados hoy, incidencias y satisfacción. |

---

## 2. Requerimientos No Funcionales (50 RNF)

| ID | Categoría | Rol / Impacto | Prioridad | Criterio de Medición y Aceptación |
| :--- | :--- | :--- | :---: | :--- |
| **RNF-TRA-001** | Rendimiento | Sistema | Crítica | Latencia de geoposicionamiento GPS inferior a 3 segundos entre reporte del dispositivo y reflejo en mapa. |
| **RNF-TRA-002** | Rendimiento | Sistema | Alta | Tiempo de respuesta de consulta pública de tracking inferior a 120 ms bajo 5.000 peticiones concurrentes. |
| **RNF-TRA-003** | Rendimiento | Sistema | Alta | Cálculo de secuencia optimizada de ruta de 40 paradas procesado en menos de 2.0 segundos. |
| **RNF-TRA-004** | Rendimiento | Sistema | Media | Generación de comprobante POD en formato PDF con firma y fotos procesado en menos de 1.2 segundos. |
| **RNF-TRA-005** | Rendimiento | Sistema | Media | Renderizado fluido de mapa con 100 móviles simultáneos manteniendo tasa de 60 cuadros por segundo. |
| **RNF-TRA-006** | Rendimiento | Sistema | Media | Consumo de datos móviles de la app de chofer menor a 15 MB por jornada de 8 horas. |
| **RNF-TRA-007** | Rendimiento | Sistema | Alta | Tiempo de arranque de la aplicación web en conexiones móviles 3G/4G inferior a 1.5 segundos. |
| **RNF-TRA-008** | Rendimiento | Sistema | Media | Compresión automática de imágenes capturadas por el chofer reduciendo el archivo a menos de 350 KB sin perder legibilidad. |
| **RNF-TRA-009** | Rendimiento | Sistema | Media | Búsqueda predictiva de direcciones en calculador de flete con respuesta menor a 80 ms. |
| **RNF-TRA-010** | Rendimiento | Sistema | Alta | Indexación espacial de coordenadas para filtrado de vehículos en radio urbano en menos de 50 ms. |
| **RNF-TRA-011** | Seguridad | Sistema | Crítica | Acceso restringido por perfiles estrictos (Administrador de Tráfico, Despachador de Patio, Chofer, Cliente Final). |
| **RNF-TRA-012** | Seguridad | Sistema | Crítica | Cifrado TLS 1.3 de extremo a extremo para todas las transmisiones de telemetría y datos de clientes. |
| **RNF-TRA-013** | Seguridad | Sistema | Crítica | Inmutabilidad garantizada de firmas digitales y fotos de entrega mediante hash SHA-256 no editable. |
| **RNF-TRA-014** | Seguridad | Sistema | Alta | Enmascaramiento de datos personales en tracking público: solo muestra iniciales y comuna del receptor. |
| **RNF-TRA-015** | Seguridad | Sistema | Alta | Autenticación con token temporal revocable para la app móvil de conductores al iniciar turno. |
| **RNF-TRA-016** | Seguridad | Sistema | Crítica | Registro estricto de auditoría con IP, fecha, hora y usuario en cancelaciones o reasignaciones de guías. |
| **RNF-TRA-017** | Seguridad | Sistema | Alta | Protección contra fuerza bruta en portal de rastreo público (máximo 15 consultas por IP por minuto). |
| **RNF-TRA-018** | Seguridad | Sistema | Media | Caducidad automática de sesiones administrativas tras 25 minutos de inactividad continua. |
| **RNF-TRA-019** | Seguridad | Sistema | Alta | Validación criptográfica de no repudio en actas de entrega entre bodeguero de origen y transportista. |
| **RNF-TRA-020** | Seguridad | Sistema | Crítica | Cumplimiento de la Ley 19.628 de Protección de Datos Personales en el almacenamiento de RUT y firmas. |
| **RNF-TRA-021** | Usabilidad | Sistema | Crítica | Botones de acción táctil con dimensión mínima de 52x52 píxeles para uso cómodo por choferes en movimiento. |
| **RNF-TRA-022** | Usabilidad | Sistema | Alta | Modo de alto contraste para visibilidad bajo luz solar directa en cabina de camión. |
| **RNF-TRA-023** | Usabilidad | Sistema | Alta | Retroalimentación háptica (vibración) y acústica diferenciada ante captura exitosa de firma o error. |
| **RNF-TRA-024** | Usabilidad | Sistema | Media | Cumplimiento con directrices de accesibilidad WCAG 2.1 nivel AA en portal público de tracking. |
| **RNF-TRA-025** | Usabilidad | Sistema | Alta | Completitud de formulario de entrega POD en un máximo de 3 pasos y menos de 30 segundos. |
| **RNF-TRA-026** | Usabilidad | Sistema | Media | Terminología logística estandarizada en español chileno (Comunas, RUT, Flete, Peoneta, Despacho). |
| **RNF-TRA-027** | Usabilidad | Sistema | Alta | Navegación asistida con botón de un toque para abrir destino directamente en Waze o Google Maps. |
| **RNF-TRA-028** | Usabilidad | Sistema | Media | Mensajes de error orientados a la solución operativa (ej: 'Acérquese a 50m del punto para cerrar entrega'). |
| **RNF-TRA-029** | Usabilidad | Sistema | Media | Soporte de fuentes tipográficas legibles a distancia de 60 cm en soporte de parabrisas. |
| **RNF-TRA-030** | Usabilidad | Sistema | Alta | Bloqueo inteligente de pantalla para evitar pulsaciones involuntarias en el bolsillo del conductor. |
| **RNF-TRA-031** | Fiabilidad | Sistema | Crítica | Capacidad de operación 100% offline en zonas sin cobertura celular mediante almacenamiento local IndexedDB. |
| **RNF-TRA-032** | Fiabilidad | Sistema | Crítica | Sincronización automática de firmas y fotos acumuladas apenas se restablezca la conexión de datos. |
| **RNF-TRA-033** | Fiabilidad | Sistema | Crítica | Disponibilidad anual garantizada del 99.95% para la plataforma de monitoreo y tracking. |
| **RNF-TRA-034** | Fiabilidad | Sistema | Alta | Idempotencia en el registro de estados de entrega para evitar duplicación de eventos de llegada. |
| **RNF-TRA-035** | Fiabilidad | Sistema | Alta | Tolerancia a fallas de servicio de mapas con conmutación automática entre capas OpenStreetMap y vectoriales. |
| **RNF-TRA-036** | Fiabilidad | Sistema | Media | Persistencia de estado de ruta ante apagado intempestivo o reinicio de batería del terminal móvil. |
| **RNF-TRA-037** | Fiabilidad | Sistema | Alta | Validación de consistencia entre manifiesto de carga y lecturas físicas antes de autorizar partida. |
| **RNF-TRA-038** | Fiabilidad | Sistema | Media | Respaldos incrementales automatizados cada 1 hora de las coordenadas de telemetría de flota. |
| **RNF-TRA-039** | Fiabilidad | Sistema | Media | Detección de anomalías de reloj en dispositivo para prevenir falseamiento de hora de entrega. |
| **RNF-TRA-040** | Fiabilidad | Sistema | Crítica | Consistencia transaccional ACID en el cierre contable de fletes y liquidación de transportistas. |
| **RNF-TRA-041** | Compatibilidad | Sistema | Alta | Compatibilidad completa con navegadores modernos: Chrome 95+, Edge 95+, Safari 15+, Firefox 92+. |
| **RNF-TRA-042** | Compatibilidad | Sistema | Crítica | Soporte óptimo en WebView de Android 8.0+ para smartphones y PDAs industriales rugerizadas. |
| **RNF-TRA-043** | Compatibilidad | Sistema | Alta | Compatibilidad nativa de impresión de etiquetas térmicas con impresoras Zebra (ZPL) y Bluetooth móviles. |
| **RNF-TRA-044** | Compatibilidad | Sistema | Media | Adaptación a resoluciones desde 320x480 (PDAs de mano) hasta 2560x1440 (monitores de torre de control). |
| **RNF-TRA-045** | Compatibilidad | Sistema | Alta | Exportación e importación de coordenadas en formato estándar GeoJSON y WKT. |
| **RNF-TRA-046** | Compatibilidad | Sistema | Media | Interoperabilidad con API REST de Bodega WMS para sincronización de despachos de sucursales. |
| **RNF-TRA-047** | Compatibilidad | Sistema | Media | Soporte para lectores de código de barras por hardware vía emulación de teclado o Broadcast Receiver. |
| **RNF-TRA-048** | Compatibilidad | Sistema | Media | Manejo estandarizado de huso horario continental de Chile (America/Santiago UTC-3 / UTC-4). |
| **RNF-TRA-049** | Compatibilidad | Sistema | Alta | Estructura limpia de activos desacoplados en assets/css y assets/js sin librerías externas pesadas. |
| **RNF-TRA-050** | Compatibilidad | Sistema | Media | Compatibilidad con escaneo de código de barras mediante cámara web trasera utilizando HTML5 MediaStream. |

---

## 3. Requerimientos de Diseño, UI y Componentes (100 RD)

| ID | Componente / Elemento | Rol / Aplicación | Prioridad | Especificación de Diseño y Comportamiento UI/UX |
| :--- | :--- | :--- | :---: | :--- |
| **RD-TRA-001** | Sistema de Diseño | Diseño & UI | Alta | Identidad cromática con fondo oscuro Slate-950 (#020617), tarjetas Slate-900 y acento Cyan-400 (#22d3ee) y Azul Eléctrico (#3b82f6). |
| **RD-TRA-002** | Sistema de Diseño | Diseño & UI | Alta | Tipografía Outfit para titulares, indicadores de telemetría y cabeceras de tablas. |
| **RD-TRA-003** | Sistema de Diseño | Diseño & UI | Alta | Tipografía Plus Jakarta Sans para formularios, textos informativos y paneles de soporte. |
| **RD-TRA-004** | Sistema de Diseño | Diseño & UI | Crítica | Tipografía monospaciada Share Tech Mono para números de tracking TRA, patentes y coordenadas GPS. |
| **RD-TRA-005** | Sistema de Diseño | Diseño & UI | Media | Radio de borde redondeado de 1rem (rounded-2xl) para tarjetas y 0.75rem (rounded-xl) para botones e inputs. |
| **RD-TRA-006** | Sistema de Diseño | Diseño & UI | Media | Efectos de sombras luminosas difusas (shadow-cyan-500/10) en elementos destacados en tránsito. |
| **RD-TRA-007** | Sistema de Diseño | Diseño & UI | Crítica | Semáforo de estado de ruta: Verde (#10b981) Entregado, Amarillo (#f59e0b) En Tránsito, Rojo (#ef4444) Con Incidencia. |
| **RD-TRA-008** | Sistema de Diseño | Diseño & UI | Alta | Fondo de contraste ultra-alto en panel de chofer para facilitar la visibilidad diurna en cabina. |
| **RD-TRA-009** | Sistema de Diseño | Diseño & UI | Media | Scrollbars delgadas estilizadas en color cian translúcido sobre pista slate-900. |
| **RD-TRA-010** | Sistema de Diseño | Diseño & UI | Alta | Iconografía vectorial temática de transporte (camiones, velocímetros, mapas, cajas, códigos QR) mediante FontAwesome 6.5. |
| **RD-TRA-011** | Navegación | Diseño & UI | Alta | Sidebar colapsable de 16rem con accesos jerárquicos a Flota, Rutas, Monitoreo, Choferes e Informes. |
| **RD-TRA-012** | Navegación | Diseño & UI | Alta | Header superior flotante con backdrop-blur, reloj en vivo sincronizado con servidor y estado de flota. |
| **RD-TRA-013** | Navegación | Diseño & UI | Media | Breadcrumbs dinámicos que muestran la ubicación jerárquica dentro del módulo de transporte. |
| **RD-TRA-014** | Navegación | Diseño & UI | Media | Botón de retorno rápido al Hub Central con icono de flecha hacia la izquierda y efecto de brillo cian. |
| **RD-TRA-015** | Navegación | Diseño & UI | Alta | Selector rápido de perfil activo (Vista Admin Torre de Control vs Vista Móvil Chofer vs Portal Cliente). |
| **RD-TRA-016** | Layout | Diseño & UI | Media | Contenedor maestro con ancho máximo de 80rem (max-w-7xl) centrado con padding simétrico adaptativo. |
| **RD-TRA-017** | Layout | Diseño & UI | Alta | Diseño en cuadrícula de 12 columnas adaptable a 1 columna en smartphones y 4 columnas en monitores 4K. |
| **RD-TRA-018** | Layout | Diseño & UI | Alta | Panel lateral deslizable (drawer) para consultar el detalle de una guía sin salir de la pantalla del mapa. |
| **RD-TRA-019** | Layout | Diseño & UI | Media | Distribución de pantalla dividida (Split-Screen) en monitor: 60% mapa interactivo y 40% lista de paradas. |
| **RD-TRA-020** | Layout | Diseño & UI | Baja | Pie de página minimalista con versión de la plataforma, estado de API de telemetría y soporte. |
| **RD-TRA-021** | Tablas | Diseño & UI | Crítica | Tabla compacta de flota (.transporte-table) con filas de altura fija de 48px y tipografía 12px de alta legibilidad. |
| **RD-TRA-022** | Tablas | Diseño & UI | Media | Encabezados de tabla con fondo pizarra oscuro (bg-slate-950/80), texto en mayúsculas y bordes discretos. |
| **RD-TRA-023** | Tablas | Diseño & UI | Alta | Efecto hover en filas de tabla con iluminación cian sutil (hover:bg-cyan-950/20) y transición suave. |
| **RD-TRA-024** | Tablas | Diseño & UI | Alta | Borde lateral izquierdo de color indicando estado del despacho (Azul en preparación, Verde entregado, Rojo demorado). |
| **RD-TRA-025** | Tablas | Diseño & UI | Media | Alineación numérica estricta a la derecha para distancias (km), pesos (kg), volúmenes (m³) y cobros ($). |
| **RD-TRA-026** | Tablas | Diseño & UI | Media | Alineación centrada para códigos de seguimiento, patentes, badges de prioridad y botones de acción. |
| **RD-TRA-027** | Tablas | Diseño & UI | Alta | Barra de herramientas de tabla con contador en tiempo real de registros filtrados vs total disponible. |
| **RD-TRA-028** | Tablas | Diseño & UI | Media | Paginación intuitiva con botones de retroceso, avance y selectores rápidos de 10, 25, 50 registros. |
| **RD-TRA-029** | Tablas | Diseño & UI | Alta | Menú contextual flotante por fila con acciones: Ver en mapa, Editar parada, Imprimir etiqueta, Reasignar. |
| **RD-TRA-030** | Tablas | Diseño & UI | Media | Columna de selección con checkbox personalizado para realizar acciones masivas de despacho. |
| **RD-TRA-031** | Dashboard | Diseño & UI | Alta | Tarjetas métricas (KPIs) con icono en recuadro traslúcido, cifra en tipografía 3xl y delta porcentual. |
| **RD-TRA-032** | Dashboard | Diseño & UI | Alta | Barra visual de capacidad de carga de vehículo con degradado cian a ámbar al superar el 85% de capacidad. |
| **RD-TRA-033** | Dashboard | Diseño & UI | Alta | Tacómetro de velocidad en pantalla con sector verde hasta 90 km/h y sector rojo parpadeante ante exceso. |
| **RD-TRA-034** | Dashboard | Diseño & UI | Media | Mini-tarjeta de estado de vehículo con gráfico de combustible, temperatura del motor y último reporte satelital. |
| **RD-TRA-035** | Dashboard | Diseño & UI | Alta | Banner superior de alertas operativas con icono de megáfono ante cortes de ruta o condiciones climáticas. |
| **RD-TRA-036** | Mapa | Diseño & UI | Crítica | Marcadores de vehículo personalizados con flecha orientada en la dirección del desplazamiento del móvil. |
| **RD-TRA-037** | Mapa | Diseño & UI | Alta | Polígonos de zonas de cobertura con colores semitransparentes diferenciados por tarifa y comuna. |
| **RD-TRA-038** | Mapa | Diseño & UI | Alta | Trazado de ruta proyectada con línea continua cian y ruta ya recorrida con línea discontinua atenuada. |
| **RD-TRA-039** | Mapa | Diseño & UI | Media | Tooltip flotante en mapa al hacer hover sobre un furgón con patente, chofer, paradas restantes y retraso. |
| **RD-TRA-040** | Mapa | Diseño & UI | Media | Botón flotante de recentrado de mapa para enfocar instantáneamente el vehículo seleccionado. |
| **RD-TRA-041** | Formularios | Diseño & UI | Alta | Inputs de texto con fondo slate-900/90, borde slate-800, texto blanco y anillo de foco cian brillante. |
| **RD-TRA-042** | Formularios | Diseño & UI | Alta | Selector de dirección con autocompletado y mapa interactivo para ajustar el pin exacto de entrega. |
| **RD-TRA-043** | Formularios | Diseño & UI | Media | Selector numérico con botones grandes (+) y (-) para bultos, peso y dimensiones sin recurrir al teclado. |
| **RD-TRA-044** | Formularios | Diseño & UI | Media | Selector de franja horaria mediante botones tipo chip seleccionables con respuesta táctil inmediata. |
| **RD-TRA-045** | Formularios | Diseño & UI | Alta | Área de carga de fotos con zona de arrastre (drag-and-drop), vista previa en miniatura y botón de eliminación. |
| **RD-TRA-046** | Formularios | Diseño & UI | Crítica | Lienzo de firma digital táctil con fondo contrastante, botón de borrado 'Limpiar' y confirmación 'Aceptar'. |
| **RD-TRA-047** | Formularios | Diseño & UI | Alta | Indicador de campos obligatorios con asterisco cian y mensaje de validación inmediato bajo el input. |
| **RD-TRA-048** | Formularios | Diseño & UI | Media | Selector desplegable estilizado para tipología de vehículos con icono representativo de cada modelo. |
| **RD-TRA-049** | Formularios | Diseño & UI | Media | Interruptor toggle con animación fluida para activar/desactivar opciones de notificación SMS y WhatsApp. |
| **RD-TRA-050** | Formularios | Diseño & UI | Alta | Barra de avance en formularios extensos de registro indicando porcentaje completado. |
| **RD-TRA-051** | Tracking | Diseño & UI | Crítica | Buscador de tracking principal centrado con caja de búsqueda prominente, botón de rastreo cian y sombra. |
| **RD-TRA-052** | Tracking | Diseño & UI | Crítica | Stepper horizontal de seguimiento con 5 fases conectadas por barra luminosa animada según estado activo. |
| **RD-TRA-053** | Tracking | Diseño & UI | Alta | Fase completada en stepper con icono de check verde y fase en curso con pulso luminoso intermitente. |
| **RD-TRA-054** | Tracking | Diseño & UI | Alta | Tarjeta de ETA destacada con tipografía 4xl mostrando hora aproximada de llegada y franja de seguridad. |
| **RD-TRA-055** | Tracking | Diseño & UI | Alta | Tarjeta de conductor amigable con foto circular, nombre de pila, modelo de furgón y patente visible. |
| **RD-TRA-056** | Tracking | Diseño & UI | Media | Línea de tiempo vertical detallada de eventos con fecha, hora y ciudad de cada punto de control. |
| **RD-TRA-057** | Tracking | Diseño & UI | Alta | Badge de estado del flete: 'En Bodega', 'En Tránsito', 'Próximo a tu Domicilio', 'Entregado'. |
| **RD-TRA-058** | Tracking | Diseño & UI | Media | Botón de llamada o chat de soporte directo con operador de tráfico ante dudas de entrega. |
| **RD-TRA-059** | Tracking | Diseño & UI | Media | Tarjeta de detalles del paquete mostrando peso declarado, bultos y tipo de instrumento musical. |
| **RD-TRA-060** | Tracking | Diseño & UI | Alta | Visor de prueba de entrega POD con imagen expandible en modal al hacer clic en la miniatura. |
| **RD-TRA-061** | Botones | Diseño & UI | Alta | Botón primario con gradiente cian a azul, texto oscuro de alto contraste y microescala (active:scale-95). |
| **RD-TRA-062** | Botones | Diseño & UI | Media | Botón secundario con borde slate-700, fondo transparente e iluminación al hacer hover. |
| **RD-TRA-063** | Botones | Diseño & UI | Alta | Botón de emergencia / pánico para choferes con fondo carmesí brillante y confirmación obligatoria. |
| **RD-TRA-064** | Botones | Diseño & UI | Media | Botón de acción rápida con icono redondo flotante (FAB) para iniciar escaneo en dispositivos móviles. |
| **RD-TRA-065** | Interacción | Diseño & UI | Media | Animación de entrada en tarjetas de parada mediante desplazamiento suave de abajo hacia arriba. |
| **RD-TRA-066** | Interacción | Diseño & UI | Alta | Efecto de onda de radar (ping animation) sobre el marcador del vehículo activo en el mapa. |
| **RD-TRA-067** | Interacción | Diseño & UI | Media | Efecto shake en campo de tracking si el usuario ingresa un código con formato inválido. |
| **RD-TRA-068** | Interacción | Diseño & UI | Media | Transición fluida de 200 ms en la expansión de menús laterales y paneles colapsables. |
| **RD-TRA-069** | Estados | Diseño & UI | Alta | Estado vacío (Empty State) con ilustración SVG de camión en cochera y mensaje 'No hay rutas pendientes'. |
| **RD-TRA-070** | Estados | Diseño & UI | Media | Esqueleto de carga (Skeleton Loader) con gradiente pulsante para simular la llegada de datos de telemetría. |
| **RD-TRA-071** | Etiquetas | Diseño & UI | Crítica | Etiqueta térmica estandarizada de 100x150 mm con código de barras Code 128 nítido y código QR de alta densidad. |
| **RD-TRA-072** | Etiquetas | Diseño & UI | Alta | Símbolo internacional de fragilidad (copa de cristal y flechas 'Este lado arriba') visible en etiqueta de instrumentos. |
| **RD-TRA-073** | Etiquetas | Diseño & UI | Media | Número de bulto relativo destacado (ej: 'Bulto 1 de 3') en fuente gigante negrita en la cabecera de la etiqueta. |
| **RD-TRA-074** | Etiquetas | Diseño & UI | Alta | Dirección de entrega y comuna de destino en tamaño 16pt mayúscula para rápida lectura del clasificador. |
| **RD-TRA-075** | Impresión | Diseño & UI | Crítica | Estilos CSS para impresión (@media print) que eliminan fondos oscuros, barras de navegación y optimizan contraste en B/N. |
| **RD-TRA-076** | Impresión | Diseño & UI | Alta | Comprobante POD en formato PDF tamaño carta con logo institucional, firmas, foto incrustada y tabla de bultos. |
| **RD-TRA-077** | Impresión | Diseño & UI | Media | Salto de página limpio (page-break-after: always) entre comprobantes múltiples al imprimir lotes de guías. |
| **RD-TRA-078** | Comprobantes | Diseño & UI | Media | Marca de agua diagonal 'COPIA CLIENTE' y 'ORIGINAL TRANSPORTE' en documentos tributarios impresos. |
| **RD-TRA-079** | Comprobantes | Diseño & UI | Alta | Timbre electrónico del SII con código de barras bidimensional PDF417 ubicado en el tercio inferior del documento. |
| **RD-TRA-080** | Comprobantes | Diseño & UI | Baja | Pie de firma legal con campos de RUT, Nombre, Firma y Fecha para respaldo físico ante contingencias. |
| **RD-TRA-081** | Responsive | Diseño & UI | Crítica | Diseño Mobile-First en vista de chofer optimizado para operar con una sola mano mediante pulgar. |
| **RD-TRA-082** | Responsive | Diseño & UI | Alta | Ocultamiento selectivo de columnas secundarias en listados al navegar desde teléfonos móviles. |
| **RD-TRA-083** | Responsive | Diseño & UI | Alta | Barra de navegación inferior fija (Bottom Navigation Bar) en smartphone con accesos a Rutas, Mapa y Perfil. |
| **RD-TRA-084** | Responsive | Diseño & UI | Media | Orientación horizontal (Landscape) bloqueada o adaptada con visualización óptima para soportes de parabrisas. |
| **RD-TRA-085** | Responsive | Diseño & UI | Alta | Áreas de toque con margen de seguridad de al menos 12px entre botones para evitar pulsaciones erróneas. |
| **RD-TRA-086** | Modales | Diseño & UI | Alta | Modales con centrado vertical, fondo oscuro blur (backdrop-blur-md) y botón de cierre visible en esquina superior. |
| **RD-TRA-087** | Modales | Diseño & UI | Media | Modal de confirmación de salida de ruta con resumen de bultos asignados y advertencia de sellos pendientes. |
| **RD-TRA-088** | Modales | Diseño & UI | Alta | Modal de detalle de incidencia con selector de causa, adjunto de foto de evidencia y botón de auxilio mecánico. |
| **RD-TRA-089** | Notificaciones | Diseño & UI | Alta | Sistema de avisos emergentes (Toast) en esquina superior derecha con icono, título y tiempo de auto-cierre de 4 segundos. |
| **RD-TRA-090** | Notificaciones | Diseño & UI | Media | Sonido discreto de confirmación configurable al recibir una nueva asignación de entrega en ruta. |
| **RD-TRA-091** | Gráficos | Diseño & UI | Media | Gráfico de líneas de kilometraje recorrido por semana con área rellena en gradiente cian semitransparente. |
| **RD-TRA-092** | Gráficos | Diseño & UI | Media | Gráfico de anillo (donut chart) para distribución porcentual de entregas según motivo de resolución. |
| **RD-TRA-093** | Accesibilidad | Diseño & UI | Alta | Ratios de contraste tipográfico mayores a 4.5:1 para texto estándar y 3:1 para texto de gran formato. |
| **RD-TRA-094** | Accesibilidad | Diseño & UI | Alta | Indicadores de estado acompañados obligatoriamente de iconos y texto explícito, no dependiendo solo del color. |
| **RD-TRA-095** | Accesibilidad | Diseño & UI | Media | Enfoque visible del teclado mediante outline cian de 2px en todos los elementos interactivos. |
| **RD-TRA-096** | Estilo | Diseño & UI | Baja | Efecto de cristal ahumado (glassmorphism) en tarjetas flotantes sobre el mapa de monitoreo. |
| **RD-TRA-097** | Estilo | Diseño & UI | Media | Insignias de rol con colores diferenciados: Administrador (Azul/Púrpura), Chofer (Cian), Cliente (Verde). |
| **RD-TRA-098** | Estilo | Diseño & UI | Baja | Contador de versión y fecha de compilación visible en el pie de página del sistema. |
| **RD-TRA-099** | Estilo | Diseño & UI | Alta | Alineación perfecta en píxeles de iconos y textos dentro de botones y tarjetas de navegación. |
| **RD-TRA-100** | Estilo | Diseño & UI | Crítica | Garantía de cero conflictos CSS y 100% de clases utilitarias Tailwind conformes a la guía del proyecto. |
