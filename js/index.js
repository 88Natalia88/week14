let directors = [
  {
    name: 'Стивен Спилберг',
    career: 'Продюсер, Режиссёр, Актёр, Сценарист, Монтажёр',
    films: 'https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD%D0%B0_%D0%A1%D0%BF%D0%B8%D0%BB%D0%B1%D0%B5%D1%80%D0%B3%D0%B0',
    top_rated_film: 'Список Шиндлера'
  },
  {
    name: 'Кристофер Нолан',
    career: 'Сценарист, Продюсер, Режиссёр, Оператор, Монтажёр, Актёр, Композитор',
    films: 'https://www.film.ru/compilation/vse-filmy-kristofera-nolana-ot-luchshego-k-horoshemu',
    top_rated_film: 'Начало'
  },
  {
    name: 'Мартин МакДона',
    career: 'Сценарист, Режиссёр, Продюсер',
    films: 'https://www.film.ru/person/martin-makdonah',
    top_rated_film: 'Три билборда на границе Эббинга, Миссури'
  },
  {
    name: 'Алексей Балабанов',
    career: 'Режиссёр, Сценарист, Актёр, Продюсер',
    films: 'https://www.film.ru/person/aleksey-balabanov',
    top_rated_film: 'Брат'
  },
  {
    name: 'Питер Фаррелли',
    career: 'Продюсер, Режиссёр, Сценарист, Актёр',
    films: 'https://www.film.ru/person/piter-farrelli',
    top_rated_film: 'Зелёная книга'
  },
  {
    name: 'Юрий Быков',
    career: 'Актёр, Режиссёр, Сценарист, Композитор, Монтажёр, Продюсер',
    films: 'https://www.film.ru/person/yuriy-bykov',
    top_rated_film: 'Дурак'
  },
  {
    name: 'Жан-Марк Валле',
    career: 'Режиссер, Продюсер, Монтажёр, Актёр, Сценарист',
    films: 'https://www.film.ru/person/zhan-mark-valle',
    top_rated_film: 'Далласский клуб покупателей'
  },
];
//console.log(directors[1]);

//режиссеры
//document.querySelectorAll('.director').forEach(function(person, i){
//person.textContent = directors[i].name;
//});
let directorsNodes = document.querySelectorAll('.director');
directors.forEach(function(person, i){
  directorsNodes[i].innerHTML = directors[i].name;
});

//карьера
/*document.querySelectorAll('.career').forEach(function(person, i){
  person.textContent = directors[i].career;
  });*/
  let careerNodes = document.querySelectorAll('.career');
directors.forEach(function(person, i){
  careerNodes[i].innerHTML = directors[i].career;
});

  //фильмография
  /*document.querySelectorAll('.films').forEach(function(person, i){
    person.href = directors[i].films;
    });*/
    let films = document.querySelectorAll('.films');
    directors.forEach(function(person, i){
      films[i].href = directors[i].films;
    });

  //список лучших фильмов
let topFilmsList = directors.map(function(person, i){
return directors[i].top_rated_film;
});
document.querySelector('.best-films').innerHTML = topFilmsList;
//console.log(topFilmsList);


//задание под звездочкой
const arr1 = [1, 2];
const arr2 = [2, 3];
const arr3 = ['a', 'b'];
const arr4 = ['b', 'c'];
const arr5 = ['b', 'e', 'c'];
const arr6 = ['b', 'b', 'e'];
const arr7 = ['b', 'c', 'e'];
const arr8 = ['b', 'e', 'c'];

const arrays = [arr3, arr4, arr5];

const intersection = arrays.reduce((number, array) => {
  return number.filter(element => array.includes(element));
});

console.log(intersection);
//let number = arr1.filter(elem => arr2.indexOf(elem) !== -1);
let first = arr1.filter(elem => arr2.includes(elem));

console.log(first);

const arrays2 = [arr6, arr7, arr8];
const second = arrays2.reduce((number, array) => {
  return number.filter(element => array.indexOf(element) !== -1);
});

console.log(second);
