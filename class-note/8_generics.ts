// function logText<T>(text: T): T {
//   return text;
// }

const logText = <T>(text: T): T => {
  return text;
};

const ste = logText<string>("10");
const bol = logText<boolean>(true);

//타입 제한
const logTextLength = <T>(text: T[]): T[] => {
  console.log(text.length);
  text.forEach((text) => {
    console.log(text);
  });
  return text;
};

logTextLength<string>(["1", "2"]);

//타입제한2
interface LengthType {
  length: number;
}

const logTextLength2 = <T extends LengthType>(text: T): T => {
  console.log(text.length);
  return text;
};

logTextLength2("10");

//타입제한3

interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

const getShoppingItemOption = <T extends keyof ShoppingItem>(
  itemOption: T
): T => {
  return itemOption;
};

getShoppingItemOption("name");
