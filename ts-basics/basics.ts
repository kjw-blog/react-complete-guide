// 기본형 타입
let age: number = 24;

age = 12;

let userName: string;

userName = 'Max';

let isInstructor: boolean;

isInstructor = true;

// 복잡한 자료형 타입
let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: 'Max',
  age: 32,
};

let people: Person[];

people = [
  {
    name: 'Max',
    age: 32,
  },
  {
    name: 'James',
    age: 28,
  },
  {
    name: 'John',
    age: 51,
  },
];

// 타입 추론

let course: string | number = 'React - The Complete Guide';

course = '리액트 강의';
course = 123123;

// 함수와 타입

function add(a: number, b: number): number {
  return a + b;
}

function printOutput(value: any): void {
  console.log(value);
}

// 제네릭
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1);

const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');

stringArray[0].split('');
