interface Developer5 {
  name: string;
  skill: string;
}

interface Person5 {
  name: string;
  age: number;
}

const introduce = (): Developer5 | Person5 => {
  return { name: "sdsd", skill: "sdsd", age: 15 };
};

let tony = introduce();

if ((tony as Developer5).skill) {
  console.log((tony as Developer5).skill);
}

//타입가드
const isDeveloper = (target: Developer5 | Person5): target is Developer5 => {
  return (target as Developer5).skill !== undefined;
};

if (isDeveloper(tony)) {
  tony.skill;
} else {
  tony.age;
  tony.name;
}
