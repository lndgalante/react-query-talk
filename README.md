## React Query

1. Como realizar un custom hook de fetcheo de datos? Por qué no usarlo?

- Suele no estar tipado
- Suele no estar testeado
- Propenso a errores y la lógica no esta relacionada a nuestra app
- No actualiza los datos del servidor si se encuentra desactualizados (stale)
- No podemos realizar pre-fetching en otro componente
- No podemos acceder el mismo dato desde otro componente ya que no existe una cache

2. Qué tipos de estados existen en el front-end?
   En nuestro front-end viven 2 tipos de estados:

- Estado del Cliente (UI State)
  El mismo refiere al estado de Formularios, Tema seleccionado (Dark/Light), Menu Abierto/Cerrado, etc

- Estado del Servidor (Server State)
  El mismo refiere al estado de los datos que enviamos/recibimos del back-end que solemos manejar con los hooks de React o bien con alguna librería de state-management, pero tanto los React hooks como Context/Redux y demás no estan pensadas para manejar todo el estado del servidor.

  Una manera sencilla de pensarlo es que nosotros podemos manejar manualmente el manejo de formularios con un simple useState pero realizar todo el manejo de los errores, touched, blurred, focused, más el soporte a schemas de validación de librerías de 3ros se vuelve un poco más complejo y recurriríamos a alguna librería como Formik o React hook form, lo mismo podemos pensar para el manejo de estado del servidor : manejo de errores, estados de loading, manejo de cache, actualizar datos obsoletos, manejo de paginado, long-polling, re-intentar cuando errores suceden y demás lógica relacionada al estado del backend.

3. Qué es react-query?
   Nos permite fetchear, cachear y actualizar datos en nuestra aplicación de React sin tener que manejar esta lógica en nuestro state management ya sea a través de Context, Redux o cualquier otra librería.

   Features:

   - Backend agnostic
   - Garbage collection
   - Polling mechanism
   - Suspense ready
   - Infinite scrolling
   - Query cancellation
   - SSR support
   - Prefetching data

4. Palabras clave

- Stale
  Indica que nuestros datos pueden estar desactualizados.

- Cache
  Poder guardar los datos en memoria nos trae muchas ventajas, por ej: no volver a pedir los datos y a la vez nos ayudan a mantener centralizado y actualizado los datos

5. Tipos de revalidación:

- Auto-refetch, lo podemos configurar con refetchInterval, por defecto en false
- Refetch on focus, lo podemos configurar con refetchOnWindowFocus, por defecto en true

6. Por qué usarlo ?

- Ventajas

  - API fácil de usar
  - Optimistic UI
  - Manejo de cache
  - Manejo de data stale
  - React Query Dev Tools

- Desventajas
  - mmm ninguna?...

7. Alternativas?

- SWR de Vercel

8. Cómo usarlo?

- Veamos useQuery

  - Vamos a obtener los empleados y un único empleado
  - Creemos una página employees/[id] y usemos intialData/queryCache.getQueryData y usemos find junto con nuestro query id

- Veamos useMutation

  - Creemos un nuevo empleado y hagamos que se dispare nuestra query en el lifecycle onSuccess y podemos usar queryCache.invalidateQueries para pedir nuevamente los datos y actualizar la cache o bien podemos guardar en cache los nuevos datos recibidos

- Otros hooks para investigar: usePagination, useQueries

# Links

- Más info:

  - docu: https://react-query.tanstack.com
  - twitter: https://twitter.com/tannerlinsley
  - factory crud hooks: https://gist.github.com/tannerlinsley/c6c0064239e0bcf40ca3703f95c0fb11

- Sobre mi:
  - web: https://leonardogalante.com
  - twitter: https://twitter.com/lndgalante
  - youtube: https://www.youtube.com/channel/UC-gFUpD0aKzMS5_uwbHSOrA
