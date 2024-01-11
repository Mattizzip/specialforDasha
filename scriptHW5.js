class Person
{
    constructor(name, age)
    {
        this.name = name;
        this.age = age;
    }
    compareAge(person)
    {
        this.age >= person.age ? console.log(`${this.name} старше, чем ${person.name}` ) : console.log(`${this.name} младше, чем ${person.name}` )
    }
}

const person1 = new Person('Максим', 24);
const person2 = new Person('Светлана', 36);
const person3 = new Person('Ирина', 23);
person1.compareAge(person2); // Максим младше, чем Светлана
person2.compareAge(person3); // Светлана старше, чем Ирина
person3.compareAge(person1); // Ирина младше, чем Максим

const dog = {
 name: 'Чарли',
 type: 'Собака',
 makeSound() {
 return 'Гав-Гав';
 }
};
const bird = {
 name: 'Петя',
 type: 'Ворон',
 makeSound() {
 return 'Кар-кар';
 }
};


function makeDomestic(isDomestic)
{
    console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`)
    return {
        name: this.name,
        type: this.type,
        sound: this.makeSound(),
        isDomestic: isDomestic
    }
}

const snoopDog = makeDomestic.bind(dog, true);
console.log(snoopDog());
const rio = makeDomestic.call(bird, false);
console.log(rio);
const kesha = makeDomestic.apply(bird, [true]);
console.log(kesha);

//3 Задание

class CarService
{
    static defaultWorkingHours = 
    {
        from: "09:00",
        till: "20:00"
    }
    constructor(name, workingHours = defaultWorkingHours)
    {
        this.name = name;
        this.workingHours = workingHours;
        //Добавляем 0 перед цифрой часа, в случае, если время входит в диапазон [1 ; 9]
        Number(this.workingHours.from[0]) > 0 && Number(this.workingHours.from[0]) < 10 ?  this.workingHours.from = "0" + this.workingHours.from : this.workingHours.from;
        Number(this.workingHours.till[0]) > 0 && Number(this.workingHours.till[0]) < 10 ?  this.workingHours.till = "0" + this.workingHours.till : this.workingHours.till;
    }
    repairCar(carName)
    {
        let now = new Date();
        let timeStringNow = now.toLocaleTimeString();
        return Number(this.workingHours.from[0] + this.workingHours.from[1]) <= Number(timeStringNow[0] + timeStringNow[1]) && Number(this.workingHours.till[0] + this.workingHours.till[1]) < Number(timeStringNow[0] + timeStringNow[1]) ? console.log(`Сейчас отремонтируем вашу машину ${carName} Ожидайте, пожалуйста`) : console.error("К сожалению, мы сейчас закрыты. Приходите завтра");
    }
}

const carService = new CarService('RepairCarNow', { from: '8:00', till: '20:00' });
carService.repairCar('BMW');


//4 Задание

const people = [
 {name: 'Иван', profession: 'Backend-developer'},
 {name: 'Анастасия', profession: 'DevOps-developer'},
 {name: 'Василий', profession: 'Frontend-developer'},
 {name: 'Оксана', profession: 'Project-manager'}
]


function DevFilter(array)
{
    const frontendDevs = [];
    for (let i = 0; i < array.length; i++)
    {
        array[i].profession.toLowerCase() === "frontend-developer" ? frontendDevs.push(array[i]) : array[i].profession;
    }

    return frontendDevs
}

const frontenders = DevFilter(people);
console.log(frontenders);



//5 Задание

const people5 = [
 {name: 'Иван', age: 22},
 {name: 'Анастасия', age: 20},
 {name: 'Василий', age: 16},
 {name: 'Оксана', age: 27},
 {name: 'Оксана', age: 14},
 {name: 'Оксана', age: 30}
]


function ChooseAdults(array)
{
    const adults = [];
    for (let i = 0; i < array.length; i++)
    {
        array[i].age >= 18 ? adults.push(array[i]) : array[i].age;
    }

    return adults
}
const adults = ChooseAdults(people5);
console.log(adults);



//6 Задание

function GetDaysBeforeBirthday(yourBirthDay)
{
    let bDay = new Date(yourBirthDay);
    let now = new Date();
    const nextbDay = bDay.setFullYear(now.getFullYear());
    let nowMilliseconds = now.getTime();
    let nextbDayMilliseconds = bDay.getTime();
    return msToDays(nextbDayMilliseconds - nowMilliseconds)
}

function msToDays(value)
{
    let days = value / 86400000
    return Math.ceil(days);
}

console.log(GetDaysBeforeBirthday("12-05-2002"))

//7 Задание
const car = {
    model: 'tesla',
    address: {
        country: {
            city: {
                name: 'gomel',
                street: {
                    name: 'sovetskaya',
                    number: 2
                }
            }
        },
        region: ['gomel', 'brest', 'minsk']
    },
 specs: {
    price: {
        low: 2000,
        mid: 3000,
        hight: 5000
    },
    engine: {
        power: 400,
        lowPower: 100
    }
 }
};
const car2 = {
 model: 'lada',
 address: {
 country: {
 city: {
 name: 'gomel',
 street: {
 name: 'sovetskaya',
 number: 20
 }
 }
 },
 region: ['minsk', 'grodno', 'eremino']
 },
 specs: {
 price: {
 low: 100,
 mid: 2000,
 hight: 2500
 },
 engine: {
 power: 200,
 lowPower: 100
 }
 }
};
const car3 = {
 model: 'bmw',
 address: {
 country: {
 city: {
 name: 'boston',
 street: {
 name: 'sovetskaya',
 number: 2
 }
 }
 },
 region: ['new york', 'berlin', 'bacelona']
 },
 specs: {
 price: {
 low: 100000,
 mid: 150000,
 hight: 200000
 },
 engine: {
 power: 1000,
 lowPower: 500
 }
 }
};
const arrCars = [car, car2, car3];

//7.1
const minskie = arrCars.filter(el => el["address"]["region"].includes("minsk"));
console.log(minskie);
//7.2
const highsum = arrCars.reduce(((acc,el) => acc += el["specs"]["price"].hight),0)
console.log(highsum)
//7.3
const moreThan500 = arrCars.filter(el => el["specs"]["price"].hight > 500);
console.log(moreThan500);
//7.4
const lowestPrice = arrCars.reduce(((acc,el) => acc = el["specs"]["price"].low < acc["specs"]["price"].low ? el : acc),arrCars[0]);
console.log(lowestPrice)
