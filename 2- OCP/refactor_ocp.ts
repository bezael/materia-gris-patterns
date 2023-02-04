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

