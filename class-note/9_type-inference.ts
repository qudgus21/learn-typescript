let a;

const getA = (b = 10) => {
  let c = "test";
  let d = b + c; //string
  return b; //number
};

interface Dropdown<T> {
  value: T;
  title: string;
}

interface DetailDropdown<K> extends Dropdown<K> {
  description: string;
  tag: K;
}

let shoppingItem: Dropdown<string> = {
  value: "ds",
  title: "sds",
};

let detailDropdown: DetailDropdown<string> = {
  value: "sd",
  title: "asdas",
  description: "sds",
  tag: "sdsd",
};

//best common type
let arr5 = [1, 2, true];
