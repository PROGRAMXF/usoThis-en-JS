# usoThis-en-JS
Desarrollo de algunas lineas de código para entender el uso del objeto this en JS


Cuando escribimos en codigo de JS siempre vamos a estar dentro del objeto windows o si estamos en Node dentro del objeto global. Asi, si colocamos una función fuera de un objeto
nos referimos al objeto global o window. Pero una vez que creamos otro objeto y dentro escribimos this, este this refiere a nuestro nuevo objeto y no a window o global.

En el contexto de ejecución global (fuera de cualquier función), this se refiere al objeto global, ya sea en modo estricto o no.

Dentro de una función, el valor de this depende de cómo la función es llamada.

