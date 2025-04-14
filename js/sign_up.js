const user = JSON.parse(localStorage.getItem("user")) || [];
let form = document.getElementsByTagName("form")[0];
console.log(form);

let email = document.getElementById("email");
let userName = document.getElementById("username");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm-password");
let check = document.getElementsByClassName("check");
let popup = document.getElementsByClassName("popup")[0];
form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (email.value.length === 0) {
    check[0].textContent = "Email không được để trống";
    check[0].classList.add("show");
    return;
  } else if (
    !email.value.includes("@") ||
    !email.value.includes(".") ||
    email.value.indexOf("@") === 0 ||
    email.value.indexOf(".") === email.value.length - 1
  ) {
    check[0].textContent = "Email không hợp lệ";
    check[0].classList.add("show");
    return;
  } else {
    check[0].textContent = "";
    check[0].classList.remove("show");
  }
  let flag = user.some((element) => element.email === email.value);
  if (flag) {
    check[0].textContent = "Email đã được dùng";
    check[0].classList.add("show");
    return;
  } else {
    check[0].textContent = "";
    check[0].classList.remove("show");
  }
  if (userName.value.length === 0) {
    check[1].textContent = "Username không được để trống";
    check[1].classList.add("show");
    return;
  } else {
    check[1].textContent = "";
    check[1].classList.remove("show");
  }
  // const isUpperCase = (str) => /^(?=[A-Z])[A-Z\s]+$/.test(str);
  // if (isUpperCase(password.value[0])) {
  //   check[2].textContent = "Mật khẩu có chữ cái đầu viết hoa vui lòng nhập lại";
  //   check[2].classList.add("show");
  //   return;
  // }

  // if (/^[^a-zA-Z0-9]+$/.test(password.value)) {
  //   console.log(password.value);
  //   // return;
  // } else {
  //   check[2].textContent = "Mật khẩu không được chứa chữ và số";
  //   check[2].classList.add("show");
  //   return;
  // }
  if (password.value.length === 0) {
    check[2].textContent = "Mật khẩu không được để trống";
    check[2].classList.add("show");
    return;
  } else if (password.value.length < 8) {
    check[2].textContent = "Mật khẩu phải tối thiểu 8 ký tự";
    check[2].classList.add("show");
    return;
  } else {
    check[2].textContent = "";
    check[2].classList.remove("show");
  }

  if (confirmPassword.value !== password.value) {
    check[3].textContent = "Mật khẩu không trùng khớp";
    check[3].classList.add("show");
    return;
  } else {
    check[3].textContent = "";
    check[3].classList.remove("show");
  }
  let acc = {
    id: user.length + 1,
    email: email.value,
    username: userName.value,
    password: password.value,
  };
  user.push(acc);
  localStorage.setItem("user", JSON.stringify(user));
  // popup.classList.remove("hide");
  Swal.fire({
    title: "Register Successful",
    icon: "success",
    draggable: true,
  });
  setTimeout(function () {
    window.location.href = "../index.html";
  }, 2000);
});

email.addEventListener("input", function () {
  if (email.value.length === 0) {
    check[0].textContent = "Email không được để trống";
    check[0].classList.add("show");
    return;
  } else if (
    !email.value.includes("@") ||
    !email.value.includes(".") ||
    email.value.indexOf("@") === 0 ||
    email.value.indexOf(".") === email.value.length - 1
  ) {
    check[0].textContent = "Email không hợp lệ";
    check[0].classList.add("show");
    return;
  } else {
    check[0].textContent = "";
    check[0].classList.remove("show");
  }
});

userName.addEventListener("input", function () {
  if (userName.value.length === 0) {
    check[1].textContent = "Username không được để trống";
    check[1].classList.add("show");
    return;
  } else {
    check[1].textContent = "";
    check[1].classList.remove("show");
  }
});

password.addEventListener("input", function () {
  if (password.value.length === 0) {
    check[2].textContent = "Mật khẩu không được để trống";
    check[2].classList.add("show");
    return;
  } else if (password.value.length < 8) {
    check[2].textContent = "Mật khẩu phải tối thiểu 8 ký tự";
    check[2].classList.add("show");
    return;
  } else {
    check[2].textContent = "";
    check[2].classList.remove("show");
  }
  if (confirmPassword.value && confirmPassword.value !== password.value) {
    check[3].textContent = "Mật khẩu không trùng khớp";
    check[3].classList.add("show");
    return;
  } else if (confirmPassword.value) {
    check[3].textContent = "";
    check[3].classList.remove("show");
  }
});

confirmPassword.addEventListener("input", function () {
  if (confirmPassword.value !== password.value) {
    check[3].textContent = "Mật khẩu không trùng khớp";
    check[3].classList.add("show");
    return;
  } else {
    check[3].textContent = "";
    check[3].classList.remove("show");
  }
});
