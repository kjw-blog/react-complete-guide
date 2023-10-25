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
