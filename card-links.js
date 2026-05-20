// Make every .course-card clickable via its .stretched-link href
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".course-card").forEach(function (card) {
    var link = card.querySelector("a.stretched-link");
    if (!link) return;
    var href = link.getAttribute("href");
    card.style.cursor = "pointer";
    card.addEventListener("click", function (e) {
      if (e.target.tagName === "A") return; // let real clicks on <a> work normally
      window.location.href = href;
    });
  });
});
