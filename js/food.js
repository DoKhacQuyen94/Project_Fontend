let defaultFoods = [
  {
    id: 1,
    name: "Salmon, canned in oil",
    source: "McCance and Widdowson's",
    category: "Finfish and Shellfish Products",
    quantity: "100g",
    macronutrients: {
      energy: 200,
      carbohydrate: 0.0,
      fat: 15.0,
      protein: 20.0,
    },
    micronutrients: {
      cholesterol: 85.0,
      fiber: 0.0,
      sodium: 400.0,
      water: 60.0,
      vitaminA: 50,
      vitaminB6: 0.3,
      vitaminB12: 3.0,
      vitaminC: 0.0,
      vitaminD: 10.0,
      vitaminE: 2.0,
      vitaminK: 1.0,
      starch: 0.0,
      lactose: 0.0,
      alcohol: null,
      caffeine: null,
      sugars: 0.0,
      calcium: 200.0,
      iron: 1.0,
      magnesium: 30.0,
      phosphorus: 250.0,
      potassium: 300.0,
      zinc: 0.8,
      copper: 0.1,
      fluoride: null,
      manganese: 0.02,
      selenium: 40.0,
      thiamin: 0.03,
      riboflavin: 0.2,
      niacin: 8.0,
      pantothenicAcid: 0.5,
      folateTotal: 10.0,
      folicAcid: null,
      fattyAcidsTrans: 0.0,
      fattyAcidsSaturated: 3.0,
      fattyAcidsMonounsaturated: 5.0,
      fattyAcidsPolyunsaturated: 4.0,
      chloride: 450.0,
    },
  },
  {
    id: 2,
    name: "Black Beans, canned",
    source: "McCance and Widdowson's",
    category: "Legumes and Legume Products",
    quantity: "100g",
    macronutrients: {
      energy: 90,
      carbohydrate: 16.0,
      fat: 0.5,
      protein: 6.0,
    },
    micronutrients: {
      cholesterol: 0.0,
      fiber: 7.0,
      sodium: 350.0,
      water: 70.0,
      vitaminA: null,
      vitaminB6: 0.07,
      vitaminB12: 0.0,
      vitaminC: 0.0,
      vitaminD: 0.0,
      vitaminE: 0.2,
      vitaminK: 2.0,
      starch: 10.0,
      lactose: 0.0,
      alcohol: null,
      caffeine: null,
      sugars: 1.0,
      calcium: 30.0,
      iron: 2.0,
      magnesium: 0.0,
      phosphorus: 100.0,
      potassium: 350.0,
      zinc: 0.5,
      copper: 0.2,
      fluoride: null,
      manganese: 0.3,
      selenium: 1.0,
      thiamin: 0.1,
      riboflavin: 0.05,
      niacin: 0.5,
      pantothenicAcid: 0.2,
      folateTotal: 60.0,
      folicAcid: null,
      fattyAcidsTrans: 0.0,
      fattyAcidsSaturated: 0.1,
      fattyAcidsMonounsaturated: 0.1,
      fattyAcidsPolyunsaturated: 0.2,
      chloride: 380.0,
    },
  },
  {
    id: 3,
    name: "Spinach, canned, drained",
    source: "McCance and Widdowson's",
    category: "Vegetables and Vegetable Products",
    quantity: "100g",
    macronutrients: {
      energy: 25,
      carbohydrate: 4.0,
      fat: 0.5,
      protein: 3.0,
    },
    micronutrients: {
      cholesterol: 0.0,
      fiber: 2.5,
      sodium: 300.0,
      water: 90.0,
      vitaminA: 500,
      vitaminB6: 0.1,
      vitaminB12: 0.0,
      vitaminC: 15.0,
      vitaminD: 0.0,
      vitaminE: 2.0,
      vitaminK: 400.0,
      starch: 0.0,
      lactose: 0.0,
      alcohol: null,
      caffeine: null,
      sugars: 0.5,
      calcium: 100.0,
      iron: 2.5,
      magnesium: 80.0,
      phosphorus: 50.0,
      potassium: 350.0,
      zinc: 0.5,
      copper: 0.1,
      fluoride: null,
      manganese: 0.5,
      selenium: 1.0,
      thiamin: 0.03,
      riboflavin: 0.1,
      niacin: 0.5,
      pantothenicAcid: 0.1,
      folateTotal: 100.0,
      folicAcid: null,
      fattyAcidsTrans: 0.0,
      fattyAcidsSaturated: 0.1,
      fattyAcidsMonounsaturated: null,
      fattyAcidsPolyunsaturated: 0.2,
      chloride: 320.0,
    },
  },
  {
    id: 4,
    name: "Peaches, canned in syrup",
    source: "McCance and Widdowson's",
    category: "Fruits and Fruit Juices",
    quantity: "100g",
    macronutrients: {
      energy: 70,
      carbohydrate: 18.0,
      fat: 0.1,
      protein: 0.5,
    },
    micronutrients: {
      cholesterol: 0.0,
      fiber: 1.0,
      sodium: 5.0,
      water: 80.0,
      vitaminA: 30,
      vitaminB6: 0.02,
      vitaminB12: 0.0,
      vitaminC: 3.0,
      vitaminD: 0.0,
      vitaminE: 0.5,
      vitaminK: 2.0,
      starch: 0.0,
      lactose: 0.0,
      alcohol: null,
      caffeine: null,
      sugars: 15.0,
      calcium: 5.0,
      iron: 0.3,
      magnesium: 10.0,
      phosphorus: 15.0,
      potassium: 100.0,
      zinc: 0.1,
      copper: 0.05,
      fluoride: null,
      manganese: 0.02,
      selenium: null,
      thiamin: 0.01,
      riboflavin: 0.02,
      niacin: 0.5,
      pantothenicAcid: 0.05,
      folateTotal: 5.0,
      folicAcid: null,
      fattyAcidsTrans: 0.0,
      fattyAcidsSaturated: null,
      fattyAcidsMonounsaturated: null,
      fattyAcidsPolyunsaturated: null,
      chloride: 10.0,
    },
  },
  {
    id: 5,
    name: "Chicken, canned",
    source: "McCance and Widdowson's",
    category: "Poultry Products",
    quantity: "100g",
    macronutrients: {
      energy: 170,
      carbohydrate: 0.0,
      fat: 8.0,
      protein: 25.0,
    },
    micronutrients: {
      cholesterol: 80.0,
      fiber: 0.0,
      sodium: 500.0,
      water: 65.0,
      vitaminA: 20,
      vitaminB6: 0.4,
      vitaminB12: 0.3,
      vitaminC: 0.0,
      vitaminD: 0.0,
      vitaminE: 0.3,
      vitaminK: 2.0,
      starch: 0.0,
      lactose: 0.0,
      alcohol: null,
      caffeine: null,
      sugars: 0.0,
      calcium: 10.0,
      iron: 1.5,
      magnesium: 20.0,
      phosphorus: 150.0,
      potassium: 200.0,
      zinc: 1.5,
      copper: 0.05,
      fluoride: null,
      manganese: 0.02,
      selenium: 30.0,
      thiamin: 0.05,
      riboflavin: 0.1,
      niacin: 5.0,
      pantothenicAcid: 0.7,
      folateTotal: 5.0,
      folicAcid: null,
      fattyAcidsTrans: 0.0,
      fattyAcidsSaturated: 2.0,
      fattyAcidsMonounsaturated: 3.0,
      fattyAcidsPolyunsaturated: 1.5,
      chloride: 550.0,
    },
  },
];
// Lưu dữ liệu vào localStorage
function saveToLocalStorage(foods) {
  localStorage.setItem("cannedFoods", JSON.stringify(foods));
}

// Lấy dữ liệu từ localStorage, nếu không có thì dùng mặc định
function loadFromLocalStorage() {
  const storedFoods = localStorage.getItem("cannedFoods");
  return storedFoods ? JSON.parse(storedFoods) : defaultFoods;
}

// Khởi tạo biến toàn cục
let cannedFoods = loadFromLocalStorage(); // Danh sách gốc
let currentFoods = [...cannedFoods]; // Danh sách hiển thị hiện tại
let currentPage = 1; // Trang hiện tại
const FOODS_PER_PAGE = 4; // Số thực phẩm mỗi trang
const MAX_VISIBLE_PAGES = 5; // Số nút trang tối đa hiển thị

// Hiển thị danh sách thực phẩm
function showFoods(foods, page) {
  const foodContainer = document.querySelector(".food_child");
  foodContainer.innerHTML = "";

  const start = (page - 1) * FOODS_PER_PAGE;
  const end = start + FOODS_PER_PAGE;
  const foodsToShow = foods.slice(start, end);

  // Tạo HTML cho từng thực phẩm
  for (let food of foodsToShow) {
    foodContainer.innerHTML += `
      <div class="child" data-id="${food.id}">
        <div class="text">
          <p>${food.name}</p>
          <p>${food.source}</p>
        </div>
        <div class="specifications">
          <table>
            <tr>
              <td>${food.macronutrients.energy} kcal</td>
              <td>${food.macronutrients.fat} g</td>
              <td>${food.macronutrients.carbohydrate} g</td>
              <td>${food.macronutrients.protein} g</td>
            </tr>
            <tr>
              <th>Energy</th>
              <th>Fat</th>
              <th>Carbohydrate</th>
              <th>Protein</th>
            </tr>
          </table>
        </div>
      </div>
    `;
  }

  // Thêm sự kiện click để xem chi tiết
  addFoodClickEvents();
  updatePageButtons(foods, page);
  saveToLocalStorage(cannedFoods);
}

// Thêm sự kiện click cho các thực phẩm
function addFoodClickEvents() {
  const foodItems = document.getElementsByClassName("child");
  for (let item of foodItems) {
    item.onclick = function () {
      const id = parseInt(item.getAttribute("data-id"));
      showFoodDetails(id);
    };
  }
}

// Hiển thị chi tiết thực phẩm trong modal
function showFoodDetails(id) {
  const food = currentFoods.find((food) => food.id === id);
  if (!food) return;

  const modal = document.querySelector(".modal-imformation");
  modal.classList.remove("hide_modal");
  modal.dataset.foodId = id;

  // Điền thông tin cơ bản
  modal.querySelector('input[name="name"]').value = food.name || "";
  modal.querySelector('input[name="category"]').value = food.category || "";
  modal.querySelector('input[name="source"]').value = food.source || "";
  modal.querySelector('input[name="quantity"]').value = food.quantity || "";

  // Điền macronutrients
  const macro = food.macronutrients;
  modal.querySelector('input[name="energy"]').value = macro.energy || "";
  modal.querySelector('input[name="carbohydrate"]').value =
    macro.carbohydrate || "";
  modal.querySelector('input[name="fat"]').value = macro.fat || "";
  modal.querySelector('input[name="protein"]').value = macro.protein || "";

  // Điền micronutrients
  const micro = food.micronutrients;
  for (let key in micro) {
    modal.querySelector(`input[name="${key}"]`).value = micro[key] ?? "";
  }
}

// Cập nhật nút phân trang
function updatePageButtons(foods, page) {
  const totalPages = Math.ceil(foods.length / FOODS_PER_PAGE);
  const pageList = document.querySelector(".list_page");
  const pageNumbers = document.createElement("div");
  pageNumbers.id = "pageNumbers";

  // Xóa nút cũ và thêm container mới
  const oldNumbers = pageList.querySelector("#pageNumbers");
  if (oldNumbers) oldNumbers.remove();
  pageList.insertBefore(pageNumbers, pageList.querySelector(".next-page"));

  // Cập nhật nút Previous/Next
  document.querySelector(".prev-page").disabled = page === 1;
  document.querySelector(".next-page").disabled = page === totalPages;

  // Tính toán các trang hiển thị
  let startPage = Math.max(1, page - Math.floor(MAX_VISIBLE_PAGES / 2));
  let endPage = Math.min(totalPages, startPage + MAX_VISIBLE_PAGES - 1);
  if (endPage - startPage + 1 < MAX_VISIBLE_PAGES) {
    startPage = Math.max(1, endPage - MAX_VISIBLE_PAGES + 1);
  }

  // Thêm nút trang đầu và dấu "..."
  if (startPage > 1) {
    pageNumbers.appendChild(createPageButton(1));
    if (startPage > 2) pageNumbers.appendChild(createDotsButton());
  }

  // Thêm các nút số trang
  for (let i = startPage; i <= endPage; i++) {
    const button = createPageButton(i);
    if (i === page) button.classList.add("active");
    pageNumbers.appendChild(button);
  }

  // Thêm nút trang cuối và dấu "..."
  if (endPage < totalPages) {
    if (endPage < totalPages - 1) pageNumbers.appendChild(createDotsButton());
    pageNumbers.appendChild(createPageButton(totalPages));
  }
}

// Tạo nút số trang
function createPageButton(pageNum) {
  const button = document.createElement("button");
  button.textContent = pageNum;
  button.onclick = () => {
    currentPage = pageNum;
    showFoods(currentFoods, currentPage);
  };
  return button;
}

// Tạo nút "..."
function createDotsButton() {
  const button = document.createElement("button");
  button.textContent = "...";
  button.disabled = true;
  return button;
}

// Khởi tạo hiển thị ban đầu
showFoods(currentFoods, currentPage);

// Xử lý nút Previous/Next
document.querySelector(".prev-page").onclick = () => {
  if (currentPage > 1) {
    currentPage--;
    showFoods(currentFoods, currentPage);
  }
};

document.querySelector(".next-page").onclick = () => {
  const totalPages = Math.ceil(currentFoods.length / FOODS_PER_PAGE);
  if (currentPage < totalPages) {
    currentPage++;
    showFoods(currentFoods, currentPage);
  }
};

// Tìm kiếm thực phẩm
document.querySelector(".search_food").oninput = (e) => {
  const searchTerm = e.target.value.toLowerCase();
  currentFoods = cannedFoods.filter((food) =>
    food.name.toLowerCase().includes(searchTerm)
  );
  currentPage = 1;
  showFoods(currentFoods, currentPage);
};

// Sắp xếp thực phẩm
document.querySelector('.custom_input select[name="sort_order"]').onchange = (
  e
) => {
  const [nutrient, order] = e.target.value.split("_");
  if (!nutrient || !order) return;

  currentFoods = [...cannedFoods];
  currentFoods.sort((a, b) => {
    const valueA = a.macronutrients[nutrient];
    const valueB = b.macronutrients[nutrient];
    return order === "asc" ? valueA - valueB : valueB - valueA;
  });
  currentPage = 1;
  showFoods(currentFoods, currentPage);
};

// Lọc theo danh mục
function setupCategoryFilter() {
  const select = document.querySelector('select[name="category_filter"]');
  const categories = [...new Set(cannedFoods.map((food) => food.category))];

  for (let category of categories) {
    const option = document.createElement("option");
    option.value = category.toLowerCase();
    option.textContent = category;
    select.appendChild(option);
  }

  select.onchange = (e) => {
    const category = e.target.value.toLowerCase();
    currentFoods = category
      ? cannedFoods.filter((food) => food.category.toLowerCase() === category)
      : [...cannedFoods];
    currentPage = 1;
    showFoods(currentFoods, currentPage);
  };
}

setupCategoryFilter();

// Xử lý tạo thực phẩm mới
document.querySelector(".creat_food").onclick = () => {
  const modal = document.querySelector(".modal-backdrop");
  modal.classList.remove("hide_modal");
  modal.querySelectorAll("input").forEach((input) => (input.value = ""));
};

document.querySelector(".modal-backdrop .cancel").onclick = () => {
  document.querySelector(".modal-backdrop").classList.add("hide_modal");
};

document.querySelector(".modal-backdrop .save").onclick = () => {
  saveFood(document.querySelector(".modal-backdrop"), true);
};

// Xử lý chỉnh sửa thực phẩm
document.querySelector(".modal-imformation .cancel").onclick = () => {
  document.querySelector(".modal-imformation").classList.add("hide_modal");
};

document.querySelector(".modal-imformation .save").onclick = () => {
  saveFood(document.querySelector(".modal-imformation"), false);
};

// Hàm lưu thực phẩm (dùng chung cho tạo mới và chỉnh sửa)
function saveFood(modal, isNew) {
  const inputs = modal.querySelectorAll(".infor_add input");
  let formData = {};
  let hasError = false;

  inputs.forEach((input) => {
    if (!input.value.trim()) {
      input.style.border = "1px solid red";
      hasError = true;
    } else {
      input.style.border = "";
      formData[input.name] = input.value.trim();
    }
  });
  console.log(formData);
  // Loại bỏ số và kí tự đặc biệt khi nhập vào input name !!
  formData.name = formData.name.replace(/[^a-zA-Z]/g, "");
  console.log(formData.name);
  if (hasError) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Please fill in all fields!",
    });
    return;
  }

  const toNumber = (value) => {
    const num = parseFloat(value);
    return isNaN(num) ? null : num;
  };
  const food = {
    id: isNew ? cannedFoods.length + 1 : parseInt(modal.dataset.foodId),
    name: formData.name,
    source: formData.source,
    category: formData.category,
    quantity: formData.quantity,
    macronutrients: {
      energy: toNumber(formData.energy),
      carbohydrate: toNumber(formData.carbohydrate),
      fat: toNumber(formData.fat),
      protein: toNumber(formData.protein),
    },
    micronutrients: {
      cholesterol: toNumber(formData.cholesterol),
      fiber: toNumber(formData.fiber),
      sodium: toNumber(formData.sodium),
      water: toNumber(formData.water),
      vitaminA: toNumber(formData.vitaminA),
      vitaminB6: toNumber(formData.vitaminB6),
      vitaminB12: toNumber(formData.vitaminB12),
      vitaminC: toNumber(formData.vitaminC),
      vitaminD: toNumber(formData.vitaminD),
      vitaminE: toNumber(formData.vitaminE),
      vitaminK: toNumber(formData.vitaminK),
      starch: toNumber(formData.starch),
      lactose: toNumber(formData.lactose),
      alcohol: toNumber(formData.alcohol),
      caffeine: toNumber(formData.caffeine),
      sugars: toNumber(formData.sugars),
      calcium: toNumber(formData.calcium),
      iron: toNumber(formData.iron),
      magnesium: toNumber(formData.magnesium),
      phosphorus: toNumber(formData.phosphorus),
      potassium: toNumber(formData.potassium),
      zinc: toNumber(formData.zinc),
      copper: toNumber(formData.copper),
      fluoride: toNumber(formData.fluoride),
      manganese: toNumber(formData.manganese),
      selenium: toNumber(formData.selenium),
      thiamin: toNumber(formData.thiamin),
      riboflavin: toNumber(formData.riboflavin),
      niacin: toNumber(formData.niacin),
      pantothenicAcid: toNumber(formData.pantothenicAcid),
      folateTotal: toNumber(formData.folateTotal),
      folicAcid: toNumber(formData.folicAcid),
      fattyAcidsTrans: toNumber(formData.fattyAcidsTrans),
      fattyAcidsSaturated: toNumber(formData.fattyAcidsSaturated),
      fattyAcidsMonounsaturated: toNumber(formData.fattyAcidsMonounsaturated),
      fattyAcidsPolyunsaturated: toNumber(formData.fattyAcidsPolyunsaturated),
      chloride: toNumber(formData.chloride),
    },
  };

  if (isNew) {
    cannedFoods.push(food);
  } else {
    const index = cannedFoods.findIndex((f) => f.id === food.id);
    if (index !== -1) cannedFoods[index] = food;
  }

  currentFoods = [...cannedFoods];
  saveToLocalStorage(cannedFoods);
  modal.classList.add("hide_modal");
  showFoods(currentFoods, currentPage);
}
