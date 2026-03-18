const scriptURL = "https://script.google.com/macros/s/AKfycby-LROIBHHTzRDU2yiz5lqUNAe5BK8QDr_XMf6qCD_V1abmbKICxPECYFNAK5V5cdw/exec";

const form = document.getElementById("contactForm");

form.addEventListener("submit", e => {
  e.preventDefault();

  fetch(scriptURL, {
    method: "POST",
    body: new FormData(form)
  })
  .then(response => response.text())
  .then(data => {
    alert("Message sent successfully!");
    form.reset();
  })
  .catch(error => console.error("Error!", error));
});