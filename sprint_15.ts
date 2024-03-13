// Task 01
// Интерфейсы в TS могут выполнять функцию описания структуры объектов, создавать кастомизированные типы. Давайте сделаем несколько примеров.
// Создайте интерфейс IGoods, который описывает свойства title - string, amount - number, color - string (не обязательный).

interface IGoods {
  title: string;
  amount: number;
  color?: string;
}

let test: IGoods = {
  title: "title",
  amount: 5,
  color: "red",
};

// console.log(test);
//  Создайте объект реализующий данный интерфейс. Проверьте работу и закомментируйте код проверки.

// Task 02
// Давайте реализуем интерфейс из реального примера. Опишем интерфейс IUser, который содержит id - число, readonly, username, password,
// hash - строки. Свойство created - число.

interface IUser {
  readonly id: number;
  username: string;
  password: string;
  hash: string;
  created: number;
}

let user: IUser = {
  id: 10,
  username: "Oleksii",
  password: "1234567",
  hash: "p1o2i3u4",
  created: 5,
};

// console.log(user);
// реализуйте объект на основе интерфейса IUser и выведите в консоль. Проверьте работу и закомментируйте код проверки.

// Task 03
// Созданы два объекта obj_31, obj_32 - напишите интерфейс ІTelegram который они реализуют. Обычно свойства с id реализуются через readonly.

interface ITelegram {
  readonly message_id: number;
  readonly user_id: number;
  username: string;
  time: string;
  body: string;
}

const obj_31: ITelegram = {
  message_id: 32546,
  user_id: 25654,
  username: "Скринька Пандори",
  time: "2024-01-31 17:45:25",
  body: "Країни ЄС цього року нададуть...",
};

const obj_32: ITelegram = {
  message_id: 3876214,
  user_id: 657412,
  username: "ITGid - info",
  time: "2024-01-29 08:25:15",
  body: "Небольшой анонс на сегодня...",
};

// console.log(obj_31);
// console.log(obj_32);

// Task 04
// Создан интерфейс и объект на его основе.

interface IClock {
  h: number;
  m: number;
  s: number;
}

const clock = {} as IClock; // не изменяйте данную строку.
clock.h = 21;
clock.m = 31;
clock.s = 59;

// тут заполните объект сlock, установите 21 час, 31 минута и 59 секунд.

// console.log(clock);

// Task 05
// Создайте интерфейс IStore, который описывает товар магазина. Опишите свойство title - string, amount - number, size - массив чисел.

interface IStore {
  title: string;
  amount: number;
  size: number[];
}

let store: IStore = {
  title: "text",
  amount: 5,
  size: [1, 2, 3],
};
// реализуйте объект на основе интерфейса IStore и выведите в консоль. Проверьте работу и закомментируйте код проверки.

// console.log(store);

// Task 06
// Давайте расширим интерфейс IStore, и создадим интерфейс IBigStore, который будет расширять IStore и добавлять
// свойство color - массив цветов (string).

interface IBigStore extends IStore {
  color: string[];
}

let bigStore: IBigStore = {
  title: "colors",
  amount: 10,
  size: [1, 2, 3, 4, 5],
  color: ["red", "green", "yellow"],
};
// реализуйте объект на основе интерфейса IBigStore и выведите в консоль. Проверьте работу и закомментируйте код проверки.
// console.log(bigStore);

// Task 07
// Не забывайте - интерфейс это просто соглашение о структуре... И может содержать не только свойства, но и методы (без реализации).
// Создайте интерфейс ICart, который описывает методы addToCart и возвращает id товара (number), и метод clearCart - процедура.

interface ICart {
  addToCart(): number;
  clearCart(): void;
}

let cart: ICart = {
  addToCart(): number {
    return 5;
  },

  clearCart(): void {
    console.log("test");
  },
};
// реализуйте объект на основе интерфейса ICart, методы пропишите условно. Проверьте работу и закомментируйте код проверки.
// console.log(cart.addToCart());
// console.log(cart.clearCart());

// Task 08
// Создадим интерфейс IRect описывающий геометрическую фигуру - прямоугольник. Опишите стороны прямоугольника a, b - числа и метод
// area - который возвращает площадь фигуры. Задача довольно простая и вы легко с ней справитесь.

// Тут создайте интерфейс IRect

// Для проверки создайте объект rect_01 на базе интерфейса IRect, задайте размеры и реализуйте area(). После проверки - закомментируйте объект.

// Task 09
// Создадим абстрактный класс, ARect, который описывает геометрическую фигуру. Абстрактный класс содержит два абстрактных свойства a,
// b (числа) и метод area (не абстрактный), который возвращает this.a * this.b - число.
// Обратите внимание - мы реализовали метод в абстрактном классе, в интерфейсе реализация невозможна.

// Тут создайте абстрактный класс

// Task 10
// Повторим то, что прошли. Создайте на основе абстрактного класса ARect класс Rectangular. Добавьте конструктор,
// который принимает два числа и заполняет свойства a, b. Создайте на базе класса объект со сторонами 0.5 и 20
// и выведите полученную площадь в консоль. После проверки - закомментируйте код создания объекта.

// Тут создайте абстрактный класс Rectangular

// Task 11
// Надеюсь вы заметили разницу между абстрактным классом и интерфейсом. Интерфейс описывает структуру и не содержит реализации.
// Абстрактный же класс может содержать или не содержать реализации. Однако вернемся к интерфейсам. До текущего момента, мы на базе интерфейсов создавали сразу объекты. Давайте создадим класс Paragraph (implements) на базе интерфейса IElement.

interface IElement {
  tag: string;
  paired: boolean;
  text: string;
  getWidth(): number;
}

// Тут создайте класс Paragraph c имплементацией свойств и методов интерфейса IElement. Пусть для проверки getWidth возвращает 0.

// Task 12
// Класс может реализовывать два интерфейса. Напишите интерфейс IFigureA, интерфейс описывает фигуру квадрат - сторона a (число),
// и метод getSquare, который возвращает число.

// Task 13
// Напишите интерфейс IFigureB, интерфейс описывает фигуру квадрат - сторона b (число), и метод getPerimeter, который возвращает число.

// Task 14
// Создайте класс Rect, который имплементирует интерфейсы IFigureA, IFigureB и реализует методы getSquare, getPerimeter.

// Для проверки, на базе класса создайте объект obj_14, со сторонами 5 и 4 и выведите его площадь и периметр.

// Task 15
// Создан Абстрактный класс AExample. Напишите интерфейс IExample, который соответствует его структуре.

abstract class AExample {
  public src: string = "";
  public format: string;
  public alt: string = "";
  public title: string = "";
  public width: number = 100;
  public widthUnits: string = "%";
  public render() {
    const img = document.createElement("img");
    img.src = this.src;
    img.alt = this.alt;
    img.title = this.title;
    img.style.width = this.width + this.widthUnits;
    return img;
  }
}

// Тут напишите IExample
