# Open/Closed Principle (OCP)

"Refactorice el siguiente código Principio de inversión de la dependencia.
"

```
class UserController {
  userService = new UserService();

  getUser(id: string) {
    return this.userService.getUser(id);
  }
}

class UserService {
  userRepository = new UserRepository();

  getUser(id: string) {
    return this.userRepository.getUser(id);
  }
}

class UserRepository {
  getUser(id: string) {
    // go to // go to the DDBB
  }
}

```

[¿Qué es el Principio de inversión de la dependencia (DIP)?](hhttps://es.wikipedia.org/wiki/Principio_de_inversi%C3%B3n_de_la_dependencia)

## Instrucciones

- Abra el fichero `refactor_dip.ts`
- Realiza los cambios necesarios en un / los ficheros necesarios
