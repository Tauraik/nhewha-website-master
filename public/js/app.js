const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("menu-mobile");

//Form Elements
const contactForm = document.getElementById("contactForm");

//Add an event listner for the mobile menu btn
menuBtn.addEventListener("click", navToggle);

function navToggle() {
  menuBtn.classList.toggle("open");
  mobileMenu.classList.toggle("hidden");
  mobileMenu.classList.toggle("flex");
}

//Get Form Details on submit
contactForm.addEventListener("submit", submitForm);

async function handelFormSubmit(data) {
  const sent = await fetch("https://nhewha-emailapi.vercel.app/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  try {
    const response = await sent.json;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

function reloadPage() {
  setTimeout(location.reload, 10000);
}

function submitForm(e) {
  e.preventDefault();
  const enteredForm = {};
  enteredForm.services = [];
  [...contactForm.elements].forEach((item) => {
    if (item.type === "text") {
      enteredForm[item.id] = item.value;
    }
    if (item.type === "checkbox") {
      if (item.checked) {
        enteredForm.services.push(item.id);
      }
    }
    if (item.id === "message") {
      enteredForm.message = item.value;
    }
  });
  console.log(enteredForm);
  //handelFormSubmit(enteredForm);
  //alert("Email Sent");
  //reloadPage();
}
