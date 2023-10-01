export const dataStatus100 = [
    {
        label: "100",
        value: 100,
        description: '100 Continue: Este código se utiliza para indicar que el servidor ha recibido los encabezados de la solicitud y que el cliente puede continuar enviando el cuerpo de la solicitud. Se utiliza en situaciones en las que la solicitud es grande y se envía en fragmentos.'
    },

    {
        label: "101",
        value: 101,
        description: '101 Switching Protocols: Indica que el servidor está cambiando el protocolo utilizado en la conexión. Por ejemplo, se puede usar cuando se pasa de HTTP a WebSocket.'
    },

    {
        label: "102",
        value: 102,
        description: '102 Processing: Este código se utiliza para informar al cliente que el servidor ha recibido la solicitud, pero aún está procesando la solicitud. Puede ser útil en solicitudes que toman mucho tiempo en procesarse.'
    },

    {
        label: "103",
        value: 103,
        description: '103 Early Hints: Se utiliza para indicar al cliente que el servidor está enviando encabezados adicionales que pueden ayudar al cliente a prepararse para recibir una respuesta final. Esto se usa en HTTP/2.'
    },
];

export const dataStatus200 = [
    {
        label: "200",
        value: 200,
        description: '200 OK: Indica que la solicitud fue exitosa y que el servidor ha devuelto una respuesta adecuada.'
    },

    {
        label: "201",
        value: 201,
        description: '201 Created: Se utiliza cuando se ha creado exitosamente un nuevo recurso como resultado de la solicitud. El servidor debe proporcionar información sobre la ubicación del nuevo recurso en el encabezado de la respuesta.'
    },

    {
        label: "202",
        value: 202,
        description: '202 Accepted: Indica que la solicitud ha sido aceptada para su procesamiento, pero aún no se ha completado. Puede ser útil en procesos asincrónicos.'
    },

    {
        label: "203",
        value: 203,
        description: 'Non-Authoritative Information: Este código se utiliza para indicar que la respuesta que el cliente ha recibido es una representación intermedia de un recurso. Esto significa que la respuesta puede provenir de una fuente diferente a la autoritativa y, por lo tanto, puede no ser la respuesta final más actualizada.'
    },

    {
        label: "204",
        value: 204,
        description: '204 No Content: La solicitud se ha procesado correctamente, pero no hay contenido para devolver en la respuesta. Se usa a menudo en respuestas a solicitudes que realizan operaciones sin devolver datos.'
    },

    {
        label: "206",
        value: 206,
        description: '206 Partial Content: Indica que el servidor está devolviendo solo una parte del recurso solicitado, generalmente en respuestas a solicitudes de descarga parcial de archivos.'
    },

    {
        label: "207",
        value: 207,
        description: '207 Multi-Status: Este código se utiliza en el contexto de WebDAV (Extensiones de Autoría Distribuida y Versiones del World Wide Web) para informar sobre múltiples estados de un conjunto de recursos en una única respuesta.'
    },
];

export const dataStatus300 = [
    {
        label: "300",
        value: 300,
        description: '300 Multiple Choices: Indica que hay múltiples opciones disponibles para la solicitud y el cliente debe elegir una.'
    },
    {
        label: "301",
        value: 301,
        description: '301 Moved Permanently: El recurso solicitado ha sido movido de manera permanente a una nueva URL. Los navegadores suelen cachear esta respuesta y actualizar automáticamente sus marcadores.'
    },
    {
        label: "302",
        value: 302,
        description: '302 Found: Similar al 301, pero indica una redirección temporal. Los navegadores pueden seguir solicitando la URL original.'
    },
    {
        label: "303",
        value: 303,
        description: '303 See other: Este código de estado se utiliza para indicar que el recurso solicitado se encuentra en otro lugar, y el navegador debería redirigirse automáticamente a la ubicación especificada en el encabezado Location de la respuesta. '
    },
    {
        label: "304",
        value: 304,
        description: '304 Not Modified: Indica que el recurso no ha cambiado desde la última vez que se accedió a él y que el cliente puede usar su copia en caché.'
    },
    {
        label: "305",
        value: 305,
        description: '305 Use proxy:Este código de estado ya no se utiliza con frecuencia, y su significado original era indicar que el cliente debería utilizar un proxy para acceder al recurso solicitado. Sin embargo, debido a problemas de seguridad y otros factores, este código se ha vuelto obsoleto en gran medida y no se recomienda su uso.'
    },
    {
        label: "307",
        value: 307,
        description: '307 Temporary Redirect: Similar al 302, pero indica una redirección temporal. Los navegadores deben seguir solicitando la URL original.'
    },
    {
        label: "308",
        value: 308,
        description: '308 Permanent Redirect: Similar al 301, pero indica una redirección permanente. Los navegadores deben actualizar sus marcadores.'
    },
];

export const dataStatus400 = [
    {
        label: "400",
        value: 400,
        description: '400 Bad Request (Solicitud incorrecta): Se utiliza cuando la solicitud del cliente es incorrecta debido a una sintaxis inadecuada, datos faltantes o información incoherente.'
    },
    {
        label: "401",
        value: 401,
        description: '401 Unauthorized (No autorizado): Indica que se requiere autenticación para acceder al recurso solicitado, pero el cliente no ha proporcionado credenciales válidas o no tiene permiso para hacerlo.'
    },
    {
        label: "402",
        value: 402,
        description: '402 Payment Required (Pago requerido): Aunque está definido en el estándar HTTP, rara vez se utiliza en la práctica. Teóricamente, podría indicar que se requiere un pago para acceder al recurso solicitado, pero no se utiliza ampliamente.'
    },
    {
        label: "403",
        value: 403,
        description: '403 Forbidden (Prohibido): Se emite cuando el servidor entiende la solicitud del cliente pero se niega a procesarla debido a restricciones de permisos o políticas de acceso.'
    },
    {
        label: "404",
        value: 404,
        description: '404 Not Found (No encontrado): Indica que el recurso solicitado no se encuentra en la ubicación especificada en la solicitud.'
    },
    {
        label: "405",
        value: 405,
        description: '405 Method Not Allowed (Método no permitido): Se utiliza cuando el servidor rechaza la solicitud porque el método HTTP utilizado (GET, POST, PUT, etc.) no está permitido para el recurso solicitado.'
    },
    {
        label: "406",
        value: 406,
        description: '406 Not Acceptable (No aceptable): Indica que el servidor no puede producir una respuesta que sea aceptable para el cliente según los encabezados "Accept" en la solicitud.'
    },
    {
        label: "407",
        value: 407,
        description: '407 Proxy Authentication Required (Se requiere autenticación de proxy): Similar a 401 Unauthorized, pero se utiliza cuando se requiere autenticación de proxy para acceder al recurso solicitado a través de un proxy.'
    },
    {
        label: "408",
        value: 408,
        description: '408 Request Timeout (Tiempo de espera de solicitud): Se utiliza cuando el servidor cierra la conexión debido a que el cliente no envía la solicitud en un tiempo razonable.'
    },
    {
        label: "409",
        value: 409,
        description: '409 Conflict (Conflicto): Indica que la solicitud no se pudo completar debido a un conflicto con el estado actual del recurso.'
    },
    {
        label: "410",
        value: 410,
        description: '410 Gone (Desaparecido): Similar a 404 Not Found, pero indica que el recurso anteriormente existía pero ya no está disponible y no se espera que vuelva a estar disponible.'
    },
    {
        label: "411",
        value: 411,
        description: '411 Length Required (Longitud requerida): Indica que la solicitud no contiene el encabezado "Content-Length" necesario para la solicitud POST, que se utiliza para indicar la longitud del cuerpo de la solicitud.'
    },
    {
        label: "412",
        value: 412,
        description: '412 Precondition Failed (Falló la precondición): Se utiliza cuando una o más precondiciones definidas en la solicitud no se cumplen.'
    },
    {
        label: "413",
        value: 413,
        description: '413 Payload Too Large (Carga de solicitud demasiado grande): Indica que el servidor rechaza la solicitud porque el cuerpo de la solicitud es demasiado grande.'
    },
    {
        label: "414",
        value: 414,
        description: '414 URI Too Long (URI demasiado largo): Se emite cuando la URI (Uniform Resource Identifier) en la solicitud es demasiado larga para que el servidor la procese.'
    },
    {
        label: "415",
        value: 415,
        description: '415 Unsupported Media Type (Tipo de medio no admitido): Indica que el servidor no admite el tipo de medio especificado en el encabezado "Content-Type" de la solicitud.'
    },
    {
        label: "416",
        value: 416,
        description: '416 Range Not Satisfiable (Rango no satisfactorio): Se utiliza cuando el servidor no puede satisfacer el rango de bytes especificado en la solicitud "Range".'
    },
    {
        label: "417",
        value: 417,
        description: '417 Expectation Failed (Expectativa fallida): Indica que el servidor no puede cumplir con las expectativas especificadas en el encabezado "Expect" de la solicitud.'
    },
    {
        label: "418",
        value: 418,
        description: "418 I'm a teapot (Soy una tetera): Este código es una broma y no se utiliza en situaciones serias. Fue definido en el protocolo como un código de estado de broma para indicar que el servidor es una tetera y no puede preparar café."
    },
    {
        label: "420",
        value: 420,
        description: '420 Enhance Your Calm (Mejora tu calma): Aunque no es un código de estado HTTP estándar, este código se ha utilizado en ocasiones como un mensaje humorístico o para indicar que el cliente está realizando demasiadas solicitudes y debería reducir la velocidad.'
    },
    {
        label: "421",
        value: 421,
        description: '421 Misdirected Request (Solicitud mal dirigida): Indica que el servidor está configurado de manera incorrecta y ha recibido una solicitud que no puede manejar adecuadamente.'
    },
    {
        label: "422",
        value: 422,
        description: '422 Unprocessable Entity (Entidad no procesable): Se utiliza cuando el servidor comprende la solicitud, pero el contenido de la solicitud es semánticamente incorrecto o no puede procesarse.'
    },
    {
        label: "423",
        value: 423,
        description: '423 Locked (Bloqueado): Indica que el recurso solicitado está bloqueado y no puede accederse en ese momento.'
    },
    {
        label: "424",
        value: 424,
        description: '424 Failed Dependency (Dependencia fallida): Se utiliza cuando la solicitud falla debido a una solicitud previa que falló.'
    },
    {
        label: "425",
        value: 425,
        description: '425 Too Early (Demasiado temprano): Indica que el servidor no está dispuesto a manejar la solicitud debido a que la solicitud fue realizada antes de que el servidor estuviera listo.'
    },
    {
        label: "426",
        value: 426,
        description: '426 Upgrade Required (Actualización requerida): Este código se utiliza cuando el cliente debe cambiar el protocolo que está utilizando para acceder al recurso solicitado.'
    },
    {
        label: "427",
        value: 427,
        description: '427 Unassigned (No asignado): Este código no tiene un significado definido en el estándar HTTP y está marcado como "no asignado". No se utiliza en situaciones comunes.'
    },
    {
        label: "428",
        value: 428,
        description: '428 Precondition Required (Se requiere precondición): Indica que el servidor requiere que el cliente incluya ciertas precondiciones en la solicitud.'
    },
    {
        label: "429",
        value: 429,
        description: '429 Too Many Requests (Demasiadas solicitudes): Indica que el cliente ha excedido el límite de velocidad o frecuencia de las solicitudes y debe reducir su tasa de solicitudes.'
    },
    {
        label: "431",
        value: 431,
        description: '431 Request Header Fields Too Large (Campos de encabezado de solicitud demasiado largos): Se utiliza cuando los encabezados de la solicitud son demasiado grandes para ser procesados por el servidor.'
    },
    {
        label: "444",
        value: 444,
        description: '444 No Response (Sin respuesta): Este código de estado se utiliza en el servidor Nginx para indicar que el servidor cerró la conexión sin enviar una respuesta al cliente.'
    },
    {
        label: "450",
        value: 450,
        description: '450 Blocked by Windows Parental Controls (Bloqueado por controles parentales de Windows): Este código se utilizaba en servidores Microsoft IIS para indicar que la solicitud fue bloqueada por controles parentales de Windows.'
    },
    {
        label: "451",
        value: 451,
        description: '451 Unavailable For Legal Reasons (No disponible por razones legales): Indica que el recurso solicitado no está disponible debido a restricciones legales o censura.'
    },
    {
        label: "497",
        value: 497,
        description: '497 HTTP Request Sent to HTTPS Port (Solicitud HTTP enviada a puerto HTTPS): Se utiliza cuando se recibe una solicitud HTTP en un puerto que normalmente requiere una conexión HTTPS.'
    },
    {
        label: "498",
        value: 498,
        description: '498 Invalid Token (Token inválido): Indica que el cliente proporcionó un token de autenticación inválido.'
    },
    {
        label: "499",
        value: 499,
        description: '499 Client Closed Request (Cliente cerró la solicitud): Otro código específico de Nginx, que indica que la conexión fue cerrada por el cliente antes de que se completara la respuesta.'
    },
];

export const dataStatus500 = [
    {
        label: "500",
        value: 500,
        description: '500 Internal Server Error (Error interno del servidor): Este es uno de los códigos de estado más conocidos en la serie 500. Indica un error genérico en el servidor que impide que este cumpla con la solicitud del cliente.'
    },
    {
        label: "501",
        value: 501,
        description: '501 Not Implemented (No implementado): Se utiliza cuando el servidor no es capaz de realizar la solicitud del cliente porque no comprende o no admite la funcionalidad requerida.'
    },
    {
        label: "502",
        value: 502,
        description: '502 Bad Gateway (Puerta de enlace incorrecta): Indica que el servidor actuó como una puerta de enlace o proxy y recibió una respuesta inválida del servidor ascendente al que intentó acceder. En resumen, el servidor intermedio experimentó un error al comunicarse con otro servidor.'
    },
    {
        label: "503",
        value: 503,
        description: '503 Service Unavailable (Servicio no disponible): Se emite cuando el servidor no puede atender la solicitud del cliente en ese momento debido a una sobrecarga temporal o mantenimiento programado. El cliente puede intentar nuevamente más tarde.'
    },
    {
        label: "504",
        value: 504,
        description: '504 Gateway Timeout (Tiempo de espera de puerta de enlace): Indica que el servidor intermedio (por ejemplo, un proxy) no pudo obtener una respuesta oportuna del servidor ascendente al que intentaba acceder. Esto puede deberse a que el servidor ascendente está sobrecargado o no responde.'
    },
    {
        label: "506",
        value: 506,
        description: '506 Variant Also Negotiates (Variante también negocia): Aunque no es comúnmente utilizado, indica que el servidor ha detectado una referencia circular en las negociaciones de variantes de contenido.'
    },
    {
        label: "507",
        value: 507,
        description: '507 Insufficient Storage (Almacenamiento insuficiente): Indica que el servidor no puede crear o modificar el recurso solicitado porque se ha quedado sin espacio de almacenamiento.'
    },
    {
        label: "508",
        value: 508,
        description: '508 Loop Detected (Detección de bucle): Se utiliza para indicar que el servidor ha detectado un bucle infinito al procesar la solicitud.'
    },
    {
        label: "509",
        value: 509,
        description: '509 Bandwidth Limit Exceeded (Límite de ancho de banda excedido): Indica que se ha excedido el límite de ancho de banda asignado al servidor.'
    },
    {
        label: "510",
        value: 510,
        description: '510 Not Extended (No extendido): Indica que se requiere una extensión adicional para que el servidor pueda cumplir con la solicitud del cliente.'
    },
    {
        label: "511",
        value: 511,
        description: '511 Network Authentication Required (Se requiere autenticación de red): Indica que el cliente debe autenticarse para obtener acceso a la red o al recurso solicitado. Es similar al código 401, pero se aplica a la autenticación de red en lugar de la autenticación de aplicación.'
    },
    {
        label: "521",
        value: 521,
        description: '521 Web Server Is Down (El servidor web está caído): Indica que el servidor web en el que se está intentando acceder al recurso está actualmente inactivo o no responde.'
    },
    {
        label: "522",
        value: 522,
        description: '522 Connection Timed Out (Tiempo de espera de conexión): Se utiliza cuando el servidor web no pudo establecer una conexión en un tiempo razonable con el servidor ascendente.'
    },
    {
        label: "523",
        value: 523,
        description: '523 Origin Is Unreachable (Origen no disponible): Indica que el servidor web no puede acceder al origen del recurso solicitado.'
    },
    {
        label: "525",
        value: 525,
        description: '525 SSL Handshake Failed (Error en el handshake SSL): Indica que se produjo un error en el proceso de negociación SSL/TLS durante la conexión segura.'
    },
    {
        label: "530",
        value: 530,
        description: '530 Site is frozen (El sitio está congelado): Este código se utiliza en ocasiones para indicar que el sitio web ha sido congelado o suspendido temporalmente.'
    },
    {
        label: "599",
        value: 599,
        description: '599 Network Connect Timeout Error (Error de tiempo de espera de conexión de red): Este código se utiliza en algunos sistemas para indicar que hubo un error de tiempo de espera de conexión de red al comunicarse con el servidor.'
    },
];



