function getLocation() {
  window.open(
    "./getlocation/index.html",
    "index.html",
    "width=400 ,heigth=500"
  );
}
// for scroll
// function hiddentheHead() {
//   let header1 = document.getElementById("head1");
//   console.log(header1.className);
//   if (header1.className !== "hidden") {
//     header1.className = "hidden";
//   }
// }

// window.onscroll = function () {
//   hiddentheHead();
// };

// function hiddentheHead() {
//   let header1 = document.getElementById("head1");
//   let header2 = document.getElementById("head2");
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     console.log(header1.className);
//     if (header1.className !== "hidden") {
//       header1.className = "hidden";
//       header2.className += " scrolFixed";
//     }
//   } else {
//     header1.className = "mainNav mt-2 d-flex justify-content-between";
//     header2.className += "";
//   }
// }

// for scroll

function openForm() {
  let mainDivModal = document.getElementById("form");
  console.log(mainDivModal);
  if (mainDivModal.className !== "visible") {
    mainDivModal.className = "visible";
  }
}
function hideform() {
  let mainDivModal = document.getElementById("form");

  if (mainDivModal.className == "visible") {
    mainDivModal.className = "loginForm";
  }
}
