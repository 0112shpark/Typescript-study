# Typescript

- `Typescript`는 `javascript`와 다르게 정적으로 컴파일한다. 즉 코드 작성단계에서 오류를 찾아낸다.
- 페이지에 출력하기전에, `javascript`로 코드를 변환해서 실행한다.

## Types

### String

```typescript
let hello: string = "hello~";
let str: string = `${hello}` + "red";
```

### Number

```typescript
let num: number;
let integer: number = 6;
let float: number = 3.14;
let infinity: number = Infinity;
```

### Boolean

```typescript
let isBoolean: boolean;
let isDone: boolean = false;
```

### NULL/Undefined

```typescript
let nul: null;
let und: undefined;
// null은 출력불가
```

### Array

```typescript
const arr: string[] = ["apple", "banana"];
const union: (string | number)[] = ["apple", 1, 2, "banana"];
```

### Object

```typescript
const obj: object = {};
const arr: object = [];
const func: object = function () {};

const userA: {
  name: string;
  age: number;
  isValid: boolean;
} = {
  name: "lee",
  age: 44,
  isValid: true,
};

// interface로 선언한 값들은 변경 불가.
interface User {
  name: string;
  age: number;
  isValid: boolean;
}
const userB: User = {
  name: "lee",
  age: 44,
  isValid: true,
};
```

### Function

```typescript
//처음 괄호안에 매개변수의 type을 지정한다.
//화살표 뒤에 반환되는 값의 type을 지정한다.
const add: (x: number, y: number) => number = function (x, y) {
  return x + y;
};
const a: number = add(1, 2);

//반환값이 없을 경우 void를 작성한다.
const printWord: (str: string) => void = function (str) {
  console.log(str);
};
const temp: void = printWord("hello");

//좀더 간결하게 작성할 수 있다.
const add = function (x: number, y: number): number {
  return x + y;
};

const printWord = function (str: string): void {
  console.log(str);
};
```
