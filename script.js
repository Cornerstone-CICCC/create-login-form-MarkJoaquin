document.addEventListener("DOMContentLoaded", () => {

  const toggleButton = document.getElementById("watchPass");
  const passwordInput = document.getElementById("pass");
  const myForm = document.getElementById("myForm");
  const eye = document.getElementById("eye");
  const closed_eye = document.getElementById("eye-closed");



  toggleButton.addEventListener("click", () => {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      eye.style.display = "none";
      closed_eye.style.display = "block";
    } else {
      passwordInput.type = "password";
      eye.style.display = "block";
      closed_eye.style.display = "none";
    }
  });

  myForm.addEventListener("submit", e => {
    e.preventDefault();
    const data = Object.fromEntries (new FormData(e.target))
    console.table(data)
    myForm.reset()
  });
});
