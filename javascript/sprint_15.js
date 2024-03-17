"use strict";
// Task 01
// Интерфейсы в TS могут выполнять функцию описания структуры объектов, создавать кастомизированные типы. Давайте сделаем несколько примеров.
// Создайте интерфейс IGoods, который описывает свойства title - string, amount - number, color - string (не обязательный).
let test = {
    title: "title",
    amount: 5,
    color: "red",
};
let user = {
    id: 10,
    username: "Oleksii",
    password: "1234567",
    hash: "p1o2i3u4",
    created: 5,
};
const obj_31 = {
    message_id: 32546,
    user_id: 25654,
    username: "Скринька Пандори",
    time: "2024-01-31 17:45:25",
    body: "Країни ЄС цього року нададуть...",
};
const obj_32 = {
    message_id: 3876214,
    user_id: 657412,
    username: "ITGid - info",
    time: "2024-01-29 08:25:15",
    body: "Небольшой анонс на сегодня...",
};
const clock = {}; // не изменяйте данную строку.
clock.h = 21;
clock.m = 31;
clock.s = 59;
let store = {
    title: "text",
    amount: 5,
    size: [1, 2, 3],
};
let bigStore = {
    title: "colors",
    amount: 10,
    size: [1, 2, 3, 4, 5],
    color: ["red", "green", "yellow"],
};
let cart = {
    addToCart() {
        return 5;
    },
    clearCart() {
        console.log("test");
    },
};
let rect_01 = {
    a: 5,
    b: 6,
    area() {
        return this.a * this.b;
    },
};
// Для проверки создайте объект rect_01 на базе интерфейса IRect, задайте размеры и реализуйте area(). После проверки - закомментируйте объект.
// console.log(rect_01.area());
// Task 09
// Создадим абстрактный класс, ARect, который описывает геометрическую фигуру. Абстрактный класс содержит два абстрактных свойства a,
// b (числа) и метод area (не абстрактный), который возвращает this.a * this.b - число.
// Обратите внимание - мы реализовали метод в абстрактном классе, в интерфейсе реализация невозможна.
class ARect {
    area() {
        return this.a * this.b;
    }
}
// Task 10
// Повторим то, что прошли. Создайте на основе абстрактного класса ARect класс Rectangular. Добавьте конструктор,
// который принимает два числа и заполняет свойства a, b. Создайте на базе класса объект со сторонами 0.5 и 20
// и выведите полученную площадь в консоль. После проверки - закомментируйте код создания объекта.
class Rectangular extends ARect {
    a;
    b;
    constructor(a, b) {
        super();
        this.a = a;
        this.b = b;
    }
}
let obj_10 = new Rectangular(0.5, 20);
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
class AExample {
    src = "";
    format;
    alt = "";
    title = "";
    width = 100;
    widthUnits = "%";
    render() {
        const img = document.createElement("img");
        img.src = this.src;
        img.alt = this.alt;
        img.title = this.title;
        img.style.width = this.width + this.widthUnits;
        return img;
    }
}
// Тут напишите IExample
//# sourceMappingURL=sprint_15.js.map