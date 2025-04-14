let btn_nav = document.getElementsByClassName("Button_nav")[0];
let page_home = document.getElementsByClassName("home")[0];
let page_food = document.getElementsByClassName("food")[0];
let page_recipe = document.getElementsByClassName("recipes")[0];
let nav = document.getElementsByClassName("nav")[0];
let img_logo = document.getElementById("img_logo");
img_logo.addEventListener("click", function () {
  window.location.href = "../page/home.html";
});
let acc =
  JSON.parse(localStorage.getItem("Remember")) ||
  JSON.parse(localStorage.getItem("session"));
// console.log(acc);
if (acc === null) {
  window.location.href = "../index.html";
}
btn_nav.addEventListener("click", function () {
  nav.classList.toggle("closed");
  console.log("ẩn nav");
});
page_home.addEventListener("click", function () {
  window.location.href = "../page/home.html";
});
page_food.addEventListener("click", function () {
  window.location.href = "../page/food.html";
});
page_recipe.addEventListener("click", function () {
  window.location.href = "../page/recipe_dashboard.html";
});
let logout = document.getElementsByClassName("sign_out")[0];
let Name = document.getElementsByClassName("userName")[0];

logout.addEventListener("click", function () {
  localStorage.removeItem("Remember");
  localStorage.removeItem("session");
  window.location.href = "../index.html";
});
console.log(acc.username);
Name.textContent = acc.username;

const url = window.location.href;
if (url === "http://127.0.0.1:5500/page/food.html") {
  document.querySelector(".home img").src = "../assets/icon/home.svg";
  document.querySelector("p.food img").src =
    "../assets/icon/icon_food_active.svg";
  document.querySelector(".recipes img").src = "../assets/icon/recipes.svg";
} else if (url === "http://127.0.0.1:5500/page/recipe_dashboard.html") {
  document.querySelector(".home img").src = "../assets/icon/home.svg";
  document.querySelector("p.food img").src = "../assets/icon/icon_food.svg";
  document.querySelector(".recipes img").src =
    "../assets/icon/icon_recipe_active.svg";
} else if (url === "http://127.0.0.1:5500/page/home.html") {
  document.querySelector(".home img").src = "../assets/icon/home.svg";
  document.querySelector("p.food img").src = "../assets/icon/icon_food.svg";
  document.querySelector(".recipes img").src = "../assets/icon/recipes.svg";
} else if (url.includes("http://127.0.0.1:5500/page/recipe_detail.html")) {
  document.querySelector(".home img").src = "../assets/icon/home.svg";
  document.querySelector("p.food img").src = "../assets/icon/icon_food.svg";
  document.querySelector(".recipes img").src =
    "../assets/icon/icon_recipe_active.svg";
} else if (url.includes("http://127.0.0.1:5500/page/add_recipe.html")) {
  document.querySelector(".home img").src = "../assets/icon/home.svg";
  document.querySelector("p.food img").src = "../assets/icon/icon_food.svg";
  document.querySelector(".recipes img").src =
    "../assets/icon/icon_recipe_active.svg";
}
console.log(url);
