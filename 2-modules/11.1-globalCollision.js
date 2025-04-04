
COLISIONES ENTRE VARIABLES Y FUNCIONES EN GLOBAL
Cuando se dice que puede causar colisiones de nombres en variables, se refiere a que dos partes distintas de tu aplicación 
podrían usar el mismo nombre para una variable global sin saberlo, y una sobrescribiría a la otra sin intención. Eso puede causar errores muy difíciles de detectar.

Mira este ejemplo:
 Archivo A
titulo = "Mi aplicación";

 Archivo B
titulo = "Inicio de sesión";



Ambos archivos están modificando la misma variable global titulo sin saberlo, porque ninguno usó let o const, 
y por tanto están afectando al mismo globalThis.titulo.

Esto puede provocar:
- Comportamientos inesperados (porque una parte de tu código está esperando un valor y recibe otro).
- Bugs difíciles de rastrear, ya que la sobrescritura puede ocurrir en otro archivo o en otro momento.
- Problemas de mantenimiento, especialmente en aplicaciones grandes o colaborativas.

Por eso se dice que es una mala práctica declarar variables sin let, const o var, ya que van directo al objeto global, 
y ahí todas las variables comparten el mismo "espacio de nombres".


PROBLEMAS MANTENIMIENTO
Los problemas de mantenimiento que pueden surgir por modificar el objeto global o crear variables globales sin control son bastante serios, 
especialmente a medida que una aplicación crece o más personas trabajan en el mismo proyecto. Aquí te explico los principales:

Difícil de rastrear errores
Si una variable global cambia su valor de forma inesperada, puede ser muy complicado encontrar dónde fue modificada. Tal vez fue 
en otro archivo, en otra función o incluso en una librería externa.

Sobrescritura accidental
Dos desarrolladores pueden usar el mismo nombre de variable global sin saberlo. Si ambos crean una variable llamada usuario, 
una puede sobrescribir a la otra, causando errores lógicos o pérdida de datos temporales.

Código menos predecible
Como cualquier parte del programa puede modificar las variables globales, el flujo de datos se vuelve menos claro, y eso dificulta
mucho la depuración y comprensión del código.

Mayor acoplamiento entre módulos
Si varios archivos dependen de una misma variable global, no están realmente independientes entre sí. Cambiar algo en uno puede romper cosas en otro, 
haciendo que la aplicación sea más frágil.

Dificultad para escribir tests
Las variables globales hacen que los tests sean menos fiables, porque el entorno global puede estar contaminado por tests 
anteriores o por la ejecución de otros módulos.

Problemas al refactorizar
Al querer cambiar el nombre o mover una variable o función a otro lugar, puedes romper funcionalidades que dependen de que esa 
variable esté en el objeto global sin darte cuenta.

No escala bien
En aplicaciones pequeñas puede parecer que no pasa nada, pero en aplicaciones medianas o grandes el uso de variables 
globales sin control se convierte en una fuente constante de bugs y dolores de cabeza.


.
