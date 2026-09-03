# Ejercicio 7 — `type` vs `interface`
> Este archivo no se corrige con tests automáticos: lo lee el docente.
> Respondé con tus palabras, en base a lo que probaste en `ej07-tipos-interfaces.ts`.

## ¿Qué permite hacer `interface` que `type` no (o no tan bien)?

Una de las cosas que nos permite hacer `interface` es declarar la misma interfaz en diferentes lugares, y TypeScript las combina automáticamente.
Por ejemplo, si tenemos una interfaz `Persona` en un archivo y luego en otro archivo declaramos otra interfaz `Persona` con más propiedades, TypeScript las une en una sola interfaz. Esto sirve para extender interfaces sin tener que modificar la definición original. Esto con `type` no se puede, ya que si declaramos un `type` con el mismo nombre en otro archivo, TypeScript nos va a dar un error de identificador duplicado.
Además, las interfaces son mejores para describir la forma de los objetos y se integran mejor con la herencia de clases.

## ¿Qué permite hacer `type` que `interface` no?

`type` es algo más general, ya que no está limitado a la estructura de objetos.
Por ejemplo, podemos tener:
- Uniones de tipos: `type Estado = 'activo' | 'inactivo' | 'pendiente';`
- Tuplas: `type Coordenadas = [number, number];`
- Tipos primitivos: `type Edad = number;`
- Tipos de utilidad: `Pick<AlumnoType, 'nombre' | 'apellido'>;`
- Intersecciones: `type AlumnoConNotas = AlumnoType & { notas: number[] };`

## ¿Ambas se pueden extender? ¿Cómo se hace en cada caso?

Sí, ambas se pueden extender, pero de maneras diferentes.

- Con `interface`, se usa `extends`:
```ts
interface Persona {
  nombre: string;
  edad: number;
}

interface Alumno extends Persona {
  curso: string;
}
```

- Con `type`, se usa la intersección de tipos (`&`):
```ts
type Persona = {
  nombre: string;
  edad: number;
};

type Alumno = Persona & {
  curso: string;
};
```

## ¿Cuál elegirían para representar una entidad del dominio (por ejemplo, `Alumno`)? ¿Por qué?

Para representar una entidad del dominio como `Alumno`, elegiría `interface`. La razón principal es que las interfaces están diseñadas específicamente para describir la forma de los objetos y se integran mejor con la herencia de clases. Esto es útil en un contexto de programación orientada a objetos, donde las entidades del dominio suelen tener relaciones jerárquicas y pueden necesitar ser extendidas o implementadas por otras clases. Además, es la convención más común en proyectos TypeScript para modelar entidades, dejando `type` para uniones, utilidades y tipos más complejos.
