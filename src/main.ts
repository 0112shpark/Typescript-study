import _ from "lodash";

// 문자형에는 문자를 대입해야한다.
let hello: string = "Hello world!";
console.log(hello);

const userA: {
  name: string;
  age: number;
  isValid: boolean;
} = {
  name: "lee",
  age: 44,
  isValid: true,
};

let num = 12;
const str = "hello";
console.log(_.camelCase(str));
console.log(_.snakeCase(str));
