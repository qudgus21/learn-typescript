const logmessage = (value: string | number) => {
  if (typeof value === "number") {
    value.toLocaleString();
  }

  if (typeof value === "string") {
    value.toString();
  }
  throw new TypeError("s or n");
  console.log(value);
};

logmessage("asda");
logmessage(1111);

interface Developer5 {
  name: string;
  skill: string;
}

interface Person5 {
  name: string;
  age: number;
}

const someone = (some: Developer5 | Person5) => {
  //some.name;
  //some.age; => err
};

someone({ name: "dev", skill: "sd" });
someone({ name: "dev", age: 100 });

const someone2 = (some: Developer5 & Person5) => {
  some.name;
  some.age;
  some.skill;
};

// someone2({ name: "dev", skill: "sd" });=>err
someone2({ name: "dev", skill: "sd", age: 5 });
