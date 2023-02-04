# Principio de segregación de la interfaz (ISP)

"Refactorice el siguiente código para cumplir con el principio Principio de segregación de la interfaz."

```
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

```

[¿Qué es Principio de segregación de la interfaz (ISP)?](https://es.wikipedia.org/wiki/Principio_de_segregaci%C3%B3n_de_la_interfaz)

## Instrucciones

- Abra el fichero `refactor_isp.ts`
- Realiza los cambios necesarios en un / los ficheros necesarios
