class Person {
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  test = () => {
    console.log(this.name);
  };
}
