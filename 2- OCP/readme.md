# Open/Closed Principle (OCP)

"Refactorice el siguiente código de una clase, para cumplir con el Principio abierto/cerrado (OCP) y asegurar mantenibilidad del sistema."

```
class Rectangle {
  width: number;
  height: number;

  area(): number {
    return this.width * this.height;
  }
}

class Circle {
  radius: number;

  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class AreaCalculator {
  shapes: Array<Rectangle | Circle>;

  calculate(): number {
    let total = 0;

    for (let shape of this.shapes) {
      if (shape instanceof Rectangle) {
        total += shape.width * shape.height;
      } else if (shape instanceof Circle) {
        total += Math.PI * shape.radius * shape.radius;
      }
    }

    return total;
  }
}
```

[¿Qué es el principio de abierto/cerrado (OCP)?](https://es.wikipedia.org/wiki/Principio_de_abierto/cerrado)

## Instrucciones

- Abra el fichero `refactor_ocp.ts`
- Realiza los cambios necesarios en un / los ficheros necesarios
