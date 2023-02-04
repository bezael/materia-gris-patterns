interface Animal {
  eat(): void;
  sleep(): void;
  swim(): void;
  fly(): void;
}

class Bird implements Animal {
  eat(): void {
    console.log('The bird is eating');
  }

  sleep(): void {
    console.log('The bird is sleeping');
  }

  swim(): void {
    throw new Error('Birds cannot swim');
  }

  fly(): void {
    console.log('The bird is flying');
  }
}
