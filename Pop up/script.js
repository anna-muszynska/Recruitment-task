const form = document.querySelector("form");
const inputEmail = document.querySelector("#input_email");
const inputName = document.querySelector("#input_name");
const formContainer = document.querySelector("#container");
const labelEmail = document.querySelector("#label_email");
const labelName = document.querySelector("#label_name");

const popUp = function () {
  formContainer.classList.remove("hidden");
};

setTimeout(popUp, 2000);

const labelFunc = function (e, type) {
  const typeTarget = type === "Email" ? labelEmail : labelName;

  if (e.target.value !== "") {
    typeTarget.classList.add("up");
  } else {
    typeTarget.classList.remove("up");
  }
};

inputEmail.addEventListener("change", (e) => labelFunc(e, "Email"));

inputName.addEventListener("change", (e) => labelFunc(e, "Name"));

form.addEventListener("submit", (e) => {
  const name = inputName.value;
  const toUpperName = name.toUpperCase();
  localStorage.setItem("name", toUpperName);
  inputEmail.value = "";
  inputName.value = "";
});
