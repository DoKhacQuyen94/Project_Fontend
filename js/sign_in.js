const user = JSON.parse(localStorage.getItem("user")) || [];
let email = document.getElementById("email");
let password = document.getElementById("password");
let check_box = document.getElementById("remember");
let form = document.getElementsByTagName("form")[0];
let popup_error = document.getElementsByClassName("validate-error")[0];
let popup_success = document.getElementsByClassName("validate-success")[0];
let contentValidate = document.getElementsByClassName("content_validate")[0];
let remember = JSON.parse(localStorage.getItem("Remember")) || [];
localStorage.removeItem("session");
console.log(remember);
if (remember.length !== 0) {
  window.location.href = "./page/home.html";
}
form.addEventListener("submit", function (event) {
  event.preventDefault();
  // check rỗng email
  if (email.value.length === 0) {
    content_validate("Không được để trống email");
    return;
  }
  //check rỗng pass
  if (password.value.length === 0) {
    content_validate("Không được để trống Password");
    return;
  }
  //check email đky chưa
  let flagCheckEmail = user.some((element) => element.email === email.value);
  let indexCheckPass = user.findIndex(
    (element, index) => element.email === email.value
  );
  // console.log(indexCheckPass);
  // console.log(flagCheckEmail);
  if (!flagCheckEmail) {
    content_validate("Email chưa được đăng ký");
    return;
  } else {
    // let flagCheckPass = user.some(
    //   (element) => element.password === password.value
    // );
    // // console.log(flagCheckPass);
    // if (!flagCheckPass) {
    //   content_validate("Mật khẩu không đúng");
    //   return;
    // }else if()
    if (user[indexCheckPass].password !== password.value) {
      content_validate("Mật khẩu không đúng");
      return;
    }
    let index = user.findIndex((element) => element.email === email.value);
    if (check_box.checked) {
      localStorage.setItem(
        "Remember",
        JSON.stringify({
          username: user[index].username,
        })
      );
    }
    localStorage.setItem("session", JSON.stringify(user[index]));
    popup_success.classList.toggle("hide_validate");
    setTimeout(function () {
      popup_success.classList.toggle("hide_validate");
      window.location.href = "../page/home.html";
    }, 3000);
  }
});
function content_validate(text) {
  contentValidate.textContent = text;
  popup_error.classList.toggle("hide_validate");
  setTimeout(function () {
    popup_error.classList.toggle("hide_validate");
  }, 3000);
}
