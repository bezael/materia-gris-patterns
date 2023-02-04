interface Animal {
  eat(): void;
  sleep(): void;
}

interface Bird extends Animal{
  fly(): void;
}

interface Fish extends Animal{
  swim(): void;
}

class Sparrow implements Bird {
  eat(): void {
    console.log('The sparrow is eating');
  }

  sleep(): void {
    console.log('The sparrow is sleeping');
  }

  fly(): void {
    console.log('The sparrow is flying');
  }
}

class Salmon implements Fish {
  eat(): void {
    console.log('The salmon is eating');
  }

  sleep(): void {
    console.log('The salmon is sleeping');
  }

  swim(): void {
    console.log('The salmon is swimming');
  }
}






/* En este ejemplo, hemos creado dos interfaces separadas, 
  Bird e Fish, que especifican las funciones específicas de cada tipo de animal. 
Esto permite que la clase Sparrow y la clase Salmon implementen solo las funciones que necesitan,
  cumpliendo con ISP. */