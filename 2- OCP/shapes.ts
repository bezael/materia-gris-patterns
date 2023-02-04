interface Shape {
  area(): number;
}

class Rectangle implements Shape {
  width: number;
  height: number;

  area(): number {
    return this.width * this.height;
  }
}

class Circle implements Shape {
  radius: number;

  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class AreaCalculator {
  shapes: Shape[];

  calculate(): number {
    let total = 0;

    for (let shape of this.shapes) {
      total += shape.area();
    }

    return total;
  }
}
