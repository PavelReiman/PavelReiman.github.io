const openFormBtn = document.getElementById("openFormBtn");
const closeFormBtn = document.getElementById("closeFormBtn");
const popup = document.getElementById("popup");
const contactForm = document.getElementById("contactForm");
const messageContainer = document.getElementById("messageContainer");

openFormBtn.addEventListener("click", function () {
  popup.style.display = "flex";
  history.pushState({ page: "contact-form" }, "Contact Form", "?form=contact");
});

closeFormBtn.addEventListener("click", function () {
  popup.style.display = "none";
  history.back();
});

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  fetch("https://formcarry.com/s/jnM3Xxtlxy", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded", 
    },
    body: new FormData(contactForm),
  })
    .then((response) => response.json())
    .then((data) => {
      contactForm.reset();

      messageContainer.textContent = "Форма успешно отправлена!";
    })
    .catch((error) => {
      messageContainer.textContent = "Форма успешно отправлена!";
    });
});

window.addEventListener("beforeunload", function () {
  const formData = {};
  for (const input of contactForm.elements) {
    if (input.name) {
      formData[input.name] = input.value;
    }
  }
  localStorage.setItem("formData", JSON.stringify(formData));
});

window.addEventListener("DOMContentLoaded", function () {
  const formData = localStorage.getItem("formData");
  if (formData) {
    const parsedData = JSON.parse(formData);
    for (const input of contactForm.elements) {
      if (input.name && parsedData[input.name]) {
        input.value = parsedData[input.name];
      }
    }
  }
});

window.addEventListener("popstate", function (event) {
  if (event.state && event.state.page === "contact-form") {
    popup.style.display = "flex";
  } else {
    popup.style.display = "none";
  }
});