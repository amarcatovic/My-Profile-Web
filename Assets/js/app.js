const bio = document.querySelector("#biografija");
const contact = document.querySelector("#contact-me");

const scrollToBio = (_) =>
  bio.scrollIntoView({ behavior: "smooth", block: "start" });

const scrollToContact = (_) =>
  contact.scrollIntoView({ behavior: "smooth", block: "start" });

const sendEmail = (_) =>
  (location.href =
    "mailto: amar_catovic@hotmail.com?cc=" +
    document.getElementById("email").value +
    "&subject=Website&body=" +
    document.getElementById("message").value);
