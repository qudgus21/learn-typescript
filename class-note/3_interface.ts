interface User {
  age: number;
  name: string;
}

//변수
let hoho: User = {
  age: 33,
  name: "sds",
};

//함수
const getUser = (user: User) => {
  console.log(user);
};

const capt = {
  age: 111,
  name: "asd",
};
getUser(capt);

//함수 interface
interface SumFunction {
  (a: number, b: number): number;
}

const sum2: SumFunction = (a, b) => {
  return 1;
};

//인덱싱
interface StringArray {
  [index: number]: string;
}

const arr4: StringArray = ["a", "b"];

arr4[0] = "b";

//딕셔너리
interface StringRegexDictionary {
  [key: string]: RegExp;
}

let obj2 = {
  sth: /abc/,
};

//인터페이스 확장
interface Person {
  age: number;
  name: string;
}

interface Developer extends Person {
  language: string;
}

const dev: Developer = {
  language: "javascript",
  name: "ggg",
  age: 50,
};
