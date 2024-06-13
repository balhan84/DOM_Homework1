//1) HTML: є кнопка.
//JS: При натисканні на кнопку змінити текст цієї кнопки.

const login = document.querySelector(".loginBtn");
const changeTextBtn = (e) => (login.textContent = "Log out");
login.addEventListener("click", changeTextBtn);

//HTML: є кнопка.
//JS: При натисканні на кнопку змінити її колір.

const search = document.querySelector(".searchBtn");
const changeColorBtn = (e) => (search.style.backgroundColor = "green");
search.addEventListener("click", changeColorBtn);

//HTML: є зображення.
//JS: Зробити так, щоб при появі сторінки відображалася одна картинка, а при наведенні миші на неї відображалася інша.

const imgs = {
  src: "https://cdn.pixabay.com/photo/2020/04/08/08/08/spring-5016266_640.jpg",
  alt: "flower",
};

const imgEl = document.querySelector(".imgCat");
imgEl.onmouseenter = (e) => {
  imgEl.src = imgs.src;
  imgEl.alt = imgs.alt;
};
