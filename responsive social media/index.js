// SIDEBAR

// const { default: style } = require("radium/lib/components/style");

const menuItems = document.querySelectorAll(".menu-item");

// Messages
const messagesNotifications = document.querySelector("#messages-notifications");
const messages = document.querySelector(".messages");
const message = messages.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");

// Theme
const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize-theme");
const fontSizes = document.querySelectorAll(".chose-size span");
var root = document.querySelector(":root");
// const root = document.querySelectorA(":root");
const colorPalette = document.querySelectorAll(".chose-color span");
const Bg1 = document.querySelector(".bg-1");
const Bg2 = document.querySelector(".bg-2");
const Bg3 = document.querySelector(".bg-3");
// ================================================================================================================================================================

const changeActiveItem = () => {
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });
};

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    changeActiveItem();
    item.classList.add("active");
    if (item.id != "notification") {
      document.querySelector(".notification-popup").style.display = "none";
    } else {
      document.querySelector(".notification-popup").style.display = "block";
      document.querySelector(
        "#notification .notification-count"
      ).style.display = "none";
    }
  });
});
// -------------------------------MESSAGES---------------------------------------
// Search chat
const searchMessage = () => {
  const val = messageSearch.value.toLowerCase();
  // console.log(val);
  message.forEach((user) => {
    let name = user.querySelector("h5").textContent.toLowerCase();
    if (name.indexOf(val) != -1) {
      user.style.display = "flex";
    } else {
      user.style.display = "none";
    }
  });
};

messageSearch.addEventListener("keyup", searchMessage);

// Highlight messages card when clicked
messagesNotifications.addEventListener("click", () => {
  messages.style.boxShadow = "0 0 1rem var(--color-primary)";
  messagesNotifications.querySelector(".notification-count").style.display =
    "none";
  setTimeout(() => {
    messages.style.boxShadow = "none";
  }, 2000);
});

//------------------------ Theme customization-------------------

// opens modal
const openThemeModal = () => {
  themeModal.style.display = "grid";
};

// closes modal
const closeThemeModal = (e) => {
  if (e.target.classList.contains("customize-theme")) {
    themeModal.style.display = "none";
  }
};
// close modal
themeModal.addEventListener("click", closeThemeModal);

theme.addEventListener("click", openThemeModal);

// Remove active class from spans or font size selectors

// --------------------------FONTS-----------------------------

const removeSizeSelector = () => {
  fontSizes.forEach((size) => {
    size.classList.remove("active");
  });
};

fontSizes.forEach((size) => {
  size.addEventListener("click", () => {
    removeSizeSelector();
    let fontSize;
    size.classList.toggle("active");
    if (size.classList.contains("font-size-1")) {
      fontSize = "10px";
      root.style.setProperty("----sticky-top-left", "5.4rem");
      root.style.setProperty("----sticky-top-right", "5.4rem");
    } else if (size.classList.contains("font-size-2")) {
      fontSize = "13px";
      root.style.setProperty("----sticky-top-left", "5.4rem");
      root.style.setProperty("----sticky-top-right", "-7rem");
    } else if (size.classList.contains("font-size-3")) {
      fontSize = "16px";
      root.style.setProperty("----sticky-top-left", "-2rem");
      root.style.setProperty("----sticky-top-right", "-17rem");
    } else if (size.classList.contains("font-size-4")) {
      fontSize = "19px";
      root.style.setProperty("----sticky-top-left", "-5rem");
      root.style.setProperty("----sticky-top-right", "-25rem");
    } else if (size.classList.contains("font-size-5")) {
      fontSize = "22px";
      root.style.setProperty("----sticky-top-left", "-12rem");
      root.style.setProperty("----sticky-top-right", "-35rem");
    }
    // Change font size of the root html element
    document.querySelector("html").style.fontSize = fontSize;
  });
});

// Remove active class from colors
const changeActiveColorClass = () => {
  colorPalette.forEach((colorPicker) => {
    colorPicker.classList.remove("active");
  });
};

//------------------------------- CHANGE PRIMARY COLORS------------------

colorPalette.forEach((color) => {
  color.addEventListener("click", () => {
    let primary;
    // Remove active class from colors

    changeActiveColorClass();
    if (color.classList.contains("color-1")) {
      primaryHue = 252;
    } else if (color.classList.contains("color-2")) {
      primaryHue = 52;
    } else if (color.classList.contains("color-3")) {
      primaryHue = 352;
    } else if (color.classList.contains("color-4")) {
      primaryHue = 152;
    } else if (color.classList.contains("color-5")) {
      primaryHue = 202;
    }
    color.classList.add("active");
    root.style.setProperty("--primary-color-hue", primaryHue);
  });
});

// ----------------Theme background values--------------------
let lightColorLightnes;
let whiteColorLightnes;
let darkColorLightnes;

// changes background color
const changeBG = () => {
  root.style.setProperty("--light-color-lightness", lightColorLightnes);
  root.style.setProperty("--white-color-lightness", whiteColorLightnes);
  root.style.setProperty("--dark-color-lightness", darkColorLightnes);
};
Bg1.addEventListener("click", () => {
  // add active class
  Bg1.classList.add("active");
  // remove active class from the others
  Bg2.classList.remove("active");
  Bg3.classList.remove("active");
  // remove customized changes from local storage
  window.location.reload();
});

Bg2.addEventListener("click", () => {
  darkColorLightnes = "95%";
  whiteColorLightnes = "20%";
  lightColorLightnes = "15%";

  // add active class
  Bg2.classList.add("active");
  // remove active class from others
  Bg1.classList.remove("active");
  Bg3.classList.remove("active");
  changeBG();
});
Bg3.addEventListener("click", () => {
  darkColorLightnes = "95%";
  whiteColorLightnes = "10%";
  lightColorLightnes = "0%";

  // add active class
  Bg3.classList.add("active");
  // remove active class from others
  Bg1.classList.remove("active");
  Bg3.classList.remove("active");
  changeBG();
});
