# Especificación Exhaustiva de Requisitos - Tarjeta Financiera MusicPro

Este documento contiene la matriz completa de requisitos de software para el subsistema **Tarjeta Financiera MusicPro** (Fintech), totalizando 250 especificaciones formales de ingeniería (100 Requerimientos Funcionales, 50 Requerimientos No Funcionales y 100 Requerimientos de Diseño, UI y Componentes) estructurados para los roles de **Administrador**, **Mantenedores** (Ejecutivos de Cuentas, Analistas de Riesgo y Operadores de Cobranza) y **Clientes** (Titulares de Tarjeta y Solicitantes de Crédito).

> 💡 Para consultar estos requisitos de forma interactiva con filtros en tiempo real, pestañas y búsqueda instantánea, abre [requerimientos.html](requerimientos.html).

---

## 1. Requerimientos Funcionales (100 RF)

| ID | Nombre del Requisito | Rol / Ámbito | Prioridad | Especificación Detallada |
| :--- | :--- | :--- | :---: | :--- |
| **RF-TAR-001** | Parametrización de Tasas de Interés y TMC | Administrador | Crítica | Configuración de Tasa Máxima Convencional (TMC) y Tasa de Interés Mensual regulada por la CMF para compras en cuotas y avances. |
| **RF-TAR-002** | Cálculo Automático de Carga Anual Equivalente (CAE) | Administrador | Crítica | Algoritmo financiero para determinar el CAE exacto de cada operación considerando comisiones, impuestos de timbres y seguros. |
| **RF-TAR-003** | Definición de Políticas de Cupo Máximo | Administrador | Crítica | Reglas de límite de crédito basadas en sueldo líquido comprobado (máximo 3 veces la renta para clientes con score A). |
| **RF-TAR-004** | Matriz de Comisiones de Administración y Mantención | Administrador | Alta | Tarifa mensual en UF o CLP aplicable a cuentas con saldo utilizado o transacciones en el periodo de facturación. |
| **RF-TAR-005** | Configuración de Rangos de Plazo en Cuotas | Administrador | Alta | Habilitación de planes de 3 a 36 cuotas mensuales fijas con cálculo de amortización mediante sistema francés. |
| **RF-TAR-006** | Reglas de Exención de Intereses (3 Cuotas Precio Contado) | Administrador | Alta | Parametrización de promociones comerciales de 3 o 6 cuotas con tasa 0% en tiendas MusicPro y comercios asociados. |
| **RF-TAR-007** | Control de Calendario de Facturación y Vencimientos | Administrador | Alta | Definición de fechas de corte mensual (días 5, 15 y 25) y días de vencimiento para el pago de la cartola. |
| **RF-TAR-008** | Asignación de Rangos de Código BIN y Afiliación | Administrador | Crítica | Administración del Bank Identification Number (BIN) de 6 dígitos asignado para la emisión de tarjetas del consorcio. |
| **RF-TAR-009** | Parámetros de Cobranza y Gastos de Recuperación | Administrador | Alta | Porcentajes escalonados de gastos de cobranza extrajudicial aplicables a deudas vencidas pasados 20 días. |
| **RF-TAR-010** | Generación de Informes Regulatorios para la CMF | Administrador | Crítica | Consolidación de carteras de crédito, provisiones mínimas exigidas por riesgo y montos colocados según norma bancaria. |
| **RF-TAR-011** | Recepción de Solicitud de Tarjeta | Mantenedor | Crítica | Ingreso de postulación con RUT, renta declarada, datos laborales, teléfono de contacto y dirección residencial. |
| **RF-TAR-012** | Validación de Antecedentes Financieros (DICOM / CMF) | Mantenedor | Crítica | Consulta automatizada de morosidades comerciales activas y protestos financieros vigentes antes de aprobar. |
| **RF-TAR-013** | Cálculo de Score Crediticio Interno (Risk Score) | Mantenedor | Crítica | Algoritmo de puntuación de 300 a 850 puntos evaluando estabilidad laboral, endeudamiento y comportamiento previo. |
| **RF-TAR-014** | Validación de Liquidaciones de Sueldo y Cotizaciones | Mantenedor | Alta | Inspección de las últimas 3 liquidaciones de renta y certificado de cotizaciones previsionales AFP de los últimos 12 meses. |
| **RF-TAR-015** | Resolución de Solicitud (Aprobada / Rechazada / Condicionada) | Mantenedor | Crítica | Dictamen fundado del analista de riesgo asignando el cupo crediticio inicial autorizado o causal de rechazo. |
| **RF-TAR-016** | Generación de Contrato Digital de Apertura de Crédito | Mantenedor | Crítica | Emisión del contrato estandarizado con Hoja de Resumen CMF, condiciones de seguros y pagaré notarial digital. |
| **RF-TAR-017** | Asignación de Categoría de Plástico (Gold, Platinum, Black) | Mantenedor | Alta | Segmentación del cliente según nivel de ingresos: Gold (hasta ), Platinum (hasta .5M) y Black (superior). |
| **RF-TAR-018** | Reevaluación Periódica de Capacidad de Pago | Mantenedor | Media | Análisis semestral automatizado para proponer aumentos de cupo a clientes con récord intachable de pago. |
| **RF-TAR-019** | Gestión de Solicitudes de Aumento de Cupo | Mantenedor | Alta | Evaluación de peticiones de incremento de cupo solicitadas por el titular acreditando nuevas rentas. |
| **RF-TAR-020** | Auditoría de Aprobaciones de Excepción | Administrador | Crítica | Registro inmutable de créditos otorgados fuera de la política estándar que requirieron firma de la gerencia. |
| **RF-TAR-021** | Monitoreo de Transacciones Sospechosas en Tiempo Real | Mantenedor | Crítica | Detección algorítmica de compras con anomalías de velocidad (ej: dos compras en ciudades distintas en 10 minutos). |
| **RF-TAR-022** | Bloqueo Preventivo Automático por Patrón de Fraude | Mantenedor | Crítica | Inactivación instantánea del plástico ante compras consecutivas que agotan el cupo en comercios de alto riesgo. |
| **RF-TAR-023** | Gestión de Alertas de Prevención de Fraude | Mantenedor | Alta | Bandeja de transacciones en semáforo ámbar/rojo que requieren confirmación telefónica directa con el titular. |
| **RF-TAR-024** | Reversión y Contracargo por Fraude (Chargeback) | Mantenedor | Crítica | Gestión de desconocimiento de compra formalizado por el cliente con abono provisorio mientras concluye el peritaje. |
| **RF-TAR-025** | Configuración de Topes Diarios de Retiro en Cajeros | Administrador | Alta | Límite máximo de retiro en efectivo en cajeros automáticos Redbanc de 0.000 CLP por jornada bancaria. |
| **RF-TAR-026** | Control de Bloqueo Geográfico Internacional | Mantenedor | Alta | Activación o desactivación del uso de la tarjeta en el extranjero a petición expresa del cliente para sus viajes. |
| **RF-TAR-027** | Generación de Código de Seguridad CVV Dinámico | Mantenedor | Crítica | Algoritmo generador de clave de seguridad de 3 dígitos con vigencia de 5 minutos para compras por internet. |
| **RF-TAR-028** | Lista Negra de Comercios y Terminales POS | Administrador | Crítica | Bloqueo automático de autorización para comercios fraudulentos o terminales reportados en fiscalías. |
| **RF-TAR-029** | Auditoría de Intentos Fallidos de PIN / Clave | Mantenedor | Alta | Bloqueo definitivo del chip físico de la tarjeta tras 3 ingresos erróneos consecutivos del PIN en cajeros. |
| **RF-TAR-030** | Registro de Denuncias de Extravío y Robo | Mantenedor | Crítica | Asignación obligatoria de código de bloqueo con fecha, hora exacta y exención de responsabilidad patrimonial del usuario. |
| **RF-TAR-031** | Generación de Tarjeta Virtual Instantánea | Mantenedor | Crítica | Emisión inmediata de número de tarjeta PAN de 16 dígitos cifrado tras la aprobación digital de la solicitud. |
| **RF-TAR-032** | Solicitud de Grabado y Embozado de Plástico Físico | Mantenedor | Alta | Envío de lote de plásticos aprobados a la empresa proveedora de grabado de chip EMV y banda magnética. |
| **RF-TAR-033** | Control de Inventario de Plásticos Vírgenes en Sucursal | Mantenedor | Alta | Custodia bajo llave de tarjetas físicas inactivas en caja fuerte con conciliación diaria de existencias. |
| **RF-TAR-034** | Activación Presencial con Lector de Chip en Mesón | Mantenedor | Crítica | Entrega física al titular con lectura de cédula de identidad y asignación de PIN de 4 dígitos en teclado seguro (PIN Pad). |
| **RF-TAR-035** | Reemisión de Tarjeta por Deterioro o Expiración | Mantenedor | Alta | Generación de nuevo plástico manteniendo el cupo e historial de crédito del cliente pero renovando fecha y CVV. |
| **RF-TAR-036** | Despacho Seguro de Plásticos a Domicilio | Mantenedor | Media | Envío de tarjeta inactiva mediante transporte de valores con entrega exclusiva al titular previa validación de huella. |
| **RF-TAR-037** | Destrucción Segura de Plásticos Devueltos | Mantenedor | Alta | Protocolo de perforación de chip y corte de banda de tarjetas anuladas con acta de descarte. |
| **RF-TAR-038** | Asignación de Tarjetas Adicionales para Familiares | Mantenedor | Media | Emisión de plásticos adicionales asociados al titular con asignación de un porcentaje máximo del cupo total. |
| **RF-TAR-039** | Cambio de Clave Secreta en Red de Sucursales | Mantenedor | Alta | Actualización de PIN de compra mediante validación biométrica de huella dactilar conectada al Registro Civil. |
| **RF-TAR-040** | Historial de Ciclo de Vida del Plástico | Mantenedor | Media | Trazabilidad cronológica: Solicitado -> Emitido -> Despachado -> Activado -> Renovado -> Bloqueado. |
| **RF-TAR-041** | Generación de Estado de Cuenta Mensual (Cartola) | Mantenedor | Crítica | Cierre contable con detalle de compras, avances, cobro de intereses, comisiones, pago mínimo y monto total facturado. |
| **RF-TAR-042** | Cálculo del Monto de Pago Mínimo | Mantenedor | Crítica | Determinación del 5% del saldo deudor más el 100% de intereses, comisiones y cuotas del mes según ley. |
| **RF-TAR-043** | Distribución Automatizada de Estados de Cuenta por Email | Mantenedor | Alta | Despacho del PDF protegido con clave (primeros 4 dígitos del RUT) al menos 15 días antes de la fecha de vencimiento. |
| **RF-TAR-044** | Procesamiento de Pagos en Línea y Liquidación | Mantenedor | Crítica | Recepción de transferencias y pagos con débito con restitución instantánea del cupo disponible del cliente. |
| **RF-TAR-045** | Imputación Contable de Pagos | Mantenedor | Crítica | Aplicación del dinero según orden legal: Gastos de cobranza -> Intereses moratorios -> Intereses corrientes -> Capital. |
| **RF-TAR-046** | Gestión de Débito Automático en Cuenta Corriente (PAC) | Mantenedor | Alta | Cobro bancario recurrente del monto total o pago mínimo en la cuenta bancaria autorizada del cliente. |
| **RF-TAR-047** | Monitoreo de Morosidad y Cartera Vencida | Mantenedor | Crítica | Segmentación de deudores en tramos: Mora 1-30 días, 31-60 días, 61-90 días y Castigo Contable (+90 días). |
| **RF-TAR-048** | Generación de Cartas de Notificación de Cobranza | Mantenedor | Media | Envío de recordatorios formales por correo y SMS informando consecuencias de reporte a boletines comerciales. |
| **RF-TAR-049** | Propuesta de Reprogramación y Refinanciamiento | Mantenedor | Alta | Consolidación de deuda en un nuevo crédito en cuotas fijas con condonación parcial de intereses acumulados. |
| **RF-TAR-050** | Emisión de Certificado de Deuda Cero y Finiquito | Mantenedor | Alta | Documento oficial firmado digitalmente acreditando la extinción total de la deuda tras el pago final. |
| **RF-TAR-051** | Dashboard Principal del Titular de la Tarjeta | Cliente | Crítica | Visualización ejecutiva de saldo disponible, cupo utilizado, fecha de próximo vencimiento y monto a pagar. |
| **RF-TAR-052** | Visualizador de Tarjeta Virtual con Efecto 3D | Cliente | Crítica | Visualización de tarjeta virtual con número PAN visible, fecha de vencimiento y botón para revelar CVV dinámico. |
| **RF-TAR-053** | Copia Rápida de Datos de Tarjeta para Compras Web | Cliente | Alta | Botón de copiado con un toque de los 16 dígitos al portapapeles con mensaje temporal de confirmación. |
| **RF-TAR-054** | Simulador de Avance en Efectivo | Cliente | Crítica | Cotizador interactivo donde el cliente selecciona monto a transferir, número de cuotas (3 a 24) y ve valor cuota y CAE. |
| **RF-TAR-055** | Transferencia Directa de Avance a Cuenta Bancaria | Cliente | Crítica | Depósito en menos de 5 minutos del monto del avance en la cuenta corriente o vista registrada del titular. |
| **RF-TAR-056** | Simulador de Súper Avance sin Afectar Cupo de Compras | Cliente | Alta | Crédito especial de libre disposición para clientes con excelente comportamiento financiero. |
| **RF-TAR-057** | Pago de Facturación Mensual en Línea | Cliente | Crítica | Botón 'Pagar Mi Tarjeta' permitiendo pagar el Total Facturado, Pago Mínimo u Otro Monto vía Webpay Plus. |
| **RF-TAR-058** | Consulta de Movimientos Facturados y No Facturados | Cliente | Crítica | Tabla cronológica interactiva con detalle de compras recientes, abonos, intereses y comercios asociados. |
| **RF-TAR-059** | Filtro Avanzado de Movimientos por Periodo | Cliente | Alta | Buscador por mes de facturación, tipo de transacción (Compra, Avance, Abono) y nombre del establecimiento comercial. |
| **RF-TAR-060** | Descarga de Estados de Cuenta Históricos en PDF | Cliente | Alta | Archivo descargable de los últimos 24 meses de cartolas con formato idéntico al exigido por la CMF. |
| **RF-TAR-061** | Bloqueo y Desbloqueo Express por un Toque | Cliente | Crítica | Switch de seguridad instantáneo en la app para apagar temporalmente la tarjeta mientras no se use. |
| **RF-TAR-062** | Configuración de Notificaciones Push de Compras | Cliente | Alta | Avisos instantáneos al teléfono cada vez que se autoriza una compra indicando monto y comercio. |
| **RF-TAR-063** | Encendido / Apagado de Compras Internacionales | Cliente | Alta | Control de habilitación del uso del plástico fuera de Chile sin necesidad de llamar a un operador telefónico. |
| **RF-TAR-064** | Activación / Desactivación de Compras por Internet | Cliente | Alta | Bloqueo específico para sitios web de e-commerce, permitiendo únicamente el uso presencial en tiendas. |
| **RF-TAR-065** | Reporte Inmediato de Pérdida o Hurto | Cliente | Crítica | Botón de emergencia para bloquear de forma definitiva el plástico y solicitar reposición automática. |
| **RF-TAR-066** | Cambio de Clave de Acceso a Portal Financiero | Cliente | Alta | Formulario para renovar contraseña con validación de robustez y autenticación de doble factor vía SMS. |
| **RF-TAR-067** | Consulta de Puntos de Recompensa MusicPro Cash | Cliente | Media | Visualización de puntos acumulados por compras y catálogo de instrumentos o accesorios canjeables. |
| **RF-TAR-068** | Solicitud Express de Incremento de Cupo | Cliente | Alta | Carga de última liquidación de sueldo desde el móvil para postular a una ampliación del límite de crédito. |
| **RF-TAR-069** | Configuración de Límite Diario de Gastos | Cliente | Media | Tope configurable por el propio usuario para no gastar más de cierta suma fijada en una sola jornada. |
| **RF-TAR-070** | Acceso Seguro con Huella Dactilar o FaceID | Cliente | Alta | Inicio de sesión biométrico rápido en navegadores móviles compatibles con WebAuthn / Passkeys. |
| **RF-TAR-071** | Conciliación Diaria con Redes de Adquirencia | Administrador | Crítica | Cruce automático de liquidaciones de Transbank, Redelcom y Getnet contra transacciones autorizadas. |
| **RF-TAR-072** | Reporte de Ingresos por Intereses Devengados | Administrador | Crítica | Balance financiero de intereses corrientes, intereses por mora y comisiones cobradas en el mes contable. |
| **RF-TAR-073** | Monitoreo de Índice de Siniestralidad y Fraude | Administrador | Alta | Métrica porcentual de transacciones fraudulentas vs ventas totales (objetivo menor a 0.05% de facturación). |
| **RF-TAR-074** | Control de Provisiones de Incobrabilidad (B1 a B4) | Administrador | Crítica | Cálculo matemático de reservas contables de capital exigidas según la categoría de riesgo de cada deudor. |
| **RF-TAR-075** | Liquidación de Comisiones a Comercios Afiliados | Administrador | Alta | Pago quincenal de ventas realizadas en tiendas asociadas deduciendo el Merchant Discount Rate (MDR) pactado. |
| **RF-TAR-076** | Auditoría de Inactivación y Cierre Voluntario de Cuentas | Administrador | Alta | Registro formal de desvinculación a petición del titular sin costo ni comisiones de salida según ley. |
| **RF-TAR-077** | Reportería de Rotación de Cartera y Saldo Medio | Administrador | Media | Análisis de hábitos de financiamiento: clientes que pagan el total (Transactors) vs los que financian (Revolvers). |
| **RF-TAR-078** | Monitoreo de Tasa de Abandono y Churn de Tarjetas | Administrador | Media | Seguimiento de cuentas sin movimientos en más de 90 días y activación de campañas de reactivación comercial. |
| **RF-TAR-079** | Control de Límites de Endeudamiento Agregado | Administrador | Crítica | Tope global de colocación de créditos del consorcio para resguardar la solvencia patrimonial de MusicPro. |
| **RF-TAR-080** | Exportación de Balances Financieros para Auditoría Externa | Administrador | Alta | Generación de carpetas digitales con libros contables de colocaciones según normas IFRS / NIIF. |
| **RF-TAR-081** | Autorización Inmediata en Tienda MusicPro Online | Administrador | Crítica | Verificación de cupo y cargo automático al pagar una compra de instrumentos en el subsistema Tienda Store. |
| **RF-TAR-082** | Descuento Inmediato en Mesón de Bodega y Tienda | Administrador | Alta | Detección del BIN de la tarjeta para aplicar descuentos automáticos en caja física de sucursales. |
| **RF-TAR-083** | Integración con Pasarelas Bancarias para Recaudación | Administrador | Crítica | Conexión bidireccional con Transbank Webpay Plus y servidores de bancos para recepción de pagos de cuotas. |
| **RF-TAR-084** | Integración con Servicio de Envío de SMS Transaccionales | Administrador | Alta | Envío masivo de códigos OTP de 6 dígitos con entrega garantizada en menos de 5 segundos. |
| **RF-TAR-085** | Servicio de Consulta de Cédulas del Registro Civil | Administrador | Alta | Validación de vigencia del documento de identidad y número de serie para evitar suplantaciones de personas. |
| **RF-TAR-086** | Generación de Archivos Planos para Débito Automático PAC | Administrador | Media | Exportación en formato estándar bancario para cargos automáticos a cuentas corrientes y vistas de clientes. |
| **RF-TAR-087** | Integración con Módulo de Puntos y Fidelización | Administrador | Media | Sincronización de puntos ganados por cada dólar o peso gastado con la tarjeta en compras de instrumentos. |
| **RF-TAR-088** | Servicio de Generación de Archivos PDF Certificados | Administrador | Media | Renderizado de estados de cuenta mensuales con compresión optimizada y firma electrónica incorporada. |
| **RF-TAR-089** | Monitoreo de Tiempo de Respuesta de API Financiera | Administrador | Alta | Dashboard de latencia que vigila que el tiempo de respuesta de autorizaciones se mantenga bajo 80 ms. |
| **RF-TAR-090** | Configuración de Mensajes de Cobranza Telefónica Automatizada | Administrador | Baja | Parámetros de horario y frecuencia de llamadas automáticas respetando límites de la Ley del Consumidor. |
| **RF-TAR-091** | Módulo de Educación Financiera y Consejos de Endeudamiento | Cliente | Media | Infografías explicativas sobre cómo funciona el CAE, intereses moratorios y el beneficio de pagar el total. |
| **RF-TAR-092** | Categorización Gráfica de Gastos | Cliente | Media | Gráfico interactivo de dona que desglosa los gastos del mes: Instrumentos, Audio, Cursos, Otros. |
| **RF-TAR-093** | Alerta Preventiva de Proximidad de Vencimiento | Cliente | Alta | Recordatorio por correo y notificación en la app 3 días antes del vencimiento del estado de cuenta. |
| **RF-TAR-094** | Simulador de Salida de Deuda (Acelerador de Pagos) | Cliente | Media | Calculadora que muestra cuántos meses de intereses se ahorra el cliente si abona un 20% extra al pago mínimo. |
| **RF-TAR-095** | Canal de Atención Directa para Solicitud de Ayuda de Pago | Cliente | Alta | Formulario para solicitar reprogramación en caso de cesantía o baja de ingresos antes de caer en mora. |
| **RF-TAR-096** | Consulta de Historial de Pagos de Cuotas | Cliente | Alta | Listado con fecha, folio de transacción de Webpay y monto de todos los abonos efectuados a la tarjeta. |
| **RF-TAR-097** | Descarga de Tabla de Desarrollo de Créditos Vigentes | Cliente | Media | Desglose cuota a cuota de avances activos mostrando saldo de capital remanente y término de pago. |
| **RF-TAR-098** | Encuesta de Calidad de Atención Financiera | Cliente | Baja | Evaluación de satisfacción tras recibir atención de un ejecutivo de cobranza o ejecutivo de cuentas. |
| **RF-TAR-099** | Suscripción a Estados de Cuenta Digitales (Cero Papel) | Cliente | Baja | Opción para no recibir cartolas en papel físico, aportando a la sustentabilidad ambiental. |
| **RF-TAR-100** | Auditoría Inmutable de Todas las Operaciones de la Tarjeta | Administrador | Crítica | Log de seguridad con firma criptográfica que registra autorizaciones, rechazos, bloqueos y pagos. |

---

## 2. Requerimientos No Funcionales (50 RNF)

| ID | Categoría | Rol / Impacto | Prioridad | Criterio de Medición y Aceptación |
| :--- | :--- | :--- | :---: | :--- |
| **RNF-TAR-001** | Rendimiento | Sistema | Crítica | Tiempo de autorización de transacciones POS y virtuales inferior a 80 milisegundos en el percentil 99. |
| **RNF-TAR-002** | Rendimiento | Sistema | Alta | Cálculo matemático de simulación de avances con desglose de cuotas procesado en menos de 30 milisegundos. |
| **RNF-TAR-003** | Rendimiento | Sistema | Alta | Tiempo de carga inicial del dashboard de la tarjeta inferior a 1.0 segundo en redes de datos 4G. |
| **RNF-TAR-004** | Rendimiento | Sistema | Crítica | Capacidad de procesar hasta 2.500 transacciones de compra concurrentes por segundo sin degradación de servicio. |
| **RNF-TAR-005** | Rendimiento | Sistema | Media | Generación del documento PDF de cartola mensual de 4 páginas en menos de 600 milisegundos. |
| **RNF-TAR-006** | Rendimiento | Sistema | Media | Consumo de memoria RAM en pestaña del cliente menor a 70 MB durante sesiones bancarias activas. |
| **RNF-TAR-007** | Rendimiento | Sistema | Media | Renderizado fluido a 60 FPS en animaciones de giro 3D de la tarjeta virtual. |
| **RNF-TAR-008** | Rendimiento | Sistema | Alta | Generación y validación de códigos de un solo uso (OTP) por SMS con latencia menor a 3 segundos. |
| **RNF-TAR-009** | Rendimiento | Sistema | Media | Optimización de consultas a la base de datos de movimientos con índices compuestos en RUT y fecha. |
| **RNF-TAR-010** | Rendimiento | Sistema | Alta | Proceso de cierre nocturno mensual de facturación de 50.000 clientes completado en menos de 45 minutos. |
| **RNF-TAR-011** | Seguridad | Sistema | Crítica | Cumplimiento estricto con el estándar de seguridad de la industria de tarjetas de pago PCI-DSS versión 4.0. |
| **RNF-TAR-012** | Seguridad | Sistema | Crítica | Cifrado de datos en reposo y tránsito mediante algoritmo estándar militar AES-256 y protocolos TLS 1.3. |
| **RNF-TAR-013** | Seguridad | Sistema | Crítica | Almacenamiento de números de tarjeta (PAN) con enmascaramiento estricto: solo se muestran primeros 6 y últimos 4 dígitos. |
| **RNF-TAR-014** | Seguridad | Sistema | Crítica | Prohibición estricta de persistir códigos de validación dinámica (CVV2 / CVC) tras la autorización de la compra. |
| **RNF-TAR-015** | Seguridad | Sistema | Crítica | Autenticación de dos factores (2FA / OTP) obligatoria para transferencias de avances y cambio de claves. |
| **RNF-TAR-016** | Seguridad | Sistema | Alta | Cierre automático de sesión por inactividad a los 5 minutos para prevenir accesos no autorizados. |
| **RNF-TAR-017** | Seguridad | Sistema | Crítica | Protección contra inyecciones SQL, Cross-Site Scripting (XSS) y Clickjacking en todo el portal financiero. |
| **RNF-TAR-018** | Seguridad | Sistema | Crítica | Registro inmutable de auditoría (Write-Once Read-Many - WORM) para todas las operaciones monetarias. |
| **RNF-TAR-019** | Seguridad | Sistema | Alta | Bloqueo preventivo de IP tras 5 intentos fallidos de autenticación o ingreso de clave bancaria. |
| **RNF-TAR-020** | Seguridad | Sistema | Crítica | Cumplimiento con las normativas de Ciberseguridad de la Comisión para el Mercado Financiero (Recopilación Actualizada de Normas CMF). |
| **RNF-TAR-021** | Usabilidad | Sistema | Crítica | Diseño visual adaptativo para smartphones (360x640), tablets y pantallas de escritorio. |
| **RNF-TAR-022** | Usabilidad | Sistema | Alta | Cumplimiento de accesibilidad WCAG 2.1 nivel AA con ratios de contraste superiores a 4.5:1 en balances y textos. |
| **RNF-TAR-023** | Usabilidad | Sistema | Alta | Área táctil mínima de 48x48 píxeles en botones de transferencia, pago de cuota y bloqueo express. |
| **RNF-TAR-024** | Usabilidad | Sistema | Media | Visualización de tasas de interés y montos en tipografía de gran tamaño sin letra chica confusa. |
| **RNF-TAR-025** | Usabilidad | Sistema | Alta | Mensajes de error redactados en términos comprensibles que no generen pánico injustificado en el usuario. |
| **RNF-TAR-026** | Usabilidad | Sistema | Media | Formato numérico chileno estandarizado con signo peso, separación de miles con punto y decimales con coma. |
| **RNF-TAR-027** | Usabilidad | Sistema | Alta | Navegación asistida con teclado en simuladores de cuotas y formularios de transferencia. |
| **RNF-TAR-028** | Usabilidad | Sistema | Media | Transición de pantallas con animaciones fluidas y confirmaciones visuales claras de cada operación. |
| **RNF-TAR-029** | Usabilidad | Sistema | Alta | Disponibilidad de ayuda contextual en línea mediante tooltips explicativos sobre términos como CAE y TMC. |
| **RNF-TAR-030** | Usabilidad | Sistema | Alta | Botón de copia fácil de datos de cuenta y tarjeta virtual para agilizar pagos en aplicaciones externas. |
| **RNF-TAR-031** | Fiabilidad | Sistema | Crítica | Disponibilidad garantizada del 99.99% en el core transaccional (menos de 52 minutos de inactividad al año). |
| **RNF-TAR-032** | Fiabilidad | Sistema | Crítica | Consistencia transaccional ACID absoluta: no se permite saldo desfalleciente ni discrepancias contables. |
| **RNF-TAR-033** | Fiabilidad | Sistema | Crítica | Idempotencia en autorizaciones de pago y cargos de abonos para impedir duplicación de transacciones. |
| **RNF-TAR-034** | Fiabilidad | Sistema | Alta | Tolerancia a fallos con arquitectura redundante activa-activa en centros de datos geográficamente distantes. |
| **RNF-TAR-035** | Fiabilidad | Sistema | Crítica | Objetivo de Punto de Recuperación (RPO) = 0 segundos y Objetivo de Tiempo de Recuperación (RTO) < 5 minutos. |
| **RNF-TAR-036** | Fiabilidad | Sistema | Alta | Copias de respaldo continuas de la base de datos financiera con replicación síncrona. |
| **RNF-TAR-037** | Fiabilidad | Sistema | Media | Aislamiento de contingencias en pasarelas bancarias con colas de reintento seguras. |
| **RNF-TAR-038** | Fiabilidad | Sistema | Media | Persistencia garantizada de los borradores de postulación de crédito ante cortes de enlace. |
| **RNF-TAR-039** | Fiabilidad | Sistema | Alta | Verificación de integridad de saldos contables con algoritmo de hash encadenado diario (Merkle Tree). |
| **RNF-TAR-040** | Fiabilidad | Sistema | Crítica | Mantenimiento de balances contables en doble partida sin excepciones de redondeo monetario. |
| **RNF-TAR-041** | Compatibilidad | Sistema | Alta | Compatibilidad con Google Chrome, Mozilla Firefox, Apple Safari y Microsoft Edge en versiones actuales. |
| **RNF-TAR-042** | Compatibilidad | Sistema | Crítica | Soporte para terminales POS físicos mediante estándares de mensajería ISO 8583. |
| **RNF-TAR-043** | Compatibilidad | Sistema | Alta | Compatibilidad con billeteras digitales móviles mediante soporte para Apple Pay y Google Wallet tokenizado. |
| **RNF-TAR-044** | Compatibilidad | Sistema | Alta | Integración con la plataforma Webpay Plus de Transbank para liquidación de pagos de cartola. |
| **RNF-TAR-045** | Compatibilidad | Sistema | Media | Exportación de cartolas en formato PDF/A-1b para preservación de documentos a largo plazo. |
| **RNF-TAR-046** | Compatibilidad | Sistema | Media | Manejo de codificación de caracteres internacional UTF-8 en nombres de clientes y razones sociales. |
| **RNF-TAR-047** | Compatibilidad | Sistema | Alta | Arquitectura modular con estilos y scripts aislados en assets/css y assets/js sin librerías invasivas. |
| **RNF-TAR-048** | Compatibilidad | Sistema | Media | Compatibilidad con lectores biométricos dactilares estándar con certificación del FBI / Registro Civil. |
| **RNF-TAR-049** | Compatibilidad | Sistema | Media | Alineación con directrices de la CMF sobre portabilidad financiera y transferencias simplificadas. |
| **RNF-TAR-050** | Compatibilidad | Sistema | Alta | Integración API RESTful con los módulos de Tienda, Bodega y Transporte de MusicPro. |

---

## 3. Requerimientos de Diseño, UI y Componentes (100 RD)

| ID | Componente / Elemento | Rol / Aplicación | Prioridad | Especificación de Diseño y Comportamiento UI/UX |
| :--- | :--- | :--- | :---: | :--- |
| **RD-TAR-001** | Sistema de Diseño | Diseño & UI | Alta | Identidad cromática de lujo fintech con fondo Slate-950 (#020617), tarjetas Slate-900 y acentos Dorados (#eab308, #facc15). |
| **RD-TAR-002** | Sistema de Diseño | Diseño & UI | Alta | Tipografía Outfit para titulares financieros, números de cupo disponible, saldos y métricas de riesgo. |
| **RD-TAR-003** | Sistema de Diseño | Diseño & UI | Alta | Tipografía Plus Jakarta Sans para formularios bancarios, tablas de amortización y cláusulas de contrato. |
| **RD-TAR-004** | Sistema de Diseño | Diseño & UI | Crítica | Tipografía monospaciada Share Tech Mono para números PAN de 16 dígitos, fechas de expiración y códigos CVV. |
| **RD-TAR-005** | Sistema de Diseño | Diseño & UI | Media | Bordes redondeados de 1.5rem (rounded-3xl) en tarjeta virtual y 0.75rem (rounded-xl) en botones y modales. |
| **RD-TAR-006** | Sistema de Diseño | Diseño & UI | Media | Efectos de sombras doradas difusas (shadow-amber-500/10) en elementos con saldo a favor o promociones. |
| **RD-TAR-007** | Sistema de Diseño | Diseño & UI | Crítica | Paleta semántica: Verde (#10b981) Pago al Día, Ámbar (#f59e0b) Por Vencer, Rojo (#ef4444) Mora o Bloqueo. |
| **RD-TAR-008** | Sistema de Diseño | Diseño & UI | Alta | Modo oscuro de alto contraste que transmite solidez, exclusividad y seguridad financiera. |
| **RD-TAR-009** | Sistema de Diseño | Diseño & UI | Media | Scrollbars elegantes estilizadas con pista transparente y barra dorada translúcida. |
| **RD-TAR-010** | Sistema de Diseño | Diseño & UI | Alta | Iconografía bancaria y de seguridad (tarjetas, candados, escudos, transferencias, monedas) con FontAwesome 6.5. |
| **RD-TAR-011** | Tarjeta Virtual | Diseño & UI | Crítica | Tarjeta plástica virtual interactiva (.credit-card-ui) con textura metálica cepillada y proporciones bancarias ISO 7810. |
| **RD-TAR-012** | Tarjeta Virtual | Diseño & UI | Alta | Chip inteligente EMV simulado en color oro metalizado con contactos vectoriales nítidos en el cuadrante izquierdo. |
| **RD-TAR-013** | Tarjeta Virtual | Diseño & UI | Alta | Icono de antena Contactless con ondas concéntricas en color blanco perlado sobre el chip. |
| **RD-TAR-014** | Tarjeta Virtual | Diseño & UI | Crítica | Número de tarjeta (PAN) de 16 dígitos agrupado en 4 bloques de 4 cifras con tipografía monospaciada luminosa. |
| **RD-TAR-015** | Tarjeta Virtual | Diseño & UI | Alta | Nombre del titular en mayúsculas emulando estampado en relieve en la parte inferior izquierda de la tarjeta. |
| **RD-TAR-016** | Tarjeta Virtual | Diseño & UI | Alta | Fecha de vencimiento (VALID THRU MM/AA) alineada junto al nombre del titular con etiqueta discreta. |
| **RD-TAR-017** | Tarjeta Virtual | Diseño & UI | Alta | Logotipo MusicPro Financial estilizado con gradiente dorado en la esquina superior derecha. |
| **RD-TAR-018** | Tarjeta Virtual | Diseño & UI | Media | Distintivo de categoría en la esquina inferior derecha: 'GOLD', 'PLATINUM' o 'BLACK' con insignia metálica. |
| **RD-TAR-019** | Tarjeta Virtual | Diseño & UI | Crítica | Animación de volteo 3D (Flip Card) para girar la tarjeta al reverso y consultar la banda magnética y el CVV. |
| **RD-TAR-020** | Tarjeta Virtual | Diseño & UI | Alta | Reverso de tarjeta con banda magnética oscura, panel de firma blanco y caja para el código de seguridad CVV. |
| **RD-TAR-021** | Dashboard | Diseño & UI | Crítica | Tarjeta principal de cupo con desglose en dos cifras gigantes: 'Disponible para Compras' y 'Disponible para Avances'. |
| **RD-TAR-022** | Dashboard | Diseño & UI | Alta | Barra de progreso de uso de cupo con indicador porcentual y cambio de color a rojo al superar el 80% de utilización. |
| **RD-TAR-023** | Dashboard | Diseño & UI | Alta | Tarjeta destacada de facturación con 'Monto Total Facturado', 'Pago Mínimo' y fecha límite de pago en rojo/ámbar. |
| **RD-TAR-024** | Dashboard | Diseño & UI | Crítica | Botón de acción rápida 'Pagar Tarjeta' con gradiente amarillo a ámbar, texto oscuro y sombra luminosa. |
| **RD-TAR-025** | Dashboard | Diseño & UI | Alta | Botón 'Simular Avance' con icono de transferencia y acceso directo al cotizador de cuotas. |
| **RD-TAR-026** | Dashboard | Diseño & UI | Alta | Switch toggle de 'Bloqueo Express' en cabecera de tarjeta con icono de candado y retroalimentación de color. |
| **RD-TAR-027** | Dashboard | Diseño & UI | Media | Tarjeta resumen de puntos MusicPro Cash con icono de moneda dorada y botón para canjear en tiendas. |
| **RD-TAR-028** | Dashboard | Diseño & UI | Media | Indicador de estado de cuenta: 'Al Día', 'Cierre Próximo', 'Facturación Emitida' o 'En Mora'. |
| **RD-TAR-029** | Dashboard | Diseño & UI | Media | Gráfico de anillo de distribución de gastos (Compras, Avances, Cargos de Mantención) en colores dorados y cian. |
| **RD-TAR-030** | Dashboard | Diseño & UI | Baja | Banner inferior de educación financiera con tips de uso responsable del crédito de consumo. |
| **RD-TAR-031** | Simulador | Diseño & UI | Crítica | Slider deslizante interactivo para seleccionar el monto del avance con visualización de valor en tiempo real. |
| **RD-TAR-032** | Simulador | Diseño & UI | Crítica | Selector de cuotas en botones tipo chip (3, 6, 12, 18, 24 cuotas) con resaltado dorado en la opción elegida. |
| **RD-TAR-033** | Simulador | Diseño & UI | Alta | Display destacado con valor de la cuota mensual calculada en tipografía Outfit tamaño 3xl dorada. |
| **RD-TAR-034** | Simulador | Diseño & UI | Alta | Caja de transparencia con desglose: Monto Solicitado, Tasa de Interés Mensual, Impuesto de Timbres, CAE y Costo Total. |
| **RD-TAR-035** | Simulador | Diseño & UI | Alta | Tabla colapsable con el calendario completo de vencimientos y desglose de amortización cuota a cuota. |
| **RD-TAR-036** | Simulador | Diseño & UI | Alta | Selector de cuenta bancaria de destino para el depósito del dinero con visualización de banco y tipo de cuenta. |
| **RD-TAR-037** | Simulador | Diseño & UI | Crítica | Botón 'Transferir Avance Ahora' con advertencia de confirmación mediante código OTP en pantalla modal. |
| **RD-TAR-038** | Simulador | Diseño & UI | Media | Mensaje de advertencia si el monto seleccionado supera el cupo disponible para avances en efectivo. |
| **RD-TAR-039** | Simulador | Diseño & UI | Media | Calculadora comparativa que muestra el ahorro en intereses entre pagar en 6 vs 12 cuotas. |
| **RD-TAR-040** | Simulador | Diseño & UI | Baja | Enlace de descarga del certificado de simulación en formato PDF para archivo del solicitante. |
| **RD-TAR-041** | Tablas | Diseño & UI | Crítica | Tabla compacta de transacciones (.fintech-table) con fecha, comercio, categoría, cuotas y monto en CLP. |
| **RD-TAR-042** | Tablas | Diseño & UI | Alta | Colores diferenciados en montos: Verde (+ Abonos y Pagos) y Blanco con signo negativo (- Compras y Cargos). |
| **RD-TAR-043** | Tablas | Diseño & UI | Media | Encabezados de tabla con fondo slate-950, tipografía en mayúsculas de 11px y líneas de división discretas. |
| **RD-TAR-044** | Tablas | Diseño & UI | Alta | Efecto hover en filas de movimientos con iluminación dorada suave (hover:bg-amber-500/5). |
| **RD-TAR-045** | Tablas | Diseño & UI | Alta | Badge indicador de cuotas: 'Cuota 2/6' con micro-barra de avance visual al interior del badge. |
| **RD-TAR-046** | Tablas | Diseño & UI | Media | Alineación numérica estricta a la derecha en montos de compras, intereses y saldos remanentes. |
| **RD-TAR-047** | Tablas | Diseño & UI | Media | Paginador interactivo con botones redondeados y selector de registros por vista (10, 25, 50). |
| **RD-TAR-048** | Tablas | Diseño & UI | Alta | Botón de acción rápida por fila para descargar comprobante individual de transacción o desconocer cargo. |
| **RD-TAR-049** | Tablas | Diseño & UI | Media | Buscador por nombre de comercio (ej: 'MusicPro Tienda Central', 'Spotify', 'Copec') con filtrado instantáneo. |
| **RD-TAR-050** | Tablas | Diseño & UI | Alta | Filtro rápido por pestañas: 'Todos', 'Compras', 'Avances', 'Pagos' y 'Comisiones'. |
| **RD-TAR-051** | Modales | Diseño & UI | Crítica | Modal de seguridad para ingreso de código OTP de 6 dígitos con casillas numéricas individuales y auto-foco. |
| **RD-TAR-052** | Modales | Diseño & UI | Alta | Contador regresivo de 60 segundos para reenvío de código SMS en caso de no recepción. |
| **RD-TAR-053** | Modales | Diseño & UI | Alta | Modal de Bloqueo Temporal con confirmación de consecuencias y botón rojo de bloqueo inmediato. |
| **RD-TAR-054** | Modales | Diseño & UI | Alta | Modal de CVV Dinámico que muestra el código de 3 cifras con reloj circular de expiración de 5 minutos. |
| **RD-TAR-055** | Modales | Diseño & UI | Media | Modal de detalle de transacción con folio de autorización, terminal adquirente y ubicación geográfica. |
| **RD-TAR-056** | Notificaciones | Diseño & UI | Alta | Toasts emergentes de alta prioridad en esquina inferior derecha para confirmar pagos y transferencias exitosas. |
| **RD-TAR-057** | Notificaciones | Diseño & UI | Alta | Toast de alerta con borde ámbar cuando una compra supera el 50% del cupo disponible de la tarjeta. |
| **RD-TAR-058** | Feedback | Diseño & UI | Alta | Esqueletos de carga (Skeleton Loaders) con degradado pulsante dorado mientras se cargan los saldos. |
| **RD-TAR-059** | Feedback | Diseño & UI | Alta | Animación de sacudida (shake) en casillas de OTP si el usuario ingresa un código de verificación erróneo. |
| **RD-TAR-060** | Feedback | Diseño & UI | Media | Efecto de destello dorado brillante en la tarjeta virtual al momento de reactivarla tras un bloqueo. |
| **RD-TAR-061** | Formularios | Diseño & UI | Alta | Inputs financieros con fondo slate-900, borde slate-800, texto blanco y anillo de enfoque dorado brillante. |
| **RD-TAR-062** | Formularios | Diseño & UI | Alta | Selector de monto a pagar con 3 opciones predeterminadas: Total Facturado, Pago Mínimo u Otro Valor. |
| **RD-TAR-063** | Formularios | Diseño & UI | Alta | Formulario de solicitud de tarjeta con indicador de avance en 3 fases: Datos, Ingresos y Contrato. |
| **RD-TAR-064** | Formularios | Diseño & UI | Alta | Caja de carga de liquidaciones de sueldo con drag & drop y vista previa de documento PDF subido. |
| **RD-TAR-065** | Formularios | Diseño & UI | Media | Interruptor toggle para activar la adhesión al Pago Automático de Cuentas (PAC) mensual. |
| **RD-TAR-066** | Formularios | Diseño & UI | Media | Selector de fecha de vencimiento preferente (día 5, 15 o 25) mediante tarjetas seleccionables. |
| **RD-TAR-067** | Formularios | Diseño & UI | Alta | Lienzo de firma digital para rubricar electrónicamente el contrato de crédito de apertura. |
| **RD-TAR-068** | Formularios | Diseño & UI | Alta | Mensajes de validación de ingresos mínimos con cálculo en tiempo real de cupo estimado. |
| **RD-TAR-069** | Formularios | Diseño & UI | Media | Etiqueta con asterisco dorado en todos los campos exigidos por la normativa de la CMF. |
| **RD-TAR-070** | Formularios | Diseño & UI | Baja | Botón de limpiar campos y restablecer valores predeterminados en simuladores de crédito. |
| **RD-TAR-071** | Riesgo & Score | Diseño & UI | Crítica | Medidor de riesgo crediticio (Risk-o-Meter) en semicírculo con aguja animada y zonas de color verde, amarillo y rojo. |
| **RD-TAR-072** | Riesgo & Score | Diseño & UI | Alta | Insignia de puntuación de crédito (Score Badge): 'Score 780 - Excelente (Riesgo Bajo)'. |
| **RD-TAR-073** | Riesgo & Score | Diseño & UI | Alta | Tarjeta de análisis de capacidad de endeudamiento con gráfico de relación Deuda vs Ingreso. |
| **RD-TAR-074** | Riesgo & Score | Diseño & UI | Media | Lista de verificación de políticas de riesgo con checks verdes automáticos para clientes aptos. |
| **RD-TAR-075** | Riesgo & Score | Diseño & UI | Alta | Panel de alertas de fraude con mapa de geolocalización de transacciones sospechosas reportadas. |
| **RD-TAR-076** | Admin & CMF | Diseño & UI | Alta | Tabla de cartera vencida con semáforos por días de mora: 30 días, 60 días, 90 días y Castigo. |
| **RD-TAR-077** | Admin & CMF | Diseño & UI | Media | Métricas ejecutivas de captación: Solicitudes Ingresadas, Aprobadas, Tasa de Aprobación y Cupo Total Otorgado. |
| **RD-TAR-078** | Admin & CMF | Diseño & UI | Media | Gráfico de líneas de ingresos financieros por intereses devengados mes a mes con comparativa interanual. |
| **RD-TAR-079** | Admin & CMF | Diseño & UI | Alta | Buscador global de cuentas por RUT, número de cuenta o nombre completo del titular con autocompletado. |
| **RD-TAR-080** | Admin & CMF | Diseño & UI | Crítica | Botón de bloqueo de emergencia a nivel de cuenta con justificación requerida y registro inmutable. |
| **RD-TAR-081** | Cartola PDF | Diseño & UI | Crítica | Formato de cartola mensual estructurado en 4 secciones estandarizadas CMF: Resumen, Detalle, Tasas e Información Legal. |
| **RD-TAR-082** | Cartola PDF | Diseño & UI | Alta | Cuadro comparativo obligatorio: 'Costo Total si paga solo el mínimo vs si paga el total'. |
| **RD-TAR-083** | Cartola PDF | Diseño & UI | Alta | Código de barras bidimensional en la colilla de pago para recaudación en Servipag y cajas presenciales. |
| **RD-TAR-084** | Cartola PDF | Diseño & UI | Media | Logotipo de la entidad financiera, RUT del emisor y timbre digital de certificación en la cabecera de la cartola. |
| **RD-TAR-085** | Impresión | Diseño & UI | Crítica | Estilos CSS de impresión (@media print) optimizados para formato A4 o Carta en blanco y negro puro de alta legibilidad. |
| **RD-TAR-086** | Impresión | Diseño & UI | Media | Ocultamiento estricto de elementos de navegación interactiva, botones y banners al enviar a impresión. |
| **RD-TAR-087** | Comprobantes | Diseño & UI | Alta | Voucher digital de pago de cuota con número de comprobante, medio utilizado, fecha, hora y timbre bancario. |
| **RD-TAR-088** | Comprobantes | Diseño & UI | Media | Botón para compartir comprobante de transferencia o pago directamente por WhatsApp o correo electrónico. |
| **RD-TAR-089** | Comprobantes | Diseño & UI | Baja | Marca de agua de seguridad 'ORIGINAL BANCARIO' en certificados de saldo y finiquitos de deuda. |
| **RD-TAR-090** | Comprobantes | Diseño & UI | Alta | Código QR de verificación de autenticidad en finiquitos para consulta en línea en el portal de validación. |
| **RD-TAR-091** | Responsive | Diseño & UI | Crítica | Diseño Mobile-First optimizado para uso con una sola mano en pantallas de teléfonos móviles. |
| **RD-TAR-092** | Responsive | Diseño & UI | Alta | Barra de navegación inferior fija (Bottom Nav) en smartphones con accesos a Inicio, Movimientos, Tarjeta y Pagos. |
| **RD-TAR-093** | Responsive | Diseño & UI | Media | Adaptación de la tarjeta virtual reduciendo escala en pantallas pequeñas sin perder proporción ni nitidez. |
| **RD-TAR-094** | Responsive | Diseño & UI | Alta | Ocultamiento inteligente de columnas no críticas de la tabla de movimientos en pantallas menores a 768px. |
| **RD-TAR-095** | Estilo & Detalle | Diseño & UI | Media | Microinteracción de pulsación con escala (active:scale-95) en botones de acción monetaria. |
| **RD-TAR-096** | Estilo & Detalle | Diseño & UI | Baja | Efecto de brillo metálico reflejado (shimmer effect) que atraviesa la tarjeta virtual al cargar el dashboard. |
| **RD-TAR-097** | Estilo & Detalle | Diseño & UI | Media | Bordes con iluminación tenue dorada en tarjetas con promociones de compras en cuotas sin interés. |
| **RD-TAR-098** | Estilo & Detalle | Diseño & UI | Baja | Identificación de versión del sistema financiero y sello de supervisión CMF en el pie de página. |
| **RD-TAR-099** | Estilo & Detalle | Diseño & UI | Alta | Alineación perfecta en píxeles de cifras monetarias con formato tabular y separadores uniformes. |
| **RD-TAR-0100** | Estilo & Detalle | Diseño & UI | Crítica | Garantía absoluta de consistencia y conformidad del 100% de clases utilitarias Vanilla Tailwind CSS. |
