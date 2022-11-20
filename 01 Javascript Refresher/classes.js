class Human {
  gender = 'male';
}

class Person extends Human {
  name = 'Mati';
  gender = 'female';

  printMyName = () => {
    console.log(this.name);
    console.log(this.gender);
  };
}

const person = new Person('Mati', 'male');
person.printMyName();
