const data = document.querySelectorAll(".data");
const custom_button = document.querySelector(".custom_button");
const data_array = [];

let checkEdit = true;

function submitting() {
  custom_button.innerHTML = `<button class="submit_b">Submit</button>`;
  const submit_b = document.querySelector(".submit_b");

  submit_b.addEventListener("click", () => {
    const data_user = [];
    data.forEach((Element) => {
      data_user.push(Element.value);
      Element.value = "";
    });
    data_array.push(data_user);
    displaying();
  });
}

function displaying() {
  const display = document.querySelector(".display");
  let display_main = "";
  data_array.forEach((Element) => {
    let display_user = "";
    Element.forEach((items) => {
      display_user += `<td>${items}</td>`;
    });
    display_user += `
    <td>
    <button class="Edit_b">Edit</button>
    <button class="Delete_b">Delete</button>
    <input type="checkbox">
    </td>`;
    display_main += `<tr>${display_user}</tr>`;
  });
  display.innerHTML = `<tr>${display_main}</tr>`;
  edit();
  Delete();
}

function edit() {
  const Edit_b = document.querySelectorAll(".Edit_b");
  Edit_b.forEach((Element, index) => {
    Element.addEventListener("click", () => {
      if (checkEdit) {
        Updating(index, false);
      }
    });
  });
}

function Delete() {
  const Delete_b = document.querySelectorAll(".Delete_b");
  Delete_b.forEach((Element, index) => {
    Element.addEventListener("click", () => {
      data_array.splice(index, 1);
      displaying();
    });
  });
}

function Updating(index, boolean) {
  let number = 0;
  data.forEach((Element) => {
    Element.value = data_array[index][number++];
  });
  checkEdit = boolean;

  custom_button.innerHTML = `<button class="update_b">Update</button>`;
  const update_b = document.querySelector(".update_b");
  update_b.addEventListener("click", () => {
    const new_data = [];
    data.forEach((Element) => {
      new_data.push(Element.value);
    });
    data_array[index] = new_data;
    displaying();
    submitting();
    data.forEach((Element) => {
      Element.value = "";
    });
    checkEdit = true;
  });
}

submitting();
