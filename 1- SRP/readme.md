# Single Responsibility Principle (SRP)

"Refactorice el siguiente código de una clase 'Employee' que realiza tanto el registro de información del empleado como el cálculo de su salario, para cumplir con el principio de responsabilidad única (SRP) y asegurar la modularidad y mantenibilidad del sistema."

```
class Employee {
  constructor() {}

  create(id:number, name: string, age: number, salary: number) {
    // Do some logic with name, age and salary
    return { id, name, age, salary };
  }

  update(id:number, name: string, age: number, salary: number) {
    // Do some logic to get the employee
    return { id };
  }

  delete(id:number) {
    // Do some logic to delete employee
    return 'Deleted';
  }


  getEmployeeSalary(id:number): number {
    // Do some logic to get the employee info
    return 1000;
  }

  getHighestSalary(): number {
    // Do some logic to get the info
    return 100000;
  }

}
```

[¿Qué es el principio de responsabilidad única (SRP)?](https://es.wikipedia.org/wiki/Principio_de_responsabilidad_%C3%BAnica)

## Instrucciones

- Abra el fichero `refactor_srp.ts`
- Realiza los cambios necesarios en un / los ficheros necesarios
