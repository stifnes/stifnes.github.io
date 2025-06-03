// Mobile Menu Toggle Function

let hamburgerMenu = document.getElementById("hamburgerMenu");
let mobileNavList = document.getElementById("mobileNavList");
hamburgerMenu.addEventListener("click", () => {
  mobileNavList.classList.toggle("active");
  hamburgerMenu.classList.toggle("active");
});

//SVG Animation Scripts

let path = document.querySelector(".line-svg");
if (path) {
  let pathLength = path.getTotalLength();

  path.style.strokeDasharray = pathLength + " " + pathLength;
  path.style.strokeDashoffset = pathLength;

  window.addEventListener("scroll", () => {
    var scrollPercentage =
      (document.documentElement.scrollTop + document.body.scrollTop) /
      (document.documentElement.scrollHeight -
        document.documentElement.clientHeight);
    var drawLength = pathLength * scrollPercentage;
    path.style.strokeDashoffset = pathLength + drawLength;
  });
}

// Contact Form Javascript

// Get the form element
var form = document.getElementById("contact-form");

// Get the input elements and textarea
var nameInput = document.getElementById("username");
var emailInput = document.getElementById("useremail");
var messageInput = document.getElementById("usermessage");

// Get the modal element
var modal = document.getElementById("success-modal");
var overlay = document.getElementById("overlay");

// Function to display the modal with the form values
function displayModal() {
  // Get the elements to display the values in the modal
  var nameDisplay = document.getElementById("name-display");
  var emailDisplay = document.getElementById("email-display");

  // Set the values of the display elements to the form values
  nameDisplay.innerHTML = nameInput.value;
  emailDisplay.innerHTML = emailInput.value;

  // Show the modal
  modal.style.display = "block";
  overlay.style.display = "block";
}

// Function to submit the form and display the modal
function submitForm() {
  // Prevent the form from submitting
  event.preventDefault();

  // Call the displayModal function to show the values in the modal
  displayModal();
}

function closeModal() {
  // close the modal
  modal.style.display = "none";
  overlay.style.display = "none";

  //Reset the input values
  nameInput.value = "";
  emailInput.value = "";
  messageInput.value = "";
}

// Cursor Ring Effect
var cursor = document.querySelector(".cursor");
var cursorinner = document.querySelector(".cursor2");
var a = document.querySelectorAll("a");

document.addEventListener("mousemove", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
});

document.addEventListener("mousemove", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + "px";
  cursorinner.style.top = y + "px";
});

document.addEventListener("mousedown", function () {
  cursor.classList.add("click");
  cursorinner.classList.add("cursorinnerhover");
});

document.addEventListener("mouseup", function () {
  cursor.classList.remove("click");
  cursorinner.classList.remove("cursorinnerhover");
});

var svgElements = document.querySelectorAll("svg");
var allLinks = document.querySelectorAll("a");

[...svgElements, ...allLinks].forEach((item) => {
  item.addEventListener("mouseover", () => {
    cursor.classList.add("hover");
  });
  item.addEventListener("mouseleave", () => {
    cursor.classList.remove("hover");
  });
});
