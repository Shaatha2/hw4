window.onload = function () {
  var footer = document.querySelector("footer");

  if (footer) {
    var newParagraph = document.createElement("p");
    var currentDate = new Date();
    var text = document.createTextNode("Page loaded on: " + currentDate.toLocaleString());

    newParagraph.appendChild(text);
    footer.appendChild(newParagraph);
  }

  var contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.onsubmit = function (event) {
      var name = document.getElementById("name");
      var email = document.getElementById("email");

      if (name.value === "" || email.value === "") {
        alert("Please fill out all required fields.");
        event.preventDefault();
      }
    };
  }

  var quote = document.getElementById("quote");

  if (quote) {
    quote.addEventListener("mouseover", function () {
      quote.style.backgroundColor = "#f4c400";
      quote.style.fontStyle = "italic";
      quote.style.padding = "15px";
    });

    quote.addEventListener("mouseout", function () {
      quote.style.backgroundColor = "";
      quote.style.fontStyle = "";
      quote.style.padding = "";
    });
  }
};

function toggleDescription(descriptionId) {
  var description = document.getElementById(descriptionId);

  if (description.style.display === "none") {
    description.style.display = "block";
  } else {
    description.style.display = "none";
  }
}
