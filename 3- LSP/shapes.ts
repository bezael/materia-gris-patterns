interface Shape {
  area(): number;
}

class Rectangle implements Shape {

  constructor(private width: number, private height: number) { }

  area(): number {
    return this.width * this.height;
  }
}

class Square implements Shape {

  constructor(private side: number) { }

  area(): number {
    return this.side * this.side;
  }
}

function calculateArea(shape: Shape) {
  return shape.area();
}

const rectangle = new Rectangle(10, 5);
console.log(calculateArea(rectangle)); 

const square = new Square(7);
console.log(calculateArea(square)); 
