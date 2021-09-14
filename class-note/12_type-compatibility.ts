interface C {
  name: string;
  skill: string;
}

interface C2 {
  name: string;
}

class C3 {
  name: string;
  skill: string;
}

let v1: C;
let v2: C2;

v2 = v1;
v2 = new C3();

//함수
let c = (a: number) => {};

let c2 = (a: number, b: number) => {};

// c = c2; ERROR

c2 = c;

//제네릭

interface Empty<T> {}

let empty1: Empty<string>;
let empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
  data: T;
}
let empty3: NotEmpty<string>;
let empty4: NotEmpty<number>;
// empty3 = empty4; ERRPR
// empty4 = empty3; ERROR
