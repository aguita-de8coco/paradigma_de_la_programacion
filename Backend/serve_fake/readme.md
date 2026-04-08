¿que significa status 201 created?en donde aparece
¿como verifica la actualizacion de los datos por medio de la terminal ?
cualesson los status existentes y comunes
¿Cuándo hacer una petición de tipo PATCH?
¿Qué es SOAP, cuáles son las diferencias con REST?
¿Qué es GraphQL, cuáles son las diferencias con REST?

1.  Indica que una petición tuvo éxito y resultó en la creación de un nuevo recurso. Aparece principalmente en respuestas a métodos **POST**.

2.  Se utiliza el comando `curl -X GET [URL_del_recurso]` para consultar el estado actual de los datos o `curl -i` para ver el código de estado (200/204) tras la actualización.

3. 
   * **200** (OK), **201** (Created).
   * **400** (Bad Request), **401** (Unauthorized), **404** (Not Found).
   * **500** (Internal Server Error).

4.  Se utiliza para realizar **actualizaciones parciales** (modificar solo algunos campos) de un recurso existente, a diferencia de PUT que lo reemplaza por completo.

5. SOAP es un protocolo estricto basado solo en **XML** y con alta seguridad integrada; REST es un estilo arquitectónico más ligero, flexible y utiliza mayormente **JSON**.

6. REST utiliza múltiples endpoints para diferentes recursos; GraphQL utiliza **un solo endpoint** y permite al cliente pedir exactamente los datos que necesita, evitando traer información de más.
