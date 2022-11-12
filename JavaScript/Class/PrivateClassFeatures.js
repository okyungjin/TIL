// Private class features
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields

class User {
  name;
  age;
  #idNumber;

  constructor(name, age, idNumber) {
    this.name = name;
    this.age = age;
    this.#idNumber = idNumber;
  }
}

const user1 = new User('정경진', 27, '961004-XXXXXXX');

console.log(user1.age);
console.log(user1.name);
console.log(user1.#idNumber); // Error
