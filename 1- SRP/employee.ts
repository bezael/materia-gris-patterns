class Employee {

  constructor(private name: string, private age: number, private salary: number) {}

  create(name: string, age: number, salary: number) {
    // Do some logic with name, age and salary
    return new Employee(name, age, salary);
  }

  update(id: number, name: string, age: number, salary: number) {
    // Do some logic to get the employee
    return { id };
  }

  delete(id: number) {
    // Do some logic to get the employee by id
    return 'Deleted';
  }
}

class Salary {
  getEmployeeSalary(id: number): number {
    // Do some logic to get the employee info
    return 1000;
  }

  getHighestSalary(): number {
    // Do some logic to get the info
    return 100000;
  }
}
