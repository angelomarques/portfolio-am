window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above

  const form = document.getElementById("contactForm");
  const button = document.getElementById("contactFormBtn");
  const status = document.getElementById("contactFormStatus");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    status.innerHTML = "Thanks for the Feedback!";
    status.style.color = "#f7f9ff";
    status.style.opacity = "0.6";
  }

  function error() {
    status.innerHTML = "Oops! There was a problem.";
    status.style.color = "#FE2C55";
  }

  // handle the form submission event

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
    console.log("submited!");
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}
