# Liskov Substitution Principle (LSP)

"Refactorice el siguiente código, para cumplir con el Principio de sustitución de Liskov (LSP) y asegurar la modularidad y mantenibilidad del sistema."

```
class Shape {
  area() {
    throw new Error('The area method must be implemented');
  }
}

class Rectangle extends Shape {

  constructor(private width: number, private height: number) {
    super();
  }

  area() {
    return this.width * this.height;
  }
}

class Square extends Shape {

  constructor(private side: number) {
    super();
  }

  area() {
    return this.side * this.side * -1;
  }
}

function calculateArea(shape: Shape) {
  return shape.area();
}

const rectangle = new Rectangle(10, 5);
console.log(calculateArea(rectangle));

const square = new Square(7);
console.log(calculateArea(square));

```

[¿Qué es el principio de sustitución de Liskov?](https://es.wikipedia.org/wiki/Principio_de_sustituci%C3%B3n_de_Liskov)

## Instrucciones

- Abra el fichero `refactor_lsp.ts`
- Realiza los cambios necesarios en un / los ficheros necesarios
