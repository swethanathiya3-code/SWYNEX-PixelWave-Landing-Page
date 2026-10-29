
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
    });
  });
}

const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}

const unlockButton = document.getElementById("unlockButton");

if (unlockButton) {
  unlockButton.addEventListener("click", () => {
    const password = document.getElementById("contactPassword").value;
    const message = document.getElementById("passwordMessage");
    const details = document.getElementById("contactDetails");

    // DEMO ONLY: not secure authentication.
    if (password === "2468") {
      details.hidden = false;
      message.textContent = "Demo access granted!";
      message.style.color = "#67e8a5";
    } else {
      details.hidden = true;
      message.textContent = "Incorrect password. Try again.";
      message.style.color = "#fca5a5";
    }
  });
}
