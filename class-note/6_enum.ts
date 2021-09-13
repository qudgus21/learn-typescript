enum Shoes {
  Nike,
  Adidas,
}

const myShoes = Shoes.Nike;
console.log(myShoes); //0

enum Shoes2 {
  Nike = "나이키",
  Adidas = "아디다스",
}

const myShoes2 = Shoes2.Nike;
console.log(myShoes); //나이키

enum Answer {
  Yes = "Y",
  No = "N",
}

const ask = (answer: Answer) => {
  if (answer === Answer.Yes) {
    console.log("정답");
  }
  if (answer === Answer.No) {
    console.log("오답");
  }
};

ask(Answer.No);
